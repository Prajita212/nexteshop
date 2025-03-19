'use client'
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CartContext } from "@/context/cartProvider";


function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { dispatch } = useContext(CartContext);
  const normalizeCategory = (category) => {
    return category.toLowerCase().replace(/'/g, "");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fakeStoreResponse, jsonServerResponse] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("http://localhost:3001/products"),
        ]);

        const [fakeStoreData, jsonServerData] = await Promise.all([
          fakeStoreResponse.json(),
          jsonServerResponse.json(),
        ]);

  
        const normalizedFakeStoreData = fakeStoreData.map((product) => ({
          ...product,
          category: normalizeCategory(product.category),
        }));

        const normalizedJsonServerData = jsonServerData.map((product) => ({
          ...product,
          category: normalizeCategory(product.category),
        }));

      
        const combinedData = [
          ...normalizedFakeStoreData,
          ...normalizedJsonServerData,
        ];
        setProducts(combinedData);
        setFilteredProducts(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const normalizedCategory = normalizeCategory(category);
      const filtered = products.filter(
        (pro) => normalizeCategory(pro.category) === normalizedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = (product) => {
    dispatch({ type: "Add", payload: product });
  };

  return (
    <div className="md:p-10 p-5">
      <div className="md:flex grid grid-cols-2 md:gap-8 gap-1 mb-8">
        {["all", "men's clothing", "women's clothing", "jewelery", "electronics"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`bg-gray-600 hover:bg-gray-900 border border-gray-400 text-white px-3 py-1 rounded-2xl ${
              selectedCategory === category ? "bg-gray-900" : ""
            }`}
          >
            {category === "all" ? "All" : category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((pro) => (
          <div
            key={pro.id}
            className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Link href={`/product/${pro.id}`}>
              <img
                src={pro.image}
                alt={pro.title}
                className="w-full h-48 object-contain mb-4"
              />
              <div className="text-lg font-semibold">{pro.title}</div>
              <div className="text-gray-700">${pro.price}</div>
              <div className="text-sm text-gray-500">{pro.category}</div>
            </Link><Link href='/cart'>
            <button
              className="w-30 border rounded-xl px-2 bg-gray-700 text-white hover:bg-gray-950 mt-1"
              onClick={() => handleAddToCart(pro)}
              aria-label="Add to Cart"
            >
              Add to cart
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;