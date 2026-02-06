import React, { useState } from "react";
import "./gallery.css";

import imageOne from "../../assets/gallery/imageOne.jpg";
import imageTwo from "../../assets/gallery/imageTwo.jpg";
import imageThree from "../../assets/gallery/imageThree.jpg";
import imageFour from "../../assets/gallery/imageFour.jpg";
import imageFive from "../../assets/gallery/imageFive.jpg";
import imageSix from "../../assets/gallery/imageSix.jpg";

import { IoClose } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const galleryData = [
    {
        id: 1,
        category: "Residential",
        title: "Living Room",
        image: imageOne,
    },
    {
        id: 2,
        category: "Residential",
        title: "Bedroom Design",
        image: imageTwo,
    },
    {
        id: 3,
        category: "Commercial",
        title: "Office Interior",
        image: imageThree,
    },
    {
        id: 4,
        category: "Residential",
        title: "Modular Kitchen",
        image: imageFour,
    },
    {
        id: 5,
        category: "Exterior",
        title: "Modern Elevation",
        image: imageFive,
    },
    {
        id: 6,
        category: "Commercial",
        title: "Showroom Design",
        image: imageSix,
    },
    ];

    const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
        prev === 0 ? galleryData.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
        prev === galleryData.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="gallery-section" id="gallery">
        <h2 className="gallery-heading">Gallery</h2>
        <p className="gallery-subheading">
            A glimpse of our architectural and interior design projects
        </p>

        <div className="gallery-grid">
            {galleryData.map((item, index) => (
            <div
                className="gallery-card"
                key={item.id}
                onClick={() => openModal(index)}
            >
                <img src={item.image} alt={item.title} />

                <div className="gallery-overlay">
                <div className="gallery-overlay-text">
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                </div>
                </div>
            </div>
            ))}
        </div>

        {/* CTA */}
        <div className="gallery-cta">
            <p>Many more projects are available. Want to explore?</p>
            <NavLink to="/" state={{ scrollTo: "contact-us" }} className="gallery-cta-btn">
            Contact Us
            </NavLink>
        </div>

        {/* MODAL */}
        {open && (
            <div className="gallery-modal">
            <button className="gallery-close-btn" onClick={closeModal}>
                <IoClose />
            </button>

            <button className="gallery-nav-btn left" onClick={prevSlide}>
                <IoChevronBack />
            </button>

            <div className="gallery-modal-content">
                <img
                src={galleryData[currentIndex].image}
                alt={galleryData[currentIndex].title}
                />

                <div className="gallery-modal-text">
                <h3>{galleryData[currentIndex].category}</h3>
                <p>{galleryData[currentIndex].title}</p>
                </div>
            </div>

            <button className="gallery-nav-btn right" onClick={nextSlide}>
                <IoChevronForward />
            </button>
            </div>
        )}
        </section>
    );
};

export default Gallery;