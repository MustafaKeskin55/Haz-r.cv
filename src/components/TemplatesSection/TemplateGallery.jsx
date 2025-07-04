import React, { useState } from 'react';
import './TemplateGallery.css';

const TemplateGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'professional', name: 'Profesyonel' },
    { id: 'creative', name: 'Yaratıcı' },
    { id: 'modern', name: 'Modern' },
    { id: 'simple', name: 'Sade' },
    { id: 'academic', name: 'Akademik' },
    { id: 'techstack', name: 'Teknoloji Yığını' },
    { id: 'minimalpure', name: 'Sade Minimal' },
    { id: 'corporateblue', name: 'Kurumsal Mavi' },
    { id: 'creativesplit', name: 'Yaratıcı Bölünmüş' },
    { id: 'startuphustler', name: 'Girişimci' },
    { id: 'legal', name: 'Hukukçu' },
    { id: 'nurse', name: 'Hemşire' },
    { id: 'architect', name: 'Mimar' },
    { id: 'academic', name: 'Akademisyen' },
    { id: 'photographer', name: 'Fotoğrafçı' }
  ];

  
  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <section id="templates" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>Profesyonel CV Şablonları</h2>
          <p>Her sektöre ve pozisyona uygun 25 farklı modern şablondan birini seçin veya hepsini kullanın.</p>
        </div>
        
        {/* Filter Categories */}
        <div className="mb-5 text-center">
          <div className="btn-group flex-wrap" role="group">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-primary'} m-1`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Templates Grid */}
        <div className="row g-4">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="custom-card card h-100">
                <div className="position-relative">
                  <img 
                    src={template.image} 
                    className="card-img-top" 
                    alt={`${template.name} CV Şablonu`} 
                  />
                  {template.popular && (
                    <div 
                      className="position-absolute badge bg-danger" 
                      style={{ top: '10px', right: '10px' }}
                    >
                      Popüler
                    </div>
                  )}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{template.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-5">
          <a href="/templates" className="btn btn-lg btn-outline-primary">
            Tüm Şablonları Görüntüle
            <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery; 