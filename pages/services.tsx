import React, { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Freight Transport',
      description: 'We offer reliable and efficient freight transport services across Kenya and beyond.',
      icon: 'fas fa-truck',
    },
    {
      title: 'Cargo Services',
      description: 'Our cargo services ensure that your goods reach their destination safely and on time.',
      icon: 'fas fa-box',
    },
    {
      title: 'Maintenance',
      description: 'We maintain our fleet to the highest standards to ensure reliable service for our customers.',
      icon: 'fas fa-tools',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-2">Our Services</h1>
      <p className="mb-4 text-center">We are a leading provider of trucking and logistics services in Kenya. Our mission is to provide safe, reliable, and efficient transportation solutions to our customers.</p>
      
      <div className="flex flex-wrap justify-around w-full">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="flex flex-col items-center text-center">
              <i className={`text-4xl text-blue-500 ${service.icon}`}></i>
              <h2 className="text-xl font-bold mt-2">{service.title}</h2>
              <button onClick={() => setSelectedService(index)}>
                {selectedService === index ? 'Hide Details' : 'Show Details'}
              </button>
              {selectedService === index && <p>{service.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}