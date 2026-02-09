import { useState, useEffect } from "react";
import "./ourWorks.css";
import { IoClose } from "react-icons/io5";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// example images (replace with your real ones)
import archImageOne from "../../assets/ourWorks/architecture/projectOne/imageOne.jpg";
import intImageOne from "../../assets/ourWorks/interior/projectOne/imageOne.jpg";
import planImageOne from "../../assets/ourWorks/planning/projectOne/imageOne.jpg";
import visualImageOne from "../../assets/ourWorks/visualization/projectOne/imageOne.jpg";
import galleryImageOne from "../../assets/ourWorks/galleryImageOne.jpg";
import galleryImageTwo from "../../assets/ourWorks/galleryImageTwo.jpg";
import galleryImageThree from "../../assets/ourWorks/galleryImageThree.jpg";
import galleryImageFour from "../../assets/ourWorks/galleryImageFour.jpg";
import galleryImageFive from "../../assets/ourWorks/galleryImageFive.jpg";
import galleryImageSix from "../../assets/ourWorks/galleryImageSix.jpg";

const projects = [
  {
    id: 1,
    category: "Architecture",
    subCategory: "Residential • Living Room",
    title: "Modern Living Room Project",
    description:
      "A premium modern living room design with warm tones, elegant lighting, and balanced furniture layout for comfort and luxury.",
    coverImage: archImageOne,
    images: [galleryImageOne, galleryImageTwo, galleryImageThree],
  },
  {
    id: 2,
    category: "Interiors",
    subCategory: "Residential • Bedroom",
    title: "Luxury Bedroom Interiors",
    description:
      "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
    coverImage: intImageOne,
    images: [galleryImageFour, galleryImageFive, galleryImageSix],
  },
  {
    id: 3,
    category: "Construction Planning",
    subCategory: "Residential • Bedroom",
    title: "Luxury Bedroom Interiors",
    description:
      "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
    coverImage: planImageOne,
    images: [galleryImageFour, galleryImageFive, galleryImageSix],
  },
  {
    id: 4,
    category: "3D Visualization",
    subCategory: "Residential • Bedroom",
    title: "Luxury Bedroom Interiors",
    description:
      "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
    coverImage: visualImageOne,
    images: [galleryImageFour, galleryImageFive, galleryImageSix],
  },
  // {
  //   id: 2,
  //   category: "Residential",
  //   subCategory: "Bedroom",
  //   title: "Luxury Bedroom Interiors",
  //   description:
  //     "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
  //   coverImage: galleryImageFive,
  //   images: [galleryImageFour, galleryImageFive, galleryImageSix],
  // },
  // {
  //   id: 2,
  //   category: "Residential",
  //   subCategory: "Bedroom",
  //   title: "Luxury Bedroom Interiors",
  //   description:
  //     "A peaceful bedroom design with minimal color palette, modern wardrobes, and ambient lighting for a calm atmosphere.",
  //   coverImage: galleryImageTwo,
  //   images: [galleryImageFour, galleryImageFive, galleryImageSix],
  // },
];

export default function OurWorks() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveIndex(0);
    //document.body.style.overflow = "hidden";
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
    <section className="gallery-section" id="our-works">
      <h2 className="gallery-heading">Our Works</h2>
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
