
import React, { useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import SubjectsSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import HeroSection from '../components/HeroSection';
import ScrollToTop from '../components/ScrollToTop';

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-academy-orange border-t-academy-red rounded-full animate-spin"></div>
      <p className="mt-4 text-academy-dark font-medium">Loading OM SAI EDUCATIONAL ACADEMY...</p>
    </div>
  </div>
);

const Index: React.FC = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>
      <AboutSection />
      <SubjectsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
