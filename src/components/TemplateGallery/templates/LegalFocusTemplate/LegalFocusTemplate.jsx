import React from 'react';
import './LegalFocusTemplate.css';

const LegalFocusTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Avukat / Hukuk Danışmanı",
    barInfo: {
      barName: "İstanbul Barosu",
      registrationNumber: "12345",
      registrationDate: "2015"
    },
    contact: {},
    summary: "",
    experience: [],
    education: [],
    skills: [],
    languages: []
  };

  return (
    <div className="legal-template">
      <div className="legal-background-icon"></div>
      
      <header className="legal-header">
        <div className="legal-name-title">
          <h1>{data.name}</h1>
          <div className="legal-title">{data.title}</div>
        </div>
      </header>

      <div className="legal-bar-info">
        {data.barInfo && (
          <>
            <div className="legal-bar-item">
              <span className="legal-bar-label">Baro:</span>
              <span className="legal-bar-value">{data.barInfo.barName}</span>
            </div>
            <div className="legal-bar-item">
              <span className="legal-bar-label">Sicil No:</span>
              <span className="legal-bar-value">{data.barInfo.registrationNumber}</span>
            </div>
            <div className="legal-bar-item">
              <span className="legal-bar-label">Kayıt Tarihi:</span>
              <span className="legal-bar-value">{data.barInfo.registrationDate}</span>
            </div>
          </>
        )}
      </div>

      <div className="legal-contact">
        {data.contact.email && (
          <div className="legal-contact-item">
            <i className="fas fa-envelope"></i>
            <span>{data.contact.email}</span>
          </div>
        )}
        
        {data.contact.phone && (
          <div className="legal-contact-item">
            <i className="fas fa-phone"></i>
            <span>{data.contact.phone}</span>
          </div>
        )}
        
        {data.contact.location && (
          <div className="legal-contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{data.contact.location}</span>
          </div>
        )}
        
        {data.contact.website && (
          <div className="legal-contact-item">
            <i className="fas fa-globe"></i>
            <span>{data.contact.website}</span>
          </div>
        )}
      </div>

      <div className="legal-main-content">
        {data.summary && (
          <div className="legal-section">
            <h2 className="legal-section-title">Özet</h2>
            <p className="legal-summary-text">{data.summary}</p>
          </div>
        )}

        <div className="legal-section">
          <h2 className="legal-section-title">Hukuki Deneyim</h2>
          
          {data.experience && data.experience.map((job, index) => (
            <div key={index} className="legal-item">
              <div className="legal-item-header">
                <div className="legal-item-title">{job.title}</div>
                <div className="legal-item-date">{job.date}</div>
              </div>
              <div className="legal-item-subtitle">{job.company}</div>
              <ul className="legal-item-details">
                {job.details && job.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">Eğitim</h2>
          
          {data.education && data.education.map((edu, index) => (
            <div key={index} className="legal-item">
              <div className="legal-item-header">
                <div className="legal-item-title">{edu.degree}</div>
                <div className="legal-item-date">{edu.date}</div>
              </div>
              <div className="legal-item-subtitle">{edu.school}</div>
            </div>
          ))}
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">Uzmanlık Alanları</h2>
          
          <div className="legal-skills">
            {data.skills && data.skills.map((skill, index) => (
              <div key={index} className="legal-skill-item">
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {data.languages && data.languages.length > 0 && (
          <div className="legal-section">
            <h2 className="legal-section-title">Yabancı Diller</h2>
            <div className="legal-languages">
              {data.languages.map((language, index) => (
                <div key={index} className="legal-language-item">
                  <span className="legal-language-name">{language.name}</span>
                  <span className="legal-language-level">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalFocusTemplate; 