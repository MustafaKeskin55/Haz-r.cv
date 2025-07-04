import React, { useState, useRef } from 'react';
import './TemplateGallery.css';
import { categories, templates } from '../../data/templateData';
import html2canvas from 'html2canvas';

// Şablon bileşenlerini klasör yapısına uygun olarak import ediyoruz
import ExecutiveTemplate from './templates/ExecutiveTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import TechnicalTemplate from './templates/TechnicalTemplate';
// Yeni şablonları import ediyoruz
import TechStackTemplate from './templates/TechStackTemplate';
import MinimalPureTemplate from './templates/MinimalPureTemplate';
import CorporateBlueTemplate from './templates/CorporateBlueTemplate';
import CreativeSplitTemplate from './templates/CreativeSplitTemplate';
import StartupHustlerTemplate from './templates/StartupHustlerTemplate';
import LegalFocusTemplate from './templates/LegalFocusTemplate';
import MedicalTemplate from './templates/MedicalTemplate';
import ArchitectTemplate from './templates/ArchitectTemplate';
import AcademicTemplate from './templates/AcademicTemplate';
import PhotographerTemplate from './templates/PhotographerTemplate';
import FinanceManagerTemplate from './templates/FinanceManagerTemplate';
import UiUxDesignerTemplate from './templates/UiUxDesignerTemplate';
import DoctorTemplate from './templates/DoctorTemplate';
import TeacherTemplate from './templates/TeacherTemplate';
import WarehouseTemplate from './templates/WarehouseTemplate';
import VideographerTemplate from './templates/VideographerTemplate';

const TemplateGallery = ({ title, showFilters = true, limit, showViewAll = true }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const templatePreviewRef = useRef(null);
  
  // Şablon tipine göre ilgili bileşeni döndüren fonksiyon
  const getTemplateComponent = (template) => {
    if (!template) return null;
    
    try {
      switch(template.type) {
        case 'executive':
          return <ExecutiveTemplate userData={template.userData} />;
        case 'minimal':
          return <MinimalTemplate userData={template.userData} />;
        case 'creative':
          return <CreativeTemplate userData={template.userData} />;
        case 'technical':
          return <TechnicalTemplate userData={template.userData} />;
        case 'techstack':
          return <TechStackTemplate userData={template.userData} />;
        case 'minimalpure':
          return <MinimalPureTemplate userData={template.userData} />;
        case 'corporateblue':
          return <CorporateBlueTemplate userData={template.userData} />;
        case 'creativesplit':
          return <CreativeSplitTemplate userData={template.userData} />;
        case 'startuphustler':
          return <StartupHustlerTemplate userData={template.userData} />;
        case 'legal':
          return <LegalFocusTemplate userData={template.userData} />;
        case 'nurse':
          return <MedicalTemplate userData={template.userData} />;
        case 'architect':
          return <ArchitectTemplate userData={template.userData} />;
        case 'academic':
          return <AcademicTemplate userData={template.userData} />;
        case 'photographer':
          return <PhotographerTemplate userData={template.userData} />;
        case 'medical':
        case 'nurse':
          return <MedicalTemplate userData={template.userData} />;     
        case 'finance':
          return <FinanceManagerTemplate userData={template.userData} />;
        case 'uiux':
          return <UiUxDesignerTemplate userData={template.userData} />;
        case 'doctor':
          return <DoctorTemplate userData={template.userData} />;
        case 'teacher':
          return <TeacherTemplate userData={template.userData} />;
        case 'warehouse':
          return <WarehouseTemplate userData={template.userData} />;
        case 'videographer':
          return <VideographerTemplate userData={template.userData} />;
        default:
          console.error(`Bilinmeyen şablon tipi: ${template.type}`);
          return null;
      }
    } catch (error) {
      console.error("Şablon yüklenirken hata oluştu:", error);
      return <div className="template-error">Şablon yüklenemedi</div>;
    }
  };
  
  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);
    
  const openPreview = (template) => {
    setPreviewTemplate(template);
  };
  
  const closePreview = () => {
    setPreviewTemplate(null);
  };

  // Şablonu JPG olarak indirme fonksiyonu
  const downloadAsJPG = async () => {
    if (!templatePreviewRef.current) return;
    
    try {
      setIsDownloading(true);
      
      const templateElement = templatePreviewRef.current;
      const canvas = await html2canvas(templateElement, {
        scale: 2, // Daha yüksek kalite için
        useCORS: true, // Harici resimleri yüklemek için
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      // Canvas'ı JPG'ye dönüştürme
      const image = canvas.toDataURL('image/jpeg', 0.9);
      
      // İndirme bağlantısı oluşturma
      const downloadLink = document.createElement('a');
      downloadLink.href = image;
      downloadLink.download = `${previewTemplate.name}-cv-sablonu.jpg`;
      
      // İndirme işlemini başlatma
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
    } catch (error) {
      console.error("Şablon indirilirken hata oluştu:", error);
      alert("Şablon indirilirken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Şablon görselini getiren fonksiyon
  const getTemplateImage = (templateType) => {
    return `/images/templates/${templateType}-cv-sablonu.jpg`;
  };

  return (
    <section className="template-gallery templates-section" id="templates">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        
        {showFilters && (
          <div className="templates-filter">
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="templates-grid">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="template-card">
              <div className="template-preview">
                <div className="template-thumbnail">
                  <img 
                    src={getTemplateImage(template.type)} 
                    alt={`${template.name} CV Şablonu`} 
                    className="template-image"
                  />
                </div>
                {template.popular && (
                  <div className="template-badge">Popüler</div>
                )}
              </div>
              <div className="template-info">
                <h3 className="template-name">{template.name}</h3>
                <div className="template-actions">
                  <button 
                    className="btn-preview" 
                    onClick={() => openPreview(template)}
                  >
                    Önizle
                  </button>
                  <a href={`/create/${template.id}`} className="btn-use">
                    Bu Şablonu Kullan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showViewAll && (
          <div className="templates-cta">
            <a href="/templates" className="view-all-button">
              Tüm Şablonları Görüntüle
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        )}
      </div>
      
      {previewTemplate && (
        <div className="template-preview-modal">
          <div className="modal-overlay" onClick={closePreview}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closePreview}>
              ×
            </button>
            <div className="modal-body">
              <h2 className="modal-title">{previewTemplate.name} Şablonu</h2>
              <div className="template-preview-container" style={{ overflow: 'hidden', maxHeight: '75vh' }}>
                <div 
                  className="template-preview-wrapper" 
                  style={{ height: 'auto', overflow: 'auto', maxHeight: '75vh' }}
                  ref={templatePreviewRef}
                >
                  {getTemplateComponent(previewTemplate)}
                </div>
              </div>
              <div className="modal-actions">
                <button 
                  className="btn-download-jpg"
                  onClick={downloadAsJPG}
                  disabled={isDownloading}
                >
                  {isDownloading ? 'İndiriliyor...' : 'JPG Olarak İndir'}
                </button>
                <a href={`/create/${previewTemplate.id}`} className="btn-use-large">
                  Bu Şablonu Kullan
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TemplateGallery; 