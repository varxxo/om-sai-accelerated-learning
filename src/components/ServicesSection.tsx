
import React, { useEffect } from 'react';
import { Calculator, Beaker, BookOpen, Globe, Award, Trophy } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: <Calculator className="h-10 w-10" />,
      title: "Mathematics",
      description: "Strengthening problem-solving skills and conceptual understanding to build a solid foundation."
    },
    {
      icon: <Beaker className="h-10 w-10" />,
      title: "Science",
      description: "Making physics, chemistry and biology concepts engaging and easy to understand."
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "English & Literature",
      description: "Enhancing reading, writing, and comprehension skills for effective communication."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Social Studies & Humanities",
      description: "Developing analytical and critical thinking skills through engaging lessons."
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Board Exam Preparation",
      description: "Intensive coaching for CBSE, ICSE, and State Board exams to ensure top results."
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Competitive Exam Training",
      description: "Specialized preparation for Olympiads, NTSE, and other entrance tests."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-academy-peach/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="section-heading">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            We offer comprehensive tuition programs for students from 3rd to 12th standard, 
            covering key subjects and exam preparation to ensure academic success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="reveal opacity-0" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full overflow-hidden hover-scale border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-gradient-to-br from-academy-orange to-academy-red rounded-2xl p-3 text-white mb-4 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Parallax decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-academy-orange/10 rounded-full"></div>
        <div className="absolute -bottom-20 right-20 w-60 h-60 bg-academy-red/5 rounded-full"></div>
      </div>
    </section>
  );
};

export default ServicesSection;
