import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import dasDesignLogoFive from '../../assets/navbar/logo/dasDesignLogoFive.PNG'
import footerLogo from '../../assets/navbar/logo/dasDesignLogoTwo.png'
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import './navbar.css'

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(false);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);
    const location = useLocation();
    const pathname = location.pathname.replace(/\/$/, "") || "/";
    const isHomePage = pathname === "/";

    // Make navbar transparent whenever the hero section is visible in the
    // viewport. Use IntersectionObserver so this works whether the user
    // navigated via router or by scrolling — fixes case where transparency
    // only toggled after clicking the home logo.
    useEffect(() => {
        const hero = document.querySelector('.hero-section');
        if (!hero) {
            // no hero on the page -> keep navbar solid
            setScrolledPastHero(true);
            return;
        }

        // when hero is at least 40% visible, treat as "in hero"
        const observer = new IntersectionObserver(
            (entries) => {
                const e = entries[0];
                // if hero is intersecting by threshold, we are NOT scrolled past it
                setScrolledPastHero(!e.isIntersecting);
            },
            { threshold: 0.4 }
        );

        observer.observe(hero);

        // initial check
        const rect = hero.getBoundingClientRect();
        setScrolledPastHero(!(rect.top < window.innerHeight && rect.bottom > 0));

        return () => observer.disconnect();
    }, [location.pathname]);

    // Show transparent whenever the hero is visible (not scrolled past).
    // This avoids requiring the pathname to be exactly '/' so returning
    // to the top of the page (hero visible) makes the navbar transparent
    // even if the route didn't change.
    const showTransparent = !scrolledPastHero;

    const closeAll = () => {
        setMobileOpen(false);
        //setDesktopOpen(false);
    }

    const navigate = useNavigate();

    const handleGetInTouch = () => {
        navigate("/", { state: { scrollTo: "contact-us" } });
    }

    return(
        <nav className={`navbar ${showTransparent ? "navbar--transparent" : "navbar--solid"}`}>
            <div className="logo">
                <NavLink to="/">
                    {/* show home logo while on home hero, otherwise use footer logo */}
                    <img
                        src={isHomePage && !scrolledPastHero ? dasDesignLogoFive : footerLogo}
                        className="logo-image"
                        alt="Design Arch Studio"
                    />
                </NavLink>
            </div>
            <ul className="nav-links desktop">
                <li><NavLink to="/what-we-do">What We Do</NavLink></li>
                <li
                    className="services-dropdown"
                    onMouseEnter={() => setDesktopOpen(true)}
                    onMouseLeave={() => setDesktopOpen(false)}
                    >
                    <NavLink to="/our-services">Our Services</NavLink>

                    {desktopOpen && (
                        <ul className="services-dropdown-menu">
                        <li>
                            <NavLink to="/portfolio" state={{ portfolioCategory: "architecture" }}>
                            Architecture
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" state={{ portfolioCategory: "interiors" }}>
                            Interiors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" state={{ portfolioCategory: "planning" }}>
                            Construction Planning
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" state={{ portfolioCategory: "visualization" }}>
                            3D Visualization
                            </NavLink>
                        </li>
                        </ul>
                    )}
                </li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li>
                    <button className="get-in-touch-button" onClick={handleGetInTouch}>
                        Get In Touch 
                        <span className="get-in-touch-phoneicon">
                            <MdOutlinePermPhoneMsg />
                        </span>
                    </button>
                </li>
            </ul>

            <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
                <IoMenu className="io-menu"/>
            </div>
            {
                mobileOpen && (
                    <div className="mobile-menu">
                        <NavLink to="/what-we-do" onClick={closeAll}>What We Do</NavLink>
                        <NavLink to="/our-services" onClick={closeAll}>Our Services</NavLink>
                        <NavLink to="/gallery" onClick={closeAll}>Gallery</NavLink>
                        <NavLink to="/testimonials" onClick={closeAll}>Testimonials</NavLink>
                        <NavLink to="/faq" onClick={closeAll}>FAQ</NavLink>
                        <NavLink to="/" 
                            state={{ scrollTo: "contact-us" }} 
                            onClick={closeAll}>Contact Us</NavLink>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;