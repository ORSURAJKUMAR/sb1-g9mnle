import React from 'react';
import { Drill, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Drill className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">EarthForce Mining</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of mining and blasting solutions in South India.
              Committed to safety, efficiency, and environmental responsibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Controlled Blasting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Rock Excavation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Site Survey</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Safety Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mining Operations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Mining Complex, Jubilee Hills</li>
              <li>Hyderabad, Telangana 500033</li>
              <li>Phone: +91 40 1234 5678</li>
              <li>Email: info@earthforcemining.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EarthForce Mining. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;