import "./Event.css";
import React, { useEffect, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  { 
    id: 1,
    title: "Republic Day Celebration", 
    date: "26 January 2026", 
    time: "9:00 AM",
    venue: "Main Ground",
    description: "Join us for flag hoisting and cultural performances celebrating India's Republic Day.",
    image: "https://images.unsplash.com/photo-1545696563-af8f6ec2295a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cultural"
  },
  { 
    id: 2,
    title: "Tech Fest 2026", 
    date: "10 February 2026", 
    time: "10:00 AM - 6:00 PM",
    venue: "Seminar Hall & Labs",
    description: "Annual technology festival featuring workshops, hackathons, and guest lectures.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technical"
  },
  { 
    id: 3,
    title: "Annual Sports Day", 
    date: "15 February 2026", 
    time: "8:00 AM",
    venue: "Sports Complex",
    description: "Inter-college athletic competitions and sports events.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
];

const pastEvents = [
  { 
    id: 1,
    title: "Annual Function", 
    date: "10 December 2025",
    category: "Cultural",
    highlights: ["Dance Performances", "Award Ceremony", "Cultural Shows"]
  },
  { 
    id: 2,
    title: "Alumni Meet", 
    date: "22 December 2025",
    category: "Networking",
    highlights: ["Alumni Talks", "Networking Session", "Campus Tour"]
  },
  { 
    id: 3,
    title: "Career Guidance Seminar", 
    date: "15 November 2025",
    category: "Academic",
    highlights: ["Industry Experts", "Resume Building", "Interview Skills"]
  },
  { 
    id: 4,
    title: "Industrial Visit", 
    date: "05 November 2025",
    category: "Technical",
    highlights: ["Factory Tour", "Technical Sessions", "Industry Exposure"]
  },
  { 
    id: 5,
    title: "Cultural Fest", 
    date: "20 October 2025",
    category: "Cultural",
    highlights: ["Music Concerts", "Dance Competitions", "Art Exhibitions"]
  },
  { 
    id: 6,
    title: "Sports Meet", 
    date: "02 October 2025",
    category: "Sports",
    highlights: ["Track Events", "Team Sports", "Prize Distribution"]
  },
];

const Event = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState('all');

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredPastEvents = filter === 'all' 
    ? pastEvents 
    : pastEvents.filter(event => event.category.toLowerCase() === filter);

  return (
    <div className="event-page">
      {/* Header */}
      <div className="event-header">
        <div className="header-content">
          <h1 className="event-title">College Events</h1>
          <p className="event-subtitle">
            Where Learning Meets Experience
          </p>
          <div className="title-underline">
            <div className="underline-bar"></div>
            <div className="underline-dot"></div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Slider */}
      <section className="upcoming-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">🎯</span>
            Upcoming Events
          </h2>
          <p className="section-subtitle">Mark your calendar for these exciting events</p>
        </div>

        <div className="slider-container">
          <button className="slider-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="slider-wrapper">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {upcomingEvents.map((event, index) => (
                <div className="slider-slide" key={event.id}>
                  <div className="slide-image">
                    <img src={event.image} alt={event.title} />
                    <div className="image-overlay"></div>
                    <div className="event-badge">{event.category}</div>
                  </div>
                  <div className="slide-content">
                    <div className="event-date-time">
                      <div className="date-time-item">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="date-time-item">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <h3 className="event-slide-title">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    <div className="event-venue">
                      <MapPin size={16} />
                      <span>{event.venue}</span>
                    </div>
                    <button className="register-btn">Register Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slider-indicators">
          {upcomingEvents.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="past-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">📚</span>
            Past Events Gallery
          </h2>
          <p className="section-subtitle">Relive our memorable moments</p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {['all', 'cultural', 'technical', 'academic', 'sports', 'networking'].map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="past-events-grid">
          {filteredPastEvents.map((event) => (
            <div className="past-event-card" key={event.id}>
              <div className="past-event-header">
                <div className="past-event-category">{event.category}</div>
                <div className="past-event-date">{event.date}</div>
              </div>
              <h3 className="past-event-title">{event.title}</h3>
              <div className="past-event-highlights">
                {event.highlights.map((highlight, idx) => (
                  <span key={idx} className="highlight-tag">{highlight}</span>
                ))}
              </div>
              <div className="past-event-footer">
                <button className="view-gallery-btn">View Gallery</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h3>Want to Organize an Event?</h3>
          <p>Contact the event committee for approvals and support</p>
          <button className="cta-button">Contact Event Committee</button>
        </div>
      </section>
    </div>
  );
};

export default Event;