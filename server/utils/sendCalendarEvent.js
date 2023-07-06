import { google } from "googleapis";
import logger from "../utils/logger.js";
import dotenv from "dotenv";

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const GOOGLE_PRIVATE_KEY = process.env.private_key;
const GOOGLE_CLIENT_EMAIL = process.env.client_email;
const GOOGLE_PROJECT_NUMBER = process.env.project_number;
const GOOGLE_CALENDAR_ID = process.env.calendar_id;

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

const calendar = google.calendar({
  version: "v3",
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient,
});

const auth = new google.auth.GoogleAuth({
  keyFile: "./keys.json",
  scopes: SCOPES,
});

const convertTZ = (date, tzString) => {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
};

const createEvent = (data) => {
  var summary = `Meeting Request for ${data.name}`;

  if (!data.timezone) data.timezone = "America/Chicago";

  var end = new Date(data.start);
  end.setMinutes(data.start.getMinutes() + 30);

  var start = convertTZ(data.start, data.timezone);
  end = convertTZ(end, data.timezone);

  return {
    summary: summary,
    description: data.description + "/n" + data.email,
    start: {
      dateTime: start,
    },
    end: {
      dateTime: end,
    },
    attendees: [],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "email", minutes: 30 },
        { method: "popup", minutes: 10 },
      ],
    },
  };
};

export const addCalendarEvent = async (data) => {
  const calendarEvent = createEvent(data);

  auth.getClient().then((auth) => {
    calendar.events.insert(
      {
        auth: auth,
        calendarId: GOOGLE_CALENDAR_ID,
        resource: calendarEvent,
      },
      function (error, response) {
        if (error) {
          logger.log("info", "Something went wrong: ", error);
          return;
        }
        logger.log("info", "Event created successfully.");
        logger.log("info", "Event details: ", response.data);
      }
    );
  });
};
