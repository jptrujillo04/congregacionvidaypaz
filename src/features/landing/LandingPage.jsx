import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import BeliefsSection from './components/BeliefsSection';
import ServicesTimesSection from './components/ServicesTimesSection';
import ContactSection from './components/ContactSection';

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <BeliefsSection />
      <ServicesTimesSection />
      <ContactSection />
    </main>
  );
};

export default LandingPage;
