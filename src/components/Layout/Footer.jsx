import "./Footer.css";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/academics', label: 'Academics' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/placements', label: 'Placements' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* College Info */}
          <div className="footer-section">
            <h3>Government Polytechnic Sahjanwa </h3>
            <p className="footer-description">
              Committed to excellence in education, research, and innovation since 1990.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>123 College Street, City, State 123456</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>info@techuniversity.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="footer-section">
            <h4>Important Links</h4>
            <ul className="footer-links">
              <li><Link to="/student-corner">Student Corner</Link></li>
              <li><Link to="/campus-life">Campus Life</Link></li>
              <li><Link to="/academics/faculty">Faculty Directory</Link></li>
              <li><Link to="/academics/courses">Course Catalog</Link></li>
              <li><Link to="/placements">Placement Cell</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={`Visit our ${social.icon.type.name} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="newsletter">
              <p>Subscribe to our newsletter</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Government Polytechnic Sahjanwa Gorakhpur. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;