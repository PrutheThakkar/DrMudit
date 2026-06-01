"use client";

import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill all required fields.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get("content-type");

      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("API route is not returning JSON. Check src/app/api/contact/route.js");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: data.message || "Thank you. Your appointment request has been submitted.",
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message || "Unable to submit the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="form-field">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact-form-row">
        <div className="form-field">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-field">
        <textarea
          name="message"
          placeholder="Your Message*"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="contact-submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Book An Appointment"}
      </button>

      {status.message && (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      )}
    </form>
  );
}