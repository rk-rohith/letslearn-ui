import React from 'react';
import DSA_mockData from '../../Util/DSA_mockData.json';
import './DSAContent.css'; // Import the CSS file

const DSAContent = () => {
  const content = DSA_mockData;

  return (
    <div className="content">
      <h1 className="title-section">{content.title}</h1>

      <section className="introduction-section">
        <h2>{content.introduction.title}</h2>
        <p>{content.introduction.content}</p>
      </section>

      <section className="data-structure-section">
        <h3>{content.dataStructure.title}</h3>
        <p>{content.dataStructure.content}</p>
        <ul>
          {content.dataStructure.list.map((item, index) => (
            <li key={index}><strong>{item}</strong></li>
          ))}
        </ul>
      </section>

      <section className="algorithm-section">
        <h3>{content.algorithm.title}</h3>
        <p>{content.algorithm.content}</p>
        <ul>
          {content.algorithm.list.map((item, index) => (
            <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
          ))}
        </ul>
      </section>

      <section className="importance-section">
        <h2>{content.importance.title}</h2>
        <ul>
          {content.importance.list.map((item, index) => (
            <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
          ))}
        </ul>
      </section>

      <section className="types-section">
        <h2>{content.types.title}</h2>
        {content.types.structures.map((structure, index) => (
          <div key={index}>
            <h3>{index + 1}. {structure.name}</h3>
            <p><strong>Definition:</strong> {structure.definition}</p>
            {structure.types && <p><strong>Types:</strong> {structure.types}</p>}
            {structure.operations && <p><strong>Operations:</strong> {structure.operations}</p>}
            <p><strong>Use Cases:</strong> {structure.useCases}</p>
          </div>
        ))}
      </section>

      <section className="algorithms-section">
        <h2>{content.algorithms.title}</h2>

        <h3>1. Sorting Algorithms</h3>
        <ul>
          {content.algorithms.sorting.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>2. Searching Algorithms</h3>
        <ul>
          {content.algorithms.searching.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>3. Graph Algorithms</h3>
        <ul>
          {content.algorithms.graph.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>4. Dynamic Programming</h3>
        <p>{content.algorithms.dynamicProgramming}</p>
      </section>

      <section className="resources-section">
        <h2>{content.resources.title}</h2>

        <h3>Books</h3>
        <ul>
          {content.resources.books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>

        <h3>Online Courses</h3>
        <ul>
          {content.resources.onlineCourses.map((course, index) => (
            <li key={index}><a href={course.url} target="_blank" rel="noopener noreferrer">{course.name}</a></li>
          ))}
        </ul>

        <h3>Practice Platforms</h3>
        <ul>
          {content.resources.practicePlatforms.map((platform, index) => (
            <li key={index}><a href={platform.url} target="_blank" rel="noopener noreferrer">{platform.name}</a></li>
          ))}
        </ul>
      </section>

      <section className="tips-section">
        <h2>{content.tips.title}</h2>
        <ul>
          {content.tips.list.map((tip, index) => (
            <li key={index}><strong>{tip.split(':')[0]}:</strong> {tip.split(':')[1]}</li>
          ))}
        </ul>
      </section>

      <section className="conclusion-section">
        <h2>{content.conclusion.title}</h2>
        <p>{content.conclusion.content}</p>
      </section>

      <section className="get-started-section">
        <h2>{content.getStarted.title}</h2>
        <p>{content.getStarted.content}</p>
      </section>
    </div>
  );
};

export default DSAContent;