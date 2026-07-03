import "./about.css";
import aboutUsImage from "../../assets/aboutUs/images/aboutUsImage.jpg";

const About = () => {
    return (
        <section id="what-we-do" className="about-section">
            {/* ── Mobile layout ── */}
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
            </div>

            {/* ── Desktop layout ── */}
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
            </div>
        </section>
    );
};

export default About;
