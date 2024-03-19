import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Fleet() {
 
  return (
          <main className="flex flex-col md:flex-row">
            
  <Image alt="Our Fleet" className="w-1/2 h-full mx-auto" src="pic1.jpeg" />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <h1 className="text-white text-4xl font-bold">Our Fleet</h1> 
  </div>

  

        <section className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-6">Embraer ERJ145</h1>
          <p className="mb-4">
            The ERJ-145MP is a 3,148km range, 50-passenger airliner and a member of the Embraer Regional Jet series. The
            cabin is pressurized with three abreast configuration with large windows result in a spacious cabin offering
            2 aisle and 2 window seating and baggage compartments with a maximum capacity of 1,000 kg.
          </p>
          <p className="mb-4">
            The ERJ-145MP aircraft has Rolls-Royce AE 3007A engines with thrust reversers, rated at maximum takeoff
            thrust of 7426 lbf and flat rated at ISA +30C to provide improved climb characteristics and improved cruise
            performance in high ambient temperatures.
          </p>
          <p className="mb-4">The aircraft has Honeywell Primus 1000 avionic system.</p>
          <p className="mb-4">
            E145LR The long-range ERJ 145LR aircraft is equipped with Rolls Royce AE 3007A1 engines which provide 15%
            more power. The engines are flat rated at 33.1 kN (7,440 lb) thrust to provide improved climb
            characteristics and improved cruise performance in high ambient temperatures.
          </p>
        </section>
       

      </main>
  );
}