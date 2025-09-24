import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component

export default function WhyChooseSection() {
  return (
    // Section with a clean gradient background
    <section className="py-20 text-white bg-gradient-to-b from-[#0d47a1] to-[#002b6b]">
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

        {/* Responsive 3-column grid for the feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: Skill Library */}
          <div className="bg-white rounded-xl p-8 text-black flex flex-col items-center text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 h-full">
            <div className="w-20 h-20 mb-6 bg-[#e3f2fd] rounded-full flex items-center justify-center">
              <Image
                src="/images/homepage/books.gif"
                alt="Skill Library icon"
                width={70}
                height={70}
              />
            </div>
            <h3 className="text-[#00418d] text-2xl font-bold mb-3">
              Skill Library
            </h3>
            <p className="text-gray-600 text-sm">
              Access our extensive library of skill assessments covering technical,
              professional, and soft skills for comprehensive candidate
              evaluation.
            </p>
          </div>

          {/* Card 2: Secure Testing */}
          <div className="bg-white rounded-xl p-8 text-black flex flex-col items-center text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 h-full">
            <div className="w-20 h-20 mb-6 bg-[#e3f2fd] rounded-full flex items-center justify-center">
              <Image
                src="/images/homepage/guard.gif"
                alt="Secure Testing icon"
                width={70}
                height={70}
              />
            </div>
            <h3 className="text-[#00418d] text-2xl font-bold mb-3">
              Secure Testing
            </h3>
            <p className="text-gray-600 text-sm">
              Ensure test integrity with multi-layered candidate authentication,
              including biometric verification, proctoring, and a secure
              testing environment.
            </p>
          </div>

          {/* Card 3: Flexible Pricing */}
          <div className="bg-white rounded-xl p-8 text-black flex flex-col items-center text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 h-full">
            <div className="w-20 h-20 mb-6 bg-[#e3f2fd] rounded-full flex items-center justify-center">
              <Image
                src="/images/homepage/dollar.gif"
                alt="Flexible Pricing icon"
                width={70}
                height={70}
              />
            </div>
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

        {/* Final Call to Action */}
        <div className="text-center">
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