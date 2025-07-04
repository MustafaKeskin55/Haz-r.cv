import React, { useState } from 'react';
import './CreateCV.css';

// Template imports
import MinimalTemplate from '../../components/TemplateGallery/templates/MinimalTemplate/MinimalTemplate';
import TechnicalTemplate from '../../components/TemplateGallery/templates/TechnicalTemplate/TechnicalTemplate';
import CreativeTemplate from '../../components/TemplateGallery/templates/CreativeTemplate/CreativeTemplate';
import ExecutiveTemplate from '../../components/TemplateGallery/templates/ExecutiveTemplate/ExecutiveTemplate';

const CreateCV = () => {
  const [step, setStep] = useState('template-selection');
  const [activeTab, setActiveTab] = useState('kisisel');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  // CV verilerini tutan state
  const [cvData, setCvData] = useState({
    name: "Ad Soyad",
    title: "Pozisyon Başlığı",
    contact: {
      email: "email@ornek.com",
      phone: "555 123 4567",
      location: "İstanbul, Türkiye",
      website: "www.siteminiz.com"
    },
    summary: "Kendinizi kısaca tanıtın. Deneyimleriniz, yetenekleriniz ve kariyer hedeflerinizden bahsedin.",
    experience: [
      {
        title: "İş Pozisyonu",
        company: "Şirket Adı",
        date: "Ocak 2020 - Günümüz",
        details: ["İş tanımı ve sorumluluklar", "Başarılar ve projeler", "Kullanılan teknik ve teknolojiler"]
      }
    ],
    education: [
      {
        degree: "Lisans Derecesi",
        school: "Üniversite Adı",
        date: "2016 - 2020"
      }
    ],
    skills: [
      { name: "Beceri 1", level: 90 },
      { name: "Beceri 2", level: 75 },
      { name: "Beceri 3", level: 80 }
    ],
    languages: [
      { name: "Türkçe", level: "Anadil" },
      { name: "İngilizce", level: "İleri Seviye" }
    ]
  });

  // Form verilerini güncelleme fonksiyonu
  const handleInputChange = (section, field, value, index = null, subfield = null) => {
    setCvData(prevData => {
      const newData = { ...prevData };
      
      if (index !== null) {
        if (subfield) {
          newData[section][index][field][subfield] = value;
        } else {
          newData[section][index][field] = value;
        }
      } else if (section === 'contact') {
        newData.contact[field] = value;
      } else {
        newData[field] = value;
      }
      
      return newData;
    });
  };

  // Deneyim veya eğitim eklemek için
  const addItem = (section) => {
    setCvData(prevData => {
      const newData = { ...prevData };
      if (section === 'experience') {
        newData.experience = [
          ...newData.experience,
          { title: "", company: "", date: "", details: [""] }
        ];
      } else if (section === 'education') {
        newData.education = [
          ...newData.education,
          { degree: "", school: "", date: "" }
        ];
      } else if (section === 'skills') {
        newData.skills = [
          ...newData.skills,
          { name: "", level: 50 }
        ];
      } else if (section === 'languages') {
        newData.languages = [
          ...newData.languages,
          { name: "", level: "" }
        ];
      }
      return newData;
    });
  };

  // Deneyim veya eğitim silmek için
  const removeItem = (section, index) => {
    setCvData(prevData => {
      const newData = { ...prevData };
      newData[section] = newData[section].filter((_, i) => i !== index);
      return newData;
    });
  };

  // Detay alanı eklemek için (deneyim için)
  const addDetail = (expIndex) => {
    setCvData(prevData => {
      const newData = { ...prevData };
      newData.experience[expIndex].details.push("");
      return newData;
    });
  };

  // Detay alanı silmek için (deneyim için)
  const removeDetail = (expIndex, detailIndex) => {
    setCvData(prevData => {
      const newData = { ...prevData };
      newData.experience[expIndex].details = 
        newData.experience[expIndex].details.filter((_, i) => i !== detailIndex);
      return newData;
    });
  };

  // Şablon seçildiğinde
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setStep('form-filling');
  };

  // Aktif şablonu göstermek için
  const renderSelectedTemplate = () => {
    switch (selectedTemplate) {
      case 'minimal':
        return <MinimalTemplate userData={cvData} />;
      case 'technical':
        return <TechnicalTemplate userData={cvData} />;
      case 'creative':
        return <CreativeTemplate userData={cvData} />;
      case 'executive':
        return <ExecutiveTemplate userData={cvData} />;
      default:
        return null;
    }
  };

  // Şablon görselini getiren fonksiyon
  const getTemplateImage = (templateType) => {
    return `/images/templates/${templateType}-cv-sablonu.jpg`;
  };

  // Şablon seçme ekranı
  if (step === 'template-selection') {
    return (
      <div className="cv-creator">
        <div className="template-selection-screen">
          <div className="template-selection-header">
            <h1>CV Şablonu Seçin</h1>
            <p>Profesyonel CV'nizi oluşturmak için aşağıdaki şablonlardan birini seçin</p>
          </div>
          
          <div className="template-grid">
            <div className="template-card" onClick={() => handleTemplateSelect('minimal')}>
              <div className="template-preview minimal-preview">
                <img 
                  src={getTemplateImage('minimal')} 
                  alt="Minimal CV Şablonu" 
                  className="template-image"
                />
              </div>
              <div className="template-info">
                <h3>Minimal</h3>
                <p>Sade ve profesyonel bir tasarım</p>
                <button className="select-template-btn">Seç</button>
              </div>
            </div>
            
            <div className="template-card" onClick={() => handleTemplateSelect('technical')}>
              <div className="template-preview technical-preview">
                <img 
                  src={getTemplateImage('technical')} 
                  alt="Teknik CV Şablonu" 
                  className="template-image"
                />
              </div>
              <div className="template-info">
                <h3>Teknik</h3>
                <p>Teknik pozisyonlar için ideal</p>
                <button className="select-template-btn">Seç</button>
              </div>
            </div>
            
            <div className="template-card" onClick={() => handleTemplateSelect('creative')}>
              <div className="template-preview creative-preview">
                <img 
                  src={getTemplateImage('creative')} 
                  alt="Yaratıcı CV Şablonu" 
                  className="template-image"
                />
              </div>
              <div className="template-info">
                <h3>Yaratıcı</h3>
                <p>Kreatif sektörler için modern tasarım</p>
                <button className="select-template-btn">Seç</button>
              </div>
            </div>
            
            <div className="template-card" onClick={() => handleTemplateSelect('executive')}>
              <div className="template-preview executive-preview">
                <img 
                  src={getTemplateImage('executive')} 
                  alt="Yönetici CV Şablonu" 
                  className="template-image"
                />
              </div>
              <div className="template-info">
                <h3>Yönetici</h3>
                <p>Yönetici pozisyonları için şık tasarım</p>
                <button className="select-template-btn">Seç</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CV form doldurma ekranı
  return (
    <div className="cv-creator">
      <div className="create-cv-container">
        <div className="cv-editor">
          <div className="editor-header">
            <h2>CV Bilgilerinizi Doldurun</h2>
            <div className="template-badge">
              <span>Şablon:</span> 
              {selectedTemplate === 'minimal' && 'Minimal'}
              {selectedTemplate === 'technical' && 'Teknik'}
              {selectedTemplate === 'creative' && 'Yaratıcı'}
              {selectedTemplate === 'executive' && 'Yönetici'}
              <button 
                className="change-template-btn"
                onClick={() => setStep('template-selection')}
              >
                Değiştir
              </button>
            </div>
          </div>

          <div className="cv-form-container">
            <div className="tab-navigation">
              <button 
                className={activeTab === 'kisisel' ? 'active' : ''} 
                onClick={() => setActiveTab('kisisel')}
              >
                Kişisel Bilgiler
              </button>
              <button 
                className={activeTab === 'deneyim' ? 'active' : ''} 
                onClick={() => setActiveTab('deneyim')}
              >
                Deneyim
              </button>
              <button 
                className={activeTab === 'egitim' ? 'active' : ''} 
                onClick={() => setActiveTab('egitim')}
              >
                Eğitim
              </button>
              <button 
                className={activeTab === 'beceriler' ? 'active' : ''} 
                onClick={() => setActiveTab('beceriler')}
              >
                Beceriler
              </button>
            </div>

            <div className="form-content">
              {activeTab === 'kisisel' && (
                <div className="form-section">
                  <div className="form-group">
                    <label>Ad Soyad</label>
                    <input 
                      type="text" 
                      value={cvData.name}
                      onChange={(e) => handleInputChange(null, 'name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Pozisyon</label>
                    <input 
                      type="text" 
                      value={cvData.title}
                      onChange={(e) => handleInputChange(null, 'title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>E-posta</label>
                    <input 
                      type="email" 
                      value={cvData.contact.email}
                      onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon</label>
                    <input 
                      type="text" 
                      value={cvData.contact.phone}
                      onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Konum</label>
                    <input 
                      type="text" 
                      value={cvData.contact.location}
                      onChange={(e) => handleInputChange('contact', 'location', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Web Sitesi</label>
                    <input 
                      type="text" 
                      value={cvData.contact.website}
                      onChange={(e) => handleInputChange('contact', 'website', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Özet</label>
                    <textarea
                      value={cvData.summary}
                      onChange={(e) => handleInputChange(null, 'summary', e.target.value)}
                      rows="4"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'deneyim' && (
                <div className="form-section">
                  {cvData.experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <h3>Deneyim {index + 1}</h3>
                      <button 
                        className="remove-button" 
                        onClick={() => removeItem('experience', index)}
                      >
                        Sil
                      </button>
                      
                      <div className="form-group">
                        <label>Pozisyon</label>
                        <input
                          type="text"
                          value={exp.title}
                          onChange={(e) => handleInputChange('experience', 'title', e.target.value, index)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Şirket</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Tarih</label>
                        <input
                          type="text"
                          value={exp.date}
                          placeholder="Örn: Ocak 2020 - Günümüz"
                          onChange={(e) => handleInputChange('experience', 'date', e.target.value, index)}
                        />
                      </div>
                      
                      <div className="form-group details-group">
                        <label>Detaylar</label>
                        {exp.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="detail-item">
                            <input
                              type="text"
                              value={detail}
                              onChange={(e) => {
                                const newExp = {...exp};
                                newExp.details[detailIndex] = e.target.value;
                                handleInputChange('experience', '', '', index, 'details');
                                setCvData({
                                  ...cvData,
                                  experience: cvData.experience.map((item, i) => i === index ? newExp : item)
                                });
                              }}
                            />
                            <button 
                              className="remove-detail-button"
                              onClick={() => removeDetail(index, detailIndex)}
                            >
                              -
                            </button>
                          </div>
                        ))}
                        <button 
                          className="add-detail-button" 
                          onClick={() => addDetail(index)}
                        >
                          + Detay Ekle
                        </button>
                      </div>
                    </div>
                  ))}
                  <button 
                    className="add-item-button" 
                    onClick={() => addItem('experience')}
                  >
                    + Yeni Deneyim Ekle
                  </button>
                </div>
              )}

              {activeTab === 'egitim' && (
                <div className="form-section">
                  {cvData.education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <h3>Eğitim {index + 1}</h3>
                      <button 
                        className="remove-button" 
                        onClick={() => removeItem('education', index)}
                      >
                        Sil
                      </button>
                      
                      <div className="form-group">
                        <label>Derece</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Okul</label>
                        <input
                          type="text"
                          value={edu.school}
                          onChange={(e) => handleInputChange('education', 'school', e.target.value, index)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Tarih</label>
                        <input
                          type="text"
                          value={edu.date}
                          placeholder="Örn: 2016 - 2020"
                          onChange={(e) => handleInputChange('education', 'date', e.target.value, index)}
                        />
                      </div>
                    </div>
                  ))}
                  <button 
                    className="add-item-button" 
                    onClick={() => addItem('education')}
                  >
                    + Yeni Eğitim Ekle
                  </button>
                </div>
              )}

              {activeTab === 'beceriler' && (
                <div className="form-section">
                  <h3>Beceriler</h3>
                  {cvData.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="form-group">
                        <input
                          type="text"
                          value={skill.name}
                          placeholder="Beceri adı"
                          onChange={(e) => handleInputChange('skills', 'name', e.target.value, index)}
                        />
                      </div>
                      <div className="form-group skill-level">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => handleInputChange('skills', 'level', parseInt(e.target.value), index)}
                        />
                        <span>{skill.level}%</span>
                      </div>
                      <button 
                        className="remove-button small" 
                        onClick={() => removeItem('skills', index)}
                      >
                        Sil
                      </button>
                    </div>
                  ))}
                  <button 
                    className="add-item-button" 
                    onClick={() => addItem('skills')}
                  >
                    + Yeni Beceri Ekle
                  </button>
                  
                  <h3>Diller</h3>
                  {cvData.languages.map((language, index) => (
                    <div key={index} className="language-item">
                      <div className="form-group">
                        <input
                          type="text"
                          value={language.name}
                          placeholder="Dil adı"
                          onChange={(e) => handleInputChange('languages', 'name', e.target.value, index)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          value={language.level}
                          placeholder="Seviye (ör: İleri Seviye)"
                          onChange={(e) => handleInputChange('languages', 'level', e.target.value, index)}
                        />
                      </div>
                      <button 
                        className="remove-button small" 
                        onClick={() => removeItem('languages', index)}
                      >
                        Sil
                      </button>
                    </div>
                  ))}
                  <button 
                    className="add-item-button" 
                    onClick={() => addItem('languages')}
                  >
                    + Yeni Dil Ekle
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="cv-preview">
          <h2>Önizleme</h2>
          <div className="preview-container">
            <div className="preview-content">
              {renderSelectedTemplate()}
            </div>
          </div>
          <div className="cv-actions">
            <button className="save-button">CV'yi Kaydet</button>
            <button className="download-button">PDF İndir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCV; 