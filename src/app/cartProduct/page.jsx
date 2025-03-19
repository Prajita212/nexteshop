'use client'
import { CartContext } from "@/context/cartProvider";
import React, { useContext } from "react";


const CartProduct = ({ pro }) => {
  const { dispatch } = useContext(CartContext);

  const handleIncrease = () => {
    dispatch({ type: "Increase", payload: pro.id });
  };

  const handleDecrease = () => {
    dispatch({ type: "Decrease", payload: pro.id });
  };

  const handleRemove = () => {
    dispatch({ type: "Remove", payload: pro.id });
  };

  return (
    <div className="flex flex-row border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <img
        src={pro.image}
        alt={pro.title}
        className="w-24 h-24 object-contain mr-4"
      />

      <div className="flex flex-col justify-between flex-grow">
        <div>
          <p className="text-lg font-semibold">{pro.title}</p>
          <p className="text-gray-700">${pro.price}</p>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center"
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center"
            aria-label="Current quantity"
          >
            {pro.quantity}
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center"
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          className="bg-red-500 hover:bg-red-600 text-white px-2  w-20 rounded-full mt-2 transition-colors"
          onClick={handleRemove}
          aria-label="Remove product"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;