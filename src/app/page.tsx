import React, { lazy, Suspense, useCallback } from 'react';
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';
import i18n from '../i18n';
// import { I18nextProvider } from 'react-i18next';

// Lazy-loaded components
const LazyGallery = lazy(() => import('../components/Gallery'));
const LazyPopularProducts = lazy(() => import('../components/PopularProducts'));


const Home: React.FC = () => {
  
  return (
    <CartProvider>
      <div className="bg-white">
        <Header />

        {/* Line break */}
        <hr className="my-4" />

        {/* Lazy-loaded Gallery */}
        <Suspense fallback={<div>Loading...</div>}>
          <LazyGallery />
        </Suspense>

        {/* Subtitle */}
        <div className="text-center text-black font-bold text-3xl mt-4">
          Popular categories
        </div>

        {/* Lazy-loaded Popular Products */}
        <Suspense fallback={<div>Loading...</div>}>
          <LazyPopularProducts />
        </Suspense>
      </div>
    </CartProvider>
  );
};

export default Home;
