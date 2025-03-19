'use client'
import React, { useContext } from "react";
import { CartContext } from "@/context/cartProvider";
import CartProduct from "../cartProduct/page";
import { totalItem, totalPrice } from "@/context/cartReducer";


function Cart() {
  const { cart } = useContext(CartContext);

  console.log("Cart State:", cart); 

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-6">Items in Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cart.map((p) => (
              <CartProduct key={p.id} pro={p} />
            ))}
          </div>

          <div className="mt-6 w-100 p-4 border border-gray-300 rounded-lg bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Total Items: {totalItem(cart)}</h2>
              <h2 className="text-lg font-semibold">
                Total Price: ${totalPrice(cart).toFixed(2)}
              </h2>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full transition-colors"
              aria-label="Proceed to Checkout"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;