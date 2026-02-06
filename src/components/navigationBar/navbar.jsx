import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import dasDesignLogoTwo from '../../assets/navbar/logo/dasDesignLogoTwo.png'
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

    // On home page: transparent only while hero is in view (100vh), solid after hero is fully scrolled past
    useEffect(() => {
        if (!isHomePage) return;
        const heroHeight = () => window.innerHeight; // hero section is 100vh
        const checkScroll = () => setScrolledPastHero(window.scrollY >= heroHeight());
        checkScroll();
        window.addEventListener("scroll", checkScroll, { passive: true });
        window.addEventListener("resize", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [isHomePage]);

    const showTransparent = isHomePage && !scrolledPastHero;

    const closeAll = () => {
        setMobileOpen(false);
        //setDesktopOpen(false);
    }

    const navigate = useNavigate();

    const handleGetInTouch = (path) => {
        navigate("/", { state: { scrollTo: "contact-us" } });
    }

    return(
        <nav className={`navbar ${showTransparent ? "navbar--transparent" : "navbar--solid"}`}>
            <div className="logo">
                <NavLink to="/">
                    <img src={dasDesignLogoTwo} className="logo-image"/>
                </NavLink>
            </div>
            <ul className="nav-links desktop">
                <li><NavLink to="/what-we-do">What We Do</NavLink></li>
                <li><NavLink to="/our-services">Our Services</NavLink></li>
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