import React from 'react';
import './MinimalPureTemplate.css';

const MinimalPureTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "",
    title: "",
    summary: "",
    contact: {},
    experience: [],
    education: [],
    skills: []
  };

  return (
    <div className="minimal-pure-template">
      <header className="minimal-pure-header">
        <h1 className="minimal-pure-name">{data.name}</h1>
        <h2 className="minimal-pure-title">{data.title}</h2>
        
        <div className="minimal-pure-contact">
          {data.contact.email && <span>{data.contact.email}</span>}
          {data.contact.phone && <span>{data.contact.phone}</span>}
          {data.contact.location && <span>{data.contact.location}</span>}
          {data.contact.github && <span>{data.contact.github}</span>}
          {data.contact.linkedin && <span>{data.contact.linkedin}</span>}
        </div>
      </header>
      
      <div className="minimal-pure-content">
        <section className="minimal-pure-section">
          <h3 className="minimal-pure-section-title">ÖZET</h3>
          <p className="minimal-pure-summary">{data.summary}</p>
        </section>
      
        <section className="minimal-pure-section">
          <h3 className="minimal-pure-section-title">DENEYİM</h3>
          {data.experience && data.experience.map((job, index) => (
            <div key={index} className="minimal-pure-item">
              <div className="minimal-pure-item-header">
                <h4 className="minimal-pure-item-title">{job.title}</h4>
                <span className="minimal-pure-item-date">{job.date}</span>
              </div>
              <div className="minimal-pure-item-subtitle">{job.company}</div>
              {job.details && (
                <ul className="minimal-pure-details">
                  {job.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      
        <section className="minimal-pure-section">
          <h3 className="minimal-pure-section-title">EĞİTİM</h3>
          {data.education && data.education.map((edu, index) => (
            <div key={index} className="minimal-pure-item">
              <div className="minimal-pure-item-header">
                <h4 className="minimal-pure-item-title">{edu.degree}</h4>
                <span className="minimal-pure-item-date">{edu.date}</span>
              </div>
              <div className="minimal-pure-item-subtitle">{edu.school}</div>
            </div>
          ))}
        </section>
      
        <section className="minimal-pure-section">
          <h3 className="minimal-pure-section-title">BECERİLER</h3>
          <div className="minimal-pure-skills">
            {data.skills && data.skills.map((skill, index) => (
              <span key={index} className="minimal-pure-skill">{skill.name}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MinimalPureTemplate; 