import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: 'Ücretsiz',
      price: 0,
      annualPrice: 0,
      description: 'Temel CV ihtiyaçları için',
      features: [
        '3 temel şablon',
        '1 CV oluşturma',
        'PDF indirme',
        'Temel düzenleme özellikleri',
        'E-posta desteği'
      ],
      button: 'Ücretsiz Başla',
      buttonVariant: 'outline-primary',
      popular: false
    },
    {
      name: 'Premium',
      price: 9.90,
      annualPrice: 89.90, // Yıllık ödeme (aylık 7.49 TL)
      description: 'Profesyonel adaylar için',
      features: [
        '10 premium şablon',
        '5 farklı CV oluşturma',
        'Tüm formatlarda indirme',
        'AI destekli içerik önerileri (sınırlı)',
        'Ön yazı oluşturma (3 adet)',
        'Öncelikli e-posta desteği'
      ],
      button: 'Premium\'a Yükselt',
      buttonVariant: 'primary',
      popular: true
    },
    {
      name: 'Pro',
      price: 29.90,
      annualPrice: 239.90, // Yıllık ödeme (aylık 19.99 TL)
      description: 'Kariyer odaklı profesyoneller için',
      features: [
        'Tüm şablonlara erişim (25 adet)',
        'Sınırsız CV oluşturma',
        'Tüm AI özellikleri',
        'Mülakat simülasyonu',
        'Kariyer testi',
        'İş İlanı-CV Eşleştirme (aylık 5 ilan)',
        'CV Puanlama ve geliştirme önerileri',
        'Öncelikli destek'
      ],
      button: 'Pro\'ya Yükselt',
      buttonVariant: 'primary',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>Uygun Fiyatlandırma</h2>
          <p>İhtiyaçlarınıza en uygun planı seçerek profesyonel CV'nizi oluşturmaya başlayın.</p>
        </div>

        {/* Billing Toggle */}
        <div className="d-flex justify-content-center align-items-center mb-5">
          <span className={`me-3 ${!isAnnual ? 'fw-bold' : ''}`}>Aylık</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="billingToggle"
              style={{ width: '3rem', height: '1.5rem' }}
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <label className="form-check-label visually-hidden" htmlFor="billingToggle">
              Fatura Periyodu
            </label>
          </div>
          <span className={`ms-3 ${isAnnual ? 'fw-bold' : ''}`}>Yıllık</span>
          <span className="badge bg-danger ms-2">%25 Tasarruf</span>
        </div>

        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4">
              <div className={`custom-card card h-100 ${plan.popular ? 'border-primary shadow' : ''}`}>
                {plan.popular && (
                  <div className="card-header bg-primary text-white text-center py-3">
                    <span className="badge bg-white text-primary">Popüler Seçim</span>
                  </div>
                )}
                <div className="card-body p-4">
                  <h3 className="card-title h4 mb-3">{plan.name}</h3>
                  <p className="text-muted mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="display-4 fw-bold">
                      {isAnnual ? plan.annualPrice : plan.price}
                    </span>
                    <span className="text-muted ms-1">{plan.price === 0 ? '' : isAnnual ? 'TL/yıl' : 'TL/ay'}</span>
                    
                    {isAnnual && plan.price !== 0 && (
                      <div className="text-success mt-1">
                        <small>Aylık sadece {(plan.annualPrice / 12).toFixed(2)} TL</small>
                      </div>
                    )}
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={plan.price === 0 ? "/register" : "/checkout"} 
                    className={`btn btn-${plan.buttonVariant} w-100`}
                  >
                    {plan.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 bg-light">
              <div className="card-body p-4">
                <div className="d-flex align-items-center">
                  <div className="me-4">
                    <i className="fas fa-building fa-2x text-primary"></i>
                  </div>
                  <div>
                    <h4>Kurumsal Çözümler</h4>
                    <p className="mb-0">İnsan Kaynakları departmanları ve kurumsal müşteriler için özel fiyatlandırma ve toplu lisanslar sunuyoruz.</p>
                  </div>
                  <div className="ms-auto">
                    <a href="/kurumsal" className="btn btn-outline-primary">İletişime Geç</a>
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

export default Pricing; 