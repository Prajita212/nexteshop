"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaShopify, FaCartPlus } from "react-icons/fa";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5"; 
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const gsapRef = useRef(null);

  useEffect(() => {
    gsap.to(gsapRef.current, {
      rotate: 360,
      duration: 1,
      scale: 0,
      repeat: -1,
      repeatDelay: 0.5,
      yoyo: true,
    });
  }, []);

  return (
    <div className="flex relative z-10 justify-between items-center font-semibold p-8 top-0 bg-white shadow-md">
      <div>
        <FaShopify ref={gsapRef} className="md:text-3xl text-2xl" />
      </div>
      <div className="hidden md:flex md:gap-20 gap-10">
        <Link href="/">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
            Home
          </h2>
        </Link>
        <Link href="/product">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
            Products
          </h2>
        </Link>
        <Link href="/about">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
            About
          </h2>
        </Link>
        <Link href="/contactUs">
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
            Contact us
          </h2>
        </Link>
      </div>

      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="text-2xl cursor-pointer hover:text-green-500"
        >
          <IoReorderThreeOutline />
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-8 text-2xl cursor-pointer hover:text-green-500"
        >
          <IoClose />
        </button>

        <Link href="/" onClick={toggleMenu}>
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
            Home
          </h2>
        </Link>
        <Link href="/product" onClick={toggleMenu}>
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
            Products
          </h2>
        </Link>
        <Link href="/about" onClick={toggleMenu}>
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
            About
          </h2>
        </Link>
        <Link href="/contactUs" onClick={toggleMenu}>
          <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
            Contact us
          </h2>
        </Link>
        <Link
          href="/cart"
          onClick={toggleMenu}
          className="flex gap-2 items-center hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300"
        >
          <h2>Cart</h2>
          <FaCartPlus className="text-sm" />
        </Link>
      </div>
      <div className="hidden md:flex">
        <Link href="/cart" className="gap-3 items-center">
          <FaCartPlus className="hover:text-green-500" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
