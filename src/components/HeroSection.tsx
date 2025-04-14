
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from 'lucide-react';
import Hero3DScene from './Hero3DScene';

const HeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current || !shapesRef.current) return;
      
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      
      shapesRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollPosition = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-academy-peach/40 to-white pt-20">
      <div className="absolute inset-0 parallax-bg"></div>
      
      {/* Floating shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-academy-orange/20 animate-float"></div>
        <div className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-academy-red/10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full bg-academy-lightpeach/30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] right-[5%] w-12 h-12 rounded-full bg-academy-orange/20 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 md:pt-28 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Accelerated Learning</span> for Academic Excellence
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              At OM SAI EDUCATIONAL ACADEMY, we empower students from 3rd to 12th standard to achieve academic excellence through personalized education and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-academy-red hover:bg-academy-orange text-white px-6 py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-academy-orange text-academy-orange hover:bg-academy-orange hover:text-white px-6 py-6 rounded-lg transition-all duration-300">
                <BookOpen className="mr-2 h-5 w-5" />
                Why Choose Us
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[450px] rounded-xl overflow-hidden tilt-card shadow-2xl">
              {/* 3D Animation */}
              <div className="absolute inset-0 w-full h-full z-10">
                <Hero3DScene />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-academy-red/20 to-academy-orange/20 mix-blend-overlay z-20"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 z-30">
                <div className="card-content">
                  <h3 className="text-white text-2xl font-semibold">Personalized Learning Experience</h3>
                  <p className="text-white/80 mt-2">Small batch sizes ensure every student gets the guidance they need</p>
                </div>
              </div>
            </div>
            
            <div ref={parallaxRef} className="absolute -right-10 -bottom-14 w-40 h-40 rounded-full bg-academy-orange/30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
