import React, { useState } from 'react';
import './MedicalTemplate.css';

const MedicalTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Hemşire / Sağlık Teknisyeni",
    photo: "",
    certifications: [],
    contact: {},
    summary: "",
    experience: [],
    education: [],
    languages: [],
    quickFacts: {
      bloodDraw: true,
      patientCare: true,
      emergencyResponse: false
    }
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
    <div className="medical-template">
      <div className="medical-sidebar">
        <div className="medical-photo-container">
          {photo ? (
            <img src={photo} alt={data.name} className="medical-photo" />
          ) : (
            <div className="medical-photo-placeholder">
              <i className="fas fa-user-nurse"></i>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="medical-photo-input"
                title="Fotoğraf yükle"
              />
            </div>
          )}
        </div>

        <h2 className="medical-sidebar-name">{data.name}</h2>
        <div className="medical-sidebar-title">{data.title}</div>
        
        <div className="medical-sidebar-section">
          <h3 className="medical-sidebar-heading">İletişim</h3>
          
          {data.contact.email && (
            <div className="medical-contact-item">
              <i className="fas fa-envelope"></i>
              <span>{data.contact.email}</span>
            </div>
          )}
          
          {data.contact.phone && (
            <div className="medical-contact-item">
              <i className="fas fa-phone"></i>
              <span>{data.contact.phone}</span>
            </div>
          )}
          
          {data.contact.location && (
            <div className="medical-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{data.contact.location}</span>
            </div>
          )}
        </div>
        
        {data.languages && data.languages.length > 0 && (
          <div className="medical-sidebar-section">
            <h3 className="medical-sidebar-heading">Dil Becerileri</h3>
            {data.languages.map((language, index) => (
              <div key={index} className="medical-language-item">
                <span className="medical-language-name">{language.name}</span>
                <div className="medical-language-level-bar">
                  <div 
                    className="medical-language-level-fill" 
                    style={{ width: `${language.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="medical-quick-facts">
          <h3 className="medical-sidebar-heading">Hızlı Bilgiler</h3>
          
          <div className={`medical-fact-item ${data.quickFacts?.bloodDraw ? 'active' : ''}`}>
            <i className="fas fa-syringe"></i>
            <span>Kan Alma</span>
          </div>
          
          <div className={`medical-fact-item ${data.quickFacts?.patientCare ? 'active' : ''}`}>
            <i className="fas fa-procedures"></i>
            <span>Hasta Bakımı</span>
          </div>
          
          <div className={`medical-fact-item ${data.quickFacts?.emergencyResponse ? 'active' : ''}`}>
            <i className="fas fa-ambulance"></i>
            <span>Acil Müdahale</span>
          </div>
        </div>
      </div>

      <div className="medical-content">
        {data.certifications && data.certifications.length > 0 && (
          <div className="medical-certifications">
            <h3 className="medical-content-heading">Sertifikalar</h3>
            <div className="medical-cert-list">
              {data.certifications.map((cert, index) => (
                <div key={index} className="medical-cert-item">
                  <div className="medical-cert-name">{cert.name}</div>
                  <div className="medical-cert-issuer">{cert.issuer}</div>
                  <div className="medical-cert-date">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="medical-section">
          <h3 className="medical-content-heading">Klinik Deneyim</h3>
          {data.experience && data.experience.map((exp, index) => (
            <div key={index} className="medical-exp-item">
              <div className="medical-exp-header">
                <div className="medical-exp-title">{exp.title}</div>
                <div className="medical-exp-date">{exp.date}</div>
              </div>
              <div className="medical-exp-company">{exp.company}</div>
              <ul className="medical-exp-details">
                {exp.details && exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="medical-section">
          <h3 className="medical-content-heading">Eğitim</h3>
          {data.education && data.education.map((edu, index) => (
            <div key={index} className="medical-edu-item">
              <div className="medical-edu-header">
                <div className="medical-edu-degree">{edu.degree}</div>
                <div className="medical-edu-date">{edu.date}</div>
              </div>
              <div className="medical-edu-school">{edu.school}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalTemplate; 