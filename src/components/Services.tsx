import React from 'react';
import { Bomb, Truck, HardHat, Shield, Mountain, Ruler } from 'lucide-react';

const services = [
  {
    icon: <Bomb className="h-8 w-8" />,
    title: 'Controlled Blasting',
    description: 'Precision-controlled blasting services using advanced techniques and technology.'
  },
  {
    icon: <Mountain className="h-8 w-8" />,
    title: 'Rock Excavation',
    description: 'Specialized rock excavation for mining and construction projects.'
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: 'Site Survey',
    description: 'Comprehensive site surveys and geological assessments.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Safety Consulting',
    description: 'Expert safety consulting and risk assessment services.'
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Material Transport',
    description: 'Efficient transportation of excavated materials and equipment.'
  },
  {
    icon: <HardHat className="h-8 w-8" />,
    title: 'Mining Operations',
    description: 'Full-scale mining operations and project management.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive mining and blasting solutions tailored to your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-yellow-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;