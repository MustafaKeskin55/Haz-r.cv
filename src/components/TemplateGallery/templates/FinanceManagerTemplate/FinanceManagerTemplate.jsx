import React from 'react';
import './FinanceManagerTemplate.css';

const FinanceManagerTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Finans Müdürü",
    contact: {
      email: "ornek@email.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye"
    },
    summary: "Finans ve muhasebe alanında 10+ yıl deneyime sahip, stratejik finansal planlama ve bütçe yönetimi konusunda uzmanlaşmış finans profesyoneli.",
    experience: [],
    education: [],
    certifications: [],
    skills: []
  };

  return (
    <div className="finance-manager-template">
      <header className="finance-header">
        <div className="finance-header-content">
          <h1 className="finance-name">{data.name}</h1>
          <h2 className="finance-title">{data.title}</h2>
          
          <div className="finance-contact">
            {data.contact.email && (
              <div className="finance-contact-item">
                <i className="fas fa-envelope"></i>
                <span>{data.contact.email}</span>
              </div>
            )}
            
            {data.contact.phone && (
              <div className="finance-contact-item">
                <i className="fas fa-phone"></i>
                <span>{data.contact.phone}</span>
              </div>
            )}
            
            {data.contact.location && (
              <div className="finance-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{data.contact.location}</span>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="finance-main">
        <section className="finance-section">
          <h3 className="finance-section-title">Hakkımda</h3>
          <div className="finance-summary">{data.summary}</div>
        </section>
        
        <section className="finance-section">
          <h3 className="finance-section-title">Deneyim</h3>
          {data.experience && data.experience.length > 0 ? (
            data.experience.map((exp, index) => (
              <div key={index} className="finance-experience-item">
                <div className="finance-experience-header">
                  <h4 className="finance-experience-title">{exp.title}</h4>
                  <span className="finance-experience-date">{exp.date}</span>
                </div>
                <div className="finance-experience-company">{exp.company}</div>
                {exp.details && exp.details.length > 0 && (
                  <ul className="finance-experience-details">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <div className="finance-placeholder">Henüz deneyim bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="finance-section">
          <h3 className="finance-section-title">Eğitim</h3>
          {data.education && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="finance-education-item">
                <div className="finance-education-header">
                  <h4 className="finance-education-degree">{edu.degree}</h4>
                  <span className="finance-education-date">{edu.date}</span>
                </div>
                <div className="finance-education-school">{edu.school}</div>
              </div>
            ))
          ) : (
            <div className="finance-placeholder">Henüz eğitim bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="finance-section">
          <h3 className="finance-section-title">Sertifikalar</h3>
          {data.certifications && data.certifications.length > 0 ? (
            <ul className="finance-certifications-list">
              {data.certifications.map((cert, index) => (
                <li key={index} className="finance-certification-item">
                  {cert}
                </li>
              ))}
            </ul>
          ) : (
            <div className="finance-placeholder">Henüz sertifika bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="finance-section">
          <h3 className="finance-section-title">Yetenekler</h3>
          {data.skills && data.skills.length > 0 ? (
            <div className="finance-skills-grid">
              {data.skills.map((skill, index) => (
                <div key={index} className="finance-skill-item">
                  {skill}
                </div>
              ))}
            </div>
          ) : (
            <div className="finance-placeholder">Henüz yetenek bilgisi eklenmemiş</div>
          )}
        </section>
      </main>
    </div>
  );
};

export default FinanceManagerTemplate; 