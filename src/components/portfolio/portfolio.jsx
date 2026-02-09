import React, { useEffect, useMemo, useState } from "react";
import "./portfolio.css";
import { useLocation } from "react-router-dom";

import arch3 from "../../assets/portfolio/arch3.jpg";
import arch4 from "../../assets/portfolio/arch4.jpg";
import int3 from "../../assets/portfolio/int3.jpg";
import int4 from "../../assets/portfolio/int4.jpg";
import plan3 from "../../assets/portfolio/plan3.jpg";
import plan4 from "../../assets/portfolio/plan4.jpg";
import vis4 from "../../assets/portfolio/vis4.jpg";
import vis5 from "../../assets/portfolio/vis5.jpg";

const portfolioData = {
  architecture: [
    {
      title: "Conceptual Plans & Schematic Designs",
      subtitle: "Design Development & Detailed Drawings",
      description:
        `Develop conceptual plans and schematic designs that respond to client briefs, site conditions, and project intent. Carry out design development and detailed drawings, refining concepts into 
        buildable and well-coordinated solutions. Prepare construction documentation and GFC (Good for Construction) drawings to ensure clarity and accuracy during execution.`,
      image: arch3,
    },
    {
      title: "",
      subtitle: "",
      description:"",
      subHeadineOne : "Mood boards & Design Presentations",
      subHeadineOneDescription : "Create mood boards and design presentations to communicate design ideas, themes, and material palettes effectively.",
      subHeadineTwo: "Material Selection & Specifications",
      subHeadineTwoDescription: "Lead material selection and specification, balancing aesthetics, performance, and budget considerations.",
      subHeadineThree: "Client Meetings & Design discussions",
      subHeadineThreeDescription: "Conduct client meetings and design discussions, ensuring alignment at every stage of the project.",
      subHeadineFour: "Coordinate with consultants",
      subHeadineFourDescription: "Coordinate with consultants including structural, MEP, and landscape teams for integrated design delivery.",
      subHeadineFive: "Oversee on-site execution",
      subHeadineFiveDescription: "Oversee on-site execution, ensuring adherence to approved drawings, quality standards, and design intent.",
      image: arch4,
    },
  ],

  interiors: [
    {
      title: "Interior Design & Space Planning",
      subtitle: "Luxury interiors with functionality",
      description: `We provide complete interior design services with a strong focus on space planning, comfort, and premium aesthetics. 
      Our approach includes conceptual designs, mood boards, material selections, and execution-ready drawings. 
      We ensure each interior space reflects the client’s lifestyle while maintaining functionality, elegance, and long-term durability.`,
      image: int3,
    },
    {
      title: "",
      subtitle: "",
      description:"",
      subHeadineOne: "Space Planning & Furniture Layout",
      subHeadineOneDescription:
        "Plan furniture layouts and circulation flow to maximize comfort, usability, and movement within the space.",
      subHeadineTwo: "False Ceiling & Lighting Design",
      subHeadineTwoDescription:
        "Design ceiling concepts and lighting layouts including ambient, task, and accent lighting for a premium finish.",
      subHeadineThree: "Material & Color Palette Selection",
      subHeadineThreeDescription:
        "Select wall finishes, flooring, laminates, textures, and color palettes that match the design theme and budget.",
      subHeadineFour: "Custom Furniture & Wardrobe Design",
      subHeadineFourDescription:
        "Create customized wardrobes, TV units, kitchen modules, and storage solutions with modern aesthetics.",
      subHeadineFive: "Execution Supervision & Styling",
      subHeadineFiveDescription:
        "Supervise execution work on-site and ensure the final interiors match the approved design and quality standards.",
        image: int4,
    },
  ],

  planning: [
    {
      title: "End to End delivery of Turnkey construction projects",
      subtitle: "Pre-Construction Plannings",
      description: `Our construction planning services ensure that every project is executed with discipline, accuracy, and efficiency. 
      We manage workflow coordination, supervise execution, and maintain quality standards. 
      Our planning approach reduces delays, avoids cost overruns, and ensures the project is delivered with perfect finishing.`,
      image: plan3,
    },
    {
      title: "",
      subtitle: "",
      description:"",
      subHeadineOne: "Project Management",
      subHeadineOneDescription:
        "Conduct site visits to understand conditions, measurements, and requirements before starting execution planning.",
      subHeadineTwo: "Lead Client Coordination",
      subHeadineTwoDescription:
        "Prepare project timelines and work schedules to ensure timely completion and smooth coordination on-site.",
      subHeadineThree: "Interior Fit-out execution",
      subHeadineThreeDescription:
        "Coordinate with vendors, contractors, and suppliers to ensure materials and manpower availability.",
      subHeadineFour: "",
      subHeadineFourDescription:"",
      subHeadineFive: "",
      subHeadineFiveDescription:"",
      image: plan4,
    },
  ],

  visualization: [
    {
      title: "3D Visualization & Rendering Services",
      subtitle: "Realistic design previews before execution",
      description: `We offer professional 3D visualization services to help clients experience their project before execution. 
      Our renders provide a realistic preview of materials, lighting, furniture, and overall space feel. 
      This reduces confusion, increases confidence, and ensures final execution matches expectations.`,
      image: vis4,
    },
    {
      title: "",
      subtitle: "",
      description:"",
      subHeadineOne: "High Quality 3D Visualizations",
      subHeadineOneDescription:
        "Create realistic exterior renders showcasing elevation, materials, landscaping, and overall building look.",
      subHeadineTwo: "Mood boards & Design Presentations",
      subHeadineTwoDescription:
        "Provide interior renders with accurate lighting, furniture placement, textures, and decorative styling.",
      subHeadineThree: "3D Walkthroughs",
      subHeadineThreeDescription:
        "Apply realistic textures and material mapping for flooring, walls, furniture, and facades.",
      subHeadineFour: "",
      subHeadineFourDescription:"",
      subHeadineFive: "",
      subHeadineFiveDescription:"",
      image: vis5,
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

    setTimeout(() => {
      const section = document.getElementById("portfolio");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, [initialCategory]);

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
          {currentPage.title && <h3>{currentPage.title}</h3>}
          {currentPage.subtitle && <h4>{currentPage.subtitle}</h4>}
          {currentPage.description && <p>{currentPage.description}</p>}
          {currentPage.subHeadineOne && (
            <div className="portfolio-highlights">
              <h5>{currentPage.subHeadineOne}</h5>
              <p>{currentPage.subHeadineOneDescription}</p>

              <h5>{currentPage.subHeadineTwo}</h5>
              <p>{currentPage.subHeadineTwoDescription}</p>

              <h5>{currentPage.subHeadineThree}</h5>
              <p>{currentPage.subHeadineThreeDescription}</p>

              <h5>{currentPage.subHeadineFour}</h5>
              <p>{currentPage.subHeadineFourDescription}</p>

              <h5>{currentPage.subHeadineFive}</h5>
              <p>{currentPage.subHeadineFiveDescription}</p>
            </div>
          )}

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
