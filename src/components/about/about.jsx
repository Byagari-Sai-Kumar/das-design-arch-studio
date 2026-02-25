import "./about.css";
import { useState, useEffect } from "react";
import { FaTimes, FaExpand, FaCompress } from "react-icons/fa";
import aboutUsImage from "../../assets/aboutUs/images/aboutUsImage.jpg";
import AbhinayaDas from "../../assets/aboutUs/images/AbhinayaDas.jpg";
import AkhileshDas from "../../assets/aboutUs/images/AkhileshDas.jpg";
import AbhilashDas from "../../assets/aboutUs/images/AbhilashDas.jpg";
import AbhitejDas from "../../assets/aboutUs/images/AbhitejDas.jpg";

const teamMembers = [
    {
        name: "Abhinaya Das",
        role: "Senior Construction Planning Manager",
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
        role: "REGD. L. NO. CA/2023/167135 | Senior Architect",
        experience: "5+ Years Experience",
        //rating: 4.5,
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
    },
    {
    name: "Abhilash Das",
    role: "3D Visualizer",
    experience: "5+ Years Experience",
    //rating: 4.5,
    image: AbhilashDas,
    description: `
        We provide high-quality 3D visualization services for residential and commercial projects, helping clients clearly visualize their spaces before execution. Our expertise covers both interior and exterior home designs, ensuring accurate, realistic, and detailed representations that bring concepts to life. 
        Using industry-standard software such as Autodesk 3ds Max and Autodesk Maya, we create visually compelling 3D models, renders, and walkthroughs that reflect design intent, materials, lighting, and spatial planning with precision.
        `,
    hasResume: true,
    resume: {
        summary: "Professional 3D Visualizer with 5+ years of experience in creating high-quality architectural and interior visualization services. Expertise in using industry-standard software to produce realistic 3D models, renders, and walkthroughs for residential and commercial projects.",
        skills: [
            "3D Modeling",
            "3ds Max",
            "Autodesk Maya",
            "Rendering",
            "Lighting Design",
            "Material Creation",
            "Walkthrough Production",
            "Photo Realism",
            "Interior Visualization",
            "Exterior Visualization",
            "VRay Rendering",
            "Post-Processing"
        ],
        experience: [
            {
                title: "3D Visualizer & Renderer",
                company: "Design Arch Studio",
                duration: "2023 - Present",
                description: "Create high-quality 3D visualizations, renders, and walkthroughs for architectural and interior design projects using 3ds Max and Maya."
            },
            {
                title: "Senior 3D Visualizer",
                company: "Visualization Studio",
                duration: "2018 - 2023",
                description: "Produced photorealistic 3D models and renderings for residential and commercial projects, managed visualization pipelines."
            },
            {
                title: "3D Artist",
                company: "Digital Design Company",
                duration: "2013 - 2018",
                description: "Developed 3D models and visualizations, assisted in lighting setup and material creation for various design projects."
            }
        ],
        education: [
            {
                degree: "Diploma in 3D Animation & Visualization",
                institution: "Institute of Advanced Animation",
                year: "2013"
            },
            {
                degree: "Professional Certification in 3ds Max",
                institution: "Autodesk Learning Center",
                year: "2014"
            }
        ]
    }
    },
    {
    name: "Abhitej Das",
    role: "Designer",
    experience: "5+ Years Experience",
    //rating: 4.5,
    image: AbhitejDas,
    description: `
        We lead the creative vision of the studio, shaping concepts that balance aesthetics, functionality, and context. We ensure every project reflects our design philosophy through thoughtful spatial planning, innovation.
        `,
    hasResume: true,
    resume: {
        summary: "Creative Designer with 5+ years of professional experience in delivering aesthetic and functional design solutions for residential and commercial projects. Expertise in spatial planning, interior design, and design conceptualization.",
        skills: [
            "Design Conceptualization",
            "Interior Design",
            "Space Planning",
            "Color & Material Selection",
            "Design Documentation",
            "Client Presentations",
            "Design Software",
            "Aesthetic Design",
            "Functional Design",
            "Design Innovation",
            "Adobe Creative Suite",
            "Mood Board Creation"
        ],
        experience: [
            {
                title: "Lead Designer",
                company: "Design Arch Studio",
                duration: "2025 - Present",
                description: "Lead creative design direction for projects, develop design concepts, and ensure adherence to design philosophy and client requirements."
            },
            {
                title: "Senior Designer",
                company: "Design & Interiors Firm",
                duration: "2019 - 2025",
                description: "Developed design concepts, created mood boards, managed design presentations, and collaborated with architects and clients."
            },
            {
                title: "Designer",
                company: "Creative Design Studio",
                duration: "2019 - 2021",
                description: "Contributed to design projects, prepared design documentation, and assisted in client consultations and presentations."
            }
        ],
        education: [
            {
                degree: "B.Tech in Electrical and Electronics Engineering (EEE)",
                institution: "Vasavi College of Engineering",
                year: "2018"
            },
            {
                degree: "Certification in Design Thinking",
                institution: "Design Academy",
                year: "2020"
            }
        ]
    }
    }
    ];

    const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
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

    const handleFullscreen = () => {
        setIsFullscreen(true);
    };

    const handleExitFullscreen = () => {
        setIsFullscreen(false);
    };
    return (
        <section id="what-we-do" className="about-section">
            {/* ---------- COMPANY INFO ---------- */}
        <div className="about-company">
            <div className="mobile-layout">
                <h1 className="know-about-das">Know About DAS</h1>
                <div className="about-image">
                    <img src={aboutUsImage} alt="Das Design Arch Studio" />
                </div>
                <p className="about-us-para">
                Das Design Arch Studio is a multidisciplinary architectural and
                interior design firm delivering innovative, functional and
                aesthetically refined spaces. Our philosophy blends creativity,
                sustainability and modern design thinking.
                </p>

                <p className="about-us-para">
                    With expertise in residential, commercial and interior projects,
                    we focus on creating spaces that enhance lifestyle, productivity
                    and long-term value.
                </p>
                <div className="about-highlights">
                    <p className="about-highlight-para">3+ Years Experience</p>
                    <p className="about-highlight-para">10+ Projects</p>
                    <p className="about-highlight-para">Construction Planning</p>
                    <p className="about-highlight-para">3D Visualization</p>
                </div>

                <div className="team-section">
                    <h1 className="meet-our-team-heading">Meet Our Team</h1>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                        >
                            {/* TEXT */}
                            <div className="team-content">
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h4 className="team-member-name">{member.name}</h4>
                                <p className="team-role">{member.role}</p>
                                <p className="team-exp">{member.experience}</p>
                                {/* <div className="team-rating">
                                    {"★".repeat(Math.floor(member.rating))}
                                    {member.rating % 1 !== 0 && "☆"}
                                </div> */}
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

            <div className="desktop-layout">
                <div className="about-image-content-layout">
                    <div className="about-image">
                    <img src={aboutUsImage} alt="Das Design Arch Studio" />
                    </div>

                    <div className="about-content"> 
                        <h2>Know About DAS</h2>

                        <p>
                            Das Design Arch Studio is a multidisciplinary architectural and
                            interior design firm delivering innovative, functional and
                            aesthetically refined spaces. Our philosophy blends creativity,
                            sustainability and modern design thinking.
                        </p>

                        <p>
                            With expertise in residential, commercial and interior projects,
                            we focus on creating spaces that enhance lifestyle, productivity
                            and long-term value.
                        </p>
                            <div className="about-highlights">
                            <div>3+ Years Experience</div>
                            <div>10+ Projects</div>
                            <div className="about-highlights-view">Construction Planning</div>
                            <div className="about-highlights-view">3D Visualization</div>
                        </div>
                    </div>
                </div>
                
                <div className="team-section">
                    <h2 className="meet-our-team-heading">Meet Our Team</h2>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`team-row ${index % 2 === 1 ? "reverse" : ""}`}
                        >
                            {/* TEXT */}
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

                            {/* <div className="team-rating">
                                {"★".repeat(Math.floor(member.rating))}
                                {member.rating % 1 !== 0 && "☆"}
                            </div> */}
                            </div>

                            {/* IMAGE */}
                            <div className="team-image">
                            <img src={member.image} alt={member.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RESUME MODAL */}
            {isModalOpen && selectedMember && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className={`modal-content ${isFullscreen ? 'fullscreen' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={handleCloseModal}>
                            <FaTimes />
                        </button>

                        <div className="modal-controls">
                            {!isFullscreen && (
                                <button className="modal-fullscreen-btn" onClick={handleFullscreen} title="View in fullscreen">
                                    <FaExpand />
                                </button>
                            )}
                            {isFullscreen && (
                                <button className="modal-fullscreen-btn" onClick={handleExitFullscreen} title="Exit fullscreen">
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

                            {selectedMember.resume?.skills && selectedMember.resume.skills.length > 0 && (
                                <div className="resume-section">
                                    <h3>Skills</h3>
                                    <div className="skills-container">
                                        {selectedMember.resume.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedMember.resume?.experience && selectedMember.resume.experience.length > 0 && (
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
                                                {job.description && <p className="experience-description">{job.description}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Education section intentionally removed per request */}
                        </div>
                    </div>
                </div>
            )}
            </div>
        </section>
    );
};

export default About;