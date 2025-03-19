'use client';
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
      <div className="text-lg font-semibold">${product.price}</div>
      <div className="text-sm text-gray-500 mb-4">{product.category}</div>
      <p className="text-gray-600">{product.description}</p>
      
      <div>
        <Link href="/product">
          <button className="mt-4 bg-gray-700 hover:underline underline-offset-2 text-white px-3 py-1 rounded-lg">
            Go Back to Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
