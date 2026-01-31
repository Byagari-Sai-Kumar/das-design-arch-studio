import React, { useState } from "react";
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

    // Option A: just show alert (no backend)
    alert("Message sent (demo). Connect email/API to send real messages.");

    // Option B (WhatsApp message):
    // const text = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    // window.open(`https://wa.me/918095673735?text=${encodeURIComponent(text)}`, "_blank");

    setForm({ name: "", email: "", message: "" });
  };

  return (
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
          <div className="info-card">
            <div className="icon-circle">
              {/* phone icon */}
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
                <a href="tel:+918095673735">+91 8019898569</a>
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              {/* email icon */}
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
                <a href="designarchstudio646@gmail.com">
                designarchstudio646@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              {/* location icon */}
              <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                <path
                  d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <h4>Location</h4>
              <p>Himayatnagar, 3-6-521/1 flat no 202 Hyderabad
Telangana 500029
</p>
            </div>
          </div>

          {/* MAP */}
          <div className="map-wrap">
          <iframe
  title="location-map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.206771141159!2d78.48233727430716!3d17.401861883487737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dd1c6e6b75%3A0x3e58fea98ec4ffc7!2sKala%20Kunj%20Saree%20Vatika%20Himayatnagar%20%7C%20From%20Classic%20Sarees%20to%20Modern%20Vibes!5e0!3m2!1sen!2sin!4v1769856967493!5m2!1sen!2sin"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  style={{ border: 0, width: "100%", height: "240px" }}
         />
          </div>
        </div>
      </div>

      {/* Floating buttons */}
      <div className="floating-actions">
        <a className="fab fab-call" href="tel:+918095673735" aria-label="Call">
          <svg viewBox="0 0 24 24" className="fab-icon" aria-hidden="true">
            <path
              d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.01 2.99 13.93 2.99 4.99a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          className="fab fab-wa"
          href="https://wa.me/918095673735"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 32 32" className="fab-icon" aria-hidden="true">
            <path
              fill="currentColor"
              d="M19.11 17.66c-.28-.14-1.64-.81-1.89-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.5-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.53-.01-.18 0-.46.07-.71.35-.25.28-.94.92-.94 2.25 0 1.33.97 2.61 1.11 2.79.14.18 1.9 2.9 4.61 4.07.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.64-.67 1.87-1.32.23-.64.23-1.19.16-1.32-.07-.13-.25-.2-.53-.34z"
            />
            <path
              fill="currentColor"
              d="M26.67 5.33A14.67 14.67 0 006.1 25.36L5 30l4.78-1.05A14.67 14.67 0 1026.67 5.33zM16 28a12 12 0 01-6.12-1.68l-.44-.26-2.84.62.6-2.76-.29-.45A12 12 0 1116 28z"
            />
          </svg>
        </a>

        <button
          className="fab fab-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" className="fab-icon" aria-hidden="true">
            <path
              d="M12 4l7 7-1.4 1.4L13 7.8V20h-2V7.8L6.4 12.4 5 11z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
