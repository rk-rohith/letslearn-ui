import React, { useEffect } from "react";
import "./Footer.css"; // Import CSS file for styling
import { useTheme } from "../../ThemeContext"; // Assuming you have a ThemeContext
import Footer_mockData from "../Util/Footer_mockData.json"; // Assuming you have a Footer_mockData file

const Footer = () => {
  const { isDarkTheme } = useTheme();

  return (
    <footer className={`footer ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="footer-content">
        {/* Left Side: Subscribe Section */}
        <div className="top-footer">
          <div className="subscribe-section">
            <h3>{Footer_mockData.subscribe.title}</h3>
            <input
              type="text"
              className="subscribe-input"
              placeholder={Footer_mockData.subscribe.placeholder}
            />
            <button className="subscribe-button">
              {Footer_mockData.subscribe.buttonText}
            </button>
          </div>

          {/* Middle: Contact Us Section */}
          <div className="contact-section">
            <h3>{Footer_mockData.contact.title}</h3>
            <p>
              <i className="fas fa-phone"></i> {Footer_mockData.contact.phone}
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              {Footer_mockData.contact.email}
            </p>
          </div>

          {/* Right Side: Follow Us Section */}
          <div className="social-section">
            <h3>{Footer_mockData.social.title}</h3>
            <div className="social-icons">
              {Footer_mockData.social.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.icon}></i> {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p>{Footer_mockData.copyright.text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
