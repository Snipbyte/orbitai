"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1733328018320-7da9cf3de1e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateY(${offset}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <Image
            src={src}
            alt={`Slide ${index}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
        <h1 data-aos="fade-up" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Empower Your Future with AI Orbits
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-base md:text-xl font-light max-w-2xl"
        >
          Unlock the power of AI with innovative solutions from AI Orbits. Transform your business with intelligent monitoring, analytics, and journey management systems.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;