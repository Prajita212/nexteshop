'use client'
import React, { createContext, useReducer } from "react";
import CartReducer from "./cartReducer";
export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;