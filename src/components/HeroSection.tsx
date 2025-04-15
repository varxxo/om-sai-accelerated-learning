
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from 'lucide-react';
import StudentScene from './StudentScene';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSubjects = () => {
    document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
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
          {/* For mobile and tablet, we swap the order to put content first, 3D model second */}
          <div className={`w-full lg:w-1/2 space-y-6 ${isMobile ? 'order-1' : ''}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Accelerated Learning</span> for Academic Excellence
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              At OM SAI EDUCATIONAL ACADEMY, we empower students from 3rd to 12th standard to achieve academic excellence through personalized education and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-academy-red hover:bg-academy-orange text-white px-6 py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={scrollToContact}
              >
                Know More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-academy-orange text-academy-orange hover:bg-academy-orange hover:text-white px-6 py-6 rounded-lg transition-all duration-300"
                onClick={scrollToSubjects}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Subjects
              </Button>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 relative ${isMobile ? 'order-2' : ''}`}>
            <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              {/* New 3D Student Scene Animation */}
              <div className="absolute inset-0 w-full h-full">
                <StudentScene />
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
