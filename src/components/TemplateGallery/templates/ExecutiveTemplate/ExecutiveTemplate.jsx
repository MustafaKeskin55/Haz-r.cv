import React from 'react';
import './ExecutiveTemplate.css';

const ExecutiveTemplate = ({ userData }) => {
  // Eğer userData boş gelirse varsayılan verileri kullan
  const data = userData || {
    name: "AD SOYAD",
    title: "POZİSYON",
    contact: {},
    summary: "",
    experience: [],
    education: [],
    skills: []
  };

  return (
    <div className="cv-template executive-template">
      <div className="cv-header">
        <div className="cv-name-title">
          <h1>{data.name}</h1>
          <div className="cv-title">{data.title}</div>
        </div>
        <div className="cv-contact">
          {data.contact.email && (
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>{data.contact.email}</span>
            </div>
          )}
          
          {data.contact.phone && (
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>{data.contact.phone}</span>
            </div>
          )}
          
          {data.contact.location && (
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{data.contact.location}</span>
            </div>
          )}
          
          {data.contact.linkedin && (
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <span>{data.contact.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      <div className="cv-summary">
        <h2>PROFİL</h2>
        <p>{data.summary}</p>
      </div>

      <div className="cv-section">
        <h2>ÇALIŞMA DENEYİMİ</h2>
        
        {data.experience && data.experience.map((job, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <div className="cv-item-title">{job.title}</div>
              <div className="cv-item-company">{job.company}</div>
              <div className="cv-item-date">{job.date}</div>
            </div>
            <ul className="cv-item-details">
              {job.details && job.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2>EĞİTİM</h2>
        
        {data.education && data.education.map((edu, index) => (
          <div key={index} className="cv-item">
            <div className="cv-item-header">
              <div className="cv-item-title">{edu.degree}</div>
              <div className="cv-item-company">{edu.school}</div>
              <div className="cv-item-date">{edu.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="cv-skills">
        <h2>YETKİNLİKLER</h2>
        <div className="skills-grid">
          {data.skills && data.skills.map((skill, index) => (
            <div key={index} className="skill-item">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTemplate; 