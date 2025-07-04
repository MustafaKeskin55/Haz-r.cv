import React from 'react';
import './StartupHustlerTemplate.css';

const StartupHustlerTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Pozisyon",
    photo: "",
    contact: {},
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: [],
    references: []
  };

  return (
    <div className="startup-hustler-template">
      <header className="startup-hustler-header">
        <div className="startup-hustler-name-section">
          <h1 className="startup-hustler-name">{data.name}</h1>
          <div className="startup-hustler-title">{data.title}</div>
        </div>
        
        <div className="startup-hustler-contact-section">
          {data.contact.email && (
            <a href={`mailto:${data.contact.email}`} className="startup-hustler-contact-button">
              <span>Email</span>
            </a>
          )}
          
          {data.contact.phone && (
            <a href={`tel:${data.contact.phone}`} className="startup-hustler-contact-button">
              <span>Ara</span>
            </a>
          )}
          
          {data.contact.linkedin && (
            <a href={`https://linkedin.com/in/${data.contact.linkedin}`} className="startup-hustler-contact-button" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </header>
      
      <div className="startup-hustler-grid">
        {/* Overview Card */}
        <div className="startup-hustler-card overview-card">
          <h2 className="startup-hustler-card-title">Genel Bakış</h2>
          <div className="startup-hustler-card-content">
            {data.photo && (
              <div className="startup-hustler-photo">
                <img src={data.photo} alt={data.name} />
              </div>
            )}
            <p className="startup-hustler-summary">{data.summary}</p>
          </div>
        </div>
        
        {/* Skills Card */}
        {data.skills && data.skills.length > 0 && (
          <div className="startup-hustler-card skills-card">
            <h2 className="startup-hustler-card-title">Beceriler</h2>
            <div className="startup-hustler-card-content">
              <div className="startup-hustler-skills">
                {data.skills.map((skill, index) => (
                  <div key={index} className="startup-hustler-skill">
                    {skill.name}
                    {skill.level && (
                      <div className="startup-hustler-skill-level" style={{ width: `${skill.level}%` }}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Experience Card */}
        {data.experience && data.experience.length > 0 && (
          <div className="startup-hustler-card experience-card">
            <h2 className="startup-hustler-card-title">Deneyim</h2>
            <div className="startup-hustler-card-content">
              {data.experience.map((job, index) => (
                <div key={index} className="startup-hustler-job">
                  <div className="startup-hustler-job-header">
                    <div className="startup-hustler-job-title">{job.title}</div>
                    <div className="startup-hustler-job-company">{job.company}</div>
                    <div className="startup-hustler-job-date">{job.date}</div>
                  </div>
                  
                  {job.details && job.details.length > 0 && (
                    <ul className="startup-hustler-job-details">
                      {job.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Projects Card */}
        {data.projects && data.projects.length > 0 && (
          <div className="startup-hustler-card projects-card">
            <h2 className="startup-hustler-card-title">Projeler</h2>
            <div className="startup-hustler-card-content">
              {data.projects.map((project, index) => (
                <div key={index} className="startup-hustler-project">
                  <div className="startup-hustler-project-header">
                    <h3 className="startup-hustler-project-name">{project.name}</h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="startup-hustler-project-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        İncele
                      </a>
                    )}
                  </div>
                  <p className="startup-hustler-project-desc">{project.description}</p>
                  {project.tech && <div className="startup-hustler-project-tech">{project.tech}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Education Card */}
        {data.education && data.education.length > 0 && (
          <div className="startup-hustler-card education-card">
            <h2 className="startup-hustler-card-title">Eğitim</h2>
            <div className="startup-hustler-card-content">
              {data.education.map((edu, index) => (
                <div key={index} className="startup-hustler-edu-item">
                  <h3 className="startup-hustler-edu-degree">{edu.degree}</h3>
                  <div className="startup-hustler-edu-school">{edu.school}</div>
                  <div className="startup-hustler-edu-date">{edu.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* References Card */}
        {data.references && data.references.length > 0 && (
          <div className="startup-hustler-card references-card">
            <h2 className="startup-hustler-card-title">Referanslar</h2>
            <div className="startup-hustler-card-content">
              {data.references.map((reference, index) => (
                <div key={index} className="startup-hustler-reference">
                  <div className="startup-hustler-reference-name">{reference.name}</div>
                  <div className="startup-hustler-reference-title">{reference.title}</div>
                  <div className="startup-hustler-reference-contact">{reference.contact}</div>
                  {reference.quote && <blockquote className="startup-hustler-reference-quote">{reference.quote}</blockquote>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupHustlerTemplate; 