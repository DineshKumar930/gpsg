import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaBriefcase, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { news, placements } from "../data/dummyData";

const Home = () => {
  const [stats, setStats] = useState({
    students: 0,
    faculty: 0,
    placements: 0,
    courses: 0
  });

  useEffect(() => {
    // Animated counter effect
    const interval = setInterval(() => {
      setStats(prev => ({
        students: prev.students < 122 ? prev.students + 100 : 122,
        faculty: prev.faculty < 16 ? prev.faculty + 10 : 16,
        placements: prev.placements < 0 ? prev.placements + 40 : 0,
        courses: prev.courses < 3 ? prev.courses + 2 : 3
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  const banners = [
    { id: 1, title: 'Admissions Open 2026', subtitle: 'Apply Now for Various Programs', image: 'images/admission.png' },
    { id: 2, title: 'Campus Placement Drive', subtitle: 'Top Companies Visiting Campus', image: 'https://picsum.photos/1200/400?random=2' },
    { id: 3, title: 'Research Conference', subtitle: 'International Conference on AI', image: 'https://picsum.photos/1200/400?random=3' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Image Slider */}
      <section className="slider-section">
        <div className="container">
          <Slider {...sliderSettings} className="banner-slider">
            {banners.map(banner => (
              <div key={banner.id} className="banner-slide">
                <img src={banner.image} alt={banner.title} className="banner-image" />
                <div className="banner-content">
                  <h2>{banner.title}</h2>
                  <p>{banner.subtitle}</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">College at a Glance</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <h3>{stats.students.toLocaleString()}+</h3>
              <p>Students Enrolled</p>
            </div>
            <div className="stat-card">
              <FaChalkboardTeacher className="stat-icon" />
              <h3>{stats.faculty}+</h3>
              <p>Faculty Members & Supporting Staff</p>
            </div>
            <div className="stat-card">
              <FaBriefcase className="stat-icon" />
              <h3>{stats.placements.toLocaleString()}+</h3>
              <p>Placements</p>
            </div>
            <div className="stat-card">
              <FaChalkboardTeacher className="stat-icon" />
              <h3>{stats.courses}+</h3>
              <p>Courses Offered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest News & Notices</h2>
            <a href="/news" className="view-all">
              View All <FaArrowRight />
            </a>
          </div>
          <div className="news-grid">
            {news.map(item => (
              <div key={item.id} className="news-card">
                <div className="news-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p className="news-date">{new Date(item.date).toLocaleDateString()}</p>
                <p>{item.description}</p>
                <button className="btn btn-secondary">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      {/* Career Vision Section */}
<section className="career-vision">
  <div className="container">

    <h2 className="section-title">
      Building Careers • Shaping Futures
    </h2>

    <p className="vision-subtitle">
      Established in 2025, our institute is focused on creating strong academic
      foundations, industry-ready skills, and future placement opportunities.
    </p>

    <div className="vision-cards">
      <div className="vision-card">
        <span className="badge">2025</span>
        <h3>New-Age Institute</h3>
        <p>
          A modern government polytechnic built with future-focused education,
          smart classrooms, and advanced labs.
        </p>
      </div>

      <div className="vision-card highlight">
        <span className="badge">Skill First</span>
        <h3>Industry-Oriented Learning</h3>
        <p>
          Emphasis on practical knowledge, hands-on training, projects, and
          real-world problem solving.
        </p>
      </div>

      <div className="vision-card">
        <span className="badge">In Progress</span>
        <h3>Training & Placement Cell</h3>
        <p>
          Dedicated cell for internships, industrial training, soft skills,
          and upcoming placement collaborations.
        </p>
      </div>
    </div>

    {/* Roadmap */}
    <div className="career-roadmap">
      <h3>Our Career Roadmap</h3>

      <div className="roadmap-steps">
        <div className="step active">Foundation</div>
        <div className="step active">Skill Development</div>
        <div className="step">Industry Exposure</div>
        <div className="step">Placements</div>
      </div>

      <p className="roadmap-note">
        Placement activities will commence once the first batch becomes eligible.
      </p>
    </div>

  </div>
</section>

    </div>
  );
};

export default Home;