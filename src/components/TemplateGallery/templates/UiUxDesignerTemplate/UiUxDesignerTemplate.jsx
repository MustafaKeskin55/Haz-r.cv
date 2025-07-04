import React, { useState } from 'react';
import './UiUxDesignerTemplate.css';

const UiUxDesignerTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "UI/UX Tasarımcı",
    photo: "",
    contact: {
      email: "ornek@email.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye",
      website: "portfolio.com"
    },
    summary: "Kullanıcı odaklı dijital deneyimler tasarlayan, 5 yıllık deneyime sahip UI/UX tasarımcısı. Mobil ve web uygulamaları için kullanılabilir ve estetik arayüzler oluşturma konusunda uzmanlaşmış.",
    experience: [],
    projects: [],
    education: [],
    skills: []
  };

  const [photo, setPhoto] = useState(data.photo || "");

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="uiux-template">
      <div className="uiux-sidebar">
        <div className="uiux-photo-container">
          {photo ? (
            <img src={photo} alt={data.name} className="uiux-photo" />
          ) : (
            <div className="uiux-photo-placeholder">
              <i className="fas fa-user-circle"></i>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="uiux-photo-input"
                title="Profil Fotoğrafı Yükle"
              />
              <div className="uiux-upload-text">Profil Fotoğrafı Yükle</div>
            </div>
          )}
        </div>

        <div className="uiux-sidebar-section">
          <h3 className="uiux-sidebar-title">İletişim</h3>
          
          {data.contact.email && (
            <div className="uiux-contact-item">
              <i className="fas fa-envelope"></i>
              <span>{data.contact.email}</span>
            </div>
          )}
          
          {data.contact.phone && (
            <div className="uiux-contact-item">
              <i className="fas fa-phone"></i>
              <span>{data.contact.phone}</span>
            </div>
          )}
          
          {data.contact.location && (
            <div className="uiux-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{data.contact.location}</span>
            </div>
          )}
          
          {data.contact.website && (
            <div className="uiux-contact-item">
              <i className="fas fa-globe"></i>
              <span>{data.contact.website}</span>
            </div>
          )}
        </div>
        
        <div className="uiux-sidebar-section">
          <h3 className="uiux-sidebar-title">Yetenekler</h3>
          
          {data.skills && data.skills.length > 0 ? (
            <div className="uiux-skills-container">
              {data.skills.map((skill, index) => (
                <div key={index} className="uiux-skill-item">
                  {skill.icon && <i className={`fab ${skill.icon}`}></i>}
                  <div className="uiux-skill-info">
                    <span className="uiux-skill-name">{skill.name}</span>
                    {skill.level && (
                      <div className="uiux-skill-bar">
                        <div 
                          className="uiux-skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="uiux-placeholder">Henüz yetenek bilgisi eklenmemiş</div>
          )}
        </div>
      </div>
      
      <div className="uiux-main">
        <header className="uiux-header">
          <h1 className="uiux-name">{data.name}</h1>
          <h2 className="uiux-title">{data.title}</h2>
        </header>
        
        <section className="uiux-section">
          <h3 className="uiux-section-title">Hakkımda</h3>
          <div className="uiux-summary">{data.summary}</div>
        </section>
        
        <section className="uiux-section">
          <h3 className="uiux-section-title">Deneyim</h3>
          
          {data.experience && data.experience.length > 0 ? (
            data.experience.map((exp, index) => (
              <div key={index} className="uiux-experience-item">
                <div className="uiux-experience-header">
                  <h4 className="uiux-experience-title">{exp.title}</h4>
                  <span className="uiux-experience-date">{exp.date}</span>
                </div>
                <div className="uiux-experience-company">{exp.company}</div>
                <div className="uiux-experience-description">{exp.description}</div>
              </div>
            ))
          ) : (
            <div className="uiux-placeholder">Henüz deneyim bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="uiux-section">
          <h3 className="uiux-section-title">Projeler</h3>
          
          {data.projects && data.projects.length > 0 ? (
            <div className="uiux-projects-grid">
              {data.projects.map((project, index) => (
                <div key={index} className="uiux-project-item">
                  <h4 className="uiux-project-title">{project.title}</h4>
                  {project.image && (
                    <div className="uiux-project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  )}
                  <div className="uiux-project-description">{project.description}</div>
                  {project.tools && (
                    <div className="uiux-project-tools">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="uiux-project-tool">{tool}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="uiux-placeholder">Henüz proje bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="uiux-section">
          <h3 className="uiux-section-title">Eğitim</h3>
          
          {data.education && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="uiux-education-item">
                <div className="uiux-education-header">
                  <h4 className="uiux-education-degree">{edu.degree}</h4>
                  <span className="uiux-education-date">{edu.date}</span>
                </div>
                <div className="uiux-education-school">{edu.school}</div>
              </div>
            ))
          ) : (
            <div className="uiux-placeholder">Henüz eğitim bilgisi eklenmemiş</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default UiUxDesignerTemplate; 