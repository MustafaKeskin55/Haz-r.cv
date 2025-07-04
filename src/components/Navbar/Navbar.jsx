import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img 
            src="/images/logo2.png" 
            alt="HazırCV Logo" 
            height="40" 
            className="d-inline-block align-top" 
          />
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#features">Özellikler</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#templates">Şablonlar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">Nasıl Çalışır</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Fiyatlandırma</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">SSS</a>
            </li>
          </ul>
          
          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-primary me-2">Giriş Yap</Link>
            <Link to="/create-cv" className="btn btn-primary">Ücretsiz Başla</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 