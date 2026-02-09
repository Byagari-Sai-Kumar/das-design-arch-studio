import "./footer.css";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/navbar/logo/dasDesignLogoTwo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-brand">
          <img src={logo} alt="Design Arch Studio" />
          <p>
            Transforming spaces into elegant experiences. <br />
            Your trusted partner in creating beautiful, functional interiors.
          </p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.threads.net/@designarchstudio" target="_blank" rel="noreferrer" className="threads-link" aria-label="Threads">Threads</a>
            <a href="https://wa.me/918019898569" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Design Arch Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

