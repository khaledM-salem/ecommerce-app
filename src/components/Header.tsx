"use client";

import React from 'react';
import { useCart } from '../context/CartContext';


const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header className="bg-white p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Title on the left */}
      <div className="text-black font-bold text-xl mb-4 md:mb-0">Meditie.</div>

      {/* Header links */}
      <nav className="space-x-4 md:ml-4">
        <a href="#" className="text-black">
          Home
        </a>
        <a href="#" className="text-black">
          Blogs
        </a>
        <a href="#" className="text-black">
          Medicine
        </a>
        <a href="#" className="text-black">
          More
        </a>
      </nav>

      {/* Search bar, profile icon, cart icon, and title on the right */}
      <div className="flex items-center mt-4 md:mt-0">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          className="bg-white text-gray-800 p-2 rounded-md border border-gray-300"
        />

        {/* Profile icon */}
        <div className="ml-4">
          {/* Sample profile SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* ... */}
          </svg>
        </div>

        {/* Cart icon with title and number */}
        <div className="ml-4 flex items-center">
          {/* Sample cart SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* ... */}
          </svg>

          {/* Cart items count */}
          <div className="ml-1 mr-2 bg-red-500 text-black p-1 rounded-full text-xs">
            {cart.length}
          </div>

          {/* Cart title */}
          <div className="text-black text-xs hidden md:block">My Cart</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
