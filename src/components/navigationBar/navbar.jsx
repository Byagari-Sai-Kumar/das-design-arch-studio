import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import dasDesignLogo from '../../assets/navbar/logo/dasDesignLogo.jpeg'
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

    return(
        <nav className={`navbar ${showTransparent ? "navbar--transparent" : "navbar--solid"}`}>
            <div className="logo">
                <NavLink to="/" onClick={closeAll}>
                    <img src={dasDesignLogo} className="logo-image"/>
                </NavLink>
            </div>
            <ul className="nav-links desktop">
                <li><NavLink to="/what-we-do" onClick={closeAll}>What We Do</NavLink></li>
                <li><NavLink to="/our-services" onClick={closeAll}>Our Services</NavLink></li>
                <li><NavLink to="/gallery" onClick={closeAll}>Projects</NavLink></li>
                <li><NavLink to="/testimonials" onClick={closeAll}>Testimonials</NavLink></li>
                <li><NavLink to="/faq" onClick={closeAll}>FAQ</NavLink></li>
                <li>
                    <NavLink to="/contact-us" onClick={closeAll}>
                        <button className="get-in-touch-button">
                            Get In Touch 
                            <span className="get-in-touch-phoneicon">
                                <MdOutlinePermPhoneMsg />
                            </span>
                        </button>
                    </NavLink>
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
                        <NavLink to="/gallery" onClick={closeAll}>Projects</NavLink>
                        <NavLink to="/testimonials" onClick={closeAll}>Testimonials</NavLink>
                        <NavLink to="/faq" onClick={closeAll}>FAQ</NavLink>
                        <NavLink to="/contact-us" onClick={closeAll}>Contact Us</NavLink>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;