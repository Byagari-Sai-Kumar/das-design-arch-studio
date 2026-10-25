import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { PiArrowsOutSimpleLight } from "react-icons/pi";
import { interiorProjects, formatCompleted } from "../../data/interiorProjects";
import "./interiors.css";

const sectionId = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = interiorProjects.find((p) => p.slug === slug);
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(null);

  const allImages = useMemo(
    () => (project ? project.sections.flatMap((s) => s.images) : []),
    [project]
  );
  const sectionStarts = useMemo(
    () =>
      (project?.sections ?? []).reduce(
        (starts, s, i) => [...starts, i === 0 ? 0 : starts[i - 1] + project.sections[i - 1].images.length],
        []
      ),
    [project]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const tiles = document.querySelectorAll(".gallery-tile");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.15 }
    );
    tiles.forEach((tile) => observer.observe(tile));
    return () => observer.disconnect();
  }, [slug]);

  const total = allImages.length;
  const isOpen = activeIndex !== null;
  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i + 1) % total);
  const prev = () => setActiveIndex((i) => (i === 0 ? total - 1 : i - 1));

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === 0 ? total - 1 : i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, total]);

  if (!project) {
    return (
      <main className="interiors-page">
        <header className="interiors-header">
          <h1 className="interiors-title">Project not found</h1>
          <Link to="/our-works/interiors" className="interiors-back">
            <BsArrowLeft /> See all interior projects
          </Link>
        </header>
      </main>
    );
  }

  const scrollToSection = (title) =>
    document.getElementById(sectionId(title))?.scrollIntoView({ behavior: "smooth" });

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <main className="project-page">
      <section
        className="project-hero"
        style={{ backgroundImage: `url(${project.coverImage})` }}
      >
        <div className="project-hero-overlay" />
        <div className="project-hero-content">
          <Link to="/our-works/interiors" className="interiors-back light">
            <BsArrowLeft /> All Interior Projects
          </Link>
          <p className="interiors-eyebrow light">{project.type}</p>
          <h1>{project.title}</h1>
          <dl className="project-facts">
            <div><dt>Home</dt><dd>{project.configuration}</dd></div>
            <div><dt>Location</dt><dd>{project.location}</dd></div>
            <div><dt>Completed</dt><dd>{formatCompleted(project.completedOn)}</dd></div>
            <div><dt>Photos</dt><dd>{allImages.length}</dd></div>
          </dl>
        </div>
      </section>

      <section className="project-intro">
        <div>
          <p className="interiors-eyebrow">About the project</p>
          <p className="project-summary">{project.summary}</p>
          <p className="project-story">{project.story}</p>
        </div>
        <div className="project-scope">
          <p className="interiors-eyebrow">Scope of work</p>
          <div className="project-tags">
            {project.scope.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <nav className="project-section-nav">
        {project.sections.map((section) => (
          <button key={section.title} onClick={() => scrollToSection(section.title)}>
            {section.title} <span>{section.images.length}</span>
          </button>
        ))}
      </nav>

      {project.sections.map((section, sectionIndex) => {
        const start = sectionStarts[sectionIndex];
        return (
          <section key={section.title} id={sectionId(section.title)} className="project-section">
            <div className="project-section-head">
              <div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <span className="section-count">{section.images.length} photos</span>
            </div>
            <div className="project-gallery">
              {section.images.map((image, i) => (
                <figure
                  key={image.src}
                  className="gallery-tile"
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                  onClick={() => setActiveIndex(start + i)}
                >
                  <img src={image.src} alt={image.caption} />
                  <span className="tile-zoom"><PiArrowsOutSimpleLight /></span>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        );
      })}

      <section className="project-cta">
        <h2>Like what you see?</h2>
        <p>Let's design a home that reflects you.</p>
        <div className="project-cta-actions">
          <button className="project-btn primary" onClick={() => navigate("/consultation")}>
            Book Free Consultation <BsArrowRight />
          </button>
          <Link to="/our-works/interiors" className="project-btn outline">
            View More Projects
          </Link>
        </div>
      </section>

      {isOpen && (
        <div
          className="project-lightbox"
          onClick={close}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <button className="lightbox-close" onClick={close} aria-label="Close">
            <IoClose />
          </button>
          <button
            className="lightbox-arrow left"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            <BsArrowLeft />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={allImages[activeIndex].src} alt={allImages[activeIndex].caption} />
            <figcaption>
              <span>{allImages[activeIndex].caption}</span>
              <span className="lightbox-count">
                {activeIndex + 1} / {allImages.length}
              </span>
            </figcaption>
          </figure>
          <button
            className="lightbox-arrow right"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            <BsArrowRight />
          </button>
        </div>
      )}
    </main>
  );
}
