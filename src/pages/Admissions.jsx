import "./Admissions.css";
import React, { useState } from "react";
import { FaCalendarAlt, FaCheckCircle, FaFileAlt, FaQuestionCircle, FaRupeeSign } from "react-icons/fa";

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    message: ''
  });

  const admissionProcess = [
    {
      step: 1,
      title: 'Application',
      description: 'Fill online application form',
      icon: <FaFileAlt />
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit required documents',
      icon: <FaCheckCircle />
    },
    {
      step: 3,
      title: 'Entrance Test',
      description: 'Appear for online test',
      icon: <FaFileAlt />
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Personal interview round',
      icon: <FaCheckCircle />
    },
    {
      step: 5,
      title: 'Admission Offer',
      description: 'Receive admission letter',
      icon: <FaCheckCircle />
    },
    {
      step: 6,
      title: 'Fee Payment',
      description: 'Pay admission fees',
      icon: <FaRupeeSign />
    }
  ];

  const eligibilityCriteria = [
    {
      course: 'B.Tech',
      criteria: '10+2 with 75% in PCM, Valid JEE Main score'
    },
    {
      course: 'MBA',
      criteria: 'Graduation with 50% marks, Valid CAT/MAT score'
    },
    {
      course: 'M.Tech',
      criteria: 'B.Tech with 60% marks, Valid GATE score'
    },
    {
      course: 'BBA',
      criteria: '10+2 with 60% marks in any stream'
    }
  ];

  const feeStructure = [
    {
      course: 'B.Tech',
      tuitionFee: '₹1,20,000/year',
      hostelFee: '₹80,000/year',
      total: '₹2,00,000/year'
    },
    {
      course: 'MBA',
      tuitionFee: '₹1,50,000/year',
      hostelFee: '₹80,000/year',
      total: '₹2,30,000/year'
    },
    {
      course: 'M.Tech',
      tuitionFee: '₹1,00,000/year',
      hostelFee: '₹80,000/year',
      total: '₹1,80,000/year'
    },
    {
      course: 'BBA',
      tuitionFee: '₹80,000/year',
      hostelFee: '₹80,000/year',
      total: '₹1,60,000/year'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Enquiry submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      qualification: '',
      message: ''
    });
  };

  return (
    <div className="admissions-page">
      {/* Hero Section */}
      <section className="admissions-hero">
        <div className="container">
          <h1>Admissions 2024</h1>
          <p className="subtitle">Begin Your Journey to Excellence</p>
          <div className="hero-actions">
            <button className="btn">Apply Now</button>
            <button className="btn btn-secondary">Download Brochure</button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Admission Process</h2>
          <div className="process-timeline">
            {admissionProcess.map((step) => (
              <div key={step.step} className="process-step">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">Step {step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="eligibility-section">
        <div className="container">
          <h2 className="section-title">Eligibility Criteria</h2>
          <div className="eligibility-table">
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Eligibility Criteria</th>
                  <th>Entrance Exam</th>
                </tr>
              </thead>
              <tbody>
                {eligibilityCriteria.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.course}</strong></td>
                    <td>{item.criteria}</td>
                    <td>
                      {item.course === 'B.Tech' ? 'JEE Main' : 
                       item.course === 'MBA' ? 'CAT/MAT' :
                       item.course === 'M.Tech' ? 'GATE' : 'University Test'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="dates-grid">
            <div className="date-card">
              <FaCalendarAlt className="date-icon" />
              <h3>Application Start</h3>
              <p className="date">March 1, 2024</p>
            </div>
            <div className="date-card">
              <FaCalendarAlt className="date-icon" />
              <h3>Last Date to Apply</h3>
              <p className="date">June 30, 2024</p>
            </div>
            <div className="date-card">
              <FaCalendarAlt className="date-icon" />
              <h3>Entrance Test</h3>
              <p className="date">July 15, 2024</p>
            </div>
            <div className="date-card">
              <FaCalendarAlt className="date-icon" />
              <h3>Results Declaration</h3>
              <p className="date">July 30, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="fees-section">
        <div className="container">
          <h2 className="section-title">Fee Structure 2024-25</h2>
          <div className="fees-table">
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Tuition Fee</th>
                  <th>Hostel Fee</th>
                  <th>Total Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.course}</strong></td>
                    <td>{item.tuitionFee}</td>
                    <td>{item.hostelFee}</td>
                    <td className="total-fee">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="fee-notes">
            <p><FaQuestionCircle /> * Hostel fee includes accommodation and mess charges</p>
            <p><FaQuestionCircle /> * One-time admission fee of ₹10,000 applicable</p>
          </div>
        </div>
      </section>

      {/* Online Enquiry Form */}
      <section className="enquiry-section">
        <div className="container">
          <div className="enquiry-container">
            <div className="enquiry-info">
              <h2>Need Help with Admission?</h2>
              <p>Our admission counselors are here to help you with the application process.</p>
              <div className="contact-details">
                <h4>Contact Admission Office:</h4>
                <p>📞 +1 (234) 567-8900</p>
                <p>📧 admissions@techuniversity.edu</p>
                <p>🕒 Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="enquiry-form">
              <h3>Online Enquiry Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Course *</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="MBA">MBA</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="BBA">BBA</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="qualification"
                      placeholder="Qualification *"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-submit">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="scholarship-section">
        <div className="container">
          <h2 className="section-title">Scholarships Available</h2>
          <div className="scholarships-grid">
            <div className="scholarship-card">
              <h3>Merit Scholarship</h3>
              <p>Up to 100% tuition fee waiver</p>
              <p>Based on academic performance</p>
            </div>
            <div className="scholarship-card">
              <h3>Sports Scholarship</h3>
              <p>Up to 50% fee concession</p>
              <p>For national/international level athletes</p>
            </div>
            <div className="scholarship-card">
              <h3>Need-based Scholarship</h3>
              <p>Up to 75% fee waiver</p>
              <p>For economically disadvantaged students</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;