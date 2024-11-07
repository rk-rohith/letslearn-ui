import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import Header_mockData from '../Util/Header_mockData';

const Header = () => {
  const [selectedText, setSelectedText] = useState(null);
  const navigate = useNavigate();
  const { isDarkTheme, toggleTheme } = useTheme();

  const handleTextClick = (text, baseUrl) => {
    setSelectedText(text);
    navigate(baseUrl);
  };

  const handleLogoClick = () => {
    navigate('/letslearn');
  };

  return (
    <header className={`header ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>

      <div className="header-left">
        <div className="logo-container" onClick={handleLogoClick}>
  <svg
    className="logo looka-1j8o68f"
    viewBox="0 0 100 100"
    onClick={() => (window.location.href = "/letslearn")}
  >
    <defs></defs>
    <g fill="#ffffff">
      <rect
        width="100"
        height="100"
        rx="10"
        ry="10"
      ></rect>
    </g>
    <g fill="#000000" transform="scale(1.26) translate(-15.27 -21.61)">
      <path d="M27.993,35.58l7.305,7.303l-7.305,7.306l2.557,2.557l9.863-9.862l-9.863-9.861L27.993,35.58z M42.148,47.975v3.617h28.58v-3.617H42.148z M42.148,59.55h28.58v-3.617h-28.58V59.55z M42.148,67.508h14.29v-3.617h-14.29V67.508z"/>
    </g>
  </svg>
</div>
        <div className="header-title" onClick={handleLogoClick}>
          Let's Learn
        </div>
      </div>
        <div className="header-right">
          <div className="header-text">
            {Header_mockData.mainHeaders.map((mainHeader, mainIndex) => (
              <div key={mainIndex} className="main-header-item">
                <span
                  className={selectedText === mainHeader.title ? 'highlight' : ''}
                  onClick={() => handleTextClick(mainHeader.title, `/letslearn/${mainHeader.title.toLowerCase()}`)}
                >
                  {mainHeader.title}
                </span>
                <div className="header-list">
                  {mainHeader.subHeaders.map((subHeader, subIndex) => (
                    <div key={subIndex} className="header-item">
                      <span
                        className={`sub-header ${selectedText === subHeader.title ? 'highlight' : ''}`}
                        onClick={() => handleTextClick(subHeader.title, `/letslearn/${mainHeader.title.toLowerCase()}/${subHeader.title.toLowerCase()}`)}
                      >
                        {subHeader.title}
                      </span>
                      <div className="sub-header-list">
                        {subHeader.details.map((detail, detailIndex) => (
                          <span key={detailIndex} className="detail">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
      
      <div className="theme-toggle-container">
        <i className="fas fa-sun theme-icon"></i>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={isDarkTheme} />
          <span className="slider round"></span>
        </label>
        <i className="fas fa-moon theme-icon"></i>
      </div>
      </div>
    </header>
  );
};

export default Header;