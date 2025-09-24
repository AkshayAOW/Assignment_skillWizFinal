"use client";
import Image from "next/image";
import Link from "next/link";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] text-white overflow-hidden"
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

        <div className="max-w-7xl mx-auto px-6 py-8 relative z-10 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Assessments in Secure Centers
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-lg">
                Validate skills with our industry-leading, proctored assessment
                platform designed for accuracy and integrity.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#00418d] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/images/homepage/home_globe.gif"
                alt="SkillKwiz assessment platform"
                width={600}
                height={400}
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Content Section */}
      <div className="relative bg-white curved-top z-fix">
        <div className="w-full -mt-[25vh] md:-mt-[30vh]">
          <Image
            src="/images/homepage/call-center.png"
            alt="Call center agents with headsets"
            width={1920}
            height={980}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f6c648] text-[#00418d] py-4 px-6 inline-block transform skew-x-12 -ml-4 mt-4">
            <div className="transform -skew-x-12">
              <h2 className="text-xl font-bold">
                SkillKwiz – Verified Skills, Simplified Hiring
              </h2>
            </div>
          </div>

          <div className="mt-8 mb-12">
            <LetterCarousel />
          </div>
        </div>

        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}