'use client'
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import Image from 'next/image'
import { useState, FC, ComponentType, useEffect } from 'react'
import { SVGProps } from 'react'
import {
  BeakerIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ScaleIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid'



// Define HeroIcon type
type HeroIconProps = SVGProps<SVGSVGElement> & {
  title?: string;
  titleId?: string;
};

interface IconWrapperProps {
  Icon: ComponentType<HeroIconProps>;
  className?: string;
}

const IconWrapper: FC<IconWrapperProps> = ({ Icon, className = "h-8 w-8 text-primary" }) => {
  return <Icon className={className} />
}

interface StatItem {
  label: string;
  value: string;
  unit: string;
  icon: ComponentType<HeroIconProps>;
}

interface Section {
  title: string;
  icon: ComponentType<HeroIconProps>;
  description: string;
  items: {
    title: string;
    details: string[];
  }[];
  images?: {
    src: string;
    alt: string;
    description: string;
  }[];
}

const Infrastructure: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full border-primary border-t-transparent h-8 w-8 border-2"></div>
        </div>
      </div>
    );
  }

  const sections: Section[] = [
    {
      title: "Foundry Infrastructure",
      icon: BuildingOfficeIcon as ComponentType<HeroIconProps>,
      description: "State-of-the-art foundry equipped with advanced melting and casting facilities",
      items: [
        {
          title: "Melting Facilities",
          details: [
            "Melting cum Holding Furnace - 300 kg capacity",
            "Secondary Furnace - 500 kg capacity",
            "Temperature control systems",
            "Energy-efficient operation"
          ]
        },
        {
          title: "Casting Equipment",
          details: [
            "Stationary GDC Machine (1250 x 800 mm)",
            "Tilting GDC Machine (1250 x 1000 mm)",
            "Shell Core Shooter - Vertical parted rollover",
            "Advanced cooling systems"
          ]
        }
      ],
      images: [
        {
          src: "/image/infra/mh furnace.png",
          alt: "M/H Furnace",
          description: "High-capacity Melting & Holding Furnace"
        },
        {
          src: "/image/infra/Tilting GDC.png",
          alt: "Tilting GDC",
          description: "Advanced Tilting Gravity Die Casting Machine"
        },
        {
          src: "/image/infra/stationary gdc.png",
          alt: "Stationary GDC",
          description: "Precision Stationary Die Casting Unit"
        },
        {
          src: "/image/infra/core shooter.png",
          alt: "Core Shooter",
          description: "Automated Core Shooting System"
        }
      ]
    },
    {
      title: "Quality Infrastructure",
      icon: BeakerIcon as ComponentType<HeroIconProps>,
      description: "Comprehensive quality control lab with advanced testing equipment",
      items: [
        {
          title: "Material Testing",
          details: [
            "Optical Emission Spectrometer for composition analysis",
            "Density Analyzer with digital precision",
            "Advanced Hardness Testing equipment",
            "High-resolution Microscopy facility"
          ]
        },
        {
          title: "Quality Control",
          details: [
            "Millipore test setup for contamination analysis",
            "Surface quality measurement tools",
            "Precision measurement with Trimos instruments",
            "Real-time quality monitoring systems"
          ]
        }
      ]
    },
    {
      title: "Post Casting Process Setup",
      icon: CogIcon as ComponentType<HeroIconProps>,
      description: "Complete post-casting treatment and finishing facilities",
      items: [
        {
          title: "Surface Treatment",
          details: [
            "350kg Hanger-Type Shot Blasting machine",
            "Advanced Fettling Setup with automation",
            "Manual & Vibro Deburring stations",
            "Specialized cleaning systems"
          ]
        },
        {
          title: "Heat Treatment",
          details: [
            "1000kg capacity Heat Treatment Unit",
            "Precipitation Hardening facility",
            "Solution Annealing Furnace",
            "Temperature-controlled cooling systems"
          ]
        }
      ]
    },
    {
      title: "Machining Setup",
      icon: WrenchScrewdriverIcon as ComponentType<HeroIconProps>,
      description: "Versatile machining capabilities with high precision equipment",
      items: [
        {
          title: "CNC Operations",
          details: [
            "CNC Turning - Up to 250mm diameter",
            "VMC - 600/600mm capacity",
            "Horizontal Milling capabilities",
            "Vertical Broaching facility"
          ]
        },
        {
          title: "Precision Machining",
          details: [
            "Surface Grinding equipment",
            "General Purpose Milling",
            "Custom machining solutions",
            "Automated tool management"
          ]
        }
      ]
    }
  ];

  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    },
    expand: {
      hidden: { height: 0, opacity: 0 },
      visible: {
        height: "auto",
        opacity: 1,
        transition: {
          height: {
            type: "spring",
            stiffness: 100,
            damping: 20
          },
          opacity: {
            duration: 0.2
          }
        }
      }
    }
  };

  const MotionDiv = motion.div as ComponentType<HTMLMotionProps<"div">>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white px-4 sm:px-6 lg:px-20 py-6 sm:py-10"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center ">
          {/* Header - Always visible */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.container}
            className={`text-3xl font-bold sm:text-3xl lg:text-4xl text-gray-900 tracking-tight font-roboto`}
          >
            Our Infrastructure

            <div className="w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
            <div className="mt-4 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  State-of-the-art facilities and equipment for precision manufacturing
            </div>
          </MotionDiv>

          {/* Read More Button */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => setShowFullContent(!showFullContent)}
              className="group inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium text-black bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-300 border border-gray-100"
            >
              {showFullContent ? 'Show Less' : 'Read More'}
              <ChevronDownIcon
className={`w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform duration-300 ${
  showFullContent ? 'rotate-180' : ''                  }`}
              />
            </button>
          </MotionDiv>

          {/* Expandable Content */}
          <AnimatePresence>
            {showFullContent && (
              <MotionDiv
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={animations.expand}
              >
                {/* Main Sections */}
                <div className="space-y-8 sm:space-y-16 mt-8 sm:mt-16">
                  {sections.map((section, index) => (
                    <MotionDiv
                      key={section.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={animations.item}
                      className="bg-white rounded-xl shadow-xl p-4 sm:p-8 hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="flex mb-4 sm:mb-6">
                        <div className="text-center w-full">
                          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{section.title}</span>
                          <p className="text-sm sm:text-base text-gray-600 mt-2">{section.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
                        {section.items.map((item, i) => (
                          <MotionDiv
                            key={i}
                            className="bg-gray-50 rounded-lg p-4 sm:p-6"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: { delay: i * 0.1 }
                              }
                            }}
                          >
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                            <ul className="space-y-2 sm:space-y-3">
                              {item.details.map((detail, j) => (
                                <li key={j} className="flex items-start group">
                                   <span className="text-primary mr-2 sm:mr-3 mt-1">•</span>
                                  <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors">
                                   {detail}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </MotionDiv>
                        ))}
                      </div>

                      {section.images && (
                        <MotionDiv
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.1 }
                            }
                          }}
                        >
                          {section.images.map((image, i) => (
                            <MotionDiv
                              key={i}
                              className="relative h-40 sm:h-48 rounded-xl overflow-hidden group"
                              variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: {
                                  opacity: 1,
                                  scale: 1,
                                  transition: { type: "spring", stiffness: 100 }
                                }
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 sm:p-3 text-xs sm:text-sm font-medium backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="font-semibold">{image.alt}</p>
                                <p className="text-xs text-gray-200 mt-1">{image.description}</p>
                              </div>
                            </MotionDiv>
                          ))}
                        </MotionDiv>
                      )}
                    </MotionDiv>
                  ))}
                  {/* Materials & Capabilities Section */}
                  <MotionDiv
                    variants={animations.item}
                    className="bg-white rounded-xl shadow-xl p-4 sm:p-8 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="flex mb-4 sm:mb-6">
                      <div className="text-center w-full">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Materials & Capabilities</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
                      <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Aluminum Alloy Standards</h3>
                        <ul className="space-y-2 sm:space-y-3">
                          <li className="flex items-start group">
                            <span className="text-primary mr-3">•</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              DIN Standards Compliance
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-primary mr-3">•</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              ASTM Specifications
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-primary mr-3">•</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              JIS Standard Requirements
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Production Capabilities</h3>
                        <ul className="space-y-2 sm:space-y-3">
                          <li className="flex items-start group">
                            <span className="text-primary mr-3">•</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Weight Range: 0.5 to 5 Kg
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-primary mr-3">•</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              High-precision tolerances
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-primary mr-3">•</span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Complex geometries handling
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </MotionDiv>
                </div>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Infrastructure;