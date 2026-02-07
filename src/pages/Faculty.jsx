import "./Faculty.css";
import React, { useEffect, useState } from "react";

// Sample dynamic faculty data
const facultyData = [
  {
    id: 1,
    name: "Dr. Ruman Alam",
    designation: "Dean Academics & HOD",
    department: "Applied Science",
    image: "./images/Ruman.jpg",
    bio: "Ph.D. in Machine Learning from Stanford University. Specializes in AI and Data Science with 15+ years of teaching experience.",
    email: "ruman.alam@university.edu",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Mr. Abhimanyu Yadav",
    designation: "HOD",
    department: "Mechanical Engineering",
    image: "./images/Abhi sir.png",
    bio: "B.Tech in Mechanical Engineering with 8+ years of experience.",
    email: "abhimanyume.tech@gmail.com",
    phone: "+91 ********",
  },
  {
    id: 3,
    name: "Mr. Virendra Singh",
    designation: "HOD",
    department: "Electrical Engineering",
    image: "./images/virendra.jpeg",
    bio: "B.Tech in Electrical Engineering with 6+ years of experience. Specializes in Power Systems and Renewable Energy.",
    email: "virendrapratap075@gmail.com",
    phone: "+91 9935715483",
  },
  {
    id: 4,
    name: "Mr. Prince Kumar",
    designation: "HOD",
    department: "Computer Science & Engineering",
    image: "./images/pk.jpg",
    bio: "Ph.D. in Structural Engineering with 12+ years experience. Awarded Best Faculty 2023.",
    email: "prince.kumar@university.edu",
    phone: "+91 9876543213",
  },
  {
    id: 5,
    name: "Ms. Ankita Yadav",
    designation: "Lecturer",
    department: "Computer Science & Engineering",
    image: "./images/Ankita Yadav.jpg",
    bio: "Expert in Cybersecurity and Network Systems. Certified Ethical Hacker with industry experience.",
    email: "ankita.yadav@university.edu",
    phone: "+91 ********",
  },
  {
    id: 6,
    name: "Ms. Shashiprabha Ramji Sharma",
    designation: "Lecturer",
    department: "Communication Skills",
    image: "./images/shashi.jpg",
    bio: "MBA in HR & Finance.",
    email: "shashiprabha284@gmail.com",
    phone: "+91 ********",
  },
  {
    id: 7,
    name: "Mr. Narendra Singh",
    designation: "Lecturer",
    department: "Mechanical Engineering",
    image: "./images/narendra.jpeg",
    bio: "Specializes in Power Systems and Renewable Energy. Industry consultant for renewable energy projects.",
    email: "narendra.singh@university.edu",
    phone: "+91 ********",
  },
  {
    id: 8,
    name: "Mr. Ankit Kumar Gupta",
    designation: "Lecturer",
    department: "Applied Physics",
    image: "./images/Ankit sir.jpg",
    bio: "M.Sc. in Physics with 1.5+ years of teaching experience.",
    email: "ankit.gupta@cscacademy.org",
    phone: "+91 *********",
  },
  {
    id: 9,
    name: "Mr. Abhishek Singh",
    designation: "Lecturer",
    department: "Electrical Engineering",
    image: "./images/abhishek.jpg",
    bio: "Specializes in Power Systems and Renewable Energy. Expert in smart grid technologies.",
    email: "abhishek.singh@university.edu",
    phone: "+91 **********",
  },
  {
    id: 10,
    name: "Mr. Pradumn Kumar Pandey",
    designation: "Librarian",
    department: "Library",
    image: "./images/pradumn.jpg",
    bio: "MLIS certified librarian with 3+ years of experience. Digital library management expert.",
    email: "pradumnpandey20@gmail.com",
    phone: "+91 8381979937",
  },
  {
    id: 11,
    name: "Mr. Shubham Sharma",
    designation: "Lab Assistant",
    department: "Mechanical Engineering",
    image: "./images/shubham.jpg",
    bio: "Specializes in CAD/CAM and manufacturing processes. 4+ years of lab management experience.",
    email: "shubham.sharma@university.edu",
    phone: "+91 9876543219",
  },
  {
    id: 12,
    name: "Mr. Aditya Nath Sharma",
    designation: "Accountant",
    department: "Admin Office",
    image: "./images/Aditya.jpg",
    bio: "CA certified with 8+ years experience in educational institution finance management.",
    email: "aditya.sharma@university.edu",
    phone: "+91 9876543220",
  },
];

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate faculty highlights with improved animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facultyData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (faculty) => {
    setSelectedFaculty(faculty);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFaculty(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="faculty-page">
      {/* Header with animated text */}
      <div className="faculty-header">
        <h1 className="faculty-title">
          <span className="title-text">Meet Our</span>
          <span className="title-highlight">Distinguished Faculty</span>
        </h1>
        <p className="faculty-subtitle">
          Dedicated educators shaping the future of technology and innovation
        </p>
        
        <div className="rotating-highlight">
          <div className="rotating-text">
            {facultyData.map((faculty, index) => (
              <div 
                key={faculty.id} 
                className={`rotating-item ${index === currentIndex ? 'active' : ''}`}
              >
                <span className="rotating-designation">{faculty.designation}</span>
                <span className="rotating-separator"> • </span>
                <span className="rotating-department">{faculty.department}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Grid - 2 cards per row on mobile */}
      <div className="faculty-grid">
        {facultyData.map((faculty) => (
          <div 
            className="faculty-card" 
            key={faculty.id}
            onClick={() => openModal(faculty)}
            onKeyDown={(e) => e.key === 'Enter' && openModal(faculty)}
            tabIndex={0}
            role="button"
            aria-label={`View details of ${faculty.name}`}
          >
            <div className="card-image">
              <img 
                src={faculty.image} 
                alt={faculty.name}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik01MCA3NUwxMDAgMTI1TDE1MCA3NSIgc3Ryb2tlPSIjNjQ3NDhCIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iNjAiIHI9IjIwIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo=';
                }}
              />
              <div className="dept-badge">{faculty.department}</div>
              <div className="image-overlay"></div>
            </div>
            <div className="card-content">
              <h3 className="faculty-name">{faculty.name}</h3>
              <p className="faculty-designation">{faculty.designation}</p>
              
            </div>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">{facultyData.length}+</span>
          <span className="stat-label">Faculty Members</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">6+</span>
          <span className="stat-label">Departments</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Qualified</span>
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedFaculty && (
        <div className="faculty-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-card">
            <button 
              className="modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className="modal-header">
              <div className="modal-image">
                <img 
                  src={selectedFaculty.image} 
                  alt={selectedFaculty.name}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik01MCA3NUwxMDAgMTI1TDE1MCA3NSIgc3Ryb2tlPSIjNjQ3NDhCIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iNjAiIHI9IjIwIiBmaWxsPSIjNjQ3NDhCIi8+Cjwvc3ZnPgo=';
                  }}
                />
              </div>
              <div className="modal-info">
                <h3>{selectedFaculty.name}</h3>
                <p className="modal-designation">{selectedFaculty.designation}</p>
                <p className="modal-department">
                  <span className="dept-icon">🏛️</span>
                  {selectedFaculty.department}
                </p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>
                  <span className="section-icon">📖</span>
                  About
                </h4>
                <p>{selectedFaculty.bio}</p>
              </div>
              
              <div className="modal-section contact-section">
                <h4>
                  <span className="section-icon">📞</span>
                  Contact Information
                </h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon-container">
                      <span className="contact-icon">📧</span>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <a 
                        href={`mailto:${selectedFaculty.email}`}
                        className="contact-value email-link"
                      >
                        {selectedFaculty.email}
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon-container">
                      <span className="contact-icon">📱</span>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <a 
                        href={`tel:${selectedFaculty.phone.replace(/\s/g, '')}`}
                        className="contact-value phone-link"
                      >
                        {selectedFaculty.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;