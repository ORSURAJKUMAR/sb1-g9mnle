import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578323851363-cf6c1a0ed8e6?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Leading Mining & Blasting Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Professional mining and blasting services with over 25 years of experience.
              Setting industry standards in safety and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-yellow-500 text-white px-8 py-3 rounded-md inline-flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-md inline-flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;