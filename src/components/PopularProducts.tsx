"use client";

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const PopularProducts: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState(0);
  const { addToCart, removeFromCart, cart } = useCart();

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

  const cards = [
    { id: 1, title: 'Product 1', color: 'bg-gray-200' },
    { id: 2, title: 'Product 2', color: 'bg-gray-200' },
    { id: 3, title: 'Product 3', color: 'bg-gray-200' },
    { id: 4, title: 'Product 4', color: 'bg-gray-200' },
    { id: 5, title: 'Product 5', color: 'bg-gray-200' },
    { id: 6, title: 'Product 6', color: 'bg-gray-200' },
    { id: 7, title: 'Product 7', color: 'bg-gray-200' },
    { id: 8, title: 'Product 8', color: 'bg-gray-200' },
  ];

  const visibleCards = cards.slice(selectedPosition, selectedPosition + 6);

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
                {cart.includes(card.id) ? 'Remove From Cart' : 'Add To Cart'}
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
