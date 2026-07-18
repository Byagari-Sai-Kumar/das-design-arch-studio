import { useState, useEffect } from "react";
import { FaTimes, FaExpand, FaCompress } from "react-icons/fa";
import "../about/about.css";
import AbhinayaDas from "../../assets/aboutUs/images/AbhinayaDas.jpg";
import AkhileshDas from "../../assets/aboutUs/images/AkhileshDas.jpg";

const teamMembers = [
    {
        name: "Abhinaya Das",
        role: "REGD. L. NO. 647 | Licensed GHMC | Structural Engineer / Engineer / Town Planner | Construction Manager",
        experience: "12+ Years Experience",
        image: AbhinayaDas,
        description: `
            We oversee every phase of construction, from initial planning and resource coordination to on-site execution and final handover.
            Our team manages budgets, mitigates risks, and enforces strict safety protocols while collaborating. From site oversight to final handover, we deliver on time and on budget.
            `,
        hasResume: true,
        resume: {
            summary: "Experienced Construction Manager with 12+ years of expertise in overseeing residential and commercial projects from planning to execution.",
            skills: [
                "Construction Management",
                "Project Planning",
                "Budget Management",
                "Risk Mitigation",
                "Safety Protocols",
                "Team Leadership",
                "On-site Supervision",
                "Quality Control"
            ],
            experience: [
                {
                    title: "Construction Manager",
                    company: "Design Arch Studio",
                    duration: "2026 - Present",
                    description: "Lead construction projects from initial planning through final handover, managing budgets, timelines, and quality standards."
                },
                {
                    title: "Senior Construction Supervisor",
                    company: "Construction Firm",
                    duration: "2015 - 2020",
                    description: "Supervised on-site construction activities, ensured safety protocols, and coordinated with contractors and suppliers."
                },
                {
                    title: "Construction Coordinator",
                    company: "Construction Company",
                    duration: "2012 - 2015",
                    description: "Coordinated construction activities, managed resources, and maintained project documentation."
                }
            ],
            education: [
                {
                    degree: "B.Tech : Civil Engineering",
                    institution: "Malla Reddy Engineering College (MREC)",
                    year: "2012-2016"
                },
                {
                    degree: "Masters : MS in Civil Engineering",
                    institution: "Bradley University",
                    year: "2016-2018"
                }
            ]
        }
    },
    {
        name: "Ar. Akhilesh Das",
        role: "REGD. L. NO. CA/2023/167135 |  Architect",
        experience: "5+ Years Experience",
        image: AkhileshDas,
        description: `
            Ar. Akhilesh Das is an architect with over 5 years of professional experience in delivering innovative and context-driven solutions across architecture, interiors, and
            landscape design. With a strong foundation in architectural principles and a keen eye for detail, he has successfully worked on a diverse range of residential, commercial, and landscape projects.
            `,
        hasResume: true,
        resume: {
            summary: "Registered Senior Architect with 5+ years of professional experience in designing innovative and context-driven architectural solutions. Expertise spans residential, commercial, interior, and landscape design projects.",
            skills: [
                "Architectural Design",
                "CAD Design",
                "Building Planning",
                "Interior Architecture",
                "Landscape Design",
                "Space Planning",
                "Design Documentation",
                "Client Consultation",
                "Sustainable Design",
                "Project Coordination"
            ],
            experience: [
                {
                    title: "Senior Architect",
                    company: "Design Arch Studio",
                    duration: "2024 - Present",
                    description: "Lead architectural design projects, manage design documentation, and ensure compliance with building regulations and standards."
                },
                {
                    title: "Architect",
                    company: "Architecture Firm",
                    duration: "2019 - 2024",
                    description: "Designed and developed architectural solutions for residential and commercial projects, coordinated with clients and contractors."
                },
                {
                    title: "Junior Architect",
                    company: "Design Studio",
                    duration: "2021 - 2023",
                    description: "Assisted in architectural design, prepared design drawings, and supported project documentation."
                }
            ],
            education: [
                {
                    degree: "B.Arch (Bachelor of Architecture)",
                    institution: "Aurora's Design Academy",
                    year: "2021"
                },
                {
                    degree: "Architectural License Registration",
                    institution: "Architecture Registration Board",
                    year: "2023"
                }
            ]
        }
    }
];

const Team = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; };
    }, [isModalOpen]);

    const handleKnowMore = (member) => {
        if (member.hasResume) {
            setSelectedMember(member);
            setIsModalOpen(true);
            setIsFullscreen(false);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
        setIsFullscreen(false);
    };

    return (
        <section id="our-team" className="about-section">
            {/* ── Mobile layout ── */}
            <div className="mobile-layout">
                <h1 className="meet-our-team-heading">Meet Our Team</h1>
                <div className="team-section">
                    {teamMembers.map((member, index) => (
                        <div key={index}>
                            <div className="team-content">
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h4 className="team-member-name">{member.name}</h4>
                                <p className="team-role">{member.role}</p>
                                <p className="team-exp">{member.experience}</p>
                                <p className="team-desc">{member.description}</p>
                                {member.hasResume && (
                                    <button
                                        className="team-know-more-btn"
                                        onClick={() => handleKnowMore(member)}
                                    >
                                        Know more
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Desktop layout ── */}
            <div className="desktop-layout">
                <h2 className="meet-our-team-heading">Meet Our Team</h2>
                <div className="team-section">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`team-row ${index % 2 === 1 ? "reverse" : ""}`}
                        >
                            <div className="team-content">
                                <h4>{member.name}</h4>
                                <p className="team-role">{member.role}</p>
                                <p className="team-exp">{member.experience}</p>
                                <p className="team-desc">{member.description}</p>
                                {member.hasResume && (
                                    <button
                                        className="team-know-more-btn"
                                        onClick={() => handleKnowMore(member)}
                                    >
                                        Know more
                                    </button>
                                )}
                            </div>
                            <div className="team-image">
                                <img src={member.image} alt={member.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Resume modal ── */}
            {isModalOpen && selectedMember && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div
                        className={`modal-content ${isFullscreen ? "fullscreen" : ""}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close-btn" onClick={handleCloseModal}>
                            <FaTimes />
                        </button>
                        <div className="modal-controls">
                            {!isFullscreen ? (
                                <button className="modal-fullscreen-btn" onClick={() => setIsFullscreen(true)} title="View in fullscreen">
                                    <FaExpand />
                                </button>
                            ) : (
                                <button className="modal-fullscreen-btn" onClick={() => setIsFullscreen(false)} title="Exit fullscreen">
                                    <FaCompress />
                                </button>
                            )}
                        </div>
                        <div className="modal-body">
                            <div className="modal-header">
                                <div className="modal-profile-image">
                                    <img src={selectedMember.image} alt={selectedMember.name} />
                                </div>
                                <div className="modal-member-info">
                                    <h2>{selectedMember.name}</h2>
                                    <p className="modal-role">{selectedMember.role}</p>
                                    <p className="modal-experience">{selectedMember.experience}</p>
                                </div>
                            </div>

                            {selectedMember.resume?.summary && (
                                <div className="resume-section">
                                    <h3>About</h3>
                                    <p>{selectedMember.resume.summary}</p>
                                </div>
                            )}

                            {selectedMember.resume?.skills?.length > 0 && (
                                <div className="resume-section">
                                    <h3>Skills</h3>
                                    <div className="skills-container">
                                        {selectedMember.resume.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedMember.resume?.experience?.length > 0 && (
                                <div className="resume-section">
                                    <h3>Experience</h3>
                                    <div className="experience-timeline">
                                        {selectedMember.resume.experience.map((job, idx) => (
                                            <div key={idx} className="experience-item">
                                                <div className="experience-header">
                                                    <h4>{job.title}</h4>
                                                    <span className="experience-duration">{job.duration}</span>
                                                </div>
                                                <p className="experience-company">{job.company}</p>
                                                {job.description && (
                                                    <p className="experience-description">{job.description}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Team;
