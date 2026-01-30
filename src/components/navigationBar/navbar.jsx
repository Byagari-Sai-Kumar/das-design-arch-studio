import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import './navbar.css'

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(false);

    const closeAll = () => {
        setMobileOpen(false);
        setDesktopOpen(false);
    }

    return(
        <nav className="navbar">
            <div className="logo">Das Design</div>
            <ul className="nav-links desktop">
                <li><NavLink to="/" onClick={closeAll}>Home</NavLink></li>
                <li><NavLink to="/what-we-do" onClick={closeAll}>What We Do</NavLink></li>
                <li><NavLink to="/our-services" onClick={closeAll}>Our Services</NavLink></li>
                <li className={`more ${desktopOpen ? "open" : ""}`}>
                    <span onClick={() => setDesktopOpen(!desktopOpen)}>
                        More
                        <span className="more-dropdown-arrow">
                            <IoMdArrowDropdown />
                        </span>
                    </span>
                    {desktopOpen &&
                        <ul className="dropdown">
                            <li><NavLink to="/how-we-work" onClick={closeAll}>How we work</NavLink></li>
                            <li><NavLink to="/gallery" onClick={closeAll}>Gallery</NavLink></li>
                            <li><NavLink to="/testimonials" onClick={closeAll}>Testimonials</NavLink></li>
                            <li><NavLink to="/faq" onClick={closeAll}>FAQ</NavLink></li>
                            <li><NavLink to="/contact-us" onClick={closeAll}>Contact Us</NavLink></li>
                        </ul>
                    }
                </li>
            </ul>

            <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
                <IoMenu />
            </div>
            {
                mobileOpen && (
                    <div className="mobile-menu">
                        <NavLink to="/" onClick={closeAll}>Home</NavLink>
                        <NavLink to="/what-we-do" onClick={closeAll}>What We Do</NavLink>
                        <NavLink to="/our-services" onClick={closeAll}>Our Services</NavLink>
                        <NavLink to="/how-we-work" onClick={closeAll}>How we work</NavLink>
                        <NavLink to="/gallery" onClick={closeAll}>Gallery</NavLink>
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