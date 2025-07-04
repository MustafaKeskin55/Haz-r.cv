import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';
import {
  TechStackTemplate,
  MinimalPureTemplate,
  CorporateBlueTemplate,
  CreativeSplitTemplate,
  StartupHustlerTemplate,
  ExecutiveTemplate,
  MinimalTemplate,
  CreativeTemplate,
  TechnicalTemplate,
  LegalFocusTemplate,
  ArchitectTemplate,
  AcademicTemplate,
  PhotographerTemplate,
  MedicalTemplate,
  FinanceManagerTemplate,
  UiUxDesignerTemplate,
  DoctorTemplate,
  TeacherTemplate,
  WarehouseTemplate,
  VideographerTemplate
} from './templates/index.js';
import { mockUserData } from '../../data/templateData';
import './AdminTemplateExport.css';

const AdminTemplateExport = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan kimlik doğrulama durumunu kontrol et
    const authenticated = localStorage.getItem('adminAuthenticated') === 'true';
    const blocked = localStorage.getItem('adminBlocked') === 'true';
    
    if (authenticated) {
      setIsAuthenticated(true);
    } else if (blocked) {
      setIsBlocked(true);
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '19035545') {
      // Doğru şifre - kimlik doğrulamayı kaydet ve oturumu aç
      localStorage.setItem('adminAuthenticated', 'true');
      setIsAuthenticated(true);
      setMessage('Giriş başarılı! Şablonları JPG olarak indirebilirsiniz.');
    } else {
      // Yanlış şifre - engelle ve ana sayfaya yönlendir
      localStorage.setItem('adminBlocked', 'true');
      localStorage.removeItem('adminAuthenticated');
      setIsBlocked(true);
      
      // Yönlendirme işlemini geciktirerek hata mesajını göster
      setMessage('Yanlış şifre! Engellendiniz ve ana sayfaya yönlendirileceksiniz.');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  // Çıkış yapma fonksiyonu
  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
    setPassword('');
    setMessage('');
  };

  const templates = [
    { name: 'Tech Stack', type: 'techstack', component: TechStackTemplate, userData: mockUserData.techstack },
    { name: 'Minimal Pure', type: 'minimalpure', component: MinimalPureTemplate, userData: mockUserData.minimalpure },
    { name: 'Corporate Blue', type: 'corporateblue', component: CorporateBlueTemplate, userData: mockUserData.corporateblue },
    { name: 'Creative Split', type: 'creativesplit', component: CreativeSplitTemplate, userData: mockUserData.creativesplit },
    { name: 'Startup Hustler', type: 'startuphustler', component: StartupHustlerTemplate, userData: mockUserData.startuphustler },
    { name: 'Executive', type: 'executive', component: ExecutiveTemplate, userData: mockUserData.executive },
    { name: 'Minimal', type: 'minimal', component: MinimalTemplate, userData: mockUserData.minimal },
    { name: 'Creative', type: 'creative', component: CreativeTemplate, userData: mockUserData.creative },
    { name: 'Technical', type: 'technical', component: TechnicalTemplate, userData: mockUserData.technical },
    { name: 'Legal Focus', type: 'legal', component: LegalFocusTemplate, userData: mockUserData.legal },
    { name: 'Medical', type: 'nurse', component: MedicalTemplate, userData: mockUserData.nurse },
    { name: 'Architect', type: 'architect', component: ArchitectTemplate, userData: mockUserData.architect },
    { name: 'Academic', type: 'academic', component: AcademicTemplate, userData: mockUserData.academic },
    { name: 'Photographer', type: 'photographer', component: PhotographerTemplate, userData: mockUserData.photographer },
    { name: 'Finance Manager', type: 'finance', component: FinanceManagerTemplate, userData: mockUserData.finance },
    { name: 'UI/UX Designer', type: 'uiux', component: UiUxDesignerTemplate, userData: mockUserData.uiux },
    { name: 'Doctor', type: 'doctor', component: DoctorTemplate, userData: mockUserData.doctor },
    { name: 'Teacher', type: 'teacher', component: TeacherTemplate, userData: mockUserData.teacher },
    { name: 'Warehouse', type: 'warehouse', component: WarehouseTemplate, userData: mockUserData.warehouse },
    { name: 'Videographer', type: 'videographer', component: VideographerTemplate, userData: mockUserData.videographer }
  ];

  const generateTemplateImage = async (template) => {
    try {
      setIsGenerating(true);
      setMessage(`${template.name} şablonu için JPG oluşturuluyor...`);
      
      // Create a temporary div to render the template
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.width = '800px';
      document.body.appendChild(tempDiv);
      
      // Render the template
      const TemplateComponent = template.component;
      const root = React.createElement(TemplateComponent, { userData: template.userData });
      ReactDOM.render(root, tempDiv);
      
      // Wait for rendering to complete
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Generate JPG
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      // Download the image
      const image = canvas.toDataURL('image/jpeg', 0.9);
      const downloadLink = document.createElement('a');
      downloadLink.href = image;
      downloadLink.download = `${template.type}-cv-sablonu.jpg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Clean up
      ReactDOM.unmountComponentAtNode(tempDiv);
      document.body.removeChild(tempDiv);
      
      setMessage(`${template.name} şablonu için JPG başarıyla oluşturuldu ve indirildi.`);
    } catch (error) {
      console.error('JPG oluşturma hatası:', error);
      setMessage(`${template.name} şablonu için JPG oluşturulurken hata: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  if (isBlocked) {
    return (
      <div className="admin-page-container">
        <div className="admin-content">
          <div className="admin-blocked">
            <h2>Erişim Engellendi</h2>
            <p>Yanlış şifre girişi nedeniyle erişiminiz engellendi.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page-container">
      <div className="admin-content">
        {!isAuthenticated ? (
          <div className="admin-login">
            <h2>Yönetici Girişi</h2>
            <p>Şablon yönetim sayfasına erişmek için şifre giriniz.</p>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                required
              />
              <button type="submit" className="btn-login">
                Giriş Yap
              </button>
            </form>
            {message && <div className="message error">{message}</div>}
          </div>
        ) : (
          <div className="admin-template-export">
            <div className="admin-header">
              <h2>Şablon JPG Oluşturma Paneli</h2>
              <button onClick={handleLogout} className="btn-logout">
                Çıkış Yap
              </button>
            </div>
            <p>Bu panel yalnızca yöneticiler içindir. Şablonların JPG görsellerini oluşturmak için aşağıdaki butonları kullanabilirsiniz.</p>
            
            <div className="template-buttons">
              {templates.map(template => (
                <button
                  key={template.type}
                  onClick={() => generateTemplateImage(template)}
                  disabled={isGenerating}
                  className="btn-generate"
                >
                  {template.name} JPG Oluştur
                </button>
              ))}
            </div>
            
            {message && <div className="message">{message}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTemplateExport; 