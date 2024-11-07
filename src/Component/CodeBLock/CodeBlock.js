import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import './CodeBlock.css'; // Import the CSS file

const CodeBlock = ({ codeString, language }) => {
  const [showPopup, setShowPopup] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000); // Hide the popup after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const codeLines = codeString.trim().split("\n"); // Split code into lines

  return (
    <div className="codeBlock">
      <button
        onClick={() => copyToClipboard(codeString)}
        className="copyButton"
      >
        <FontAwesomeIcon icon={faClipboard} size="lg" />
      </button>
      {showPopup && <div className="copyPopup">Copied!</div>}
      <div className="lineNumbers">
        {codeLines.map((_, index) => (
          <div key={index} className="lineNumber">
            {index + 1}
          </div>
        ))}
      </div>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        customStyle={{ margin: 0, padding: 0, backgroundColor: "transparent", lineHeight: "1.5em" }} // Override padding and background color
        className="syntaxHighlighter"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;