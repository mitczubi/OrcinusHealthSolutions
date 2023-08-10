import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CoachingPage from "./pages/CoachingPage";
import About from "./pages/AboutPage";
import ConsultingPage from "./pages/ConsultingPage";
import { PopupWidget } from "react-calendly";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/coaching",
    element: <CoachingPage />,
  },
  {
    path: "/consulting",
    element: <ConsultingPage />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
            <PopupWidget
                url="https://calendly.com/mitchellzubich/30min"
                rootElement={document.getElementById("root")}
                text="Schedule an Appointment!"
                color="#9d8ea5"
            />
        </div>
    )
};

export default App;