"use client";

import React, { createContext, useContext, ReactNode } from 'react';

type CartContextType = {
  cart: number[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = React.useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCart((prevCart) => [...prevCart, productId]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((id) => id !== productId));
  };

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
