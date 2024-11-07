import React from 'react';
import Java_mocKData from '../../Util/Java_mockData.json';
import { CopyBlock, dracula } from 'react-code-blocks';
import './JavaContent.css';

const JavaContent = () => {
  const { introduction, basics, oops } = Java_mocKData;

  const copy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="java-content">
      {/* Introduction Section */}
      <section>
        <h1>{introduction.title}</h1>
        <p>{introduction.description}</p>
        <div className="code-container">
          <CopyBlock
            text={introduction.codeExample}
            language={"java"}
            showLineNumbers={true}
            wrapLines={true}
            theme={dracula}
            codeBlock
            onCopy={() => copy(introduction.codeExample)}
          />
        </div>
      </section>

      {/* Basics Section */}
      <section>
        <h2>{basics.title}</h2>
        <p>{basics.description}</p>
        {basics.topics.map((topic, index) => (
          <div key={index}>
            <h3>{topic.subTitle}</h3>
            <p>{topic.content}</p>
            <div className="code-container">
              <CopyBlock
                text={topic.codeExample}
                language={"java"}
                showLineNumbers={true}
                wrapLines={true}
                theme={dracula}
                codeBlock
                onCopy={() => copy(topic.codeExample)}
              />
            </div>
          </div>
        ))}
      </section>

      {/* OOP Section */}
      <section>
        <h2>{oops.title}</h2>
        <p>{oops.description}</p>
        {oops.topics.map((topic, index) => (
          <div key={index}>
            <h3>{topic.subTitle}</h3>
            <p>{topic.content}</p>
            <div className="code-container">
              <CopyBlock
                text={topic.codeExample}
                language={"java"}
                showLineNumbers={true}
                wrapLines={true}
                theme={dracula}
                codeBlock
                onCopy={() => copy(topic.codeExample)}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JavaContent;