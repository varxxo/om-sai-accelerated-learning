
import React, { useEffect, useRef } from 'react';
import { Users, BarChart2, Zap, PieChart, MessageCircle, BookOpen } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight - rect.top;
      
      if (scrollPosition > 0) {
        const scrollFactor = Math.min(scrollPosition / 500, 1) * 20;
        cardsRef.current.style.transform = `translateY(${scrollFactor}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Faculty",
      description: "Our team consists of highly qualified and experienced educators who specialize in their subjects."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Personalized Attention",
      description: "Small batch sizes ensure every student gets the guidance they need."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Interactive Learning",
      description: "We use a mix of traditional and modern teaching methods to make learning enjoyable."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Regular Assessments",
      description: "Continuous evaluation to track progress and identify areas for improvement."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Parental Involvement",
      description: "We keep parents informed through regular updates and feedback sessions."
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Comprehensive Resources",
      description: "Access to study materials, practice tests, and online resources to enhance learning."
    }
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 parallax-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="section-heading">Why Choose Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            At OM SAI EDUCATIONAL ACADEMY, we believe that every student has the potential to succeed, 
            and we are here to guide them every step of the way.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 parallax-scroll">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 reveal opacity-0" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-academy-orange to-academy-red/80 text-white p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal opacity-0" style={{ transitionDelay: '0.6s' }}>
          <p className="text-xl font-medium italic text-gray-700">
            "Join us on this journey towards academic excellence!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
