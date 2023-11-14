import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { PopupWidget } from "react-calendly";
import { Container } from "react-bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

const App = () => {
    return (
      <>
      <Container fluid className="p-0">
        <RouterProvider router={router} />
        <PopupWidget
          url="https://calendly.com/mitchellzubich/30min"
          rootElement={document.getElementById("root")}
          text="Schedule a Meeting"
          color="#9d8ea5"
          />
      </Container>
      </>
    )
};

export default App;