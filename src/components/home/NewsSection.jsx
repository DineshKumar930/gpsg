import "./NewsSection.css";
import React, { useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaNewspaper } from "react-icons/fa";

const NewsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'Annual Tech Fest 2024',
      date: '2024-03-15',
      description: 'Join us for the biggest technical festival of the year with workshops, competitions, and guest lectures.',
      category: 'event',
      image: 'https://picsum.photos/400/250?random=9'
    },
    {
      id: 2,
      title: 'Admissions Open for 2024 Batch',
      date: '2024-03-10',
      description: 'Apply now for various undergraduate and postgraduate programs. Early bird discounts available.',
      category: 'admission',
      image: 'https://picsum.photos/400/250?random=10'
    },
    {
      id: 3,
      title: 'Research Paper Publication',
      date: '2024-03-05',
      description: 'Faculty members publish groundbreaking research in AI and Machine Learning in international journals.',
      category: 'achievement',
      image: 'https://picsum.photos/400/250?random=11'
    },
    {
      id: 4,
      title: 'Campus Placement Drive',
      date: '2024-02-28',
      description: 'Top companies visiting campus for placement drives. Prepare your resume and get ready.',
      category: 'placement',
      image: 'https://picsum.photos/400/250?random=12'
    },
    {
      id: 5,
      title: 'Sports Tournament Winners',
      date: '2024-02-20',
      description: 'Our basketball team wins inter-college tournament. Celebration ceremony scheduled.',
      category: 'sports',
      image: 'https://picsum.photos/400/250?random=13'
    },
    {
      id: 6,
      title: 'New Laboratory Inauguration',
      date: '2024-02-15',
      description: 'State-of-the-art robotics lab inaugurated with latest equipment and technology.',
      category: 'facilities',
      image: 'https://picsum.photos/400/250?random=14'
    }
  ];

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'event', label: 'Events' },
    { id: 'admission', label: 'Admissions' },
    { id: 'achievement', label: 'Achievements' },
    { id: 'placement', label: 'Placements' },
    { id: 'sports', label: 'Sports' },
    { id: 'facilities', label: 'Facilities' }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <FaNewspaper className="section-icon" />
            <h2 className="section-title">Latest News & Notices</h2>
          </div>
          <a href="/news" className="view-all-btn">
            View All <FaArrowRight />
          </a>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredNews.map(news => (
            <div key={news.id} className="news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
                <div className="news-category">{news.category.toUpperCase()}</div>
              </div>
              <div className="news-content">
                <div className="news-date">
                  <FaCalendarAlt /> {formatDate(news.date)}
                </div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-description">{news.description}</p>
                <a href={`/news/${news.id}`} className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="no-news">
            <p>No news available for this category.</p>
          </div>
        )}

        <div className="newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get latest updates about admissions, events, and campus news.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;