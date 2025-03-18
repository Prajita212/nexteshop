"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");


  const normalizeCategory = (category) => category.toLowerCase().replace(/'/g, "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fakeStoreResponse = await fetch("https://fakestoreapi.com/products");
        const fakeStoreData = await fakeStoreResponse.json();

        const normalizedFakeStoreData = fakeStoreData.map((product) => ({
          ...product,
          category: normalizeCategory(product.category),
        }));

        setProducts(normalizedFakeStoreData);
        setFilteredProducts(normalizedFakeStoreData);
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
      const filtered = products.filter((pro) => pro.category === normalizedCategory);
      setFilteredProducts(filtered);
    }
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
            <Link href={`/product-detail/${pro.id}`}>
              <img
                src={pro.image}
                alt={pro.title}
                className="w-full h-48 object-contain mb-4"
              />
              <div className="text-lg font-semibold">{pro.title}</div>
              <div className="text-gray-700">${pro.price}</div>
              <div className="text-sm text-gray-500">{pro.category}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
