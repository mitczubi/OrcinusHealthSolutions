import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CoachingPage from "./pages/CoachingPage";
import About from "./pages/AboutPage";
import ConsultingPage from "./pages/ConsultingPage";
import ContactPage from "./pages/ContactPage";

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
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
