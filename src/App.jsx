import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import PersonalStory from './components/PersonalStory';
import WhatYouGet from './components/WhatYouGet';
import BenefitsBadges from './components/BenefitsBadges';
import BonusSection from './components/BonusSection';
import FAQSimple from './components/FAQSimple';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';

// Lazy load dashboard components for better initial load
const Dashboard = lazy(() => import('./components/Dashboard'));
import Aula from './components/Aula';
import { useState } from 'react';
import { ModalProvider } from './context/ModalContext';
import { storeUTMParams } from './lib/utm';

function HomePage() {
  useEffect(() => {
    // Captura e armazena parâmetros UTM ao carregar a página
    storeUTMParams();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger um pouco antes de entrar na viewport
    });

    // Observa todas as seções com classe reveal
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="reveal">
        <Hero />
      </div>
      <div className="reveal">
        <PersonalStory />
      </div>
      <div className="reveal">
        <WhatYouGet />
      </div>
      <div className="reveal">
        <BenefitsBadges />
      </div>
      <div className="reveal">
        <BonusSection />
      </div>
      <div className="reveal">
        <FAQSimple />
      </div>
      <div className="reveal">
        <GuaranteeSection />
      </div>
      <Footer />
    </div>
  )
}

function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="dashboard-container">
        <div className="loading">Carregando...</div>
      </div>
    }>
      <Dashboard />
    </Suspense>
  )
}

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/aula" element={<Aula />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  )
}

export default App
