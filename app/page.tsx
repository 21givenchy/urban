"use client";
import React, { useState, useEffect, SVGProps } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Fleet } from '../components/component';

export default function Component() {

  const images = ['/pic1.jpeg', '/pic2.jpeg', '/pic3.jpeg']; // Add your images here
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
  
    return () => clearInterval(intervalId);
  }, []); 

  
  return (
    <div className=" bg-white">
      <nav className="flex justify-between items-center bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img alt="RLS Logo" className="h-10" src="/uss.jpg" />
            <div className="ml-10 space-x-4">
              <Link className="text-gray-500 hover:text-gray-900" href="/about">
                Home
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" href="#">
                About Us
              </Link>
              <Link className="text-blue-600 font-semibold" href="/fleet">
                Our Fleet
              </Link>
   
              <Link className="text-gray-500 hover:text-gray-900" href="/services">
                Our Services
              </Link>
             
             
              <Link className="text-gray-500 hover:text-gray-900" href="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <SearchIcon className="text-gray-500 hover:text-gray-900 w-6 h-6" />
          </div>
        </div>
      </nav>
      <header className="relative">
  <img alt="Our Fleet" className="w-1/2 h-[50vh]  mx-auto" src="pic1.jpeg" />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <h1 className="text-white text-6xl font-bold">Our Fleet</h1> 
  </div>

  <Image src={images[currentImage]} alt="Our Fleet" layout="fill" objectFit="cover" className="h-3/w-1/2 mx-auto" />
  {/* ... */}
</header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-600">
          Urban Logistics, based in Kenya, is a leading provider of logistics and trucking services. We started our journey with a single truck, and over the years, we have grown into a large network of operations, both locally and internationally. Our reputation for excellence is built on our commitment to safety, operational reliability, top-notch engineering and maintenance, and unparalleled customer service. Today, our fleet includes a diverse range of vehicles, all equipped to meet your logistics needs.
           At Urban Logistics, we empower our clients to focus on their core business while we handle the road ahead.

        </p>
       
      </main>
      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row">
  <div className="md:w-1/2">
    <div className="flex flex-col justify-center items-center m-auto p-12 space-y-8">

  <div className="lg:pr-8 lg:pt-4 space-y-4">
    <h2 className="text-4xl text-black font-semibold leading-7">
      Your logistics partner
    </h2>
    <p className="text-black mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      What We Offer
    </p>
    <p className="text-black mt-6 max-w-xl text-lg leading-8">
      Our dispatch services are designed to empower you, allowing you to
      focus solely on the road ahead.
    </p>

    <dl className="space-y-2">
      <dt className='text-black font-bold'>
        Effortless Load Management:
      </dt>
      <dd className="text-black">
        We handle the tedious task of finding, coordinating, and
        tracking loads for you.
      </dd>
      <dt className='text-black font-bold'>
        Tailored Trip Planning:
      </dt>
      <dd className="text-black">
        Our custom trip planning ensures every journey is optimized for
        efficiency, safety, and revenue.
      </dd>
     
      <dt className='text-black font-bold'>
        Streamlined Operations:
      </dt>
      <dd className="text-black">
        From invoicing to paperwork, we take care of it all. Focus on
        driving, while we manage the logistics.
      </dd>
      
    </dl>
  </div>
</div>
    
  </div>
  <div className="md:w-1/2 mt-8 md:mt-0">
    <img src="pic1.jpeg" alt="Truck" className="w-full h-auto mx-auto" />
  </div>
</main>
      
    </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
  

}
