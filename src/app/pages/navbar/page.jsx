// 'use client'
// import React, {useContext, useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { FaShopify, FaCartPlus } from "react-icons/fa";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import Link from "next/link";
// import { CartContext } from "@/app/cartContext/contextProvider/page";


// function Navbar() {
//   const { cart } = useContext(CartContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const gsapRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     gsap.to(gsapRef.current, {
//       rotate: 360,
//       duration: 1,
//       scale: 0,
//       repeat: -1,
//       repeatDelay: 2,
//       yoyo: true,
//     });
//     gsap.to(buttonRef.current, {
//       scale: 1.1,
//       repeat: -1,
//       yoyo: true,
//       duration: 1,
//   });
//   });

//   return (
//     <div className="flex justify-between items-center font-semibold p-8 top-0">
//       <div>
//         <FaShopify ref={gsapRef} className="md:text-3xl text-2xl" />
//       </div>
//       <div
//         className={`md:flex md:gap-20 gap-10 ${
//           isMenuOpen
//             ? "fixed p-2 bg-white right-15 top-3 border border-gray-200 z-50"
//             : "hidden"
//         }`}
//       >
//         <Link href="/" onClick={toggleMenu}>
//           <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
//             Home
//           </h2>
//         </Link>
//         <Link href="/product" onClick={toggleMenu}>
//           <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
//             Products
//           </h2>
//         </Link>
//         <Link href="/about" onClick={toggleMenu}>
//           <h2 className="hover:underline underline-offset-3 hover:text-green-500 hover:scale-110 transition duration-300">
//             About
//           </h2>
//         </Link>
//       </div>
//       <div>
//         <Link href="/cart" className="flex gap-3 items-center">
//           <span className="flex text-red-400 text-sm">{cart.length}</span>
//           <FaCartPlus ref={buttonRef} className="hover:text-green-500" />
//         </Link>
//       </div>
//       <IoReorderThreeOutline
//         className="md:hidden text-2xl cursor-pointer hover:text-green-500"
//         onClick={toggleMenu}
//       />
//     </div>
//   );
// }

// export default Navbar;