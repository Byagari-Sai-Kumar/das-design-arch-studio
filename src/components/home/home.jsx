import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import heroInteriorOne from '../../assets/home/images/heroInteriorOne.jpg';
import heroInteriorTwo from '../../assets/home/images/heroInteriorTwo.jpg';
import heroInteriorThree from '../../assets/home/images/heroInteriorThree.jpg';
import heroInteriorFour from '../../assets/home/images/heroInteriorFour.jpg';
import { BsArrowLeft,BsArrowRight  } from "react-icons/bs";
import "./home.css";

const slides = [
    {
        image: heroInteriorOne,
        title: "Designing Modern Living Spaces",
        highlight: "Architecture with Purpose",
        button: "View Portfolio",
        path: "/portfolio"
    },
    {
        image: heroInteriorTwo,
        title: "Where Design Meets Function",
        highlight: "Creative Architecture",
        button: "Our Services",
        path: "/our-services"
    },
    {
        image: heroInteriorThree,
        title: "Shaping Future Skylines",
        highlight: "Innovative Concepts",
        button: "Visit Gallery",
        path: "/gallery"
    },
    {
        image: heroInteriorFour,
        title: "Inspired Interior & Exterior Design",
        highlight: "Timeless Spaces",
        button: "Contact Us",
        path: "/contact-us"
    }
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    const navigate = useNavigate();

    // auto slide
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`hero-slide ${index === current ? "active" : ""}`}
                style={{
                    backgroundImage: `url(${slide.image})`
                }}
            >
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1>
                {slide.title}
                <span className="title-highlight-span">{slide.highlight}</span>
                </h1>

                <button className="hero-btn" onClick={() => navigate(slide.path)}>
                {slide.button}
                </button>
            </div>
            </div>
        ))}

        {/* arrows */}
        <button
            className="hero-arrow left"
            onClick={() =>
            setCurrent(
                current === 0 ? slides.length - 1 : current - 1
            )
            }
        >
            <BsArrowLeft className="arrow-icon"/>
        </button>

        <button
            className="hero-arrow right"
            onClick={() =>
            setCurrent((current + 1) % slides.length)
            }
        >
            <BsArrowRight className="arrow-icon"/>
        </button>

        {/* dots */}
        <div className="hero-dots">
            {slides.map((_, index) => (
            <span
                key={index}
                className={index === current ? "dot active" : "dot"}
                onClick={() => setCurrent(index)}
            ></span>
            ))}
        </div>
        </section>
    );
};

export default Home;