import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import TemplateGallery from './components/TemplateGallery/TemplateGallery';
import HowItWorks from './components/HowItWorksSection/HowItWorks';
import Testimonials from './components/TestimonialsSection/Testimonials';
import Pricing from './components/PricingSection/Pricing';
import Faq from './components/FaqSection/Faq';
import Footer from './components/FooterSection/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreateCV from './pages/CreateCV/CreateCV';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import AdminTemplateExport from './components/TemplateGallery/AdminTemplateExport';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <TemplateGallery 
                  title="Profesyonel CV Şablonları" 
                  showFilters={true} 
                  limit={6} 
                  showViewAll={true} 
                />
                <HowItWorks />
                <Testimonials />
                <Pricing />
                <Faq />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-cv" element={<CreateCV />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin/template-export" element={<AdminTemplateExport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;