import { useState, useEffect } from "react";
import "./gallery.css";
import { IoClose } from "react-icons/io5";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// example images (replace with your real ones)
import galleryImageOne from "../../assets/gallery/galleryImageOne.jpg";
import galleryImageTwo from "../../assets/gallery/galleryImageTwo.jpg";
import galleryImageThree from "../../assets/gallery/galleryImageThree.jpg";
import galleryImageFour from "../../assets/gallery/galleryImageFour.jpg";
import galleryImageFive from "../../assets/gallery/galleryImageFive.jpg";
import galleryImageSix from "../../assets/gallery/galleryImageSix.jpg";

const projects = [
  {
    id: 1,
    category: "Residential",
    subCategory: "Living Room",
    title: "Modern Living Room Project",
    description:
      "A premium modern living room design with warm tones, elegant lighting, and balanced furniture layout for comfort and luxury.",
    coverImage: galleryImageOne,
    images: [galleryImageOne, galleryImageTwo, galleryImageThree],
  },
  {
    id: 2,
    category: "Residential",
    subCategory: "Bedroom",
    title: "Luxury Bedroom Interiors",
    description:
      "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
    coverImage: galleryImageFour,
    images: [galleryImageFour, galleryImageFive, galleryImageSix],
  },
  {
    id: 2,
    category: "Residential",
    subCategory: "Bedroom",
    title: "Luxury Bedroom Interiors",
    description:
      "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
    coverImage: galleryImageTwo,
    images: [galleryImageFour, galleryImageFive, galleryImageSix],
  },
  {
    id: 2,
    category: "Residential",
    subCategory: "Bedroom",
    title: "Luxury Bedroom Interiors",
    description:
      "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
    coverImage: galleryImageOne,
    images: [galleryImageFour, galleryImageFive, galleryImageSix],
  },
  {
    id: 2,
    category: "Residential",
    subCategory: "Bedroom",
    title: "Luxury Bedroom Interiors",
    description:
      "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
    coverImage: galleryImageFive,
    images: [galleryImageFour, galleryImageFive, galleryImageSix],
  },
  {
    id: 2,
    category: "Residential",
    subCategory: "Bedroom",
    title: "Luxury Bedroom Interiors",
    description:
      "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
    coverImage: galleryImageTwo,
    images: [galleryImageFour, galleryImageFive, galleryImageSix],
  },
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setActiveIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedProject) return;

      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject]);

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-heading">Gallery</h2>
      <p className="gallery-subheading">
        Explore our latest architectural and interior design projects
      </p>

      {/* GRID */}
      <div className="gallery-grid">
        {projects.map((project) => (
          <div
            className="gallery-card"
            key={project.id}
            onClick={() => openProject(project)}
          >
            <img src={project.coverImage} alt={project.title} />

            <div className="gallery-overlay">
              <h4>{project.category}</h4>
              <p>{project.subCategory}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="gallery-modal">
          <button className="gallery-close-btn" onClick={closeProject}>
            <IoClose />
          </button>

          <div className="gallery-modal-content">
            {/* IMAGE SLIDER */}
            <div className="gallery-slider">
              <button className="gallery-arrow left" onClick={prevImage}>
                <BsArrowLeft />
              </button>

              <img
                src={selectedProject.images[activeIndex]}
                alt="project-view"
                className="gallery-modal-image"
              />

              <button className="gallery-arrow right" onClick={nextImage}>
                <BsArrowRight />
              </button>

              {/* DOTS */}
              <div className="gallery-dots">
                {selectedProject.images.map((_, index) => (
                  <span
                    key={index}
                    className={index === activeIndex ? "dot active" : "dot"}
                    onClick={() => setActiveIndex(index)}
                  ></span>
                ))}
              </div>
            </div>

            {/* INFO */}
            <div className="gallery-info">
              <h3>{selectedProject.title}</h3>
              <p className="gallery-category">
                {selectedProject.category} • {selectedProject.subCategory}
              </p>
              <p className="gallery-description">
                {selectedProject.description}
              </p>

              <p className="gallery-count">
                Image {activeIndex + 1} of {selectedProject.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
