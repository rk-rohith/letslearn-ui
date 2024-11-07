import React from 'react';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import content from '../../../Util/LeetCodeContent.json'; // Import the JSON file
import './LeetCodeContent.css'; // Import the CSS file for styling

const LeetCodeContent = () => {
  return (
    <div className="leetcode-content">
      <h1>{content.title}</h1>
      <ReactMarkdown>{content.description}</ReactMarkdown>
      <h2>Key Features:</h2>
      <ul>
        {content.keyFeatures.map((feature, index) => (
          <li key={index}>
            <ReactMarkdown>{feature}</ReactMarkdown>
          </li>
        ))}
      </ul>
      <div className="cards-container">
        {content.sections.map((section, index) => (
          <div key={index} className="card">
            <h2>{section.heading}</h2>
            {section.content.map((paragraph, idx) => (
              <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
            ))}
          </div>
        ))}
      </div>
      <div className="conclusion">
        <h2>{content.conclusion.heading}</h2>
        {content.conclusion.content.map((paragraph, idx) => (
          <ReactMarkdown key={idx}>{paragraph}</ReactMarkdown>
        ))}
      </div>
    </div>
  );
};

export default LeetCodeContent;