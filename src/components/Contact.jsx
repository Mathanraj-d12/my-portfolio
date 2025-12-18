    // const SERVICE_ID = "service_7a7sfzd";
    // const TEMPLATE_ID = "template_gxazcve";
    // const PUBLIC_KEY = "hrEUy15X2o1Hw6Wce";


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending message...");

    try {
      await emailjs.sendForm(
        "service_7a7sfzd",      // Your Service ID
        "template_gxazcve",     // Your Template ID
        formRef.current,
        "hrEUy15X2o1Hw6Wce"     // Your Public Key
      );

      setStatus("Message sent successfully ✅");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong ❌ Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact us</h2>

      <form ref={formRef} onSubmit={sendEmail} id="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>

        {status && <p id="form-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
