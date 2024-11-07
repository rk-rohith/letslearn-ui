import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const OOP = ({ oops }) => {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
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
              style={{
                fontFamily: 'Roboto, sans-serif',
                lineHeight: 1.5,
                width: '100%' // Ensure the code block fills the container
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default OOP;