import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-brand">
          <h2>
            Design Arc <span>Studio</span>
          </h2>
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
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
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

