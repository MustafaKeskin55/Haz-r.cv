import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-file-alt',
      title: 'ATS Uyumlu CV Şablonları',
      description: 'Tüm şablonlarımız, işe alım yazılımları tarafından kolayca taranabilen ATS uyumlu yapıda tasarlanmıştır.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Özelleştirilebilir Tasarımlar',
      description: 'CV\'nizi kendi tarzınıza göre özelleştirebilir, renk şemaları ve yazı tiplerini değiştirebilirsiniz.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Hızlı ve Kolay Kullanım',
      description: 'Kullanıcı dostu arayüzümüz sayesinde dakikalar içinde profesyonel bir CV oluşturabilirsiniz.'
    },
    {
      icon: 'fas fa-download',
      title: 'Çoklu Format İndirme',
      description: 'CV\'nizi PDF, DOCX veya diğer formatlarda indirerek farklı platformlarda kullanabilirsiniz.'
    },
    {
      icon: 'fas fa-language',
      title: 'Çoklu Dil Desteği',
      description: 'CV\'nizi Türkçe, İngilizce ve diğer dillerde hazırlayabilir, uluslararası başvurular yapabilirsiniz.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Güvenli ve Gizli',
      description: 'Kişisel verileriniz güvende! Bilgileriniz şifrelenir ve sizin izniniz olmadan asla paylaşılmaz.'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Neden HazırCV?</h2>
          <p>İşe alım süreçlerinde öne çıkmanızı sağlayacak, modern ve profesyonel CV oluşturma aracımızın sunduğu avantajlar</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <a href="#pricing" className="btn btn-primary btn-lg">
            Özelliklerin Tamamını Keşfet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features; 