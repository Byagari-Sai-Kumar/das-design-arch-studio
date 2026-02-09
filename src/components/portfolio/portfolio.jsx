import React, { useEffect, useMemo, useState } from "react";
import "./portfolio.css";
import { useLocation } from "react-router-dom";

import arch1 from "../../assets/portfolio/arch1.jpg";
import arch2 from "../../assets/portfolio/arch2.jpg";
import int1 from "../../assets/portfolio/int1.jpg";
import int2 from "../../assets/portfolio/int2.jpg";
import plan1 from "../../assets/portfolio/plan1.jpg";
import plan2 from "../../assets/portfolio/plan2.jpg";
import vis1 from "../../assets/portfolio/vis1.jpg";
import vis2 from "../../assets/portfolio/vis2.jpg";

const portfolioData = {
  architecture: [
    {
      title: "Modern Residential Design",
      subtitle: "Elegant exterior and space planning",
      description:
        "Our architectural projects focus on structural clarity, modern elevations, and space planning that balances beauty with functionality. Each design is carefully planned to maximize ventilation, lighting, and modern aesthetics.",
      image: arch1,
    },
    {
      title: "Contemporary Elevation Concept",
      subtitle: "Premium facade design",
      description:
        "We design elevations that create a lasting impression using clean geometry, modern materials, and strong proportions. Our focus is to deliver timeless exteriors that look premium and remain functional.",
      image: arch2,
    },
  ],

  interiors: [
    {
      title: "Luxury Living Room Interiors",
      subtitle: "Comfort meets modern aesthetics",
      description:
        "Our interior projects blend lighting, furniture layout, textures, and warm tones to create elegant living environments. We balance comfort and luxury to ensure every space feels welcoming and premium.",
      image: int1,
    },
    {
      title: "Bedroom Interior Styling",
      subtitle: "Minimal yet premium design",
      description:
        "We design bedroom spaces that are calming, stylish, and practical with proper storage planning and ambient lighting. Every design is personalized to match your lifestyle and comfort needs.",
      image: int2,
    },
  ],

  planning: [
    {
      title: "Construction Planning & Execution",
      subtitle: "Efficient workflow & site supervision",
      description:
        "From project planning to execution support, we ensure the construction stays on schedule, within budget, and follows quality standards. We coordinate materials, timelines, and on-site processes smoothly.",
      image: plan1,
    },
    {
      title: "Detailed Floor Planning",
      subtitle: "Maximizing space utility",
      description:
        "Our planning ensures each space is optimized for movement, ventilation, lighting, and daily comfort. We focus on practical layouts that are modern, efficient, and future-proof.",
      image: plan2,
    },
  ],

  visualization: [
    {
      title: "3D Rendering & Visualization",
      subtitle: "See your project before building",
      description:
        "We provide high-quality 3D views and realistic renders to help clients understand the final output before execution begins. This helps reduce confusion and improves decision making.",
      image: vis1,
    },
    {
      title: "Realistic Walkthrough Concepts",
      subtitle: "Better clarity for clients",
      description:
        "Our walkthrough visuals help clients explore their future spaces. It gives a realistic feel of design, lighting, and materials, making it easier to finalize designs confidently.",
      image: vis2,
    },
  ],
};

const Portfolio = () => {
  const location = useLocation();

  const initialCategory = useMemo(() => {
    return location.state?.portfolioCategory || "architecture";
  }, [location.state?.portfolioCategory]);

  const [category, setCategory] = useState(initialCategory);

  // the currently visible page
  const [pageIndex, setPageIndex] = useState(0);

  // flip states
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next"); // next | prev
  const [targetIndex, setTargetIndex] = useState(null);

  useEffect(() => {
    if (location.state?.portfolioCategory) {
      setCategory(initialCategory);
      setPageIndex(0);
      setTargetIndex(null);
      setIsFlipping(false);
    }

    // Only auto-scroll to portfolio when navigation explicitly requested it
    // (via state) or when the current pathname is the portfolio route.
    const shouldScroll = !!(
      location.state?.scrollTo === "portfolio" ||
      location.state?.portfolioCategory ||
      location.pathname.includes("portfolio")
    );

    if (shouldScroll) {
      setTimeout(() => {
        const section = document.getElementById("portfolio");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [initialCategory, location]);

  const pages = portfolioData[category];
  const currentPage = pages[pageIndex];

  // During animation, we show target page on the backside
  const nextPageData =
    targetIndex !== null ? pages[targetIndex] : currentPage;

   const startFlip = (direction) => {
    if (isFlipping) return;

    if (direction === "next" && pageIndex < pages.length - 1) {
        setFlipDirection("next");
        setTargetIndex(pageIndex + 1);
        setIsFlipping(true);

        setTimeout(() => {
        setPageIndex((prev) => prev + 1);
        }, 350);

        setTimeout(() => {
        setIsFlipping(false);
        setTargetIndex(null);
        }, 750);
    }

    if (direction === "prev" && pageIndex > 0) {
        setFlipDirection("prev");
        setTargetIndex(pageIndex - 1);
        setIsFlipping(true);

        setTimeout(() => {
        setPageIndex((prev) => prev - 1);
        }, 350);

        setTimeout(() => {
        setIsFlipping(false);
        setTargetIndex(null);
        }, 750);
    }
    };

  const changeCategory = (newCategory) => {
    if (isFlipping) return;
    setCategory(newCategory);
    setPageIndex(0);
    setTargetIndex(null);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-heading">Portfolio</h2>
      <p className="portfolio-subheading">
        Explore our work through a book-style showcase of designs and projects
      </p>

      <div className="portfolio-tabs">
        <button
          className={category === "architecture" ? "active" : ""}
          onClick={() => changeCategory("architecture")}
        >
          Architecture
        </button>

        <button
          className={category === "interiors" ? "active" : ""}
          onClick={() => changeCategory("interiors")}
        >
          Interiors
        </button>

        <button
          className={category === "planning" ? "active" : ""}
          onClick={() => changeCategory("planning")}
        >
          Planning
        </button>

        <button
          className={category === "visualization" ? "active" : ""}
          onClick={() => changeCategory("visualization")}
        >
          3D Visualization
        </button>
      </div>

      <div className="portfolio-book">
        {/* TURNING PAGE LAYER */}
        <div
          className={`page-turn ${isFlipping ? "flipping" : ""} ${flipDirection}`}
        >
          {/* FRONT = old page */}
          <div className="page-front">
            <img src={currentPage.image} alt="page-front" />
          </div>

          {/* BACK = new page */}
          <div className="page-back">
            <img src={nextPageData.image} alt="page-back" />
          </div>
        </div>

        {/* LEFT PAGE */}
        <div className="portfolio-page left">
          <img src={currentPage.image} alt={currentPage.title} />
        </div>

        {/* RIGHT PAGE */}
        <div className="portfolio-page right">
          <h3>{currentPage.title}</h3>
          <h4>{currentPage.subtitle}</h4>
          <p>{currentPage.description}</p>

          <div className="portfolio-page-number">
            Page {pageIndex + 1} of {pages.length}
          </div>
        </div>
      </div>

      <div className="portfolio-controls">
        <button
          onClick={() => startFlip("prev")}
          disabled={pageIndex === 0 || isFlipping}
        >
          Previous
        </button>

        <button
          onClick={() => startFlip("next")}
          disabled={pageIndex === pages.length - 1 || isFlipping}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
