import React, { useMemo } from "react";
import "./testimonials.css";

const Testimonials = () => {
  // ✅ Your old reviews + ratings (same content)
  const testimonials = useMemo(
    () => [
      // Uncomment when the Vikram Residence project is added to Our Works.
      // {
      //   id: 3,
      //   rating: 5,
      //   comment:
      //     "Design Arch Studio did the complete interiors of our 3 BHK flat — the kitchen, all three bedrooms and the wardrobes. Everything was built on site with great finishing, and the lighting makes every room feel warm. They understood exactly what our family needed.",
      //   name: "Vikram",
      //   designation: "Homeowner · Vikram Residence, Hyderabad",
      // },
      {
        id: 1,
        rating: 5,
        comment:
          "Design Arch Studio transformed our house into a beautiful and functional living space. Their attention to detail and understanding of our requirements was exceptional.",
        name: "Ramesh Kumar",
        designation: "Residential Client",
      },
      {
        id: 2,
        rating: 4.5,
        comment:
          "Working with Design Arch Studio has been a smooth experience. Their drawings are clear, practical, and execution-friendly, which makes our construction process efficient.",
        name: "Suresh Reddy",
        designation: "Construction Contractor",
      },
      
    ],
    []
  );

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    // show half star as "½" style star using a normal star + lighter star
    // (no CSS change needed)
    return "★".repeat(full) + (half ? "☆" : "");
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-heading">Testimonials</h2>

      <p className="testimonials-subtext">
        What our clients, partners, and collaborators say about Design Arch Studio
      </p>

      {/* ✅ Scroll-snap carousel (no buttons, no dots) */}
      <div className="ts-carousel">
        <div className="ts-track" aria-label="Testimonials carousel">
          {testimonials.map((t) => (
            <article className="ts-card" key={t.id}>
              <div className="ts-stars" aria-label={`${t.rating} out of 5 stars`}>
                {renderStars(t.rating)}
              </div>

              <p className="ts-text">“{t.comment}”</p>

              <div className="ts-person">
                <div className="ts-name">{t.name}</div>
                <div className="ts-role">{t.designation}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;