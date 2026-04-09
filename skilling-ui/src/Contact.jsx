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
        <h1 className="fw-bold text-primary">Contact Us</h1>
        <p className="text-muted">
          Feel free to reach out to us anytime.
        </p>
      </div>

      <div className="row">

        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded">

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">

          <div className="p-4 shadow rounded h-100">

            <h4 className="fw-bold mb-3">Get in Touch</h4>

            <p><strong>📍 Address:</strong> Aurangabad, Maharashtra</p>
            <p><strong>📞 Phone:</strong> +91 9984484484</p>
            <p><strong>📧 Email:</strong>contactus@senseigen.com</p>

            <hr />

            <h5>Follow Us</h5>
            <p>🌐 Instagram | LinkedIn | YouTube</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;