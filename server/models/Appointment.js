import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timezone: {
        type: String
    },
})

export default mongoose.model("Appointment", AppointmentSchema);