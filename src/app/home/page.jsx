"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import image2 from "../../../public/image/pic4.jpg";
import image5 from "../../../public/image/pic5.jpg";
import image6 from "../../../public/image/pic6.jpg";
import image7 from "../../../public/image/pic7.jpg";
import image8 from "../../../public/image/pic8.jpg";
import image9 from "../../../public/image/pic9.jpg";
import image10 from "../../../public/image/pic10.jpg";
import image11 from "../../../public/image/pic11.jpg";
import { FaMapMarkerAlt, FaTruck } from "react-icons/fa";
import Link from "next/link";
import { IoReloadCircleOutline } from "react-icons/io5";
import gsap from "gsap";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 4))),
      [];
  });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((datas) => {
        const lastFour = datas.slice(-4);
        setProduct(lastFour);
      });
  }, []);
  const imageRef=useRef()
  const aboutRef=useRef()
 useEffect(() => {
  
     gsap.set(aboutRef.current, {
       x: "-100vw",
     });
     gsap.set(imageRef.current, {
       x: "100vw",
     });
     gsap.to(aboutRef.current, {
       x: 0,
       delay: 0.5,
       duration: 1,
       ease: "power1.out",
     });
     gsap.to(
       imageRef.current,
       {
         x: 0,
         duration: 1,
         ease: "power1.out",
       },
       "-=1"
     );
   }, []); 
  return (
    <div>
       <div className="relative">
  <Image
    src={image2}
    className="w-full h-[500px] object-cover brightness-60"
    alt="Background"
    ref={imageRef}
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono text-white" ref={aboutRef}>
    <h1 className="md:text-4xl text-2xl font-bold text-center">Elevate Your Style with Premium Fashion</h1>
    <p className="mt-4 md:text-2xl text-xl text-center">
      Shop the latest trends in clothing, accessories, and more. Fast
      shipping & easy returns!
    </p>
    <div className="flex justify-center mt-5">
      <Link href='/product'>
      <button
        className="md:p-2 p-1 md:text-lg text-sm bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition duration-500 cursor-pointer"
      >
        Explore Collections
      </button>
      </Link>
    </div>
  </div>
</div>

      <div>
        <h1 className="text-center text-3xl font-semibold text-black mt-5">
          Most popular
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 lg:px-30 px-10">
          {products.map((pro) => (
            <div
              key={pro.id}
              className=" p-4 rounded-lg shadow-sm shadow-gray-500 cursor-pointer hover:shadow-lg hover:scale-105 transition-shadow"
            >
              <Link href={`/product/${pro.id}`}>
                <img
                  src={pro.image}
                  alt={pro.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <div className="md:text-lg font-semibold">{pro.title}</div>
                <div className="text-gray-700">${pro.price}</div>
                <div className="text-sm text-gray-500">{pro.category}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-screen relative overflow-hidden">
  <Image
    src={image8}
    alt="Background Image"
    className="brightness-50 object-cover w-full max-h-screen absolute inset-0"
    layout="fill"
  />
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen p-8">
    <div className="text-center lg:text-left lg:mr-16 max-w-xl">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Explore Our Exquisite Men's and Women's Collection Now!
      </h1>
      <p className="text-lg text-white mb-8">
        Discover the latest trends in fashion. From casual wear to formal attire, we have everything you need to elevate your style.
      </p>
      <button className="md:px-4 px-2 md:py-3 text-lg text-white bg-transparent border-2 border-white transform skew-x-[-12deg] hover:bg-white hover:text-black cursor-pointer focus:outline-none hover:scale-105 transition-all duration-300 rounded-lg">
        View Collection
      </button>
    </div>
    <div className="relative mt-12 lg:mt-0 flex items-center justify-center space-x-8 ">
      <div className="relative w-55 h-55 lg:w-80 lg:h-80 transform hover:scale-105 transition-transform duration-500">
        <Image
          src={image9} 
          alt="Image 4"
          className="rounded-lg shadow-2xl border-2 border-white"
        
        />
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-black font-bold text-lg">New</span>
        </div>
      </div>
      <div className="relative w-55 h-55 lg:w-80 lg:h-80 transform hover:scale-105 transition-transform duration-500">
        <Image
          src={image10} 
          alt="Image 3"
          className="rounded-lg shadow-2xl border-2 border-white"
         
        />
      
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-black font-bold md:text-lg">Sale</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gradient-to-r from-gray-100 to-gray-300 mt-20 rounded-lg shadow-lg">
  <div className="w-full md:w-1/2 max-w-[600px] space-y-4">
    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
      Elevate Your Lifestyle
    </h1>
    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
      Discover the perfect blend of style and innovation with our curated collection of accessories and electronics. From chic bags, jewelry, and scarves that add a touch of elegance to your outfit, to cutting-edge smartphones, laptops, and smart home devices that keep you connected and productive, we bring you the best of both worlds. Whether you're looking to make a statement or embrace the future of technology, our selection is designed to inspire and enhance your everyday life.
    </p>
    <Link href='/product'>
    <div className="flex gap-4">
      <button
        aria-label="Shop Accessories"
        className="mt-6 md:py-3 md:px-6 p-1 text-white bg-gray-800 cursor-pointer focus:outline-none transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:text-black hover:bg-white"
      >
        SHOP ACCESSORIES
      </button>
      <button
        aria-label="Shop Electronics"
        className="mt-6 md:py-3 md:px-6 p-1 text-white bg-blue-600 cursor-pointer focus:outline-none transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:text-black hover:bg-white"
      >
        SHOP ELECTRONICS
      </button>
    </div>
    </Link>
  </div>
  <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative group overflow-hidden rounded-lg shadow-md">
        <Image
          src={image5} 
          alt="Accessories"
          className="w-full h-64 lg:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <p className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-lg">
          Chic Accessories
        </p>
      </div>

      <div className="relative group overflow-hidden rounded-lg shadow-md">
        <Image
          src={image11} 
          alt="Electronics"
          className="w-full h-64 lg:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <p className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-lg">
          Smart Electronics
        </p>
      </div>
    </div>
  </div>
</div>
      <div>
        <h1 className="text-3xl text-center mt-8 mb-5">Newest Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 lg:px-30 px-10">
          {product.map((prod) => (
            <div
              key={prod.id}
              className=" p-4 cursor-pointer hover:shadow-lg hover:scale-105 transition-shadow text-center"
            >
              <Link href={`/product/${prod.id}`}>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <div>{prod.title}</div>
                <div className="text-gray-700">${prod.price}</div>
                <div className="text-sm text-gray-500">{prod.category}</div>
              </Link>
              <Link href="/cart"></Link>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-screen font-mono">
        <Image
          src={image6}
          className="absolute object-cover h-full"
          alt="img"
        />
        <div className="relative top-25 text-white p-10 w-120 leading-relaxed text-justify">
          <h1 className="md:text-4xl text-3xl font-bold mb-3">New Arrivals</h1>
          <p className="md:text-2xl text-xl">
            Stay ahead of the trends with our latest additions. Each new arrival
            is handpicked for its fresh design and contemporary appeal, ensuring
            your wardrobe always feels current and uniquely you.
          </p>
          <Link href='/product'>
          <button
            aria-label="Explore Collections"
            className="mt-5 px-4 py-1.5 text-lg bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition duration-500  cursor-pointer"
          >
            Shop Now
          </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between text-center gap-5 p-8">
        <div className=" flex flex-col items-center justify-center">
          <IoReloadCircleOutline />
          <h3 className="text-xl font-semibold">Return policy?</h3>
          <p className="mt-2">
            We offer a 30-day return policy. If you're not satisfied with your
            purchase, you can return it for a full refund or exchange within 30
            days of receiving your order.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <FaTruck />
          <h3 className="text-xl font-semibold">Ship internationally?</h3>
          <p className="mt-2 ">
            Yes, we ship to most countries worldwide. Shipping costs and
            delivery times vary based on the destination. Please refer to our
            shipping policy for more details.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <FaMapMarkerAlt />
          <h3 className="text-xl font-semibold">Tracking order?</h3>
          <p className="mt-2">
            After your order is shipped, you will receive an email with a
            tracking number. You can use this number to track your order on the
            carrier's website.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center min-h-screen font-mono ">
        <Image
          src={image7}
          className="absolute object-cover h-full brightness-50"
          alt="img7"
        />
        <div className="relative  text-white md:w-200 leading-relaxed">
          <h1 className="md:text-4xl text-3xl font-bold mb-3">Sale & Special Offers </h1>
          <p className="md:text-2xl mb-3">
            Find exceptional deals on your favorite products without
            compromising on quality. Our sale section features exclusive
            discounts and limited-time offers, making it easier than ever to
            revamp your wardrobe for less.{" "}
          </p>
          <Link href='/product'>
          <button
            aria-label="Discover Exciting Offers"
            className="p-2 text-white bg-transparent border transform skew-x-[-12deg] hover:bg-white hover:text-black cursor-pointer focus:outline-none hover:scale-105 duration-300 rounded-lg"
          >
            DISCOVER EXCITING OFFERS
          </button>
          </Link>
        </div>
      </div>
      <div className="lg:flex items-center justify-between p-8">
  <div>
    <h1 className="text-lg font-semibold">Menu</h1>
    <ul className="list-none">
     <Link href='/home'> <li>Home</li></Link>
     <Link href='/product'> <li>Product</li></Link>
     <Link href='/about'> <li>About Us</li></Link>
     <Link href='/contactUs'> <li>Contact Us</li></Link>
    </ul>
  </div>
  <div><Link href='/product'>
    <h1 className="text-lg font-semibold">Categories</h1>
    <ul className="list-none">
   <li>Women's clothing</li>
   <li>Men's clothing</li>
    <li>Accessories</li>
    <li>Electronics</li>
    </ul></Link>
  </div>
  <div><Link href='/contactUs'>
    <h1 className="text-lg font-semibold">Resources</h1>
    <ul className="list-none">
      <li>Return Policy</li>
      <li>Free shipping</li>
      <li>Order Tracking</li>
    </ul></Link>
  </div>
  <div>
    <h1 className="text-lg font-semibold">Social Media</h1>
    <ul className="list-none">
     <a href='https://www.facebook.com'> <li>Facebook</li></a>
     <a href='https://www.instagram.com'> <li>Instagram</li></a>
     <a href='https://www.tiktok.com'> <li>Tiktok</li></a>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Home;
