import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // API isteği burada yapılacak
      console.log('Şifre sıfırlama isteği gönderiliyor:', email);
      
      // Başarılı istek simülasyonu
      setTimeout(() => {
        setStatus({
          type: 'success',
          message: 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen e-postanızı kontrol edin.'
        });
        setIsSubmitting(false);
      }, 1500);
      
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Bir hata oluştu. Lütfen tekrar deneyin.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Şifremi Unuttum</h2>
        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}
        
        {status.type !== 'success' ? (
          <>
            <p className="instructions">
              Hesabınıza bağlı e-posta adresinizi girin. Size şifrenizi sıfırlamanız için bir bağlantı göndereceğiz.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@mail.com"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="reset-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Şifre Sıfırlama Bağlantısı Gönder'}
              </button>
            </form>
          </>
        ) : (
          <div className="success-actions">
            <button 
              className="check-email-button"
              onClick={() => window.open('https://mail.google.com', '_blank')}
            >
              E-postamı Kontrol Et
            </button>
          </div>
        )}
        
        <div className="back-to-login">
          <Link to="/login">Giriş sayfasına dön</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 