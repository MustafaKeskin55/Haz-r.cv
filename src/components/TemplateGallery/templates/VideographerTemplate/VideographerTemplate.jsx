import React, { useState } from 'react';
import './VideographerTemplate.css';

const VideographerTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Videograf / Hareket Tasarımcısı",
    photo: "",
    contact: {
      email: "ornek@email.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye",
      website: "portfolio.com"
    },
    summary: "Yaratıcı görsel hikaye anlatımı konusunda tutkulu, 5 yıllık deneyime sahip videograf. Reklam, belgesel ve kurumsal video projeleri üzerinde çalışma deneyimi.",
    experience: [],
    education: [],
    skills: [],
    softwareSkills: [],
    videoThumbnails: []
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

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="videographer-template">
      <header className="videographer-header">
        <div className="videographer-photo-section">
          {photo ? (
            <img src={photo} alt={data.name} className="videographer-photo" />
          ) : (
            <div 
              className="videographer-photo-placeholder"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="videographer-photo-input"
                title="Profil Fotoğrafı Yükle"
              />
              <i className="fas fa-camera"></i>
              <span>Profil Fotoğrafı Yükle</span>
              <span className="videographer-drag-text">veya sürükle bırak</span>
            </div>
          )}
        </div>
        
        <div className="videographer-header-content">
          <h1 className="videographer-name">{data.name}</h1>
          <h2 className="videographer-title">{data.title}</h2>
          
          <div className="videographer-contact">
            {data.contact.email && (
              <div className="videographer-contact-item">
                <i className="fas fa-envelope"></i>
                <span>{data.contact.email}</span>
              </div>
            )}
            
            {data.contact.phone && (
              <div className="videographer-contact-item">
                <i className="fas fa-phone"></i>
                <span>{data.contact.phone}</span>
              </div>
            )}
            
            {data.contact.location && (
              <div className="videographer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{data.contact.location}</span>
              </div>
            )}
            
            {data.contact.website && (
              <div className="videographer-contact-item">
                <i className="fas fa-globe"></i>
                <span>{data.contact.website}</span>
              </div>
            )}
          </div>
        </div>
      </header>
      
      {data.videoThumbnails && data.videoThumbnails.length > 0 && (
        <div className="videographer-thumbnails">
          {data.videoThumbnails.map((thumbnail, index) => (
            <div key={index} className="videographer-thumbnail">
              <img src={thumbnail.image} alt={thumbnail.title} />
              <div className="videographer-thumbnail-overlay">
                <span>{thumbnail.title}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <main className="videographer-main">
        <section className="videographer-section">
          <h3 className="videographer-section-title">Hakkımda</h3>
          <div className="videographer-summary">{data.summary}</div>
        </section>
        
        <section className="videographer-section">
          <h3 className="videographer-section-title">Deneyim</h3>
          
          {data.experience && data.experience.length > 0 ? (
            data.experience.map((exp, index) => (
              <div key={index} className="videographer-experience-item">
                <div className="videographer-experience-header">
                  <h4 className="videographer-experience-title">{exp.title}</h4>
                  <span className="videographer-experience-date">{exp.date}</span>
                </div>
                <div className="videographer-experience-company">{exp.company}</div>
                <div className="videographer-experience-description">{exp.description}</div>
                {exp.projects && (
                  <div className="videographer-experience-projects">
                    <span className="videographer-projects-label">Projeler:</span>
                    <span className="videographer-projects-list">{exp.projects}</span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="videographer-placeholder">Henüz deneyim bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="videographer-section">
          <h3 className="videographer-section-title">Eğitim</h3>
          
          {data.education && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="videographer-education-item">
                <div className="videographer-education-header">
                  <h4 className="videographer-education-degree">{edu.degree}</h4>
                  <span className="videographer-education-date">{edu.date}</span>
                </div>
                <div className="videographer-education-school">{edu.school}</div>
              </div>
            ))
          ) : (
            <div className="videographer-placeholder">Henüz eğitim bilgisi eklenmemiş</div>
          )}
        </section>
        
        <div className="videographer-skills-container">
          <section className="videographer-section videographer-skills-section">
            <h3 className="videographer-section-title">Yetenekler</h3>
            
            {data.skills && data.skills.length > 0 ? (
              <div className="videographer-skills-grid">
                {data.skills.map((skill, index) => (
                  <div key={index} className="videographer-skill-item">
                    <span className="videographer-skill-name">{skill.name}</span>
                    {skill.level && (
                      <div className="videographer-skill-bar">
                        <div 
                          className="videographer-skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="videographer-placeholder">Henüz yetenek bilgisi eklenmemiş</div>
            )}
          </section>
          
          <section className="videographer-section videographer-software-section">
            <h3 className="videographer-section-title">Yazılım Bilgisi</h3>
            
            {data.softwareSkills && data.softwareSkills.length > 0 ? (
              <div className="videographer-software-grid">
                {data.softwareSkills.map((software, index) => (
                  <div key={index} className="videographer-software-item">
                    <div className="videographer-software-icon">
                      <i className={software.icon || "fas fa-laptop-code"}></i>
                    </div>
                    <div className="videographer-software-info">
                      <span className="videographer-software-name">{software.name}</span>
                      {software.level && (
                        <div className="videographer-software-bar">
                          <div 
                            className="videographer-software-progress" 
                            style={{ width: `${software.level}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="videographer-placeholder">Henüz yazılım bilgisi eklenmemiş</div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default VideographerTemplate; 