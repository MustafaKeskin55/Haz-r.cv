import React, { useState } from 'react';
import './TeacherTemplate.css';

const TeacherTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Öğretmen / Eğitimci",
    photo: "",
    contact: {
      email: "ornek@email.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye"
    },
    summary: "Öğrenci merkezli eğitim yaklaşımını benimseyen, 5 yıllık deneyime sahip eğitimci. Farklı öğrenme stillerine sahip öğrencilere uygun yöntemler geliştirme konusunda uzmanlaşmış.",
    education: [],
    teachingExperience: [],
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
    <div className="teacher-template">
      <header className="teacher-header">
        <div className="teacher-photo-section">
          {photo ? (
            <img src={photo} alt={data.name} className="teacher-photo" />
          ) : (
            <div className="teacher-photo-placeholder">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="teacher-photo-input"
                title="Profil Fotoğrafı Yükle"
              />
              <i className="fas fa-user-graduate"></i>
              <span>Profil Fotoğrafı Yükle</span>
            </div>
          )}
        </div>
        
        <div className="teacher-header-content">
          <h1 className="teacher-name">{data.name}</h1>
          <h2 className="teacher-title">{data.title}</h2>
          
          <div className="teacher-contact">
            {data.contact.email && (
              <div className="teacher-contact-item">
                <i className="fas fa-envelope"></i>
                <span>{data.contact.email}</span>
              </div>
            )}
            
            {data.contact.phone && (
              <div className="teacher-contact-item">
                <i className="fas fa-phone"></i>
                <span>{data.contact.phone}</span>
              </div>
            )}
            
            {data.contact.location && (
              <div className="teacher-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{data.contact.location}</span>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="teacher-main">
        <section className="teacher-section">
          <div className="teacher-section-header">
            <i className="fas fa-user"></i>
            <h3 className="teacher-section-title">Hakkımda</h3>
          </div>
          <div className="teacher-summary">{data.summary}</div>
        </section>
        
        <section className="teacher-section">
          <div className="teacher-section-header">
            <i className="fas fa-graduation-cap"></i>
            <h3 className="teacher-section-title">Eğitim Geçmişi</h3>
          </div>
          
          {data.education && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="teacher-education-item">
                <div className="teacher-education-header">
                  <h4 className="teacher-education-degree">{edu.degree}</h4>
                  <span className="teacher-education-date">{edu.date}</span>
                </div>
                <div className="teacher-education-school">{edu.school}</div>
                {edu.description && (
                  <div className="teacher-education-description">{edu.description}</div>
                )}
              </div>
            ))
          ) : (
            <div className="teacher-placeholder">Henüz eğitim bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="teacher-section">
          <div className="teacher-section-header">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3 className="teacher-section-title">Ders Deneyimi</h3>
          </div>
          
          {data.teachingExperience && data.teachingExperience.length > 0 ? (
            data.teachingExperience.map((exp, index) => (
              <div key={index} className="teacher-experience-item">
                <div className="teacher-experience-header">
                  <h4 className="teacher-experience-title">{exp.title}</h4>
                  <span className="teacher-experience-date">{exp.date}</span>
                </div>
                <div className="teacher-experience-school">{exp.school}</div>
                {exp.subjects && (
                  <div className="teacher-experience-subjects">
                    <span className="teacher-subjects-label">Dersler:</span>
                    <span className="teacher-subjects-list">{exp.subjects}</span>
                  </div>
                )}
                {exp.description && (
                  <div className="teacher-experience-description">{exp.description}</div>
                )}
              </div>
            ))
          ) : (
            <div className="teacher-placeholder">Henüz ders deneyimi bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="teacher-section">
          <div className="teacher-section-header">
            <i className="fas fa-certificate"></i>
            <h3 className="teacher-section-title">Sertifikalar</h3>
          </div>
          
          {data.certifications && data.certifications.length > 0 ? (
            <div className="teacher-certifications-list">
              {data.certifications.map((cert, index) => (
                <div key={index} className="teacher-certification-item">
                  <div className="teacher-certification-name">{cert.name}</div>
                  <div className="teacher-certification-details">
                    <span>{cert.issuer}</span>
                    {cert.date && <span> | {cert.date}</span>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="teacher-placeholder">Henüz sertifika bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="teacher-section">
          <div className="teacher-section-header">
            <i className="fas fa-language"></i>
            <h3 className="teacher-section-title">Yabancı Diller</h3>
          </div>
          
          {data.languages && data.languages.length > 0 ? (
            <div className="teacher-languages-list">
              {data.languages.map((lang, index) => (
                <div key={index} className="teacher-language-item">
                  <span className="teacher-language-name">{lang.name}</span>
                  <div className="teacher-language-level-container">
                    <div 
                      className="teacher-language-level" 
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                  <span className="teacher-language-level-text">{lang.levelText}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="teacher-placeholder">Henüz yabancı dil bilgisi eklenmemiş</div>
          )}
        </section>
      </main>
    </div>
  );
};

export default TeacherTemplate; 