import React, { useEffect, useMemo, useRef } from "react";
import "./testimonials.css";

const Testimonials = () => {
  // ✅ Your old reviews + ratings (same content)
  const testimonials = useMemo(
    () => [
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
    ],
    []
  );

  const trackRef = useRef(null);

  // ✅ Desktop: mouse wheel scrolls horizontally (smooth UX)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e) => {
      if (e.shiftKey) return; // allow SHIFT + wheel normally
      e.preventDefault();
      track.scrollBy({ left: e.deltaY, behavior: "auto" });
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

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
        What our clients, partners, and collaborators say about Das Design Arch Studio
      </p>

      {/* ✅ Scroll-snap carousel (no buttons, no dots) */}
      <div className="ts-carousel">
        <div className="ts-track" ref={trackRef} aria-label="Testimonials carousel">
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