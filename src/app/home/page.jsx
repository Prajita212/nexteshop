'use client'

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import image2 from '../../../public/image/pic2.jpg'
import image3 from '../../../public/image/pic3.jpg'

function Home() {
  const divRef = useRef(null);
  const homeRef = useRef(null);
  const shopNowButtonRef = useRef(null);
  const buttonsRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/67cfd9984821b71909b51c3c/1im1uk00q";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    gsap.set(divRef.current, { x: "-100vw" });
    gsap.set(homeRef.current.children, {});
    gsap.set(buttonsRef.current.children, { y: "100vw" });

    gsap.to(divRef.current, {
      x: 0,
      delay: 0.5,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(homeRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });

    gsap.to(buttonsRef.current.children, {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });

    gsap.to(shopNowButtonRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={divRef}
      className="flex flex-col lg:flex-row items-center justify-between p-10 text-center"
    >
      <div
        ref={homeRef}
        className="flex flex-col justify-center items-center font-serif md:bg-gray-700 md:text-white w-auto md:h-120 md:w-110"
      >
        <h1 className="lg:text-3xl mb-3 font-bold">
          Elevate Your Style with Premium Fashion
        </h1>
        <p>
          Shop the latest trends in clothing, accessories, and more. Fast
          shipping & easy returns!
        </p>
        <button
          aria-label="Explore Collections"
          className="mt-5 p-2 text-sm md:bg-transparent bg-gray-800 border border-white md:hover:bg-white md:hover:text-gray-900 text-white font-semibold rounded-lg transition duration-500 w-40 cursor-pointer"
        >
          Explore Collections
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <Image
          src={image2}
          alt="Fashion collection preview"
          loading="lazy"
          className="h-auto md:h-120 w-90 mt-2 lg:mt-0 duration-500 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-black hover:brightness-105"
        />
        <Image
          src={image3}
          alt="Trendy fashion styles"
          loading="lazy"
          className="h-auto md:h-120 w-90 mt-2 lg:mt-0 duration-500 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-black hover:brightness-105"
        />
      </div>

      <div ref={buttonsRef} className="flex flex-col font-serif mt-2 lg:mt-0">
        <button
          aria-label="Discover Exciting Offers"
          className="p-2 text-white bg-gray-700 transform skew-x-[-12deg] hover:bg-black cursor-pointer focus:outline-none hover:scale-105 duration-300 rounded-lg"
        >
          DISCOVER EXCITING OFFERS
        </button>
        <button
          ref={shopNowButtonRef}
          aria-label="Shop Now"
          className="mt-2 p-2 text-white bg-gray-700 transform skew-x-[-12deg] hover:bg-black cursor-pointer focus:outline-none hover:scale-105 duration-300 rounded-lg"
        >
        SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Home;