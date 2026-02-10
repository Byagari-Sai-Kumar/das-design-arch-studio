import React from "react";
import "./services.css";
import { FaHome, FaBuilding, FaHammer } from "react-icons/fa";
import { Md3dRotation } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const iconMap = {
    FaHome: FaHome,
    FaBuilding: FaBuilding,
    FaHammer: FaHammer,
    Md3dRotation: Md3dRotation
    };

    const OurServices = [
    {
        id: 1,
        icon: "FaHome",
        title: "Architecture",
        description:
        "Transform your home into a personalized sanctuary that reflects your lifestyle, values, and functional needs through thoughtful architectural design."
    },
    {
        id: 2,
        icon: "FaBuilding",
        title: "Interiors",
        description:
        "Design refined interior spaces that balance aesthetics, comfort, and usability for residential and commercial environments."
    },
    {
        id: 3,
        icon: "FaHammer",
        title: "Construction Planning",
        description:
        "Plan and execute projects efficiently with structured construction planning, cost control, and on-site coordination."
    },
    {
        id: 4,
        icon: "Md3dRotation",
        title: "3D Visualization",
        description:
        "Visualize your project before execution with high-quality 3D renders, walkthroughs, and realistic spatial previews."
    }
    ];

    const Services = () => {
    const navigate = useNavigate();

    const titleToCategory = {
        "Architecture": "architecture",
        "Interiors": "interiors",
        "Construction Planning": "planning",
        "3D Visualization": "visualization",
    };

    const handleKnowMore = (serviceTitle) => {
        const category = titleToCategory[serviceTitle] || "architecture";
        navigate("/", { 
            state: { 
                scrollTo: "portfolio", 
                portfolioCategory: category 
            } 
        });
    };

    return (
        <section id="our-services" className="services-section">
        <h2 className="our-services-heading">Our Services</h2>

        <div className="services-grid">
            {OurServices.map((service) => {
            const IconComponent = iconMap[service.icon];

            return (
                <div className="services-card" key={service.id}>
                <div className="services-icon">
                    <IconComponent />
                </div>

                <h3 className="services-title">{service.title}</h3>

                <p className="services-description">
                    {service.description}
                </p>

                <button 
                    className="services-knowmore-btn"
                    onClick={() => handleKnowMore(service.title)}
                    type="button"
                    aria-label={`Learn more about ${service.title}`}
                >
                    Know more
                    <span className="services-knowmore-btn-arrow">
                    <BsArrowRight />
                    </span>
                </button>
                </div>
            );
            })}
        </div>
        </section>
    );
};

export default Services;