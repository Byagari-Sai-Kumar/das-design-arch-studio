import { NavLink } from "react-router-dom";
import { useState } from "react";
import dasDesignLogo from '../../assets/navbar/logo/dasDesignLogo.jpeg'
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import './navbar.css'

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    //const [desktopOpen, setDesktopOpen] = useState(false);

    const closeAll = () => {
        setMobileOpen(false);
        //setDesktopOpen(false);
    }

    return(
        <nav className="navbar">
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