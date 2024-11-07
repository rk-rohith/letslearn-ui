import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Import remark-gfm
import content from "../../Util/MicroservicesContent.json"; // Ensure this path is correct
import "./MicroservicesContent.css"; // Ensure this path is correct

const MicroservicesContent = () => {
	return (
		<div className="microservices-content">
			<h1>{content.title}</h1>
			<p>{content.intro}</p>
			<hr />
			<h2>Table of Contents</h2>
			<ul className="table-of-contents">
				{content.tableOfContents.map((item, index) => (
					<li key={index}>
						<a href={`#${item.toLowerCase().replace(/ /g, "-")}`}>{item}</a>
					</li>
				))}
			</ul>
			<hr />
			{content.sections.map((section, index) => (
				<div key={index} className="section">
					<h2 id={section.heading.toLowerCase().replace(/ /g, "-")}>
						{section.heading}
					</h2>
					{section.content ? (
						<ReactMarkdown
							remarkPlugins={[remarkGfm]} // Use the remark-plugin here
						>
							{section.content}
						</ReactMarkdown>
					) : (
						<ul>
							{Array.isArray(section.points) &&
								section.points.map((point, pointIdx) => (
									<li key={pointIdx}>{point}</li>
								))}
						</ul>
					)}
					<hr />
				</div>
			))}
		</div>
	);
};

export default MicroservicesContent;
