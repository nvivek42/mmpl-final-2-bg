"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import './Overview.css';
import CheckFooter from '@/components/CheckFooter';
import About from '@/components/Industries';
import Industries from '@/components/Industries';
import { motion } from 'framer-motion';



  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }


const Overview = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/image/pages/infra2.webp"
          alt="Overview Hero"
          fill
          className="object-contain"
          priority
        />
        {/* Diagonal stripes */}
      <div
        className="absolute inset-0 before:absolute before:inset-0 before:z-0 before:translate-x-[-45%] before:rotate-[-35deg] before:transform
        before:bg-gradient-to-r before:from-[#0a1530] before:via-[#1e3a8a] before:to-[#3b82f6] before:content-['']"
      />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-start justify-start p-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-roboto font-bold mt-4 ">
          <i> Where Engineering Meets Perfection...</i>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full  px-10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
       
          <div className="space-y-8">
             <div className="text-center">
          <div className={`text-3xl font-bold sm:text-3xl lg:text-4xl text-gray-900 tracking-tight font-roboto`}>
            Our Story
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300"
          >
            <div className="flex flex-col h-full">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                MMPL is a leading manufacturer committed to excellence in precision engineering 
              and sustainable manufacturing. With decades of experience, we've established 
              ourselves as a trusted partner in both automotive and non-automotive sectors.
          </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300"
          >
            <div className="flex flex-col h-full">
             
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
               Our journey is marked by continuous innovation, technological advancement, 
              and a deep commitment to quality. We combine traditional craftsmanship with 
              cutting-edge technology to deliver exceptional products and solutions.
            </p>
            </div>
          </motion.div>
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
              { number: "50+", label: "Global Partners" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#9F0E31]">{stat.number}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <Industries /> 
     <hr className="my-2 border-t border-black" />
     <CheckFooter />
    
    </div>
  );
};


export default Overview;