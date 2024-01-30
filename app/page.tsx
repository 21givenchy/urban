import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { JSX, SVGProps } from "react";

export default function Component() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div className="bg-white">
      <nav className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img alt="RLS Logo" className="h-10" src="/placeholder.svg" />
            <div className="ml-10 space-x-4">
              <Link className="text-gray-500 hover:text-gray-900" href="#">
                Home
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" href="#">
                About Us
              </Link>
              <Link className="text-blue-600 font-semibold" href="#">
                Our Fleet
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" href="#">
                Our Services
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" href="#">
                Our Reach
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" href="#">
                Our Gallery
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" href="#">
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
        <img alt="Our Fleet" className="w-full h-[50vh] object-cover" src="pic1.jpeg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-6xl font-bold">Our Fleet</h1>
        </div>
        

      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-600">
          ALS initially started operations with One Cessna-150; and over the years has seen steady growth. The company
          has developed a large network of international operations, and has built a reputation for excellence in
          safety, operational reliability, engineering and maintenance, and customer service. Today, our fleet includes
          the following aircraft:
        </p>
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
