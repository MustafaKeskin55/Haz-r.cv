import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Şablon Seçin',
      description: 'Sektörünüze ve pozisyonunuza uygun 25 profesyonel şablondan birini seçin.',
      icon: 'fas fa-th-large',
      color: '#4A90E2'
    },
    {
      number: '02',
      title: 'Bilgilerinizi Girin',
      description: 'Adım adım yönlendirmelerle CV\'nizin içeriğini kolayca doldurun.',
      icon: 'fas fa-keyboard',
      color: '#FF6B35'
    },
    {
      number: '03',
      title: 'Kişiselleştirin',
      description: 'Renk, font ve düzeni zevkinize göre özelleştirerek CV\'nizi benzersiz hale getirin.',
      icon: 'fas fa-paint-brush',
      color: '#0B3D91'
    },
    {
      number: '04',
      title: 'İndirin & Kullanın',
      description: 'CV\'nizi PDF, DOCX veya JPEG formatında indirin ve hemen kullanmaya başlayın.',
      icon: 'fas fa-download',
      color: '#10B981'
    }
  ];

  return (
    <section id="how-it-works" className="py-5 bg-light">
      <div className="container">
        <div className="section-title">
          <h2>CV Oluşturma Süreciniz</h2>
          <p>HazırCV ile profesyonel özgeçmiş oluşturmak sadece dört adımda tamamlanır.</p>
        </div>

        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="custom-card card h-100 border-0 bg-white">
                <div className="card-body text-center p-4">
                  <div 
                    className="step-number mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '70px', 
                      height: '70px', 
                      backgroundColor: 'white',
                      color: step.color,
                      border: `2px solid ${step.color}`,
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}
                  >
                    {step.number}
                  </div>
                  <div 
                    className="step-icon-container mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      backgroundColor: `${step.color}20` 
                    }}
                  >
                    <i className={`${step.icon} fa-lg`} style={{ color: step.color }}></i>
                  </div>
                  <h3 className="h4 mb-3">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h4>Hazır mısınız?</h4>
                    <p className="mb-md-0">CV'nizi oluşturmaya hemen başlayın ve işe alım sürecinde bir adım öne geçin.</p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <a href="/templates" className="btn btn-primary">
                      Hemen Başla <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 