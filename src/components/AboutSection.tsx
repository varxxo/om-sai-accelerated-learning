import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="section-heading">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            At OM SAI EDUCATIONAL ACADEMY, we are committed to shaping young minds and empowering 
            students to achieve academic excellence. Our mission is to provide high-quality, 
            personalized education that nurtures curiosity, critical thinking, and a lifelong love for learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8 reveal opacity-0" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white rounded-xl p-6 shadow-lg hover-scale">
              <div className="flex items-start gap-4">
                <div className="bg-academy-orange/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-academy-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To create a supportive and engaging learning environment where students from 3rd to 12th standard 
                    receive expert guidance, build strong academic foundations, and develop the skills necessary for future success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover-scale">
              <div className="flex items-start gap-4">
                <div className="bg-academy-red/10 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-academy-red" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To be a leading tuition center known for academic excellence, innovative teaching methodologies, 
                    and a student-centric approach that ensures every learner reaches their full potential.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover-scale">
              <div className="flex items-start gap-4">
                <div className="bg-academy-lightpeach p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-academy-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <ul className="space-y-2">
                    {[
                      "Excellence – We strive to deliver the highest quality education.",
                      "Integrity – We foster a culture of honesty and transparency.",
                      "Personalized Learning – We tailor our teaching to individual needs.",
                      "Innovation – We incorporate modern teaching techniques.",
                      "Passion for Teaching – Our educators are dedicated to every student's journey."
                    ].map((value, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-academy-orange flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 reveal opacity-0" style={{ transitionDelay: '0.4s' }}>
            <div className="relative tilt-card">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-academy-red to-academy-orange rounded-xl blur opacity-30"></div>
              <img 
                src="/lovable-uploads/853a34a7-0f29-4d9b-af4b-0e8b206ec75e.png" 
                alt="Educational Excellence Illustration" 
                className="w-full h-auto rounded-xl relative shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
