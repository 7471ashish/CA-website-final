import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import AboutIntroSection from '../components/home/AboutIntroSection';
import CategorizedServicesSection from '../components/home/CategorizedServicesSection';
import OfficeShowcaseSection from '../components/home/OfficeShowcaseSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import IndustriesSection from '../components/home/IndustriesSection';
import FAQSection from '../components/home/FAQSection';

export default function HomePage() {
  const { onOpenConsultation } = useOutletContext();

  return (
    <>
      <SEO 
        title="DRB & COMPANY | Chartered Accountants in Meerut - CA Deepanshi Bansal & CA Parul"
        description="DRB & COMPANY is a premier Chartered Accountants Partnership Firm in Budhana Gate, Meerut. Company Incorporation, ITR, GST, Statutory Audits, Tax Audit Sec 44AB & DISA Systems Audit."
        canonical="https://www.drbandcompany.com/"
      />
      <Hero onOpenConsultation={onOpenConsultation} />
      <AboutIntroSection onOpenConsultation={onOpenConsultation} />
      <CategorizedServicesSection onOpenConsultation={onOpenConsultation} />
      <OfficeShowcaseSection onOpenConsultation={onOpenConsultation} />
      <WhyChooseUsSection onOpenConsultation={onOpenConsultation} />
      <IndustriesSection />
      <FAQSection />
    </>
  );
}
