import React from 'react';
import './TechStackTemplate.css';

const TechStackTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "",
    title: "",
    summary: "",
    contact: {},
    experience: [],
    education: [],
    skills: [],
    projects: []
  };

  return (
    <div className="tech-stack-template">
      <header className="tech-stack-header">
        <h1 className="tech-stack-name">{data.name}</h1>
        <h2 className="tech-stack-title">{data.title}</h2>
        
        <div className="tech-stack-contact">
          {data.contact.email && <span className="tech-stack-contact-item">{data.contact.email}</span>}
          {data.contact.phone && <span className="tech-stack-contact-item">{data.contact.phone}</span>}
          {data.contact.location && <span className="tech-stack-contact-item">{data.contact.location}</span>}
          {data.contact.github && <span className="tech-stack-contact-item">github.com/{data.contact.github}</span>}
          {data.contact.linkedin && <span className="tech-stack-contact-item">linkedin.com/in/{data.contact.linkedin}</span>}
        </div>
      </header>
      
      <div className="tech-stack-content">
        <section className="tech-stack-summary">
          <h3 className="tech-stack-section-title">// ÖZET</h3>
          <p>{data.summary}</p>
        </section>
        
        <section className="tech-stack-skills">
          <h3 className="tech-stack-section-title">// TEKNOLOJİLER</h3>
          <div className="tech-stack-skills-container">
            {data.skills && data.skills.map((skill, index) => (
              <span key={index} className="tech-stack-skill-tag">{skill.name}</span>
            ))}
          </div>
        </section>
        
        <section className="tech-stack-projects">
          <h3 className="tech-stack-section-title">// PROJELER</h3>
          {data.projects && data.projects.map((project, index) => (
            <div key={index} className="tech-stack-project">
              <div className="tech-stack-project-header">
                <h4 className="tech-stack-project-name">{project.name}</h4>
                {project.link && <a href={project.link} className="tech-stack-project-link">Link →</a>}
              </div>
              <p className="tech-stack-project-description">{project.description}</p>
              {project.tech && <div className="tech-stack-project-tech">{project.tech}</div>}
            </div>
          ))}
        </section>
        
        <section className="tech-stack-experience">
          <h3 className="tech-stack-section-title">// DENEYİM</h3>
          {data.experience && data.experience.map((job, index) => (
            <div key={index} className="tech-stack-job">
              <div className="tech-stack-job-header">
                <h4 className="tech-stack-job-title">{job.title}</h4>
                <span className="tech-stack-job-company">{job.company}</span>
                <span className="tech-stack-job-date">{job.date}</span>
              </div>
              <ul className="tech-stack-job-details">
                {job.details && job.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        
        <section className="tech-stack-education">
          <h3 className="tech-stack-section-title">// EĞİTİM</h3>
          {data.education && data.education.map((edu, index) => (
            <div key={index} className="tech-stack-edu">
              <h4 className="tech-stack-edu-degree">{edu.degree}</h4>
              <span className="tech-stack-edu-school">{edu.school}</span>
              <span className="tech-stack-edu-date">{edu.date}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TechStackTemplate; 