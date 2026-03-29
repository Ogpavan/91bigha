"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  phone: string;
  city: string;
  requirement: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  city: "",
  requirement: "Buy Property",
  message: ""
};

export function ContactInquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const details = [
      "New enquiry from 91bigha.com",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `City: ${form.city || "Not provided"}`,
      `Requirement: ${form.requirement}`,
      `Message: ${form.message || "Not provided"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/917302166711?text=${encodeURIComponent(details)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="contact-enquiry-form">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city"
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Requirement</label>
          <select
            className="form-select"
            value={form.requirement}
            onChange={(event) => updateField("requirement", event.target.value)}
          >
            <option>Buy Property</option>
            <option>Rent Property</option>
            <option>Site Visit</option>
            <option>Post Property</option>
            <option>General Enquiry</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows={6}
            placeholder="Tell us what kind of property or support you need"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
        </div>
        <div className="col-12 d-flex flex-wrap gap-3 pt-2">
          <button type="submit" className="btn btn-primary btn-lg px-4">
            Send on WhatsApp
          </button>
          <a href="tel:+917302166711" className="btn btn-dark btn-lg px-4">
            Call Now
          </a>
        </div>
      </div>
    </form>
  );
}
