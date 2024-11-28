import React from 'react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1581093458791-9d42d0aad77e?auto=format&fit=crop&q=80",
    title: "Granite Quarry Expansion",
    location: "Hyderabad, India",
    description: "Large-scale quarry expansion project with controlled blasting operations."
  },
  {
    image: "https://images.unsplash.com/photo-1578323851363-cf6c1a0ed8e6?auto=format&fit=crop&q=80",
    title: "Infrastructure Development",
    location: "Telangana, India",
    description: "Rock excavation for major highway construction project."
  },
  {
    image: "https://images.unsplash.com/photo-1581093458791-9d42d0aad77e?auto=format&fit=crop&q=80",
    title: "Mining Site Development",
    location: "Andhra Pradesh, India",
    description: "Complete mining site development including safety implementations."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successfully completed projects across South India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-yellow-500 mb-3">{project.location}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;