import React from "react";
import content from "../Util/homePageContent.json"; // Import the JSON file
import "./HomePage.css"; // Import the CSS file for styling
import "../assets/icons8-spring-boot-48.png";
import "../assets/icons8-java-384.png";


const HomePage = () => {
	return (
		<div className="homepage-main-content">
			<header className="homepage-header">
				<h1 className="main-title">{content.title}</h1>
				<h2 className="subtitle">{content.subtitle}</h2>
				<p className="intro">{content.intro}</p>
			</header>

			<section className="topics-section">  
  <h2 className="section-title">🖥️ Explore Our Topics</h2>  
  <div className="topics-grid">  
    {content.topics.map((topic, index) => (  
      <div className="topic-card" key={index}>  
        <div className="topic-image-wrapper">
                <img className="topic-image" src={require(`../${topic.image}`)} alt={topic.title} />
              </div>     
        <h3 className="topic-title">{topic.title}</h3>  
        <p className="topic-description"><strong>{topic.description}</strong></p>  
        <ul className="topic-points">  
          {topic.points.map((point, idx) => (  
            <li className="topic-point" key={idx}>  
              <strong>{point.split(':')[0]}:</strong> {point.split(':')[1]}  
            </li>  
          ))}  
        </ul>  
        <a className="topic-link" href={topic.linkUrl}>{topic.linkText}</a>  
      </div>  
    ))}  
  </div>  
</section>  

			<section className="community-section">
				<h2 className="section-title">{content.community.title}</h2>
				<p className="community-description">{content.community.description}</p>
				<h3 className="cta-title">{content.community.ctaTitle}</h3>
				<p className="cta-description">{content.community.ctaDescription}</p>
			</section>

			<section className="quick-links-section">
				<h2 className="section-title">{content.quickLinks.title}</h2>
				<ul className="quick-links">
					{content.quickLinks.links.map((link, index) => (
						<li className="quick-link" key={index}>
							<a href={link.url}>{link.text}</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default HomePage;
