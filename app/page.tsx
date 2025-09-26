"use client";
import Image from "next/image";
import Link from "next/link";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  // NOTE: Ensure your image filenames in /public/images/homepage/ match these exactly.
  { src: "/images/homepage/call-center.png", alt: "Call center agents with headsets" },
  { src: "/images/homepage/Pick - Laptop.jpg", alt: "Person picking a laptop" },
  { src: "/images/homepage/Drivers License.jpg", alt: "Driver's license verification" },
  { src: "/images/homepage/Skill Library.jpg", alt: "Skill library" },
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger animations on mount
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen text-white overflow-hidden"
        style={{ backgroundColor: "#00418d" }} // Fallback color
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20"></div>

        {/* Floating Globe GIF - positioned absolutely */}
        <div className="absolute top-0 right-0 w-1/2 h-full z-10 pointer-events-none hidden lg:flex items-center justify-center">
             <Image
                src="/images/homepage/home_globe.gif"
                alt="Rotating Globe"
                width={600}
                height={400}
                className="w-full max-w-xl h-auto opacity-70"
             />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 relative z-20 h-full flex items-center">
          <div className="w-full lg:w-1/2">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Assessments in Secure Centers
            </h1>
            <p className={`text-lg text-gray-200 mb-8 max-w-lg transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Validate skills with our industry-leading, proctored assessment
              platform designed for accuracy and integrity.
            </p>
            <Link
              href="/services"
              className={`inline-flex items-center justify-center bg-[#f73e5d] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all duration-700 ease-out delay-300 transform hover:scale-105 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Overlapping Content Section */}
      <div className="relative z-10 -mt-20">
         {/* Red Banner - Full Width and Overlapping */}
        <div className="bg-[#f73e5d] text-white py-5 shadow-xl relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-xl md:text-2xl font-bold tracking-wider">
                    SkillKwiz – Verified Skills, Simplified Hiring
                </h2>
            </div>
        </div>
        
        {/* --- Automatic Image Carousel Section --- */}
        <div className="bg-white pt-16 pb-16">
            <div className="relative w-full max-w-7xl mx-auto aspect-video lg:aspect-[16/7] overflow-hidden bg-gray-200 group rounded-2xl shadow-2xl -mt-8">
              {carouselImages.map((image, index) => (
                <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1920}
                    height={823}
                    className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-in-out ${
                      index === currentImageIndex ? 'scale-110' : 'scale-100'
                    }`}
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/1920x823/002b6b/ffffff?text=SkillKwiz' }}
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

              {/* Slider Dots */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ring-2 ring-white/50 ${
                      index === currentImageIndex ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
               <button onClick={prevSlide} className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                  <ChevronLeft size={32} />
               </button>
                <button onClick={nextSlide} className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                  <ChevronRight size={32} />
                </button>
            </div>
        </div>
      </div>
      
      {/* Remaining Page Content */}
      <div className="bg-white">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}

