import React from 'react';
import './AcademicTemplate.css';

const AcademicTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Akademisyen / Araştırmacı",
    researchInterests: [],
    contact: {},
    publications: [],
    teaching: [],
    education: [],
    certifications: []
  };

  return (
    <div className="academic-template">
      <div className="academic-header">
        <h1 className="academic-name">{data.name}</h1>
        <div className="academic-title">{data.title}</div>
        
        <div className="academic-contact">
          {data.contact.email && (
            <div className="academic-contact-item">
              <span className="academic-contact-label">E-posta:</span>
              <span className="academic-contact-value">{data.contact.email}</span>
            </div>
          )}
          
          {data.contact.phone && (
            <div className="academic-contact-item">
              <span className="academic-contact-label">Telefon:</span>
              <span className="academic-contact-value">{data.contact.phone}</span>
            </div>
          )}
          
          {data.contact.location && (
            <div className="academic-contact-item">
              <span className="academic-contact-label">Adres:</span>
              <span className="academic-contact-value">{data.contact.location}</span>
            </div>
          )}
        </div>
      </div>

      {data.researchInterests && data.researchInterests.length > 0 && (
        <div className="academic-section">
          <h2 className="academic-section-title">Araştırma Alanları</h2>
          <div className="academic-research-interests">
            {data.researchInterests.map((interest, index) => (
              <div key={index} className="academic-research-item">
                {interest}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.publications && data.publications.length > 0 && (
        <div className="academic-section">
          <h2 className="academic-section-title">Yayınlar</h2>
          <ul className="academic-publications-list">
            {data.publications.map((publication, index) => (
              <li key={index} className="academic-publication-item">
                {publication.authors && (
                  <span className="academic-publication-authors">
                    {publication.authors}
                  </span>
                )}
                {publication.year && (
                  <span className="academic-publication-year">
                    ({publication.year}).
                  </span>
                )}
                {publication.title && (
                  <span className="academic-publication-title">
                    {publication.title}.
                  </span>
                )}
                {publication.journal && (
                  <span className="academic-publication-journal">
                    <em>{publication.journal}</em>,
                  </span>
                )}
                {publication.volume && (
                  <span className="academic-publication-volume">
                    {publication.volume}
                    {publication.issue ? `(${publication.issue})` : ''},
                  </span>
                )}
                {publication.pages && (
                  <span className="academic-publication-pages">
                    {publication.pages}.
                  </span>
                )}
                {publication.doi && (
                  <span className="academic-publication-doi">
                    DOI: {publication.doi}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.teaching && data.teaching.length > 0 && (
        <div className="academic-section">
          <h2 className="academic-section-title">Öğretim Deneyimi</h2>
          {data.teaching.map((course, index) => (
            <div key={index} className="academic-teaching-item">
              <div className="academic-teaching-header">
                <div className="academic-teaching-title">{course.title}</div>
                <div className="academic-teaching-date">{course.date}</div>
              </div>
              <div className="academic-teaching-institution">{course.institution}</div>
              {course.description && (
                <div className="academic-teaching-desc">{course.description}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {data.education && data.education.length > 0 && (
        <div className="academic-section">
          <h2 className="academic-section-title">Eğitim</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="academic-education-item">
              <div className="academic-education-header">
                <div className="academic-education-degree">{edu.degree}</div>
                <div className="academic-education-date">{edu.date}</div>
              </div>
              <div className="academic-education-institution">{edu.institution}</div>
              {edu.thesis && (
                <div className="academic-education-thesis">
                  <span className="academic-thesis-label">Tez:</span> {edu.thesis}
                </div>
              )}
              {edu.advisor && (
                <div className="academic-education-advisor">
                  <span className="academic-advisor-label">Danışman:</span> {edu.advisor}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {data.certifications && data.certifications.length > 0 && (
        <div className="academic-section">
          <h2 className="academic-section-title">Sertifikalar ve Yetkiler</h2>
          <ul className="academic-certifications-list">
            {data.certifications.map((cert, index) => (
              <li key={index} className="academic-certification-item">
                <div className="academic-certification-name">{cert.name}</div>
                {cert.issuer && (
                  <div className="academic-certification-issuer">{cert.issuer}, {cert.date}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AcademicTemplate; 