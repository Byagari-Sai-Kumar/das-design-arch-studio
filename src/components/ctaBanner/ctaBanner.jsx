import { useNavigate } from "react-router-dom";
import "./ctaBanner.css";

const steps = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="3" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 10h10M9 15h10M9 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
                <path d="M23 25l1.5 1.5L27 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Share Your Brief",
        desc: "Fill out our detailed consultation form — your vision, plot details, budget, and style preferences.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="21" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
                <path d="M5 27c0-4 2.7-7 6-7h10c3.3 0 6 3 6 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        title: "We Plan Together",
        desc: "Our architects and designers study your brief and schedule a personal consultation to align on the vision.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M4 28V16L16 4l12 12v12H20v-8h-8v8H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
        ),
        title: "We Build It",
        desc: "From concept to construction, we bring your dream space to life — on time, on budget, beyond expectation.",
    },
];

const CtaBanner = () => {
    const navigate = useNavigate();

    return (
        <section id="vision-cta" className="cta-banner">
            <div className="cta-banner-inner">

                <div className="cta-banner-text">
                    <p className="cta-eyebrow">Ready to Begin?</p>
                    <h2 className="cta-heading">
                        Let's Turn Your Vision<br />Into Reality
                    </h2>
                    <p className="cta-sub">
                        Whether it's your dream home, a modern office, or a thoughtful
                        renovation — we're here to listen, plan, and build something
                        extraordinary with you. Reach out and let's start the conversation.
                    </p>
                </div>

                <div className="cta-steps">
                    {steps.map((step, i) => (
                        <div key={i} className="cta-step">
                            <div className="cta-step-icon">{step.icon}</div>
                            <div className="cta-step-body">
                                <p className="cta-step-title">{step.title}</p>
                                <p className="cta-step-desc">{step.desc}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="cta-step-arrow">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="cta-banner-action">
                    <button
                        className="cta-main-btn"
                        onClick={() => navigate("/consultation")}
                    >
                        Start Your Project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: 8 }}>
                            <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <p className="cta-reassurance">
                        Free consultation &nbsp;·&nbsp; No commitment required &nbsp;·&nbsp; Response within 24 hrs
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CtaBanner;
