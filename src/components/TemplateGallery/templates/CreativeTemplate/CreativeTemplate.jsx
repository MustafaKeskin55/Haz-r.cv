import React from 'react';
import './CreativeTemplate.css';

const CreativeTemplate = ({ userData }) => {
  // Eğer userData boş gelirse varsayılan verileri kullan
  const data = userData || {
    name: "Ad Soyad",
    title: "Pozisyon",
    photo: "",
    contact: {},
    summary: "",
    experience: [],
    education: [],
    skills: [],
    portfolio: []
  };

  return (
    <div className="creative-template">
      <div className="creative-sidebar">
        <div className="creative-avatar">
          {data.photo ? (
            <div className="creative-avatar-photo">
              <img src={data.photo} alt={data.name} />
            </div>
          ) : (
            <div className="creative-avatar-circle">
              <span>{data.name.split(' ').map(name => name[0]).join('')}</span>
            </div>
          )}
        </div>
        
        <div className="creative-contact-info">
          {data.contact.email && (
            <div className="creative-contact-item">
              <i className="fas fa-envelope"></i>
              <span>{data.contact.email}</span>
            </div>
          )}
          
          {data.contact.phone && (
            <div className="creative-contact-item">
              <i className="fas fa-phone"></i>
              <span>{data.contact.phone}</span>
            </div>
          )}
          
          {data.contact.location && (
            <div className="creative-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{data.contact.location}</span>
            </div>
          )}
          
          {data.contact.instagram && (
            <div className="creative-contact-item">
              <i className="fab fa-instagram"></i>
              <span>{data.contact.instagram}</span>
            </div>
          )}
        </div>
        
        <div className="creative-skills-section">
          <h2 className="creative-section-title">Yetenekler</h2>
          
          <div className="creative-skills">
            {data.skills && data.skills.map((skill, index) => (
              <div key={index} className="creative-skill-item">
                <div className="creative-skill-name">{skill.name}</div>
                <div className="creative-skill-bar">
                  <div className="creative-skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {data.portfolio && data.portfolio.length > 0 && (
          <div className="creative-portfolio-section">
            <h2 className="creative-section-title">Portfolyo</h2>
            
            <div className="creative-portfolio-items">
              {data.portfolio.map((item, index) => (
                <div key={index} className="creative-portfolio-item">
                  <div className="creative-portfolio-title">{item.title}</div>
                  <div className="creative-portfolio-type">{item.type}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="creative-main-content">
        <div className="creative-header">
          <h1 className="creative-name">{data.name}</h1>
          <div className="creative-title">{data.title}</div>
        </div>
        
        <div className="creative-section">
          <h2 className="creative-main-section-title">Profil</h2>
          <p className="creative-summary">{data.summary}</p>
        </div>
        
        <div className="creative-section">
          <h2 className="creative-main-section-title">Deneyim</h2>
          
          <div className="creative-timeline">
            {data.experience && data.experience.map((job, index) => (
              <div key={index} className="creative-timeline-item">
                <div className="creative-timeline-marker"></div>
                <div className="creative-timeline-content">
                  <div className="creative-job-title">{job.title}</div>
                  <div className="creative-company-date">
                    <span className="creative-company">{job.company}</span>
                    <span className="creative-date">{job.date}</span>
                  </div>
                  <ul className="creative-job-details">
                    {job.details && job.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="creative-section">
          <h2 className="creative-main-section-title">Eğitim</h2>
          
          <div className="creative-education">
            {data.education && data.education.map((edu, index) => (
              <div key={index} className="creative-education-item">
                <div className="creative-education-degree">{edu.degree}</div>
                <div className="creative-education-info">
                  <span className="creative-school">{edu.school}</span>
                  <span className="creative-edu-date">{edu.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate; 