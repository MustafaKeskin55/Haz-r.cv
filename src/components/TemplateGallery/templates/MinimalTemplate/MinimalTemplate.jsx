import React from 'react';
import './MinimalTemplate.css';

const MinimalTemplate = ({ userData }) => {
  // Eğer userData boş gelirse varsayılan verileri kullan
  const data = userData || {
    name: "Ad Soyad",
    title: "Pozisyon",
    contact: {},
    summary: "",
    experience: [],
    education: [],
    skills: [],
    languages: []
  };

  return (
    <div className="minimal-template">
      <div className="minimal-header">
        <div className="minimal-name-title">
          <h1>{data.name}</h1>
          <div className="minimal-title">{data.title}</div>
        </div>
      </div>

      <div className="minimal-contact">
        {data.contact.email && (
          <div className="minimal-contact-item">
            <i className="fas fa-envelope"></i>
            <span>{data.contact.email}</span>
          </div>
        )}
        
        {data.contact.phone && (
          <div className="minimal-contact-item">
            <i className="fas fa-phone"></i>
            <span>{data.contact.phone}</span>
          </div>
        )}
        
        {data.contact.location && (
          <div className="minimal-contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{data.contact.location}</span>
          </div>
        )}
        
        {data.contact.website && (
          <div className="minimal-contact-item">
            <i className="fas fa-globe"></i>
            <span>{data.contact.website}</span>
          </div>
        )}
      </div>

      <div className="minimal-main-content">
        <div className="minimal-left-column">
          <div className="minimal-section">
            <h2 className="minimal-section-title">Profil</h2>
            <p className="minimal-profile-text">{data.summary}</p>
          </div>

          <div className="minimal-section">
            <h2 className="minimal-section-title">Deneyim</h2>
            
            {data.experience && data.experience.map((job, index) => (
              <div key={index} className="minimal-item">
                <div className="minimal-item-title">{job.title}</div>
                <div className="minimal-item-subtitle">{job.company}</div>
                <div className="minimal-item-date">{job.date}</div>
                <ul className="minimal-item-details">
                  {job.details && job.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="minimal-right-column">
          <div className="minimal-section">
            <h2 className="minimal-section-title">Eğitim</h2>
            
            {data.education && data.education.map((edu, index) => (
              <div key={index} className="minimal-item">
                <div className="minimal-item-title">{edu.degree}</div>
                <div className="minimal-item-subtitle">{edu.school}</div>
                <div className="minimal-item-date">{edu.date}</div>
              </div>
            ))}
          </div>

          <div className="minimal-section minimal-skills-section">
            <h2 className="minimal-section-title">Yetenekler</h2>
            
            {data.skills && data.skills.map((skill, index) => (
              <div key={index} className="minimal-skill-bar-container">
                <div className="minimal-skill-name">{skill.name}</div>
                <div className="minimal-skill-bar">
                  <div className="minimal-skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {data.languages && data.languages.length > 0 && (
            <div className="minimal-section">
              <h2 className="minimal-section-title">Diller</h2>
              <div className="minimal-languages-grid">
                {data.languages.map((language, index) => (
                  <div key={index} className="minimal-language-item">
                    <span className="minimal-language-name">{language.name}</span>
                    <span className="minimal-language-level">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate; 