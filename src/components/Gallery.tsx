"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const images = ['/Main-Banner-1-1903x600.jpeg', '/Main-Banner-2-1903x600.jpeg', '/Main-Banner-3-1903x600.jpeg']; // Add your image paths
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    setImageIndex((imageIndex  - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setImageIndex((imageIndex  + 1 ) % images.length);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left arrow */}
      {isHovered && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      )}

      {/* Image Gallery */}
      <div className="flex space-x-0 overflow-x-scroll">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-screen flex-none ${index === imageIndex ? 'block' : 'hidden'}`}
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="responsive"
              width={1903}
              height={600}
            />
          </div>
        ))}
      </div>

      {/* Right arrow */}
      {isHovered && (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Gallery;
