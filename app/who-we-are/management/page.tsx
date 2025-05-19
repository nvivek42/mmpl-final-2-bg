"use client"

import Image from "next/image"
import CheckFooter from "@/components/CheckFooter"

// Management team data
const managementTeam = [
  {
    name: "Mr. Sahil Joshi",
    role: "Director",
    email: "srjoshi@metalmach.in"
  },
  {
    name: "Mr. Sunil Ingale",
    role: "Director",
    email: "sgingale@metalmach.in"
  },
  {
    name: "Mr. Vinit Inamdar",
    role: " General Manager ",
    email: "vvinamdar@metalmach.in"
  },
  // Add more team members as needed
]

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/pages/management.jpg"
            alt="Management Team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-start justify-start p-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-8">
            Management Team
          </h1>
        </div>
      </div>

      {/* Management Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
                {/* Management Team Data */}
          {managementTeam.map((member, index) => (
            <>
              <div 
                key={`name-${index}`} 
                className="text-lg font-semibold text-gray-800 md:border-b border-gray-200 py-4"
              >
                {member.name}
              </div>
              <div 
                key={`role-${index}`} 
                className="text-base text-gray-600 md:border-b border-gray-200 py-4"
              >
                {member.role}
              </div>
              <div 
                key={`email-${index}`} 
                className="text-base text-blue-600 hover:text-blue-800 md:border-b border-gray-200 py-4"
              >
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </div>
            </>
          ))}
        </div>
      </section>

      <hr className="max-w-7xl mx-auto border-t border-black my-8" />
      <CheckFooter />
    </div>
  )
}