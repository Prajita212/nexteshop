"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const uniqueCategories = [
          "All Products",
          ...new Set(data.map((product) => product.category)),
        ];

        setProducts(data);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const sendCartToAPI = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify({
          userId: 1, // Simulated user ID
          date: new Date().toISOString().split("T")[0], // Current date
          products: cart.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log("Cart successfully sent to API:", data);
      alert("Cart successfully sent!");
    } catch (error) {
      console.error("Error sending cart:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center my-6 text-gray-100">
        Product Categories
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-40 h-40 object-contain"
            />
            <h3 className="text-lg font-semibold mt-2 text-center text-gray-200">
              {product.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1 text-center">
              {product.description.slice(0, 100)}...
            </p>
            <p className="text-green-400 font-semibold mt-2">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">
              Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-8 p-4 bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-200">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            <ul className="mt-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-2 border-b border-gray-700"
                >
                  <span>
                    {item.title} (x{item.quantity})
                  </span>
                  <span className="text-green-400">
                    ${item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={sendCartToAPI}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
