import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Contact form submitted! Backend integration is coming soon.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have a question or suggestion? We'd love to hear from you.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name:</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email address:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      <p className="contact-footer">We'd love to hear your feedback.</p>
    </section>
  );
};

export default Contact;
