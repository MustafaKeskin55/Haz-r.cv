import React from 'react';
import './WarehouseTemplate.css';

const WarehouseTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Depo ve Lojistik Çalışanı",
    contact: {
      email: "ornek@email.com",
      phone: "+90 (555) 123 4567",
      location: "İstanbul, Türkiye"
    },
    summary: "5 yıllık depo ve lojistik deneyimine sahip, verimli stok yönetimi ve sevkiyat süreçleri konusunda uzmanlaşmış çalışan. Forklift operatörlüğü sertifikasına sahip.",
    warehouseExperience: [],
    certifications: [],
    forkliftLicense: {
      hasLicense: true,
      licenseType: "Forklift Operatörlük Belgesi",
      issueDate: "2018",
      expiryDate: "2028"
    },
    education: []
  };

  return (
    <div className="warehouse-template">
      <header className="warehouse-header">
        <div className="warehouse-header-content">
          <h1 className="warehouse-name">{data.name}</h1>
          <h2 className="warehouse-title">{data.title}</h2>
        </div>
      </header>
      
      <div className="warehouse-contact">
        {data.contact.email && (
          <div className="warehouse-contact-item">
            <i className="fas fa-envelope"></i>
            <span>{data.contact.email}</span>
          </div>
        )}
        
        {data.contact.phone && (
          <div className="warehouse-contact-item">
            <i className="fas fa-phone"></i>
            <span>{data.contact.phone}</span>
          </div>
        )}
        
        {data.contact.location && (
          <div className="warehouse-contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{data.contact.location}</span>
          </div>
        )}
      </div>
      
      <main className="warehouse-main">
        <section className="warehouse-section">
          <h3 className="warehouse-section-title">
            <i className="fas fa-user"></i>
            Hakkımda
          </h3>
          <div className="warehouse-summary">{data.summary}</div>
        </section>
        
        <section className="warehouse-section">
          <h3 className="warehouse-section-title">
            <i className="fas fa-box"></i>
            Depo Deneyimi
          </h3>
          
          {data.warehouseExperience && data.warehouseExperience.length > 0 ? (
            data.warehouseExperience.map((exp, index) => (
              <div key={index} className="warehouse-experience-item">
                <div className="warehouse-experience-header">
                  <h4 className="warehouse-experience-title">{exp.title}</h4>
                  <span className="warehouse-experience-date">{exp.date}</span>
                </div>
                <div className="warehouse-experience-company">{exp.company}</div>
                {exp.responsibilities && (
                  <ul className="warehouse-experience-responsibilities">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <div className="warehouse-placeholder">Henüz depo deneyimi bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="warehouse-section">
          <h3 className="warehouse-section-title">
            <i className="fas fa-certificate"></i>
            Sertifikalar
          </h3>
          
          {data.certifications && data.certifications.length > 0 ? (
            <ul className="warehouse-certifications-list">
              {data.certifications.map((cert, index) => (
                <li key={index} className="warehouse-certification-item">
                  <span className="warehouse-certification-name">{cert.name}</span>
                  {cert.date && <span className="warehouse-certification-date">{cert.date}</span>}
                </li>
              ))}
            </ul>
          ) : (
            <div className="warehouse-placeholder">Henüz sertifika bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="warehouse-section">
          <h3 className="warehouse-section-title">
            <i className="fas fa-truck"></i>
            Forklift Lisansı
          </h3>
          
          {data.forkliftLicense && data.forkliftLicense.hasLicense ? (
            <div className="warehouse-license-info">
              <div className="warehouse-license-type">
                <strong>Lisans Türü:</strong> {data.forkliftLicense.licenseType}
              </div>
              <div className="warehouse-license-dates">
                <span><strong>Alınma Tarihi:</strong> {data.forkliftLicense.issueDate}</span>
                <span><strong>Geçerlilik Tarihi:</strong> {data.forkliftLicense.expiryDate}</span>
              </div>
            </div>
          ) : (
            <div className="warehouse-placeholder">Forklift lisansı bilgisi eklenmemiş</div>
          )}
        </section>
        
        <section className="warehouse-section">
          <h3 className="warehouse-section-title">
            <i className="fas fa-graduation-cap"></i>
            Eğitim
          </h3>
          
          {data.education && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="warehouse-education-item">
                <div className="warehouse-education-header">
                  <h4 className="warehouse-education-degree">{edu.degree}</h4>
                  <span className="warehouse-education-date">{edu.date}</span>
                </div>
                <div className="warehouse-education-school">{edu.school}</div>
              </div>
            ))
          ) : (
            <div className="warehouse-placeholder">Henüz eğitim bilgisi eklenmemiş</div>
          )}
        </section>
      </main>
    </div>
  );
};

export default WarehouseTemplate; 