import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-shape-1"></div>
      <div className="hero-shape-2"></div>
      <div className="hero-shape-3"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Profesyonel CV'nizi <span>dakikalar</span> içinde oluşturun
            </h1>
            <p className="hero-description">
              İşverenlerin dikkatini çeken modern ve profesyonel CV şablonlarıyla
              kariyerinizde fark yaratın. ATS uyumlu özgeçmişlerle iş başvurularınızda öne çıkın.
            </p>
            <div className="hero-buttons">
              <Link to="/create-cv" className="btn-primary">
                <i className="fas fa-file-alt btn-icon"></i>
                CV Oluştur
              </Link>
              <Link to="/templates" className="btn-secondary">
                <i className="fas fa-th-large btn-icon"></i>
                Şablonları İncele
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Profesyonel CV Örneği" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 