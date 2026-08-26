import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from '../common/FloatingActions';
import ConsultationModal from '../common/ConsultationModal';
import SearchModal from '../common/SearchModal';
import ScrollToTop from '../common/ScrollToTop';

export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Income Tax');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleOpenConsultation = (service = 'Income Tax') => {
    setModalService(service);
    setModalOpen(true);
  };

  const handleOpenSearch = () => {
    setSearchOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-white dark:bg-navy-950 text-slate-700 dark:text-slate-200 transition-colors duration-200">
      <ScrollToTop />
      <Topbar />
      <Navbar 
        onOpenConsultation={handleOpenConsultation} 
        onOpenSearch={handleOpenSearch}
      />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Outlet context={{ 
          onOpenConsultation: handleOpenConsultation,
          onOpenSearch: handleOpenSearch
        }} />
      </main>
      <Footer />
      <FloatingActions />
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
      />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}
