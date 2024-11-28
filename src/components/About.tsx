import React from 'react';
import { CheckCircle, Award, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              25+ Years of Excellence in Mining & Blasting
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              As one of Hyderabad's leading mining and blasting companies, we bring decades of
              experience and expertise to every project. Our commitment to safety, efficiency,
              and environmental responsibility sets us apart in the industry.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Safety First Approach</h3>
                  <p className="text-gray-600">Rigorous safety protocols and continuous training</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Certified Experts</h3>
                  <p className="text-gray-600">Team of certified mining and blasting professionals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Experienced Team</h3>
                  <p className="text-gray-600">Over 100 skilled personnel and technical experts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Quality Assurance</h3>
                  <p className="text-gray-600">ISO certified processes and quality controls</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9d42d0aad77e?auto=format&fit=crop&q=80"
              alt="Mining operations"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1578323851363-cf6c1a0ed8e6?auto=format&fit=crop&q=80"
              alt="Blasting work"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;