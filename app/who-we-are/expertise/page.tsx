"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import CheckFooter from "@/components/CheckFooter";

const Overview = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/image/pages/expertise-page.jpg"
          alt="Overview Hero"
          fill
          className="object-fill"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-top justify-top  p-4 md:p-16 lg:p-24">
          <h1 className="text-3xl md:text-3xl lg:text-4xl text-white font-bold  ">
            Engineering Partnerships. Shaping Possibilities.
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 text-2xl leading-relaxed">
              In an ever-evolving industrial landscape, businesses demand more
              than just components—they require precision, reliability, and
              forward-thinking solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto  py-4">
        <div className="grid md:grid-cols-2 gap-12 items-center text-lg">
          <p className="text-gray-700 leading-relaxed">
            By working closely with our clients, we’ve cultivated deep insights
            into their challenges and aspirations. This enables us to deliver
            highly customized solutions that seamlessly align with their
            technical and operational goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a skilled team, cutting-edge facilities, and a commitment to
            quality at every stage, we consistently engineer results that drive
            performance across a wide spectrum of industries.
          </p>
        </div>
      </section>

      <section className="width-full py-4">
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/pages/expertise3.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 ">
            <div className="py-16 px-2 max-w-7xl mx-auto">
              <p className="text-2xl md:text-3xl leading-relaxed text-black-700 font-bold">
                Comprehensive Solutions – From Prototype to Production
              </p>
              <br />
              <br />
              <div className="space-y-6">
                {[
                  "Design engineering to enhance performance and functionality",
                  "Low Pressure, Gravity, and Sand Casting expertise",
                  "Focus on reducing weight, defects, and cost",
                  "Flexible for both low and high-volume production",
                  "Fully integrated in-house capabilities for basket pricing",
                  "Trusted partner for complex component development",
                  "Global presence near key customer hubs",
                ].map((text, index) => (
                  <p
                    key={index}
                    className="text-2xl md:text-2xl leading-relaxed text-black-700 font-light"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full py-12">
        <h2 className="text-3xl font-bold text-[#9F0E31] text-center mb-8">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {[
            {
              type: "image",
              image: "/image/pages/sectors.jpg",
            },
            {
              type: "content",
              title: "WORKING ACROSS SECTORS",
              quote: "Diverse industries. One standard—excellence.",
              description:
                "With over five decades of expertise in the automotive space, we've expanded our solution-driven approach to serve leaders across both public and private sectors, delivering precision and performance across every engagement. Industries Served -",
              industries: [
                "• Automotive",
                "• Locomotive",
                "• Energy",
                "• Aerospace",
                "• Marine",
                "• Agriculture",
                "• Infrastructure",
                "• Medical",
                "• Defence",
              ],
            },
            {
              type: "content",
              title: "GLOBAL PRESENCE",
              quote:
                "Strategically located. Globally trusted.",
              description:
                "With a growing footprint across key markets, we stay close to customer clusters—enhancing responsiveness, reducing turnaround times, and driving operational efficiency.Our global presence ensures we deliver flexible, reliable support to clients worldwide—wherever performance matters most."
            },
            {
              type: "image",
              image: "/image/pages/map.jpg",
            },
            {
              type: "image",
              image: "/image/pages/facilities1.jpg",
            },
            {
              type: "content",
              title: "Facilities",
              quote:
                "From concept to casting— We're fully equipped.",
              description: [
                "we support both low- and high-volume production with best-in-class equipment (CNC-Makino, Micron, Hartford, VMC, EDM).",
                "Our integrated infrastructure features -",
               
              ].join(" "),
              industries: [
               "• Low-Pressure, Gravity & Sand Casting units",
                "• Technology Centres & Tool Manufacturing",
                "• Quality & Testing Labs",
                "• Machine Shop Floors & Sub-assembly Lines",
              ],

              
            },
             {
              type: "content",
              title: "QUALITY FOCUS",
              quote:
                "Driven by precision. Defined by excellence.",
              description: 
                ["At MMPL, quality is more than a benchmark—it’s a mindset. Backed by a strong engineering team, we deliver precision-crafted solutions with consistently low rejection rates and optimized performance.",
                "Guided by Japanese manufacturing principles, we continuously enhance our systems and processes to set new standards year after year.",
                "Our relentless focus on quality makes us the trusted partner for global industry leaders."]              
              },
               {
              type: "image",
              image: "/image/pages/quality.jpg",
            }

          ].map((item, index) => (
            <div key={index} className="relative overflow-hidden">
              {item.type === "image" && item.image ? (
                // Image Grid
                <div className="relative w-full pb-[100%]">
                  <Image
                    src={item.image}
                    alt="Expertise"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                // Content Grid
               // Content Grid
<div className="relative w-full pb-[100%] bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="absolute inset-0 p-8 flex flex-col justify-top items-start">
    <h3 className="text-2xl font-bold text-[#9F0E31] mb-4">
      {item.title}
    </h3>
    <p className="text-2xl font-light text-gray-800 mb-6 leading-tight">
      {item.quote}
    </p>
    {Array.isArray(item.description) ? (
      <div className="space-y-4 mb-4">
        {item.description.map((paragraph, i) => (
          <p key={i} className="text-base text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    ) : (
      <p className="text-base text-gray-600 leading-relaxed mb-4">
        {item.description}
      </p>
    )}
    {item.industries && (
      <>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Industries Served
        </p>
        <div className="grid grid-cols-2 gap-6">
          {item.industries.map((industry, i) => (
            <span key={i} className="text-gray-600">
              {industry}
            </span>
          ))}
        </div>
      </>
    )}
  </div>
</div>
              )}
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
      
      {/* Footer Section */}
      <CheckFooter />
    </div>
  );
};

export default Overview;
