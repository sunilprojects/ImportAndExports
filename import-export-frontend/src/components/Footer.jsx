import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Skylerc International Pvt Ltd</h3>
          <div className="space-y-3">
            <p className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              3HXW+4PH, B B Road, Near More Super Market, Nehru Nagar, Old town, Yelahanka, Bengaluru, Karnataka 560064
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +91 9845620961
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              skylercinternationals@gmail.com
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
            <li><a href="#products" className="hover:text-green-400 transition-colors">Products</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-4">Our Products</h4>
          <ul className="space-y-2">
            <li className="hover:text-green-400 transition-colors">Moringa Powder</li>
            <li className="hover:text-green-400 transition-colors">Tomato Powder</li>
            <li className="hover:text-green-400 transition-colors">Beetroot Powder</li>
            <li className="hover:text-green-400 transition-colors">Caroot Powder</li>
            <li className="hover:text-green-400 transition-colors">Onion Powder</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
        <p>© {new Date().getFullYear()} Skylerc International Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;