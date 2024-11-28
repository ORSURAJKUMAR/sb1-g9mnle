import React from 'react';
import { Menu, X, Drill, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Drill className="h-8 w-8 text-yellow-500" />
                <span className="text-white text-xl font-bold">EarthForce Mining</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2">Projects</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2">About</a>
              <a href="#contact" className="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2">Home</a>
            <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2">Services</a>
            <a href="#projects" className="text-gray-300 hover:text-white block px-3 py-2">Projects</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;