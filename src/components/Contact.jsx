// import React from "react";

// const Contact = () => (
//   <section className="contact" id="contact">
//     <h2>Contact Me</h2>
//     <form id="contact-form">
//       <input type="text" name="name" placeholder="Your Name" required />
//       <input type="email" name="email" placeholder="Your Email" required />
//       <textarea name="message" placeholder="Your Message" required></textarea>
//       <button type="submit">Send Message</button>
//       <p id="form-message"></p>
//     </form>
//   </section>
// );

// export default Contact;


// import React from "react";
// import emailjs from "@emailjs/browser"

// const Contact = () => (
//   <section className="contact section-bg" id="contact"> {/* Add section-bg if using the full-width wrapper from before */}
//     <div className="container">
//       <h2>Contact Me</h2>
//       <form id="contact-form">
//         <input type="text" name="name" placeholder="Your Name" required />
//         <input type="email" name="email" placeholder="Your Email" required />
//         <textarea name="message" placeholder="Your Message" required></textarea>
//         <button type="submit">Send Message</button>
//         <p id="form-message"></p>
//       </form>
//     </div>
//   </section>
// );

// export default Contact;


// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const SERVICE_ID = "service_7a7sfzd";
    const TEMPLATE_ID = "template_gxazcve";
    const PUBLIC_KEY = "hrEUy15X2o1Hw6Wce";

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      console.log("EmailJS success:", result.text);
      setStatus("Message sent — thank you! ✅");
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err.text || err);
      setStatus("Failed to send message. Try again later ❌");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
        <p id="form-message">{status}</p>
      </form>
    </section>
  );
};

export default Contact;