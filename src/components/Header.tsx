"use client";

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Header: React.FC = () => {
  const { cart } = useCart();
  const { t } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  const navToLogin = () => {
    router.push('/login');
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-white p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Title on the left */}
      <div className="text-black font-bold text-xl mb-4 md:mb-0">Meditie.</div>

      {/* Language dropdown and Search bar, profile icon, cart icon, and title on the right */}
      <div className="flex items-center mt-4 md:mt-0">
        {/* Language dropdown */}
        <div className="relative z-50">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center focus:outline-none"
          >
            <span className="text-black">
              {i18n.language === 'en' ? 'English' : 'العربية'}
            </span>
            <svg
              className={`h-4 w-4 ml-2 fill-current text-black transform ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M7 10l5 5 5-5H7z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 bg-white border rounded-md shadow-lg">
              <li>
                <button
                  className="block text-black py-2 px-4 hover:bg-gray-200"
                  onClick={() => changeLanguage('en')}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  className="block text-black py-2 px-4 hover:bg-gray-200"
                  onClick={() => changeLanguage('ar')}
                >
                  العربية
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Header links */}
      {/* <nav className="space-x-4 md:ml-4"> */}
      <nav className={`space-x-4 md:ml-4 ${i18n.language === 'ar' ? 'space-x-reverse' : ''}`}>
        <a href="#" className="text-black">
          {t('home')}
        </a>
        <a href="#" className="text-black">
          {t('blogs')}
        </a>
        <a href="#" className="text-black">
          {t('medicine')}
        </a>
        <a href="#" className="text-black">
          {t('more')}
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
        <div onClick={navToLogin} className="ml-4 cursor-pointer">
          {/* Sample profile SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Sample path for the avatar icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21v-2a4 4 0 014-4h2a4 4 0 014 4v2"
            />
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
            {/* Sample path for the cart icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 14l8-8 8 8M6 14v8a2 2 0 002 2h8a2 2 0 002-2v-8M6 14h8"
            />
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
