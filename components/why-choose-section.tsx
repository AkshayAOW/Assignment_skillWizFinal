"use client"; // Required for using React hooks (useState, useEffect)
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  // State to manage which card is currently active/in front
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle card (index 1)

  // useEffect to set up the automatic animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle to the next card (0 -> 1 -> 2 -> 0)
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); // Change card every 5 seconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Helper function to determine the classes for each card based on the active index
  const getCardClasses = (index) => {
    let classes = 'w-full md:w-1/2 lg:w-1/3 p-4 transition-all duration-1000 ease-in-out md:transform';
    
    // Determine the position (Center, Left, or Right) based on the activeIndex
    if (index === activeIndex) {
      // Center Card
      classes += ' md:scale-110 z-20';
    } else if (index === (activeIndex + 1) % 3) {
      // Card to the Right
      classes += ' md:-rotate-y-[25deg] z-10';
    } else {
      // Card to the Left
      classes += ' md:rotate-y-[25deg] z-10';
    }
    return classes;
  };

  return (
    // Section with a clean gradient background and overflow hidden for 3D effect
    <section className="py-20 text-white bg-gradient-to-b from-[#0d47a1] to-[#002b6b] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main heading and introductory text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Skill<span className="text-[#f73e5d]">Kwiz</span>?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Discover our unique value propositions designed to enhance your
            recruitment strategy and experience the difference SkillKwiz can make
            in your organization.
          </p>
        </div>

        {/* 3D Perspective Container for the feature cards */}
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[480px] md:gap-[-4rem]" style={{ perspective: '1500px' }}>
          
          {/* Card 1: Skill Library */}
          <div className={getCardClasses(0)}>
            <div className="bg-white text-black rounded-xl p-8 flex flex-col items-center text-center shadow-2xl h-full">
              <Image
                src="/images/homepage/books.gif"
                alt="Skill Library icon"
                width={80}
                height={80}
                className="mb-6"
              />
              <h3 className="text-[#00418d] text-2xl font-bold mb-3">
                Skill Library
              </h3>
              <p className="text-gray-600 text-sm">
                Access our extensive library of skill assessments covering technical,
                professional, and soft skills for comprehensive candidate
                evaluation.
              </p>
            </div>
          </div>

          {/* Card 2: Secure Testing */}
          <div className={getCardClasses(1)}>
             <div className="bg-white text-black rounded-xl p-8 flex flex-col items-center text-center shadow-2xl h-full">
              <Image
                src="/images/homepage/guard.gif"
                alt="Secure Testing icon"
                width={80}
                height={80}
                className="mb-6"
              />
              <h3 className="text-[#00418d] text-2xl font-bold mb-3">
                Secure Testing
              </h3>
              <p className="text-gray-600 text-sm">
                Ensure test integrity with multi-layered candidate authentication,
                including biometric verification, proctoring, and a secure
                testing environment.
              </p>
            </div>
          </div>

          {/* Card 3: Flexible Pricing */}
          <div className={getCardClasses(2)}>
            <div className="bg-white text-black rounded-xl p-8 flex flex-col items-center text-center shadow-2xl h-full">
              <Image
                src="/images/homepage/dollar.gif"
                alt="Flexible Pricing icon"
                width={80}
                height={80}
                className="mb-6"
              />
              <h3 className="text-[#00418d] text-2xl font-bold mb-3">
                Flexible Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                Our pricing model scales with your needs. Pay only for what you use
                with our credit-based system or choose our Enterprise plan for
                unlimited testing.
              </p>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">
            Join the Talent Revolution
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Take the first step towards transforming your hiring process with our
            tried and tested platform.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-[#f6c648] text-[#00418d] px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

