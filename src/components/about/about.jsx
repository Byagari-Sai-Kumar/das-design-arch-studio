import "./about.css";
import aboutUsImage from "../../assets/aboutUs/images/aboutUsImage.jpg";
import AbhinayaDas from "../../assets/aboutUs/images/AbhinayaDas.jpg";
import AkhileshDas from "../../assets/aboutUs/images/AkhileshDas.jpg";
import AbhilashDas from "../../assets/aboutUs/images/AbhilashDas.jpg";
import AbhitejDas from "../../assets/aboutUs/images/AbhitejDas.jpg";

const teamMembers = [
    {
        name: "Abhinaya Das",
        role: "Construction Manager",
        experience: "12+ Years Experience",
        //rating: 5,
        image: AbhinayaDas,
        description: `
            We oversee every phase of construction, from initial planning and resource coordination to on-site execution and final handover.  
            Our team manages budgets, mitigates risks, and enforces strict safety protocols while collaborating. From site oversight to final handover, we deliver on time and on budget.
            `
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
            `
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
        `
    },
    {
    name: "Abhitej Das",
    role: "Designer",
    experience: "5+ Years Experience",
    //rating: 4.5,
    image: AbhitejDas,
    description: `
        We lead the creative vision of the studio, shaping concepts that balance aesthetics, functionality, and context. We ensure every project reflects our design philosophy through thoughtful spatial planning, innovation.
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
                                {/* <div className="team-rating">
                                    {"★".repeat(Math.floor(member.rating))}
                                    {member.rating % 1 !== 0 && "☆"}
                                </div> */}
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
            </div>
        </section>
    );
};

export default About;