"use client";

import React from "react";
import Image from "next/image";
import CheckFooter from "@/components/CheckFooter";

const Overview = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/image/pages/non-auto.jpg"
          alt="Overview Hero"
          fill
          className="object-cover  opacity-30"
          priority
        />
       

        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-top justify-top  p-4 md:p-16 lg:p-24">
          <h1 className="text-3xl md:text-3xl lg:text-4xl text-[#9F0E31] font-bold  ">
            Every process defined, every outcome precisely delivered.
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 text-xl leading-relaxed">
              MMPL is a global multinational network of innovation-driven
              enterprises meeting a diverse and demanding clientele’s aluminium
              casting needs. We deliver comprehensive, end-to-end engineering
              services to produce mission-critical, high-precision components
              across a broad spectrum of industries.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto  py-4">
        <div className="grid md:grid-cols-2 gap-12 items-center text-lg">
          <p className="text-gray-700 leading-relaxed">
            We have pioneered advanced lightweight aluminium casting methods,
            securing a competitive edge for our clients. With strategic
            expansion into emerging markets—including a recent entry into the
            electric vehicle sector—we stay ahead of industry trends and remain
            ready to tackle tomorrow’s engineering challenges.
          </p>
        </div>
      </section>

      <section className="width-full py-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative">
          {/* Background Image */}

          {/* Content */}
          <div className="relative z-10 ">
            <div className="py-16 px-2 max-w-7xl mx-auto">
              <p className="text-2xl md:text-3xl leading-relaxed text-black-700 font-bold">
                AT A GLANCE
              </p>
              <br />
              <br />
              <div className="space-y-6">
                {[
                  "One of India’s largest aluminium casting foundries",
                  "Pioneers of the Pie-System in Low Pressure Die Casting",
                  "Specialists in high-pressure die casting, gravity die casting, and sand casting",
                  "Manufacturers of high-precision, lightweight components",

                  " skilled professionals driving innovation",
                  "Proven track record of consistent on-time delivery",
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
      <section className="w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {[
            {
              type: "image",
              image: "/image/pages/solutions2.png",
            },
            {
              type: "content",
              title: "SIGNATURE PROCESS",
              quote: "Proven methods. Reliable outcomes.",
              description:
                "Years of hands-on expertise have shaped our proprietary 8-stage development framework—built to ensure precision, performance, and consistency from design to dispatch. This structured approach enables us to meet the toughest specifications, foster long-term partnerships, and deliver with confidence, every single time.",
            },
            {
              type: "content",
              title: "SOLUTION-ORIENTED",
              quote: "Driven by challenges. Defined by results.",
              description:
                "We specialise in tailoring solutions that enhance both component performance and cost-effectiveness. Powered by visionary leadership, world-class infrastructure, and a global footprint, we consistently deliver precision with speed. Our low rejection rates and commitment to timelines set us apart—earning us long-standing trust as a preferred partner across industries.",
            },
            {
              type: "image",
              image: "/image/pages/factory.jpg",
            },
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
                          <p
                            key={i}
                            className="text-base text-gray-600 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-base text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto ">
          <div className="space-y-4 text-left">
            <p className="text-2xl md:text-3xl lg:text-4xl  text-[#9F0E31]">
              Solving complexity with precision.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#9F0E31]">
              Delivering end-to-end systems.
            </p>
          </div>
        </div>
      </section>
     
     <section className="relative w-full min-h-[600px]">
  {/* Background Image Container */}
  <div className="absolute inset-0">
    <Image
      src="/image/pages/overview33.jpg"
      alt="Overview Hero"
      fill
      className="object-fill opacity-30"
      priority
    />
  </div>

  {/* Content Container */}
  <div className="relative z-10">
    <div className="w-full px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {[
          "Design Enhancement Services",
          "R&D and Testing Labs",
          "In & Out Of Line Quality Checkpoints",
          "Gravity Die-Casting",
          "Low Pressure Die-Casting",
          "Sand Casting",
          "Value Engineering",
          "Automation & IT Systems",
          "24×7 Customer Support",
        ].map((text, index) => (
          <p
            key={index}
            className="text-2xl leading-relaxed text-black-100 font-bold flex items-center"
          >
            <span className="w-2 h-2 bg-[#9F0E31] rounded-full mr-3" />
            {text}
          </p>
        ))}
      </div>
    </div>
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
