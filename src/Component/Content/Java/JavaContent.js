import React from 'react';
import { useTheme } from '../../../ThemeContext';
import Java_mocKData from '../../Util/Java_mockData.json';
import './JavaContent.css';

const JavaContent = () => {
  const { isDarkTheme } = useTheme();
  const { introduction, installation, basics, oops, advanced } = Java_mocKData;

  const handleTitleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className={`content ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Introduction Section */}
      <section>
        <h1 onClick={() => handleTitleClick(introduction.link)}>{introduction.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: introduction.description }}></p>
      </section>

      {/* Installation Section */}
      <section>
        <h2 onClick={() => handleTitleClick(installation.link)}>{installation.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: installation.description }}></p>
      </section>

      {/* Basics Section */}
      <section>
        <h2 onClick={() => handleTitleClick(basics.link)}>{basics.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: basics.description }}></p>
      </section>

      {/* OOP Section */}
      <section>
        <h2 onClick={() => handleTitleClick(oops.link)}>{oops.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: oops.description }}></p>
      </section>

      {/* Advanced Section */}
      <section>
        <h2 onClick={() => handleTitleClick(advanced.link)}>{advanced.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: advanced.description }}></p>
      </section>
    </div>
  );
};

export default JavaContent;