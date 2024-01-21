import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import PopularProducts from '../components/PopularProducts';
import { CartProvider } from '../context/CartContext';

const Home: React.FC = () => {
  return (
    <CartProvider>
      <div className="bg-white">
        <Header />

        {/* Line break */}
        <hr className="my-4" />

        {/* Gallery */}
        <Gallery />

        {/* Subtitle */}
        <div className="text-center text-black font-bold text-3xl mt-4">
          Popular categories
        </div>

        {/* Popular Products */}
        <PopularProducts />
      </div>
    </CartProvider>
  );
};

export default Home;
