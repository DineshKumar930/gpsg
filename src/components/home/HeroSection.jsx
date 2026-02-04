import "./HeroSection.css";
import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
         <div className="hero-text">
  <h1 className="hero-title animate-line delay-1">
    Government Polytechnic Sahjanwa
  </h1>

  <p className="hero-tagline typing">
  Excellence in Education, Innovation & Research
</p>


  <p className="hero-description animate-line delay-3">
    A premier institution dedicated to academic excellence, innovation,
    and holistic development. Join our vibrant community of learners,
    thinkers, and leaders shaping the future.
  </p>

  <div className="hero-buttons animate-line delay-4">
    <a href="/admissions" className="btn btn-primary">Apply Now</a>
    <a href="/about" className="btn btn-secondary">Learn More</a>
  </div>
</div>

          <div className="hero-image">
            <img 
              src="images/main gate.png" 
              alt="College Campus" 
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;