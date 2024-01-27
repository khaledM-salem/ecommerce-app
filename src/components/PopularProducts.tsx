"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

interface Product {
  id: number;
  title: string;
  color: number;
  // Add other properties as needed
}

const PopularProducts: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState(0);
  const [products, setProducts] = useState<Array<Product>>([]);
  const { addToCart, removeFromCart, cart } = useCart();
  const { t } = useTranslation();

  const handleSelection = (cardId: number) => {
    const isInCart = cart.includes(cardId);

    if (isInCart) {
      // Remove from cart
      removeFromCart(cardId);
    } else {
      // Add to cart
      addToCart(cardId);
    }
  };


  const visibleCards = products.slice(selectedPosition, selectedPosition + 6);

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/dbb636ac-0e5b-4388-8a05-adf78fec7081'); // Replace with your actual API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={`p-4 flex items-center justify-between rounded-lg ${card.color}`}
            style={{ marginBottom: '40px' }}
          >
            {/* Left side */}
            <div className="flex-1 text-center">
              <div className="text-black font-bold text-lg mb-2">{card.title}</div>
              <button
                className="bg-white py-2 px-4 rounded-md border border-gray-300 text-black hover:bg-blue-500 hover:text-white hover:border-transparent transition"
                onClick={() => handleSelection(card.id)}
              >
                {cart.includes(card.id) ?  t('removeFromCart') : t('addToCart')}
              </button>
            </div>

            {/* Right side */}
            <div>
              <img
                src="/surgical-mask-199x156.png"
                alt={card.title}
                className="w-199 h-156 object-cover rounded-full"
              />
            </div>
          </div>
        ))}

        {/* Circles for navigation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex mt-2">
          <div
            className={`w-4 h-4 rounded-full mr-4 cursor-pointer ${
              selectedPosition === 0 ? 'bg-green-500' : 'bg-gray-500'
            }`}
            onClick={() => setSelectedPosition(0)}
          />
          <div
            className={`w-4 h-4 rounded-full cursor-pointer ${
              selectedPosition === 2 ? 'bg-green-500' : 'bg-gray-500'
            }`}
            onClick={() => setSelectedPosition(2)}
          />
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
