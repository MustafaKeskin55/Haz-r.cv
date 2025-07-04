import React, { useState } from 'react';
import './PhotographerTemplate.css';

const PhotographerTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Fotoğrafçı / İçerik Üreticisi",
    photo: "",
    bio: "",
    contact: {},
    social: [],
    gear: [],
    portfolio: [],
    experience: [],
    education: []
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
    <div className="photographer-template">
      <div className="photographer-sidebar">
        <div className="photographer-photo-container">
          {photo ? (
            <img src={photo} alt={data.name} className="photographer-photo" />
          ) : (
            <div className="photographer-photo-placeholder">
              <i className="fas fa-camera"></i>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="photographer-photo-input"
                title="Fotoğraf yükle"
              />
            </div>
          )}
        </div>

        <div className="photographer-contact">
          {data.contact.email && (
            <div className="photographer-contact-item">
              <i className="fas fa-envelope"></i>
              <span>{data.contact.email}</span>
            </div>
          )}
          
          {data.contact.phone && (
            <div className="photographer-contact-item">
              <i className="fas fa-phone"></i>
              <span>{data.contact.phone}</span>
            </div>
          )}
          
          {data.contact.location && (
            <div className="photographer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{data.contact.location}</span>
            </div>
          )}
        </div>

        <div className="photographer-social">
          {data.social && data.social.map((link, index) => (
            <div key={index} className="photographer-social-item">
              <i className={`fab fa-${link.platform.toLowerCase()}`}></i>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="photographer-social-link"
              >
                {link.username}
              </a>
            </div>
          ))}
        </div>

        <div className="photographer-gear-section">
          <h3 className="photographer-sidebar-heading">Ekipman</h3>
          <div className="photographer-gear-list">
            {data.gear && data.gear.map((gear, index) => (
              <div key={index} className="photographer-gear-item">
                {gear}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="photographer-content">
        <div className="photographer-header">
          <h1 className="photographer-name">{data.name}</h1>
          <div className="photographer-title">{data.title}</div>
        </div>

        {data.bio && (
          <div className="photographer-section">
            <h2 className="photographer-section-title">Hakkımda</h2>
            <p className="photographer-bio">{data.bio}</p>
          </div>
        )}

        {data.portfolio && data.portfolio.length > 0 && (
          <div className="photographer-section">
            <h2 className="photographer-section-title">Portfolyo</h2>
            <div className="photographer-portfolio-grid">
              {data.portfolio.slice(0, 6).map((item, index) => (
                <div key={index} className="photographer-portfolio-item">
                  {item.image ? (
                    <img src={item.image} alt={item.title || `Portfolio item ${index + 1}`} />
                  ) : (
                    <div className="photographer-portfolio-placeholder">
                      <i className="fas fa-image"></i>
                    </div>
                  )}
                  {item.title && <div className="photographer-portfolio-title">{item.title}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="photographer-section">
          <h2 className="photographer-section-title">Deneyim</h2>
          {data.experience && data.experience.map((exp, index) => (
            <div key={index} className="photographer-exp-item">
              <div className="photographer-exp-header">
                <div className="photographer-exp-title">{exp.title}</div>
                <div className="photographer-exp-date">{exp.date}</div>
              </div>
              <div className="photographer-exp-company">{exp.company}</div>
              <div className="photographer-exp-desc">{exp.description}</div>
            </div>
          ))}
        </div>

        <div className="photographer-section">
          <h2 className="photographer-section-title">Eğitim</h2>
          {data.education && data.education.map((edu, index) => (
            <div key={index} className="photographer-edu-item">
              <div className="photographer-edu-header">
                <div className="photographer-edu-degree">{edu.degree}</div>
                <div className="photographer-edu-date">{edu.date}</div>
              </div>
              <div className="photographer-edu-school">{edu.school}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotographerTemplate; 