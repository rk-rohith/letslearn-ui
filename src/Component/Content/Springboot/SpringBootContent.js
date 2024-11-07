import React from 'react';
import content from '../../Util/springBootContent.json'; // Import the JSON file
import './SpringBootContent.css'; // Import the CSS file for styling
import CodeBlock from '../../CodeBLock/CodeBlock'; // Import the CodeBlock component

const SpringBootContent = () => (
  <div className="springboot-main-content">
    <h1 className="springboot-title">{content.title}</h1>
    {content.sections.map((section, index) => (
      <div key={index} className="springboot-section">
        <h2 className="springboot-section-heading">{section.heading}</h2>
        {Array.isArray(section.content) ? (
          <ul className="springboot-section-list">
            {section.content.map((item, idx) => (
              <li key={idx} className="springboot-section-list-item">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="springboot-section-content">{section.content}</p>
        )}
      </div>
    ))}
    <h2 className="springboot-features-heading">Key Features of Spring Boot</h2>
    {content.features.map((feature, index) => (
      <div key={index} className="springboot-feature">
        <h3 className="springboot-feature-title">{index + 1}. {feature.title}</h3>
        <p className="springboot-feature-definition"><strong>Definition:</strong> {feature.definition}</p>
        {feature.example && (
          <>
            <p className="springboot-feature-example-heading"><strong>Example:</strong></p>
            <CodeBlock codeString={feature.example} language="java" />
          </>
        )}
        {feature.howToUse && (
          <p className="springboot-feature-how-to-use"><strong>Usage:</strong> {feature.howToUse}</p>
        )}
        {feature.examples && (
          <ul className="springboot-feature-examples">
            {feature.examples.map((example, idx) => (
              <li key={idx} className="springboot-feature-example-item">{example}</li>
            ))}
          </ul>
        )}
        {feature.mavenDependencyExample && (
          <>
            <p className="springboot-feature-maven-heading"><strong>Maven Dependency Example:</strong></p>
            <CodeBlock codeString={feature.mavenDependencyExample} language="xml" />
          </>
        )}
        {feature.commonEndpoints && (
          <ul className="springboot-feature-endpoints">
            {feature.commonEndpoints.map((endpoint, idx) => (
              <li key={idx} className="springboot-feature-endpoint">{endpoint}</li>
            ))}
          </ul>
        )}
        {feature.description && (
          <p className="springboot-feature-description"><strong>Description:</strong> {feature.description}</p>
        )}
        {feature.link && (
          <p className="springboot-feature-link">
            <a href={feature.link} target="_blank" rel="noopener noreferrer">{feature.moreInfo}</a>
          </p>
        )}
        <hr className="springboot-feature-divider" />
      </div>
    ))}
  </div>
);

export default SpringBootContent;