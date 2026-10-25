import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { PiMapPinLight, PiCalendarBlankLight, PiImagesLight, PiHouseLineLight } from "react-icons/pi";
import { sortedInteriorProjects, formatCompleted } from "../../data/interiorProjects";
import "./interiors.css";

const photoCount = (project) =>
  project.sections.reduce((total, section) => total + section.images.length, 0);

export default function InteriorsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="interiors-page">
      <header className="interiors-header">
        <Link to="/our-works" className="interiors-back">
          <BsArrowLeft /> Back to Our Works
        </Link>
        <p className="interiors-eyebrow">Our Works · Interiors</p>
        <h1 className="interiors-title">Interior Projects</h1>
        <p className="interiors-subtitle">
          Homes we have designed and executed end to end — newest first.
        </p>
      </header>

      <section className="interiors-grid">
        {sortedInteriorProjects.map((project) => (
          <Link
            key={project.slug}
            to={`/our-works/interiors/${project.slug}`}
            className="project-card"
          >
            <div className="project-card-image">
              <img src={project.coverImage} alt={project.title} loading="lazy" />
              <span className="project-card-badge">{project.type}</span>
            </div>
            <div className="project-card-body">
              <h2>{project.title}</h2>
              <div className="project-card-meta">
                <span><PiHouseLineLight /> {project.configuration}</span>
                <span><PiMapPinLight /> {project.location}</span>
                <span><PiCalendarBlankLight /> {formatCompleted(project.completedOn)}</span>
                <span><PiImagesLight /> {photoCount(project)} photos</span>
              </div>
              <p className="project-card-summary">{project.summary}</p>
              <div className="project-tags">
                {project.scope.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <span className="project-card-link">
                View Project <BsArrowRight />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
