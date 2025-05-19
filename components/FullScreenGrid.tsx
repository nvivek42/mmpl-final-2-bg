"use client";

import Image from "next/image";
import Link from "next/link";
import "./FullScreenGrid.css";

// Types for grid items
interface GridItem {
  id: string;
  imageSrc: string;
  title: string;
  link: string;
  alt: string;
}

// Sample data (you can replace this with your actual data)
const gridItems: GridItem[] = [
  {
    id: "leadership",
    imageSrc: "/image/full-screen-grid/leadership1.jpg",
    title: "Leadership",
    link: "/who-we-are/leadership",
    alt: "Our leadership",
  },
  {
    id: "expertise",
    imageSrc: "/image/full-screen-grid/expertise11.jpg",
    title: "Expertise",
    link: "/who-we-are/expertise",
    alt: "Our expertise",
  },
  {
    id: "infrastructure",
    imageSrc: "/image/full-screen-grid/infra1.jpg",
    title: "Infrastructure",
    link: "/who-we-are/facilities",
    alt: "infra",
  },
  {
    id: "e-mobility",
    imageSrc: "/image/full-screen-grid/e-mobility.jpg",
    title: "E-Mobility",
    link: "/what-we-do/e-mobility",
    alt: "E-Mobility solutions",
  },
  {
    id: "automotive",
    imageSrc: "/image/full-screen-grid/auto2.jpg",
    title: "Automotive",
    link: "/what-we-do/automotive",
    alt: "Automotive solutions",
  },

  {
    id: "non-automotive",
    imageSrc: "/image/full-screen-grid/non-auto.jpg",
    title: "Non-Automotive",
    link: "/what-we-do/non-automotive",
    alt: "Non-automotive solutions",
  },
  {
    id: "sustainability",
    imageSrc: "/image/full-screen-grid/sustainability.jpg",
    title: "Sustainability",
    link: "/what-we-do/non-automotive",
    alt: "Non-automotive solutions",
  },
  {
    id: "Why Choose Us",
    imageSrc: "/image/full-screen-grid/why-choose-us1.png",
    title: "Why Choose Us",
    link: "/what-we-do/non-automotive",
    alt: "Non-automotive solutions",
  },
  {
    id: "Contact",
    imageSrc: "/image/full-screen-grid/contact.jpg",
    title: "Contact",
    link: "/what-we-do/non-automotive",
    alt: "Non-automotive solutions",
  },
];

const FullScreenGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {gridItems.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="group relative block overflow-hidden cursor-pointer"
          >
            <div className="relative w-full">
              {/* Container with same aspect ratio as expertise grid */}
              <div className="relative w-full pb-[115%]">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  fill
                  loading="eager"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0  bg-opacity-30 flex items-start justify-start p-16">
                  <div className={`grid-title-wrapper`}>
                    <h3 className="text-2xl font-bold font-chakra-petch relative text-white hover-effect">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FullScreenGrid;
