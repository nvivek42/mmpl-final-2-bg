"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CheckFooter from "@/components/CheckFooter";

export default function LeadershipPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 ">
          <Image
            src="/image/pages/leadership2.jpg"
            alt="Leadership background"
            fill
            className="object-cover "
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-2 sm:py-32 sm:px-2 lg:px-4 ">
          <h1 className="text-4xl font-bold tracking-tight text-[#A03232] sm:text-5xl lg:text-6xl  bg-white/10 backdrop-blur-sm px-6 py-4 inline-block rounded-lg">
            Leading with Precision, Shaping the Future
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2  sm:px-2 lg:px-4 py-8">
        <div className=" backdrop-blur-sm ">
          <div className="p-4 md:p-6">
            <p className="text-2xl md:text-2xl leading-relaxed text-gray-700 font-light">
              At Metalmach Mastery Pvt. Ltd. (MMPL) , our leadership philosophy
              is rooted in the belief that true progress stems from a relentless
              commitment to precision and innovation. Guided by over 25 years of
              diverse business experience, our leadership team continually
              reinvents processes and strategies to ensure we remain at the
              forefront of the die-casting and precision machining industry.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2  sm:px-2 lg:px-4 py-4">
        <div className="">
          <div className="p-4 md:p-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              Driven by our core values-Innovate, Integrate, Elevate-we have
              built a state-of-the-art gravity die casting facility, supported
              by advanced machining infrastructure and a skilled workforce. Our
              leaders champion a culture of continuous improvement, empowering
              every team member to contribute to our shared vision of excellence
              and to meet the evolving needs of our clients across automotive,
              agriculture, infrastructure, and emerging sectors.
            </p>
            <br />
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              With a visionary outlook and a passion for mastery, the MMPL
              leadership team is committed to elevating industry standards and
              driving sustainable growth for our company, our clients, and our
              country.
            </p>
          </div>
        </div>
      </div>

      
      {/* Grid Section */}
      <section className="w-full mx-auto py-8">
        {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Leadership Philosophy
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          At our company, leadership is about vision, innovation, and empowering
          our teams to achieve excellence.
        </p>
        <br /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {[
            {
              image: "/image/pages/vision.jpg",
            },
            {
              title: "VISION & APPROACH",
              image: "",
              description: [
                "INDIAN ROOTS, GLOBAL AMBITIONS.",
                "Proudly rooted in India, Metalmach Mastery Pvt. Ltd. aspires to set global benchmarks in precision die-casting.",
                "Our vision is simple: to be the first choice for high-quality casting solutions worldwide.",
                "We innovate, integrate, and elevate-driven by a passion to make India proud and deliver excellence everywhere we work.",
                "WE ARE PROUD TO BUILD IN INDIA,",
                "TO LEAD THE WORLD WITH INDIAN INGENUITY.",
              ],
            },

            {
              title: "VALUES & ETHICS",
              description: [
                "OUR PRINCIPLES SHAPE OUR PROGRESS.",
                "At Metalmach Mastery Pvt. Ltd., our values are the backbone of our operations and growth. We believe that how we achieve success is just as important as the success itself.",
                "1. Excellence & Integrity",
                "2. Entrepreneurial Spirit",
                "3. Responsibility & Accountability",
                "4. Sustainability & Community",
                "",
                "OUR MISSION IS SIMPLE:",
                "To exceed customer expectations, create lasting value for our stakeholders, and nurture the growth of our people and partners.",
              ],
            },
            {
              image: "/image/pages/values.jpg",
            },
            {
              image: "/image/pages/solutions.png",
            },
            {
              title: "CRAFTING SOLUTIONS, NOT JUST CASTINGS",
              description: [
                "WE DON'T JUST MANUFACTURE",
                "WE MASTER PRECISION.",
                "At MMPL, every component we deliver reflects our deep commitment to problem-solving and performance excellence.",
                "We collaborate closely with our customers — right from concept to completion — offering value-engineered solutions that go beyond standard die-casting and machining.",
                "Our precision-driven approach and decades of industry experience empower us to reduce defects, lower costs, and improve lead times — all without ever compromising on strength or quality.",
                "This relentless focus makes MMPL a trusted partner for OEMs and Tier-1 suppliers from prototype to production.",
              ],
            },
            {
              title: "MANAGEMENT",
              description: [
                "The TEAM that LEADS with VISION ",
                "AND BUILDS with PURPOSE.",
                "At Metalmach Mastery Pvt. Ltd., our leadership is rooted in hands-on experience, technical excellence, and an unwavering commitment to growth — for the company, our people, and the nation.",
                "Our founders and management team bring over two decades of industry expertise and a passion for innovation. With a collaborative mindset and a future-focused approach, they have created a culture where precision, ownership, and continuous improvement define every operation.",
                "We believe in developing leaders from within — empowering our workforce to take initiative, innovate boldly, and contribute meaningfully at every level.",
                "VIEW TOP MANAGEMENT",
              ],
            },
            {
              image: "/image/pages/management.jpg",
            },
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden">
              {/* Container with increased height */}
              <div className="relative w-full pb-[100%]">
                {" "}
                {/* Increased from 60% to 75% for more height */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray/50 flex flex-col justify-top p-8">
                  {" "}
                  {/* Increased padding */}
                  <h3 className="text-xl font-bold text-black mb-3 py-4">
                    {" "}
                    {/* Increased text size and margin */}
                    {item.title}
                  </h3>
                  {Array.isArray(item.description) ? (
                    item.description.map((desc, i) => (
                      <p key={i} className="text-black-100 text-md mb-2">
                        {desc}
                      </p>
                    ))
                  ) : (
                    <p className="text-black-200 text-base">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="max-w-10xl mx-auto border-t border-[#A03232] " />
      <CheckFooter />
    </div>
  );
}

// Sample data - replace with actual data
const leadershipTeam = [
  {
    name: "Rajeev Sharma",
    role: "Chief Executive Officer",
    bio: "With over 25 years of industry experience, Rajeev has led the company through significant growth and transformation. His strategic vision and commitment to innovation have positioned us as industry leaders.",
    imageUrl: "/placeholder.svg?height=500&width=400",
  },
  {
    name: "Priya Patel",
    role: "Chief Financial Officer",
    bio: "Priya brings 20 years of financial expertise to our leadership team. Her strategic financial planning has been instrumental in our sustainable growth and operational excellence.",
    imageUrl: "/placeholder.svg?height=500&width=400",
  },
  {
    name: "Amit Kumar",
    role: "Chief Technology Officer",
    bio: "Amit leads our technology initiatives with a focus on innovation and digital transformation. His expertise in emerging technologies has helped us stay ahead of industry trends.",
    imageUrl: "/placeholder.svg?height=500&width=400",
  },
  {
    name: "Sunita Reddy",
    role: "Chief Operations Officer",
    bio: "Sunita oversees our global operations with a focus on efficiency and excellence. Her leadership has been key to our operational success across multiple markets.",
    imageUrl: "/placeholder.svg?height=500&width=400",
  },
  {
    name: "Vikram Singh",
    role: "Chief Marketing Officer",
    bio: "Vikram drives our global marketing strategy with a focus on brand building and customer engagement. His innovative approach has significantly enhanced our market presence.",
    imageUrl: "/placeholder.svg?height=500&width=400",
  },
  {
    name: "Ananya Desai",
    role: "Head of Human Resources",
    bio: "Ananya leads our people strategy with a focus on talent development and organizational culture. Her leadership has been instrumental in building our high-performance teams.",
    imageUrl: "/placeholder.svg?height=500&width=400",
  },
];

const boardMembers = [
  {
    name: "Rajesh Mehta",
    role: "Chairman",
    bio: "Rajesh brings extensive experience in corporate governance and strategic leadership to our board.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sanjay Gupta",
    role: "Vice Chairman",
    bio: "Sanjay's expertise in global markets has been invaluable to our international expansion strategy.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Meera Kapoor",
    role: "Independent Director",
    bio: "Meera's background in finance and sustainability brings a valuable perspective to our board.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Arjun Malhotra",
    role: "Independent Director",
    bio: "Arjun's technology expertise helps guide our digital transformation initiatives.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
];

const philosophyPoints = [
  {
    title: "Vision & Innovation",
    description:
      "We believe in leading with a clear vision and fostering innovation at every level of the organization.",
  },
  {
    title: "Integrity & Transparency",
    description:
      "Our leadership is built on a foundation of integrity, transparency, and ethical business practices.",
  },
  {
    title: "Empowerment & Collaboration",
    description:
      "We empower our teams and foster collaboration to achieve collective excellence and drive results.",
  },
  {
    title: "Customer Focus",
    description:
      "Our leadership team maintains a relentless focus on understanding and exceeding customer expectations.",
  },
];
