// Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
}