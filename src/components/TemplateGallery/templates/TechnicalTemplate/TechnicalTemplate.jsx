import React from 'react';
import './TechnicalTemplate.css';

const TechnicalTemplate = ({ userData }) => {
  // Eğer userData boş gelirse varsayılan verileri kullan
  const data = userData || {
    name: "Ad Soyad",
    title: "Pozisyon",
    contact: {},
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: []
  };

  return (
    <div className="technical-template">
      <div className="technical-header">
        <div className="technical-name-section">
          <h1 className="technical-name">{data.name}</h1>
          <div className="technical-title">{data.title}</div>
        </div>
        
        <div className="technical-contact-section">
          {data.contact.email && (
            <div className="technical-contact-item">
              <i className="fas fa-envelope"></i>
              <span>{data.contact.email}</span>
            </div>
          )}
          
          {data.contact.phone && (
            <div className="technical-contact-item">
              <i className="fas fa-phone"></i>
              <span>{data.contact.phone}</span>
            </div>
          )}
          
          {data.contact.location && (
            <div className="technical-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{data.contact.location}</span>
            </div>
          )}
          
          <div className="technical-social-links">
            {data.contact.github && (
              <div className="technical-social-item">
                <i className="fab fa-github"></i>
                <span>{data.contact.github}</span>
              </div>
            )}
            
            {data.contact.linkedin && (
              <div className="technical-social-item">
                <i className="fab fa-linkedin"></i>
                <span>{data.contact.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="technical-body">
        <div className="technical-main-section">
          <div className="technical-summary">
            <h2 className="technical-section-title">Özet</h2>
            <p>{data.summary}</p>
          </div>
          
          <div className="technical-experience">
            <h2 className="technical-section-title">Deneyim</h2>
            {data.experience && data.experience.map((job, index) => (
              <div key={index} className="technical-job">
                <div className="technical-job-header">
                  <div className="technical-job-title-company">
                    <span className="technical-job-title">{job.title}</span>
                    <span className="technical-job-company">{job.company}</span>
                  </div>
                  <div className="technical-job-date">{job.date}</div>
                </div>
                <ul className="technical-job-details">
                  {job.details && job.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="technical-projects">
            <h2 className="technical-section-title">Projeler</h2>
            {data.projects && data.projects.map((project, index) => (
              <div key={index} className="technical-project">
                <div className="technical-project-name">{project.name}</div>
                <div className="technical-project-tech">{project.tech}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="technical-sidebar">
          <div className="technical-education">
            <h2 className="technical-section-title">Eğitim</h2>
            {data.education && data.education.map((edu, index) => (
              <div key={index} className="technical-edu-item">
                <div className="technical-edu-degree">{edu.degree}</div>
                <div className="technical-edu-school">{edu.school}</div>
                <div className="technical-edu-date">{edu.date}</div>
              </div>
            ))}
          </div>
          
          <div className="technical-skills">
            <h2 className="technical-section-title">Teknik Beceriler</h2>
            <div className="technical-skills-grid">
              {data.skills && data.skills.map((skill, index) => (
                <div key={index} className="technical-skill-item">
                  <div className="technical-skill-name">{skill.name}</div>
                  <div className="technical-skill-bar-container">
                    <div 
                      className="technical-skill-bar" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTemplate; 