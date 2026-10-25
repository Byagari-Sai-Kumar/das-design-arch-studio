import { Fragment, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import heroInteriorOne from '../../assets/home/images/heroInteriorOne.jpg';
import heroInteriorTwo from '../../assets/home/images/heroInteriorTwo.jpg';
import heroInteriorThree from '../../assets/home/images/heroInteriorThree.jpg';
import heroInteriorFour from '../../assets/home/images/heroInteriorFour.jpg';
import { BsArrowRight } from "react-icons/bs";
import { PiMedalLight, PiHardHatLight, PiGearSixLight, PiMapPinLight } from "react-icons/pi";
import "./home.css";

const slides = [heroInteriorOne, heroInteriorTwo, heroInteriorThree, heroInteriorFour];

const stats = [
    { icon: PiMedalLight, title: "Experienced", subtitle: "Design Team" },
    { icon: PiHardHatLight, title: "Licensed", subtitle: "Architects & Construction Managers" },
    { icon: PiGearSixLight, title: "End-to-End", subtitle: "Architecture · Interiors · Turnkey" },
    { icon: PiMapPinLight, title: "Hyderabad", subtitle: "Based Studio" },
];

const Home = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            {slides.map((image, index) => (
                <div
                    key={index}
                    className={`hero-slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="hero-overlay"></div>
                </div>
            ))}

            <div className="hero-content">
                <p className="hero-eyebrow">
                    Architecture <span>|</span> Interiors <span>|</span> Turnkey
                </p>
                <h1 className="hero-title">
                    Design Spaces <br />That Reflect You
                </h1>
                <p className="hero-description">
                    Thoughtful architecture, refined interiors and turnkey solutions — crafted around your lifestyle.
                </p>
                <div className="hero-actions">
                    <button className="hero-btn hero-btn-primary" onClick={() => navigate("/consultation")}>
                        Free Quote <BsArrowRight className="hero-btn-icon" />
                    </button>
                    <button className="hero-btn hero-btn-outline" onClick={() => navigate("/portfolio")}>
                        View Portfolio <BsArrowRight className="hero-btn-icon" />
                    </button>
                </div>
            </div>

            <div className="hero-stats">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Fragment key={stat.title}>
                            {index > 0 && <span className="hero-stat-divider" aria-hidden="true" />}
                            <div className="hero-stat">
                                <Icon className="hero-stat-icon" />
                                <div>
                                    <strong>{stat.title}</strong>
                                    <span>{stat.subtitle}</span>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </section>
    );
};

export default Home;
