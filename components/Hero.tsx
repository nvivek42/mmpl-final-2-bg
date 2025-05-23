"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the component only fully renders on the client
    setIsClient(true);

    // Resize and scroll handlers
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        setIsMobile(width < 768);
      }
    };

    const handleScroll = () => {
      if (heroRef.current && typeof window !== "undefined") {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    // Initial check
    handleResize();

    // Add listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // If not client-side, return null or a placeholder
  // if (!isClient) {
  //   return (
  //     <section className="relative h-screen w-full overflow-hidden">
  //       <div className="px-4 md:px-8 lg:px-20 py-16 text-white relative z-10 text-left max-w-[1400px] w-full">
  //         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Outfit'] mb-6 py-20 leading-tight">
  //           Built on Precision
  //           <br />
  //           Driven by Innovation!
  //         </h1>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="relative h-screen  overflow-hidden">
      {/* Background Image */}
      <Image
        ref={heroRef}
        src="/image/hero-bg/background6.webp"
        alt="Hero Background"
        fill
        priority
        className="absolute inset-0  "
      />
      {/* <div className="absolute inset-0 " /> */}
      <div className="absolute inset-0 bg-transparent  " />

      {/* Text Column */}
      <div className="px-4 md:px-8 lg:px-10 py-16  relative z-10 text-left max-w-[2000px] ">
        <div className="space-y-6 ml-0 md:ml-4 lg:ml-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-['Outfit'] mb-6 py-20 leading-tight">
            <div>
              Built on Precision
              <br />
              Driven by Innovation!
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
