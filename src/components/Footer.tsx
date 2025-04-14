
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">OM SAI</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Empowering students from 3rd to 12th standard to achieve academic excellence 
              through personalized education and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-academy-orange transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-academy-orange transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-academy-orange transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-academy-orange transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Contact Us', 'Enroll Now'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-academy-orange transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {[
                'Primary Education (3rd-5th)', 
                'Middle School (6th-8th)', 
                'Secondary Education (9th-10th)', 
                'Higher Secondary (11th-12th)', 
                'Competitive Exam Prep', 
                'Summer Camps'
              ].map((program, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-academy-orange transition-colors duration-300"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-academy-orange h-5 w-5 mt-0.5" />
                <p className="text-gray-400">123 Education Street, Bangalore, India</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-academy-orange h-5 w-5 mt-0.5" />
                <p className="text-gray-400">+91 9876 543210</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-academy-orange h-5 w-5 mt-0.5" />
                <p className="text-gray-400">contact@omsaiacademy.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 OM SAI EDUCATIONAL ACADEMY. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-academy-orange text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-academy-orange text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-academy-orange text-sm transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
