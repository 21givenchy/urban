// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
    <div className="container mx-auto py-8">
      <div className="text-center">2024 Urban Logistics</div>

      <div className="mt-8 flex justify-center space-x-6">
        <Link
          href="/maintenance"
          className="text-gray-400 hover:text-white transition"
        >
          Maintenance
        </Link>

        <a
          href="/tracking"
          className="text-gray-400 hover:text-white transition"
        >
          Tracking
        </a>
        
        <a
          href="/email"
          className="text-gray-400 hover:text-white transition"
        >
          Email
        </a>

        <a 
          href="/invoices"
          className="text-gray-400 hover:text-white transition"
        >
          Invoices
        </a>
        <a
  href="/InvoiceGenerator"
  className="text-gray-400 hover:text-white transition"
>
  Invoice Generator
</a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;