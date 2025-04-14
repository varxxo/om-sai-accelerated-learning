
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    // Replace with the academy's actual phone number
    window.open('https://wa.me/+919876543210', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-academy-peach/20 to-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            Have questions or ready to enroll? Contact us today to learn more about our programs 
            and how we can help your child excel academically.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 reveal opacity-0" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-academy-orange/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-academy-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <p className="text-lg">+91 9876 543210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-academy-orange/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-academy-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="text-lg">contact@omsaiacademy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-academy-orange/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-academy-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Location</h4>
                    <p className="text-lg">123 Education Street, Bangalore, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-academy-orange/10 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-academy-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Hours</h4>
                    <p className="text-lg">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with us on WhatsApp
                </Button>
              </div>
            </div>
          </div>
          
          <div className="reveal opacity-0" style={{ transitionDelay: '0.4s' }}>
            <div className="tilt-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-academy-orange focus:border-academy-orange"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-academy-orange focus:border-academy-orange"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-academy-orange focus:border-academy-orange"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-academy-orange focus:border-academy-orange"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-academy-red hover:bg-academy-orange text-white py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
