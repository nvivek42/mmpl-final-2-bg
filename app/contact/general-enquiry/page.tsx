'use client'

import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/image/contact-hero.webp"
          alt="Contact Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl">Get in touch with our experts</p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full">
          {/* Contact Info Column - 25% */}
          <div className="md:col-span-3 bg-white-100 p-8">
            <div className="sticky top-8 space-y-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">F-39, Chincholi MIDC,</p>
                    <p className="text-gray-600">Solapur, Mah, India - 413255</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@metalmach.in</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 70304 09930</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column - 75% */}
          <div className="md:col-span-9 bg-white">
            <form className="p-8 md:p-16 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={6} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-[#9F0E31] text-white font-medium rounded-md hover:bg-[#7d0b26] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}