import "./Contact.css";
import React, { useState } from "react";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: '123 College Street, Tech City, State 123456',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+1 (234) 567-8900\n+1 (234) 567-8901',
      link: 'tel:+12345678900'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'info@techuniversity.edu\nadmissions@techuniversity.edu',
      link: 'mailto:info@techuniversity.edu'
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: 'Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM',
      link: null
    }
  ];

  const departments = [
    { name: 'Admission Office', phone: '+1 (234) 567-8910', email: 'admissions@college.edu' },
    { name: 'Placement Cell', phone: '+1 (234) 567-8911', email: 'placement@college.edu' },
    { name: 'Examination Cell', phone: '+1 (234) 567-8912', email: 'exams@college.edu' },
    { name: 'Accounts Office', phone: '+1 (234) 567-8913', email: 'accounts@college.edu' },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="subtitle">We're Here to Help You</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p className="info-details">{info.details}</p>
                {info.link && (
                  <a href={info.link} className="info-link">
                    Get Directions
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-submit">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="map-wrapper">
              <h2 className="section-title">Find Us</h2>
              <div className="map-container">
                {/* Google Maps Embed */}
                <iframe
                  title="College Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.9951561514513!2d83.14800507430148!3d26.744530667300054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39913bc0377e6d4d%3A0x716e8a01cbcc7b9f!2sRajkiya%20Polytechnic%20Hardi%20bhiti%20Rawat%20sahjanwa%20gorakhpur%20273209!5e0!3m2!1sen!2sin!4v1770169719695!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="departments-section">
        <div className="container">
          <h2 className="section-title">Department Contacts</h2>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="dept-card">
                <h3>{dept.name}</h3>
                <div className="dept-contact">
                  <div className="contact-item">
                    <FaPhone />
                    <a href={`tel:${dept.phone}`}>{dept.phone}</a>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope />
                    <a href={`mailto:${dept.email}`}>{dept.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="social-section">
        <div className="container">
          <h2 className="section-title">Connect With Us</h2>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are the admission requirements?</h3>
              <p>Admission requirements vary by program. Please visit our Admissions page or contact the admission office for detailed information.</p>
            </div>
            <div className="faq-item">
              <h3>How can I visit the campus?</h3>
              <p>Campus tours are available Monday through Friday. Please schedule your visit through our website or contact the admission office.</p>
            </div>
            <div className="faq-item">
              <h3>What are the office hours?</h3>
              <p>Our offices are open Monday to Friday from 9:00 AM to 5:00 PM and Saturday from 9:00 AM to 1:00 PM.</p>
            </div>
            <div className="faq-item">
              <h3>How can I apply for scholarships?</h3>
              <p>Scholarship applications are available online. Please check the Admissions section for detailed information and deadlines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;