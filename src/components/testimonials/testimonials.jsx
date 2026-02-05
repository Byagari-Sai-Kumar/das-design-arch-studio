import React from "react";
import "./testimonials.css";

const testimonialsData = [
    {
        id: 1,
        rating: 5,
        comment:
        "Das Design Arch Studio transformed our house into a beautiful and functional living space. Their attention to detail and understanding of our requirements was exceptional.",
        name: "Ramesh Kumar",
        designation: "Residential Client"
    },
    {
        id: 2,
        rating: 4.5,
        comment:
        "Working with Das Design Arch Studio has been a smooth experience. Their drawings are clear, practical, and execution-friendly, which makes our construction process efficient.",
        name: "Suresh Reddy",
        designation: "Construction Contractor"
    },
    {
        id: 3,
        rating: 5,
        comment:
        "As a material supply partner, we appreciate their professionalism and timely coordination. Their design standards are high and well thought out.",
        name: "Anita Verma",
        designation: "Material Vendor Partner"
    },
    {
        id: 4,
        rating: 4.5,
        comment:
        "The interior designs provided by the team were modern, elegant, and perfectly aligned with our lifestyle. We are extremely happy with the final outcome.",
        name: "Priya Shah",
        designation: "Interior Design Client"
    },
    {
        id: 5,
        rating: 5,
        comment:
        "Their site supervision and technical knowledge make them stand out. As a project engineer, I value their clarity in drawings and planning.",
        name: "Vikram Naik",
        designation: "Site Engineer"
    }
    ];

    const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
        <h2 className="testimonials-heading">Testimonials</h2>

        <p className="testimonials-subtext">
            What our clients, partners, and collaborators say about Das Design Arch Studio
        </p>

        <div className="testimonials-grid">
            {testimonialsData.map((item) => (
            <div className="testimonial-card" key={item.id}>
                <div className="testimonial-rating">
                {"★".repeat(Math.floor(item.rating))}
                {item.rating % 1 !== 0 && "☆"}
                </div>

                <p className="testimonial-comment">
                “{item.comment}”
                </p>

                <div className="testimonial-author">
                <h4>{item.name}</h4>
                <span>{item.designation}</span>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Testimonials;