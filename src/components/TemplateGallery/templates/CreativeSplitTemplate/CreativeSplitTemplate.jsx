import React from 'react';
import './CreativeSplitTemplate.css';

const CreativeSplitTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "",
    title: "",
    photo: "",
    contact: {},
    summary: "",
    experience: [],
    education: [],
    skills: [],
    achievements: []
  };

  return (
    <div className="creative-split-template">
      <div className="creative-split-container">
        {/* Left sidebar */}
        <div className="creative-split-sidebar">
          <div className="creative-split-profile">
            <h1 className="creative-split-name">{data.name}</h1>
            <h2 className="creative-split-title">{data.title}</h2>
            
            {data.photo && (
              <div className="creative-split-photo">
                <img src={data.photo} alt={data.name} />
              </div>
            )}
          </div>
          
          <div className="creative-split-contact">
            <h3 className="creative-split-sidebar-title">İLETİŞİM</h3>
            <ul className="creative-split-contact-list">
              {data.contact && data.contact.email && (
                <li>
                  <span className="creative-split-contact-label">E-POSTA</span>
                  <span className="creative-split-contact-value">{data.contact.email}</span>
                </li>
              )}
              
              {data.contact && data.contact.phone && (
                <li>
                  <span className="creative-split-contact-label">TELEFON</span>
                  <span className="creative-split-contact-value">{data.contact.phone}</span>
                </li>
              )}
              
              {data.contact && data.contact.location && (
                <li>
                  <span className="creative-split-contact-label">KONUM</span>
                  <span className="creative-split-contact-value">{data.contact.location}</span>
                </li>
              )}
              
              {data.contact && data.contact.website && (
                <li>
                  <span className="creative-split-contact-label">WEB</span>
                  <span className="creative-split-contact-value">{data.contact.website}</span>
                </li>
              )}
              
              {data.contact && data.contact.linkedin && (
                <li>
                  <span className="creative-split-contact-label">LİNKEDİN</span>
                  <span className="creative-split-contact-value">{data.contact.linkedin}</span>
                </li>
              )}
              
              {data.contact && data.contact.github && (
                <li>
                  <span className="creative-split-contact-label">GİTHUB</span>
                  <span className="creative-split-contact-value">{data.contact.github}</span>
                </li>
              )}
            </ul>
          </div>
          
          <div className="creative-split-skills">
            <h3 className="creative-split-sidebar-title">BECERİLER</h3>
            <div className="creative-split-skill-blocks">
              {data.skills && data.skills.map((skill, index) => (
                <div key={index} className="creative-split-skill-block">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="creative-split-main">
          <div className="creative-split-section creative-split-about">
            <h3 className="creative-split-section-title">HAKKIMDA</h3>
            {data.summary && <p>{data.summary}</p>}
          </div>
          
          <div className="creative-split-section creative-split-experience">
            <h3 className="creative-split-section-title">DENEYİM</h3>
            
            {data.experience && data.experience.length > 0 && data.experience.map((job, index) => (
              <div key={index} className="creative-split-exp-item">
                <div className="creative-split-exp-header">
                  <h4 className="creative-split-exp-title">{job.title}</h4>
                  <span className="creative-split-exp-date">{job.date}</span>
                </div>
                <div className="creative-split-exp-company">{job.company}</div>
                
                {job.details && job.details.length > 0 && (
                  <ul className="creative-split-details">
                    {job.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          
          <div className="creative-split-section creative-split-education">
            <h3 className="creative-split-section-title">EĞİTİM</h3>
            
            {data.education && data.education.length > 0 && data.education.map((edu, index) => (
              <div key={index} className="creative-split-edu-item">
                <div className="creative-split-edu-header">
                  <h4 className="creative-split-edu-degree">{edu.degree}</h4>
                  <span className="creative-split-edu-date">{edu.date}</span>
                </div>
                <div className="creative-split-edu-school">{edu.school}</div>
              </div>
            ))}
          </div>
          
          <div className="creative-split-section creative-split-achievements">
            <h3 className="creative-split-section-title">BAŞARILAR</h3>
            
            {data.achievements && data.achievements.length > 0 && (
              <ul className="creative-split-achievements-list">
                {data.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSplitTemplate;