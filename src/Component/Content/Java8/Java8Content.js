import React from 'react';
import content from '../../Util/Java8Content.json'; // Import the JSON file
import './Java8Content.css'; // Import the CSS file for styling

const Java8Content = () => (
  <div className="main-content">
    <h1>{content.title}</h1>
    {content.sections.map((section, index) => (
      <div key={index}>
        <h2>{section.heading}</h2>
        <p>{section.content}</p>
      </div>
    ))}
    <h2>Key Features of Java 8</h2>
    {content.features.map((feature, index) => (
      <div key={index} className="feature">
        <h3>{feature.title}</h3>
        <p><strong>Definition:</strong> {feature.definition}</p>
        {feature.syntax && (
          <>
            <p><strong>Syntax:</strong></p>
            <pre>{feature.syntax}</pre>
          </>
        )}
        {feature.example && (
          <>
            <p><strong>Example:</strong></p>
            <pre>{feature.example}</pre>
          </>
        )}
        {feature.examples && (
          <p><strong>Common Examples:</strong> {feature.examples}</p>
        )}
        {feature.newFunctionalInterfaces && (
          <p><strong>New Functional Interfaces:</strong> {feature.newFunctionalInterfaces}</p>
        )}
        {feature.why && (
          <p><strong>Why?</strong> {feature.why}</p>
        )}
        {feature.types && (
          <p><strong>Types:</strong> {feature.types}</p>
        )}
      </div>
    ))}
    <h2>Key Enhancements in Java 8</h2>
    <ul>
      {content.enhancements.map((enhancement, index) => (
        <li key={index}>{enhancement}</li>
      ))}
    </ul>
    <h2>Benefits of Using Java 8</h2>
    <ul>
      {content.benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
    <h2>Conclusion</h2>
    <p>{content.conclusion}</p>
    <h2>Additional Resources</h2>
    <ul>
      {content.resources.map((resource, index) => (
        <li key={index}>
          {resource.type === 'Link' ? (
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.text}</a>
          ) : (
            <span>{resource.text} by {resource.author}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Java8Content;