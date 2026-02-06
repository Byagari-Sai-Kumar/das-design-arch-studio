import "./about.css";

import aboutUsImage from "../../assets/aboutUs/images/aboutUsImageOne.jpg";

import teamMemberOne from "../../assets/aboutUs/images/teamMemberOne.jpeg";
import teamMemberTwo from "../../assets/aboutUs/images/teamMemberTwo.jpg";

const teamMembers = [
    {
        name: "Abhinaya Das",
        role: "Principal Architect",
        experience: "12+ Years Experience",
        rating: 5,
        image: teamMemberOne,
        description: `
            Abhi Teja Das is the founding principal architect of Das Design Arch Studio with over 12 years of professional experience in residential and commercial architecture.
            He oversees project planning, design approvals, client coordination and site execution, ensuring high design quality and on-time delivery. Rahul is widely appreciated for translating client requirements into practical and visually refined spaces.
            `
    },
    {
        name: "Akhilesh Das",
        role: "Senior Architect",
        experience: "5+ Years Experience",
        rating: 4.5,
        image: teamMemberTwo,
        description: `
            Akhilesh Das is a Senior Architect specializing in interior design and 3D visualization with more than 5 years of industry experience.
            He holds a Bachelor’s degree in Architecture and has strong expertise in space planning, lighting design, and material selection. Neha has delivered over 120 residential and commercial interior projects with a focus on modern, functional layouts.
            `
    }
    ];

    const About = () => {
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
                                <div className="team-rating">
                                    {"★".repeat(Math.floor(member.rating))}
                                    {member.rating % 1 !== 0 && "☆"}
                                </div>
                                <p className="team-desc">{member.description}</p>
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

                            <div className="team-rating">
                                {"★".repeat(Math.floor(member.rating))}
                                {member.rating % 1 !== 0 && "☆"}
                            </div>
                            </div>

                            {/* IMAGE */}
                            <div className="team-image">
                            <img src={member.image} alt={member.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
};

export default About;