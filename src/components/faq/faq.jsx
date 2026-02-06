import { useState } from "react";
import "./faq.css";

const faqData = [
  {
    q: "What is your design process?",
    a: "We start with a consultation, understand your requirements, share a concept and moodboard, then provide designs and revisions before final execution.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take 2–6 weeks depending on scope, approvals, and material availability.",
  },
  {
    q: "Do you work on both residential and commercial projects?",
    a: "Yes. We handle residential spaces (home interiors) and commercial spaces (offices, cafes, showrooms, etc.).",
  },
  {
    q: "What areas do you serve?",
    a: "We serve your city and nearby regions. Share your location and we’ll confirm availability.",
  },
  {
    q: "Can I see my design before implementation?",
    a: "Yes. We provide 2D layouts and 3D renders (if required) before starting the final work.",
  },
  {
    q: "Still have questions?",
    a: "If your question is not listed here, feel free to reach out to Das Design Arch Studio. We’ll be happy to guide you and provide the right solution for your project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about Das Design Arch Studio</p>

        <div className="faq-list">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>

                  <span className={`faq-icon ${isOpen ? "rotate" : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
