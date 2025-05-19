"use client";

import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/image/overview-hero.webp"
          alt="Overview Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center">
            About MMPL
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#9F0E31]">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              MMPL is a leading manufacturer committed to excellence in
              precision engineering and sustainable manufacturing. With decades
              of experience, we've established ourselves as a trusted partner in
              both automotive and non-automotive sectors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey is marked by continuous innovation, technological
              advancement, and a deep commitment to quality. We combine
              traditional craftsmanship with cutting-edge technology to deliver
              exceptional products and solutions.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/image/overview-content.webp"
              alt="MMPL Facility"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#9F0E31]">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              MMPL is a leading manufacturer committed to excellence in
              precision engineering and sustainable manufacturing. With decades
              of experience, we've established ourselves as a trusted partner in
              both automotive and non-automotive sectors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journey is marked by continuous innovation, technological
              advancement, and a deep commitment to quality. We combine
              traditional craftsmanship with cutting-edge technology to deliver
              exceptional products and solutions.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/image/overview-content.webp"
              alt="MMPL Facility"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-[#9F0E31] text-center mb-8">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {[
            {
              title: "Precision Engineering",
              image: "/image/expertise-1.webp",
              description:
                "State-of-the-art precision engineering solutions for various industries.",
            },
            {
              title: "Manufacturing Excellence",
              image: "/image/expertise-2.webp",
              description:
                "Advanced manufacturing capabilities with focus on quality and efficiency.",
            },
            {
              title: "Precision Engineering",
              image: "/image/expertise-1.webp",
              description:
                "State-of-the-art precision engineering solutions for various industries.",
            },
            {
              title: "Manufacturing Excellence",
              image: "/image/expertise-2.webp",
              description:
                "Advanced manufacturing capabilities with focus on quality and efficiency.",
            },
            {
              title: "Precision Engineering",
              image: "/image/expertise-1.webp",
              description:
                "State-of-the-art precision engineering solutions for various industries.",
            },
            {
              title: "Manufacturing Excellence",
              image: "/image/expertise-2.webp",
              description:
                "Advanced manufacturing capabilities with focus on quality and efficiency.",
            },
            {
              title: "Precision Engineering",
              image: "/image/expertise-1.webp",
              description:
                "State-of-the-art precision engineering solutions for various industries.",
            },
            {
              title: "Manufacturing Excellence",
              image: "/image/expertise-2.webp",
              description:
                "Advanced manufacturing capabilities with focus on quality and efficiency.",
            },
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden">
              {/* Container with increased height */}
              <div className="relative w-full pb-[115%]">
                {" "}
                {/* Increased from 60% to 75% for more height */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  {" "}
                  {/* Increased padding */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {" "}
                    {/* Increased text size and margin */}
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {" "}
                    {/* Increased text size */}
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "30+", label: "Years Experience" },
              { number: "500+", label: "Employees" },
              { number: "1000+", label: "Products" },
              { number: "50+", label: "Global Partners" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#9F0E31]">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
