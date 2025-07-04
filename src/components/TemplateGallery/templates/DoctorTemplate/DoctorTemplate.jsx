import React, { useState } from 'react';
import './DoctorTemplate.css';

const DoctorTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Doktor / Tıp Uzmanı",
    photo: "",
    contact: {
      email: "ornek@email.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye",
      website: ""
    },
    summary: "10 yıllık klinik deneyime sahip, hasta odaklı yaklaşımı benimseyen tıp uzmanı. Teşhis ve tedavi süreçlerinde güncel tıbbi yöntemleri uygulama konusunda uzmanlaşmış.",
    clinicalExperience: [],
    education: [],
    certifications: [],
    languages: []
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
    <div className="doctor-template">
      <header className="doctor-header">
        <div className="doctor-header-content">
          {photo ? (
            <div className="doctor-photo-container">
              <img src={photo} alt={data.name} className="doctor-photo" />
            </div>
          ) : (
            <div className="doctor-photo-placeholder">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="doctor-photo-input"
                title="Profil Fotoğrafı Yükle"
              />
              <i className="fas fa-user-md"></i>
              <span>Profil Fotoğrafı Yükle</span>
            </div>
          )}
          
          <div className="doctor-header-text">
            <h1 className="doctor-name">{data.name}</h1>
            <h2 className="doctor-title">{data.title}</h2>
          </div>
        </div>
        
        <div className="doctor-contact">
          {data.contact.email && (
            <div className="doctor-contact-item">
              <i className="fas fa-envelope"></i>
              <span>{data.contact.email}</span>
            </div>
          )}
          
          {data.contact.phone && (
            <div className="doctor-contact-item">
              <i className="fas fa-phone"></i>
              <span>{data.contact.phone}</span>
            </div>
          )}
          
          {data.contact.location && (
            <div className="doctor-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{data.contact.location}</span>
            </div>
          )}
          
          {data.contact.website && (
            <div className="doctor-contact-item">
              <i className="fas fa-globe"></i>
              <span>{data.contact.website}</span>
            </div>
          )}
        </div>
      </header>
      
      <main className="doctor-main">
        <section className="doctor-section">
          <h3 className="doctor-section-title">Hakkımda</h3>
          <div className="doctor-summary">{data.summary}</div>
        </section>
        
        <section className="doctor-section">
          <h3 className="doctor-section-title">Klinik Deneyim</h3>
          
          {data.clinicalExperience && data.clinicalExperience.length > 0 ? (
            data.clinicalExperience.map((exp, index) => (
              <div key={index} className="doctor-experience-item">
                <div className="doctor-experience-header">
                  <h4 className="doctor-experience-title">{exp.title}</h4>
                  <span className="doctor-experience-date">{exp.date}</span>
                </div>
                <div className="doctor-experience-institution">{exp.institution}</div>
                <div className="doctor-experience-description">{exp.description}</div>
              </div>
            ))
          ) : (
            <div className="doctor-placeholder">Henüz klinik deneyim bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="doctor-section">
          <h3 className="doctor-section-title">Eğitim</h3>
          
          {data.education && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="doctor-education-item">
                <div className="doctor-education-header">
                  <h4 className="doctor-education-degree">{edu.degree}</h4>
                  <span className="doctor-education-date">{edu.date}</span>
                </div>
                <div className="doctor-education-school">{edu.school}</div>
              </div>
            ))
          ) : (
            <div className="doctor-placeholder">Henüz eğitim bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="doctor-section">
          <h3 className="doctor-section-title">Sertifikalar</h3>
          
          {data.certifications && data.certifications.length > 0 ? (
            <div className="doctor-certifications-list">
              {data.certifications.map((cert, index) => (
                <div key={index} className="doctor-certification-item">
                  <div className="doctor-certification-name">{cert.name}</div>
                  <div className="doctor-certification-details">
                    <span>{cert.issuer}</span>
                    {cert.date && <span> | {cert.date}</span>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="doctor-placeholder">Henüz sertifika bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="doctor-section">
          <h3 className="doctor-section-title">Yabancı Diller</h3>
          
          {data.languages && data.languages.length > 0 ? (
            <div className="doctor-languages-grid">
              {data.languages.map((lang, index) => (
                <div key={index} className="doctor-language-item">
                  <span className="doctor-language-name">{lang.name}</span>
                  <span className="doctor-language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="doctor-placeholder">Henüz yabancı dil bilgisi eklenmemiş</div>
          )}
        </section>
      </main>
    </div>
  );
};

export default DoctorTemplate; 