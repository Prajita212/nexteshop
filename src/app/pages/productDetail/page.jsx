import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const { product_id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
        const fakeStoreResponse = await fetch("https://fakestoreapi.com/products");
        const fakeStoreData = await fakeStoreResponse.json();

        
        const jsonServerResponse = await fetch("http://localhost:3001/products");
        const jsonServerData = await jsonServerResponse.json();

        
        const combinedData = [...fakeStoreData, ...jsonServerData];

    
        const foundProduct = combinedData.find(
          (pro) => pro.id === parseInt(product_id)
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found"); 
        }
      } catch (err) {
        setError("Error fetching product details"); 
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchProduct();
  }, [product_id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; 
  }

  if (!product) {
    return <div>Product not found</div>; 
  }

  return (
    <div className="p-10">
      <div className="p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-blue-600 mb-4">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain mb-4"
        />
        <div className="text-lg font-semibold">${product.price}</div>
        <div className="text-sm text-gray-500 mb-4">{product.category}</div>
        <p className="text-gray-600">{product.description}</p>
        <div> <button className="mr-3 text-blue-700 hover:text-green-600"><Link to="/product">Go back to product</Link></button>
</div>
        
      </div>
    </div>
  );
}

export default ProductDetail;