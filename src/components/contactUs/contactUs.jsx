import React, { useState } from "react";
import Footer from "../footer/Footer";
import "./contactUs.css";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (demo). Connect email/API to send real messages.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* LEFT: FORM */}
          <div className="contact-card">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={onChange}
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="info-col">
            {/* Phone */}
            <div className="info-card">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path
                    d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.01 2.99 13.93 2.99 4.99a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+918019898569">(+91) 8019898569</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="info-card">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path
                    d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:designarchstudio646@gmail.com">
                    designarchstudio646@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="info-card">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path
                    d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>
                  Flat No 202,
                  3-6-521/1,
                  Himayatnagar Hyderabad
                  Telangana 500029
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="map-wrap">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.206771141159!2d78.48233727430716!3d17.401861883487737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dd1c6e6b75%3A0x3e58fea98ec4ffc7!2sKala%20Kunj%20Saree%20Vatika%20Himayatnagar!5e0!3m2!1sen!2sin!4v1769856967493"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, width: "100%", height: "240px" }}
              />
            </div>
          </div>
        </div>

        {/* Floating buttons (unchanged) */}
        <div className="floating-actions">
          {/* call, whatsapp, top buttons stay same */}
        </div>
      </section>

      {/* ✅ FOOTER ONLY FOR CONTACT PAGE */}
      <Footer />
    </>
  );
};

export default ContactUs;
