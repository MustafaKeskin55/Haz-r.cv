import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Logo ve Kısa Açıklama */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <a href="/" className="d-inline-block mb-3">
              <img 
                src="/images/logo-white.png" 
                alt="HazırCV Logo" 
                height="40" 
              />
            </a>
            <p className="mb-3">
              HazırCV, profesyonel özgeçmiş oluşturma sürecini kolaylaştıran modern ve kullanıcı dostu bir platformdur. 25 farklı şık şablon ve yapay zeka destekli özellikleri ile hayalinizdeki işe bir adım daha yaklaşın.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
            <h5 className="mb-3 text-white-50">Hızlı Erişim</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/about" className="text-decoration-none text-white-50 hover-white">Hakkımızda</a>
              </li>
              <li className="mb-2">
                <a href="/templates" className="text-decoration-none text-white-50 hover-white">Şablonlar</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="text-decoration-none text-white-50 hover-white">Fiyatlandırma</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="text-decoration-none text-white-50 hover-white">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-decoration-none text-white-50 hover-white">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Şablonlar */}
          <div className="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
            <h5 className="mb-3 text-white-50">Şablonlar</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/templates/professional" className="text-decoration-none text-white-50 hover-white">Profesyonel</a>
              </li>
              <li className="mb-2">
                <a href="/templates/creative" className="text-decoration-none text-white-50 hover-white">Yaratıcı</a>
              </li>
              <li className="mb-2">
                <a href="/templates/modern" className="text-decoration-none text-white-50 hover-white">Modern</a>
              </li>
              <li className="mb-2">
                <a href="/templates/simple" className="text-decoration-none text-white-50 hover-white">Sade</a>
              </li>
              <li className="mb-2">
                <a href="/templates/all" className="text-decoration-none text-white-50 hover-white">Tüm Şablonlar</a>
              </li>
            </ul>
          </div>

          {/* Yasal */}
          <div className="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
            <h5 className="mb-3 text-white-50">Yasal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/terms" className="text-decoration-none text-white-50 hover-white">Kullanım Koşulları</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-decoration-none text-white-50 hover-white">Gizlilik Politikası</a>
              </li>
              <li className="mb-2">
                <a href="/cookies" className="text-decoration-none text-white-50 hover-white">Çerez Politikası</a>
              </li>
              <li className="mb-2">
                <a href="/gdpr" className="text-decoration-none text-white-50 hover-white">KVKK</a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="col-6 col-md-3 col-lg-2 mb-4 mb-md-0">
            <h5 className="mb-3 text-white-50">İletişim</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-envelope me-2 text-white-50"></i>
                <a href="mailto:info@hazircv.com" className="text-decoration-none text-white-50 hover-white">info@hazircv.com</a>
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2 text-white-50"></i>
                <a href="tel:+902123456789" className="text-decoration-none text-white-50 hover-white">+90 (212) 345 67 89</a>
              </li>
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2 text-white-50"></i>
                <span className="text-white-50">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 bg-secondary" />

        {/* Alt Bilgi */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="small text-white-50 mb-0">
              &copy; {new Date().getFullYear()} HazırCV. Tüm hakları saklıdır.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="payment-methods">
              <i className="fab fa-cc-visa text-white-50 me-3"></i>
              <i className="fab fa-cc-mastercard text-white-50 me-3"></i>
              <i className="fab fa-cc-paypal text-white-50 me-3"></i>
              <i className="fas fa-credit-card text-white-50"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 