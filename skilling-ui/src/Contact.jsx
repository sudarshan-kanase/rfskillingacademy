import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary display-5">Contact Us</h1>
        <p className="text-muted fs-5">
          Feel free to reach out to us anytime.
        </p>
      </div>

      <div className="row g-4">

        {/* FORM */}
        <div className="col-lg-6">
          <form onSubmit={handleSubmit} className="p-4 shadow-sm rounded-4 h-100">

            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Send Message
            </button>

          </form>
        </div>

        {/* INFO */}
        <div className="col-lg-6">
          <div className="p-4 shadow-sm rounded-4 h-100">

            <h4 className="fw-bold mb-3">Get in Touch</h4>

            <p className="mb-2">
              <strong>📍 Address:</strong> Aurangabad, Maharashtra
            </p>

            <p className="mb-2">
              <strong>📞 Phone:</strong> +91 9984484484
            </p>

            <p className="mb-3">
              <strong>📧 Email:</strong> contactus@senseigen.com
            </p>

            <hr />

            <h5 className="fw-semibold mt-3">Follow Us</h5>

            <div className="d-flex gap-3 mt-2">
              <span>📸</span>
              <span>💼</span>
              <span>▶️</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Contact;