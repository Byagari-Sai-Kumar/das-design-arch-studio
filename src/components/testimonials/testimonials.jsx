import React, { useEffect, useState, useRef } from "react";
import "./testimonials.css";

const testimonialsData = [
    {
        id: 1,
        rating: 5,
        comment:
            "Das Design Arch Studio transformed our house into a beautiful and functional living space. Their attention to detail and understanding of our requirements was exceptional.",
        name: "Ramesh Kumar",
        designation: "Residential Client",
    },
    {
        id: 2,
        rating: 4.5,
        comment:
            "Working with Das Design Arch Studio has been a smooth experience. Their drawings are clear, practical, and execution-friendly, which makes our construction process efficient.",
        name: "Suresh Reddy",
        designation: "Construction Contractor",
    },
    {
        id: 3,
        rating: 5,
        comment:
            "As a material supply partner, we appreciate their professionalism and timely coordination. Their design standards are high and well thought out.",
        name: "Anita Verma",
        designation: "Material Vendor Partner",
    },
    {
        id: 4,
        rating: 4.5,
        comment:
            "The interior designs provided by the team were modern, elegant, and perfectly aligned with our lifestyle. We are extremely happy with the final outcome.",
        name: "Priya Shah",
        designation: "Interior Design Client",
    },
    {
        id: 5,
        rating: 5,
        comment:
            "Their site supervision and technical knowledge make them stand out. As a project engineer, I value their clarity in drawings and planning.",
        name: "Vikram Naik",
        designation: "Site Engineer",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const startX = useRef(0);
    const deltaX = useRef(0);

    useEffect(() => {
        // autoplay
        timeoutRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(timeoutRef.current);
    }, []);

    const prev = () => {
        setIndex((i) => (i - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const next = () => {
        setIndex((i) => (i + 1) % testimonialsData.length);
    };

    const onTouchStart = (e) => {
        clearInterval(timeoutRef.current);
        startX.current = e.touches[0].clientX;
        deltaX.current = 0;
    };

    const onTouchMove = (e) => {
        deltaX.current = e.touches[0].clientX - startX.current;
    };

    const onTouchEnd = () => {
        const threshold = 40;
        if (deltaX.current > threshold) prev();
        else if (deltaX.current < -threshold) next();
        timeoutRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % testimonialsData.length);
        }, 5000);
    };

    return (
        <section id="testimonials" className="testimonials-section">
            <h2 className="testimonials-heading">Testimonials</h2>

            <p className="testimonials-subtext">
                What our clients, partners, and collaborators say about Das Design Arch Studio
            </p>

            <div className="testimonials-carousel">
                <button className="carousel-btn prev" onClick={prev} aria-label="Previous slide">
                    ‹
                </button>

                <div
                    className="carousel-viewport"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(${-index * 100}%)` }}
                    >
                        {testimonialsData.map((t) => (
                            <div className="testimonial-slide" key={t.id}>
                                <div className="testimonial-card">
                                    <div className="testimonial-rating">
                                        {"★".repeat(Math.floor(t.rating))}
                                    </div>
                                    <p className="testimonial-comment">“{t.comment}”</p>
                                    <div className="testimonial-author">
                                        <h4>{t.name}</h4>
                                        <span>{t.designation}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="carousel-btn next" onClick={next} aria-label="Next slide">
                    ›
                </button>

                <div className="carousel-dots">
                    {testimonialsData.map((_, i) => (
                        <button
                            key={i}
                            className={`dot ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;