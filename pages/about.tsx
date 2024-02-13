import React from 'react';

export default function About() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-2">About Us</h1>
      <p className="mb-4 text-center">We are a leading provider of trucking and logistics services in Kenya. Our mission is to provide safe, reliable, and efficient transportation solutions to our customers.</p>
      
      <div className="flex flex-wrap justify-around w-full">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="flex flex-col items-center text-center">
            <i className="text-4xl text-blue-500 fas fa-truck"></i>
            <h2 className="text-xl font-bold mt-2">Freight Transport</h2>
            <p>We offer reliable and efficient freight transport services across Kenya and beyond.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="flex flex-col items-center text-center">
            <i className="text-4xl text-blue-500 fas fa-box"></i>
            <h2 className="text-xl font-bold mt-2">Cargo Services</h2>
            <p>Our cargo services ensure that your goods reach their destination safely and on time.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="flex flex-col items-center text-center">
            <i className="text-4xl text-blue-500 fas fa-tools"></i>
            <h2 className="text-xl font-bold mt-2">Maintenance</h2>
            <p>We maintain our fleet to the highest standards to ensure reliable service for our customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}