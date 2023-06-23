import React from "react";
import Navbar from "../components/navbar/navbar.component";
import ContactForm from "../components/contact-form/contact-form.component";
import LoadingIndicator from "../components/loading-indicator/loading-indicator.component";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <LoadingIndicator />
    </div>
  );
}

export default ContactPage;
