"use client"; // Required for the interactive video player hooks (useState, useRef)
import Image from "next/image";
import { useRef, useState } from "react";
import { Eye, Target, Briefcase, Play, Pause } from "lucide-react";

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#00418d] text-white overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="max-w-7xl mx-auto px-6 py-24 pt-32 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-balance">
            Elevate Your Business with Certainty
          </h1>
          <p className="text-center max-w-3xl mx-auto text-gray-200 mb-8 text-balance">
            Skill assessments conducted with the utmost knowledge, integrity, and
            security. Our objective is to provide accurate insights into the
            skill levels of your current and prospective workforce.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#00418d] transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Vision */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-300 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Eye
              className="w-16 h-16 mb-4 text-[#00418d] group-hover:text-white transition-colors duration-300"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl font-bold text-[#00418d] group-hover:text-white transition-colors duration-300 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-200 transition-colors duration-300 text-balance h-auto min-h-[100px]">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>
          {/* Card 2: Mission */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-300 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Target
              className="w-16 h-16 mb-4 text-[#00418d] group-hover:text-white transition-colors duration-300"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl font-bold text-[#00418d] group-hover:text-white transition-colors duration-300 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-200 transition-colors duration-300 text-balance h-auto min-h-[100px]">
              To provide the most reliable, secure, and insightful skill
              assessment platform that enables organizations to build talented
              teams and unlock human potential.
            </p>
          </div>
          {/* Card 3: Purpose */}
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-300 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Briefcase
              className="w-16 h-16 mb-4 text-[#00418d] group-hover:text-white transition-colors duration-300"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl font-bold text-[#00418d] group-hover:text-white transition-colors duration-300 mb-4">
              Our Purpose
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-200 transition-colors duration-300 text-balance h-auto min-h-[100px]">
              To create stakeholder value by delivering a service that bridges
              the gap between talent and opportunity, fostering growth for both
              individuals and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are your strategic partner in talent evaluation. Our
                expertise lies in accurately assessing and quantifying skills to
                provide clear, actionable insights for your hiring and
                development strategies.
              </p>
              <blockquote className="border-l-4 border-[#f6c648] pl-4 text-gray-600 italic">
                <p className="mb-4">
                  "SkillKwiz has a single purpose, and that is to create
                  stakeholder value by delivering a service that is shaped
                  entirely by the market it serves."
                </p>
                <cite className="font-bold not-italic text-gray-800">
                  - Venugopal B A, CEO of SkillKwiz
                </cite>
              </blockquote>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center gap-4">
              <Image
                src="/images/aboutpage/about_who_we_are-1.png"
                alt="Team planning session"
                width={150}
                height={225}
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col gap-4">
                <Image
                  src="/images/aboutpage/about_who_we_are-0.png"
                  alt="Team collaboration"
                  width={150}
                  height={150}
                  className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/images/aboutpage/about_who_we_are-2.png"
                  alt="Developer at work"
                  width={150}
                  height={150}
                  className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-[#f73e5d] p-4">
                  <Image
                    src="/images/aboutpage/Venugopal.png"
                    alt="Venugopal B A, CEO of SkillKwiz"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-[#f73e5d] text-white text-center py-3 font-bold text-xl">
                  CEO
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Venugopal B A, a veteran leader in the IT industry with 24
                years of experience in senior leadership roles, has taken on
                the mantle of leading SkillKwiz. His deep understanding of the
                challenges faced by the services sector gave birth to the
                vision that is SkillKwiz today.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a rich background in technology, he aims to establish
                SkillKwiz as an AI-first company. He is poised to take SkillKwiz
                to its next level of growth by turning it into an organization
                that is shaped entirely by the market it serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto"
              preload="metadata"
              poster="/images/aboutpage/about_video.png"
              onClick={handlePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={isPlaying} 
            >
              <source
                src="/images/aboutpage/about_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer group"
                onClick={handlePlayPause}
              >
                <div className="w-20 h-20 bg-[#00418d] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}