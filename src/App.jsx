import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ItrFilingPage from './pages/ItrFilingPage';
import GstRegistrationPage from './pages/GstRegistrationPage';
import NetworthCertificatePage from './pages/NetworthCertificatePage';
import AuditAssurancePage from './pages/AuditAssurancePage';
import CompanyIncorporationPage from './pages/CompanyIncorporationPage';
import NgoTrustPage from './pages/NgoTrustPage';
import TrademarkPage from './pages/TrademarkPage';
import NriTaxationPage from './pages/NriTaxationPage';
import ProjectFinancingPage from './pages/ProjectFinancingPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        
        {/* All 9 Dedicated Practice Pages */}
        <Route path="itr-filing" element={<ItrFilingPage />} />
        <Route path="gst-registration" element={<GstRegistrationPage />} />
        <Route path="audit-assurance" element={<AuditAssurancePage />} />
        <Route path="company-incorporation" element={<CompanyIncorporationPage />} />
        <Route path="ngo-trust-registration" element={<NgoTrustPage />} />
        <Route path="trademark-registration" element={<TrademarkPage />} />
        <Route path="networth-certificate" element={<NetworthCertificatePage />} />
        <Route path="nri-taxation" element={<NriTaxationPage />} />
        <Route path="project-financing-cma" element={<ProjectFinancingPage />} />

        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
