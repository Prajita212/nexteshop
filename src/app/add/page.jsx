
'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Add() {
  const [products, setProducts] = useState([]);
  const [input_Data, setInput_Data] = useState({
    id: "", 
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const [error, setError] = useState({});
  const categories = [
    { id: 1, name: "electronics" },
    { id: 2, name: "men's clothing" },
    { id: 3, name: "women's clothing" },
    { id: 4, name: "jewelery" },
  ];
  const router=useRouter();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!input_Data.title.trim()) newErrors.title = "Title is required";
    if (!input_Data.price.trim()) newErrors.price = "Price is required";
    if (!input_Data.description.trim()) newErrors.description = "Description is required";
    if (!input_Data.image.trim()) newErrors.image = "Image URL is required";
    if (!input_Data.category.trim()) newErrors.category = "Category is required";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

  
    const existingIds = products.map((product) => Number(product.id)).filter(id => !isNaN(id)); 
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    const newId = maxId + 1; 

    
    const newProduct = { ...input_Data, id: newId };
    saveTo_database(newProduct);
    router.push("/product");
  };

  const setData = (e) => {
    const { name, value } = e.target;
    setInput_Data({ ...input_Data, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const saveTo_database = (product) => {
    axios
      .post("http://localhost:3001/products", product) 
      .then((res) => {
        console.log("Data saved successfully:", res.data);
      })
      .catch((err) => {
        console.error("Error saving data:", err);
      });
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="border p-7 grid items-center hover:border-green-600 rounded-2xl">
        <div className="justify-items-center mb-4">
          <h1 className="font-semibold text-xl">Add Product</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <p>Product Name</p>
          <input
            type="text"
            id="title"
            name="title"
            onChange={setData}
            className="border border-gray-600"
          />
          {error.title && <p className="text-red-500">{error.title}</p>}

          <p>Product Price</p>
          <input
            type="text"
            id="price"
            name="price"
            onChange={setData}
            className="border border-gray-600"
          />
          {error.price && <p className="text-red-500">{error.price}</p>}

          <p>Product Category</p>
          <select
            id="category"
            name="category"
            onChange={setData}
            className="border border-gray-600"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {error.category && <p className="text-red-500">{error.category}</p>}

          <p>Product Description</p>
          <textarea
            id="description"
            name="description"
            onChange={setData}
            className="border border-gray-600 h-15"
          />
          {error.description && <p className="text-red-500">{error.description}</p>}

          <p>Product Image</p>
          <input
            type="text"
            id="image"
            name="image"
            onChange={setData}
            className="border border-gray-600"
          />
          {error.image && <p className="text-red-500">{error.image}</p>}

          <div className="text-center mt-4">
            <button
              type="submit"
              className="border w-35 p-1 text-white bg-gray-800 rounded-2xl hover:bg-gray-950 cursor-pointer"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;