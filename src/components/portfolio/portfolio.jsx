import React, { useEffect, useState } from "react";
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

import pm1 from "../../assets/portfolio/project_management_one.jpeg";
import pm2 from "../../assets/portfolio/project_management_two.jpg";
import cost1 from "../../assets/portfolio/cost_management_one.jpg";
import cost2 from "../../assets/portfolio/cost_management_two.jpg";
import quality2 from "../../assets/portfolio/quality_management_two.png";

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

  projectManagement: [
    {
      title: "Project Management / Owner Representative",
      subtitle: "Your Representative from Planning to Handover",
      description: `We act as your representative throughout the project — managing contractors, consultants, and vendors on your behalf so your time, budget, and quality expectations are protected.
      From the first milestone to final handover, we align design, schedule, and on-site execution, keep you informed at every stage, and make sure decisions are made in your interest.`,
      image: pm1,
    },
    {
      title: "",
      subtitle: "",
      description: "",
      subHeadineOne: "Owner Representation",
      subHeadineOneDescription:
        "Represent you in meetings with contractors, consultants, and vendors, so every decision protects your interests.",
      subHeadineTwo: "Contractor Selection & Bid Review",
      subHeadineTwoDescription:
        "Compare quotations, check scope and specifications, and recommend the right contractors and vendors for the job.",
      subHeadineThree: "Milestone & Schedule Planning",
      subHeadineThreeDescription:
        "Set clear timelines and milestones for every phase, keeping design, procurement, and construction in step.",
      subHeadineFour: "Site Coordination & Progress Reporting",
      subHeadineFourDescription:
        "Coordinate work on-site, track issues before they cause delays, and share regular updates on where your project stands.",
      subHeadineFive: "Bill Verification & Handover",
      subHeadineFiveDescription:
        "Verify completed work before bills are paid, then manage final inspections, documentation, and handover.",
      image: pm2,
    },
  ],

  costQualityManagement: [
    {
      title: "Cost & Quality Management",
      subtitle: "Budgets You Can Trust, Quality You Can See",
      description: `We bring clarity to every rupee spent on your project, from the first estimate to the final bill, while holding every stage of construction to a defined quality standard.
      Our cost planning balances your budget with the quality you expect, and regular checks and audits make sure the final result matches the design intent and stands the test of time.`,
      image: cost1,
    },
    {
      title: "Cost Management",
      subtitle: "",
      description: "",
      subHeadineOne: "Budget Planning & Estimates",
      subHeadineOneDescription:
        "Prepare detailed cost estimates aligned with your project scope and expectations.",
      subHeadineTwo: "Value Engineering",
      subHeadineTwoDescription:
        "Identify smarter material and design choices that reduce cost without compromising quality.",
      subHeadineThree: "Vendor & Contractor Costing",
      subHeadineThreeDescription:
        "Review vendor and contractor quotes to ensure fair, competitive pricing.",
      subHeadineFour: "Payment & Billing Tracking",
      subHeadineFourDescription:
        "Track payments, certify bills, and keep cash flow organised throughout execution.",
      subHeadineFive: "Cost Reporting",
      subHeadineFiveDescription:
        "Provide clear cost reports so you can monitor spending against budget at every stage.",
      image: cost2,
    },
    {
      title: "Quality Management",
      subtitle: "",
      description: "",
      subHeadineOne: "Quality Checklists",
      subHeadineOneDescription:
        "Define clear quality checklists for materials, workmanship, and finishing at every stage.",
      subHeadineTwo: "Site Quality Audits",
      subHeadineTwoDescription:
        "Conduct regular site audits to catch and correct issues before they become costly.",
      subHeadineThree: "Material Verification",
      subHeadineThreeDescription:
        "Verify materials against approved specifications before they go into the project.",
      subHeadineFour: "Snag List Management",
      subHeadineFourDescription:
        "Identify and track snags, ensuring every item is resolved before handover.",
      subHeadineFive: "Standards Compliance",
      subHeadineFiveDescription:
        "Ensure workmanship and finishes meet agreed quality and safety standards.",
      image: quality2,
    },
  ],
};

const Portfolio = () => {
  const location = useLocation();

  // Older links or saved browser history may name a tab that no longer exists
  const requestedCategory = location.state?.portfolioCategory;
  const validRequestedCategory = portfolioData[requestedCategory] ? requestedCategory : "architecture";

  const [category, setCategory] = useState(validRequestedCategory);

  // the currently visible page
  const [pageIndex, setPageIndex] = useState(0);

  // flip states
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next"); // next | prev
  const [targetIndex, setTargetIndex] = useState(null);

  // Switch to the tab requested by navigation (e.g. a service's "Know more") once per navigation
  const [handledLocationKey, setHandledLocationKey] = useState(location.key);
  if (handledLocationKey !== location.key) {
    setHandledLocationKey(location.key);
    if (requestedCategory) {
      setCategory(validRequestedCategory);
      setPageIndex(0);
      setTargetIndex(null);
      setIsFlipping(false);
    }
  }

  useEffect(() => {
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
  }, [location]);

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

        <button
          className={category === "projectManagement" ? "active" : ""}
          onClick={() => changeCategory("projectManagement")}
        >
          Project Management / Owner Representative
        </button>

        <button
          className={category === "costQualityManagement" ? "active" : ""}
          onClick={() => changeCategory("costQualityManagement")}
        >
          Cost & Quality Management
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
