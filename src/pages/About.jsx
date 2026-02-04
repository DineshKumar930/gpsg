import "./About.css";
import React from "react";
import { FaAward, FaBuilding, FaCheckCircle, FaUsers } from "react-icons/fa";

const About = () => {
  const accreditations = [
    { id: 1, name: 'NAAC A++', year: '2023' },
    { id: 2, name: 'UGC Approved', year: '1990' },
    { id: 3, name: 'ISO 9001:2015', year: '2020' },
    { id: 4, name: 'NBA Accredited', year: '2022' }
  ];

  const features = [
    {
      icon: <FaAward />,
      title: 'Academic Excellence',
      description: 'Consistently ranked among top engineering colleges'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teaching staff'
    },
    {
      icon: <FaBuilding />,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art labs and facilities'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Placement Record',
      description: '90%+ placement rate with top companies'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Government Polytechnic Sahjanwa Gorakhpur</h1>
          <p className="subtitle">Pioneering Education Since 2018</p>
        </div>
      </section>

      {/* College Overview */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Our Legacy</h2>
              <p>
                Established in 2018, Government Polytechnic Sahjanwa Gorakhpur has been at the forefront of technical education,
                fostering innovation, research, and holistic development. We are committed to providing
                world-class education that empowers students to become leaders in their fields.
              </p>
              <p>
                With a sprawling 4-acre campus, state-of-the-art infrastructure, and a vibrant community
                of over 122 students, we continue to set benchmarks in engineering and management education.
              </p>
            </div>
            <div className="overview-image">
              <img src="/images/main gate.png" alt="Campus View" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <h3>Our Vision</h3>
              <p>
                To be a globally recognized center of excellence in technical education and research,
                nurturing innovative minds and socially responsible leaders who drive sustainable development.
              </p>
            </div>
            <div className="vm-card">
              <h3>Our Mission</h3>
              <ul>
                <li>Provide quality education through innovative teaching methodologies</li>
                <li>Foster research and development in emerging technologies</li>
                <li>Develop industry-ready professionals with strong ethical values</li>
                <li>Promote entrepreneurship and innovation culture</li>
                <li>Contribute to societal development through outreach programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="principals-message">
        <div className="container">
          <div className="message-content">
            <div className="principal-image">
              <img src="https://picsum.photos/300/400?random=5" alt="Principal" />
            </div>
            <div className="message-text">
              <h2>Message from the Principal</h2>
              <blockquote>
                "At Government Polytechnic Sahjanwa Gorakhpur, we believe in empowering students with knowledge, skills, and values
                that prepare them for the challenges of the 21st century. Our focus is on holistic development,
                blending academic excellence with extracurricular activities to shape well-rounded individuals."
              </blockquote>
              <div className="principal-info">
                <h4>Dr. Ravi Kant Ranjan</h4>
                <p>Principal, Govt. Polytechnic Sahjanwa Gorakhpur</p>
                <p>Ph.D (NIT Patana), 7+ years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Government Polytechnic Sahjanwa Gorakhpur?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Affiliations */}
      <section className="accreditation-section">
        <div className="container">
          <h2 className="section-title">Accreditation & Affiliations</h2>
          <div className="accreditation-grid">
            {accreditations.map((acc) => (
              <div key={acc.id} className="accreditation-card">
                <h3>{acc.name}</h3>
                <p>Accredited since {acc.year}</p>
              </div>
            ))}
          </div>
          <div className="affiliations">
            <h3>Affiliated with:</h3>
            <div className="affiliation-logos">
              <div className="affiliation-logo">AICTE</div>
              <div className="affiliation-logo">UGC</div>
              <div className="affiliation-logo">AIU</div>
              <div className="affiliation-logo">COA</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;