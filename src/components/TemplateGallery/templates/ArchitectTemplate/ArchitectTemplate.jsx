import React, { useState } from 'react';
import './ArchitectTemplate.css';

const ArchitectTemplate = ({ userData }) => {
  // Default data if userData is empty
  const data = userData || {
    name: "Ad Soyad",
    title: "Mimar / Şehir Plancısı",
    photo: "",
    contact: {},
    summary: "",
    projects: [],
    experience: [],
    education: [],
    tools: []
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
    <div className="architect-template">
      <div className="architect-header">
        <div className="architect-name">{data.name}</div>
        <div className="architect-title">{data.title}</div>
      </div>

      <div className="architect-main">
        <div className="architect-left-column">
          <div className="architect-photo-container">
            {photo ? (
              <img src={photo} alt={data.name} className="architect-photo" />
            ) : (
              <div 
                className="architect-photo-placeholder"
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      setPhoto(e.target.result);
                    };
                    reader.readAsDataURL(e.dataTransfer.files[0]);
                  }
                }}
              >
                <i className="fas fa-drafting-compass"></i>
                <div className="architect-photo-text">
                  Fotoğraf yüklemek için tıklayın veya sürükleyin
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="architect-photo-input"
                  title="Fotoğraf yükle"
                />
              </div>
            )}
          </div>

          <div className="architect-contact">
            {data.contact.email && (
              <div className="architect-contact-item">
                <i className="fas fa-envelope"></i>
                <span>{data.contact.email}</span>
              </div>
            )}
            
            {data.contact.phone && (
              <div className="architect-contact-item">
                <i className="fas fa-phone"></i>
                <span>{data.contact.phone}</span>
              </div>
            )}
            
            {data.contact.location && (
              <div className="architect-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{data.contact.location}</span>
              </div>
            )}
            
            {data.contact.website && (
              <div className="architect-contact-item">
                <i className="fas fa-globe"></i>
                <span>{data.contact.website}</span>
              </div>
            )}
          </div>

          {data.summary && (
            <div className="architect-section">
              <h2 className="architect-section-title">Özet</h2>
              <p className="architect-summary">{data.summary}</p>
            </div>
          )}

          <div className="architect-section">
            <h2 className="architect-section-title">Deneyim</h2>
            {data.experience && data.experience.map((job, index) => (
              <div key={index} className="architect-exp-item">
                <div className="architect-exp-header">
                  <div className="architect-exp-title">{job.title}</div>
                  <div className="architect-exp-date">{job.date}</div>
                </div>
                <div className="architect-exp-company">{job.company}</div>
                <div className="architect-exp-desc">{job.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="architect-right-column">
          {data.projects && data.projects.length > 0 && (
            <div className="architect-section">
              <h2 className="architect-section-title">Proje Portföyü</h2>
              <div className="architect-projects-grid">
                {data.projects.map((project, index) => (
                  <div key={index} className="architect-project-item">
                    {project.image && (
                      <div className="architect-project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                    )}
                    <div className="architect-project-info">
                      <div className="architect-project-title">{project.title}</div>
                      <div className="architect-project-desc">{project.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="architect-section">
            <h2 className="architect-section-title">Eğitim</h2>
            {data.education && data.education.map((edu, index) => (
              <div key={index} className="architect-edu-item">
                <div className="architect-edu-header">
                  <div className="architect-edu-degree">{edu.degree}</div>
                  <div className="architect-edu-date">{edu.date}</div>
                </div>
                <div className="architect-edu-school">{edu.school}</div>
              </div>
            ))}
          </div>

          {data.tools && data.tools.length > 0 && (
            <div className="architect-section">
              <h2 className="architect-section-title">Yazılım ve Araçlar</h2>
              <div className="architect-tools-grid">
                {data.tools.map((tool, index) => (
                  <div key={index} className="architect-tool-item">
                    <div className="architect-tool-name">{tool.name}</div>
                    <div className="architect-tool-level-bar">
                      <div 
                        className="architect-tool-level-fill" 
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchitectTemplate; 