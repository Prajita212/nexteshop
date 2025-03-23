'use client'
import gsap from "gsap";
import Link from "next/link";
import { React,useEffect,useRef } from "react";
import Image from "next/image";
import image from '../../../public/image/pic4.jpg'
import {
    FaFacebook,
    FaTwitter,
    FaGoogle,
} from "react-icons/fa";

const Page = () => {
    const imageRef=useRef()
    const aboutRef=useRef()
    const shopNowButtonRef=useRef()
   useEffect(() => {
     gsap.to(shopNowButtonRef.current, {
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          duration: 1,
          ease: "power1.inOut",
        });
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
    <div className="relative font-serif">
      <header className="relative ">
        <Image ref={imageRef}
          src={image}
          className="w-full h-[500px] object-cover brightness-60"
          alt="Background"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono text-white" ref={aboutRef}>
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <p className="mt-4 text-2xl text-center">
            We'd love to hear from you! Get in touch with us below.
          </p>
        </div>
      </header>
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Get In Touch
        </h2>
        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Contact Info
        </h2>
        <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="mt-2 text-lg">Balkumari, Lalitpur ( House no:220)</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2 text-lg">+97732464311</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2 text-lg">eshop@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              What is your return policy?
            </h3>
            <p className="mt-2 text-lg">
              We offer a 30-day return policy. If you're not satisfied with your
              purchase, you can return it for a full refund or exchange within
              30 days of receiving your order.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Do you ship internationally?
            </h3>
            <p className="mt-2 text-lg">
              Yes, we ship to most countries worldwide. Shipping costs and
              delivery times vary based on the destination. Please refer to our
              shipping policy for more details.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How do I track my order?</h3>
            <p className="mt-2 text-lg">
              After your order is shipped, you will receive an email with a
              tracking number. You can use this number to track your order on
              the carrier's website.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Store Hours</h2>
          <p className="text-lg mb-4">
            Our team is available during the following hours:
          </p>
          <div className="text-lg space-y-2">
            <p>Sunday to Thursday: 9:00 AM - 6:00 PM</p>
            <p>Friday: 10:00 AM - 4:00 PM</p>
            <p>Saturday: Closed</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Find Us On The Map
        </h2>
        <div className="w-full h-96 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.99928354886!2d85.34099224999997!3d27.67094835000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e58a6d1331%3A0x18ad0afdf12f826f!2sBalkumari%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1742368238415!5m2!1sen!2snp"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="relative bg-cover bg-center w-full h-[220px]" style={{ backgroundImage: "url('/image/pic4.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center w-full h-full px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 mt-3">
            Visit to Our E-Shop
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto px-4">
            Discover the best products for your needs! From fashion to electronics, we have it all. Start shopping now and enjoy great deals.
          </p>
          <Link href='/product'>
            <button
              className="p-2 px-4 mb-2 text-white bg-gray-700 transform skew-x-[-12deg] hover:bg-black cursor-pointer focus:outline-none hover:scale-105 duration-300 rounded-lg"
            ref={shopNowButtonRef}>
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>

      <div className="justify-items-center mt-4 text-xl mb-4">
        <p>Don't forget to follow us on:</p>
        <div className="flex gap-2 mt-1.5 ">
          <Link href="https://www.facebook.com">
            <FaFacebook className="text-blue-800" />
          </Link>
          <Link href="https://www.x.com">
            <FaTwitter className="text-blue-500" />
          </Link>
          <Link href="https://www.google.com">
            <FaGoogle className="text-red-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
