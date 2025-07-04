import React from 'react';
import './CorporateBlueTemplate.css';

const CorporateBlueTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Pozisyon",
    photo: "",
    contact: {},
    summary: "",
    experience: [],
    education: [],
    skills: []
  };

  return (
    <div className="corporate-blue-template">
      <div className="corporate-blue-container">
        {/* Left Column */}
        <div className="corporate-blue-left-column">
          {data.photo && (
            <div className="corporate-blue-photo">
              <img src={data.photo} alt={data.name} />
            </div>
          )}
          
          <div className="corporate-blue-contact">
            <h2 className="corporate-blue-section-title">İletişim</h2>
            
            <div className="corporate-blue-contact-items">
              {data.contact.email && (
                <div className="corporate-blue-contact-item">
                  <i className="icon-envelope"></i>
                  <span>{data.contact.email}</span>
                </div>
              )}
              
              {data.contact.phone && (
                <div className="corporate-blue-contact-item">
                  <i className="icon-phone"></i>
                  <span>{data.contact.phone}</span>
                </div>
              )}
              
              {data.contact.location && (
                <div className="corporate-blue-contact-item">
                  <i className="icon-map-pin"></i>
                  <span>{data.contact.location}</span>
                </div>
              )}
              
              {data.contact.github && (
                <div className="corporate-blue-contact-item">
                  <i className="icon-github"></i>
                  <span>{data.contact.github}</span>
                </div>
              )}
              
              {data.contact.linkedin && (
                <div className="corporate-blue-contact-item">
                  <i className="icon-linkedin"></i>
                  <span>{data.contact.linkedin}</span>
                </div>
              )}
              
              {data.contact.website && (
                <div className="corporate-blue-contact-item">
                  <i className="icon-globe"></i>
                  <span>{data.contact.website}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="corporate-blue-skills">
            <h2 className="corporate-blue-section-title">Beceriler</h2>
            <ul className="corporate-blue-skills-list">
              {data.skills && data.skills.map((skill, index) => (
                <li key={index} className="corporate-blue-skill">
                  <i className="icon-check"></i>
                  <span>{skill.name}</span>
                  {skill.level && (
                    <div className="corporate-blue-skill-bar">
                      <div 
                        className="corporate-blue-skill-level" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="corporate-blue-right-column">
          <div className="corporate-blue-header">
            <h1 className="corporate-blue-name">{data.name}</h1>
            <h2 className="corporate-blue-title">{data.title}</h2>
          </div>
          
          {data.summary && (
            <div className="corporate-blue-summary">
              <h2 className="corporate-blue-section-title">Özet</h2>
              <p>{data.summary}</p>
            </div>
          )}
          
          {data.experience && data.experience.length > 0 && (
            <div className="corporate-blue-experience">
              <h2 className="corporate-blue-section-title">Deneyim</h2>
              
              {data.experience.map((job, index) => (
                <div key={index} className="corporate-blue-exp-item">
                  <div className="corporate-blue-exp-header">
                    <h3 className="corporate-blue-exp-title">{job.title}</h3>
                    <div className="corporate-blue-exp-company">{job.company}</div>
                    <div className="corporate-blue-exp-date">{job.date}</div>
                  </div>
                  
                  {job.details && job.details.length > 0 && (
                    <ul className="corporate-blue-exp-details">
                      {job.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {data.education && data.education.length > 0 && (
            <div className="corporate-blue-education">
              <h2 className="corporate-blue-section-title">Eğitim</h2>
              
              {data.education.map((edu, index) => (
                <div key={index} className="corporate-blue-edu-item">
                  <div className="corporate-blue-edu-header">
                    <h3 className="corporate-blue-edu-degree">{edu.degree}</h3>
                    <div className="corporate-blue-edu-school">{edu.school}</div>
                    <div className="corporate-blue-edu-date">{edu.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CorporateBlueTemplate; 