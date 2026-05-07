"use client";

import React, { useEffect, useRef, useState } from "react";

const AustraliaMigrateSection: React.FC = () => {
  const whyChooseRef = useRef<HTMLDivElement | null>(null);
  const benefitsRef = useRef<HTMLDivElement | null>(null);
  const pathwaysRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current);
    }

    return () => {
      if (whyChooseRef.current) {
        observer.unobserve(whyChooseRef.current);
      }
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full bg-white pt-0 pb-20">
      <div className="max-w-7xl mx-auto px-6">
<h2
  className="text-4xl md:text-5xl font-bold text-center mb-10
  bg-gradient-to-r from-indigo-600 via-orange-500 to-pink-500
  bg-clip-text text-transparent
  leading-snug pb-2"
>
  Migrate to Australia from India
</h2>


        {/* ===== INTRO CONTENT (CLEAN FIX – NO INLINE STYLES) ===== */}
<div className="text-base md:text-lg leading-relaxed space-y-6 mb-12 text-gray-700">





          <p>
            Australia has become one of the{" "}
            <strong>world’s most desired destinations</strong>{" "}
            for immigrants, known for its welcoming culture, vibrant cities,
            and excellent quality of life. Indians can{" "}
            <strong>migrate to Australia permanently</strong> through a
            well-structured PR visa program that supports skilled professionals
            and families.
          </p>

          <p>
            An <strong>Australian PR visa</strong> allows you to{" "}
            <strong>live, work, study, or start a business</strong> anywhere in
            the country. With strong economic growth, transparent immigration
            policies, and global career exposure, Australia offers long-term
            stability and security.
          </p>

          <p>
            Australia is known for its{" "}
            <strong>diverse and multicultural society</strong>, family-friendly
            policies, and excellent healthcare and education systems. Since{" "}
            <strong>English is the primary language</strong>, migrants from India
            find it easier to adapt and settle comfortably with their families.
          </p>

<p className="italic text-sm md:text-base text-[#0B2C4D]">



            Need expert guidance for your Australia PR journey? Our consultants
            help you at every step — from eligibility checks to visa filing.
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            onClick={() => scrollToSection(whyChooseRef)}
            className="cursor-pointer flex items-start gap-5 rounded-2xl border border-orange-400 p-8 transition hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              🦘
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-[#0B2C4D]">
                Why Choose Australia?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Australia offers a high standard of living, world-class healthcare,
                a strong social security system, and an excellent work-life balance.
              </p>
            </div>
          </div>

          <div
            onClick={() => scrollToSection(benefitsRef)}
            className="cursor-pointer flex items-start gap-5 rounded-2xl border border-orange-400 p-8 transition hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              📄
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-[#0B2C4D]">
                Australia PR Benefits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With Australia PR, you can live and work anywhere, sponsor family,
                access healthcare benefits, and apply for citizenship.
              </p>
            </div>
          </div>

          <div
            onClick={() => scrollToSection(pathwaysRef)}
            className="cursor-pointer flex items-start gap-5 rounded-2xl border border-orange-400 p-8 transition hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              🛂
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-[#0B2C4D]">
                PR Pathways for Indians
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Popular PR options include Subclass 189, 190, and 491 visas.
              </p>
            </div>
          </div>
        </div>



        {/* WHY CHOOSE AUSTRALIA */}
        <div
  ref={whyChooseRef}
  className={`scroll-mt-32 mt-16 transform transition-all duration-1000 ease-in-out
  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
>
<h2 className="text-4xl md:text-[44px] font-medium leading-snug tracking-tight text-center mb-10 text-[#0B2C4D]">
  Why Choose <span className="text-[#F58220]">Australia</span>
</h2>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-2xl bg-gray-50 p-8 border-l-4 border-orange-400">
              <h4 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                High Quality of Life
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Clean cities, excellent infrastructure, world-class healthcare,
                and strong social security.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 border-l-4 border-orange-400">
              <h4 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Global Career Opportunities
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Strong demand across IT, healthcare, engineering, and finance.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 border-l-4 border-orange-400">
              <h4 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Family-Friendly Migration
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Bring family members and enjoy a balanced lifestyle.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 border-l-4 border-orange-400">
              <h4 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Clear & Transparent PR System
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Points-based system with predictable PR pathways.
              </p>
            </div>
          </div>
        </div>

        {/* ================= BENEFITS SECTION ================= */}
<div ref={benefitsRef} className="scroll-mt-32 mt-19">
  <div className="mt-0">
<h2 className="text-4xl md:text-5xl font-semibold leading-snug text-[#0B2C4D] mb-12">
  Benefits of{" "}
  <span className="text-[#012169]">
    Australia <span className="text-[#E4002B]">Immigration</span>
  </span>
</h2>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
       <p className="!text-xl md:!text-2xl text-gray-700 mb-8">

          Many reasons make Australia a good place to migrate overseas with family:
        </p>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li>• Stable economy</li>
          <li>• Job opportunities across Engineering, IT, Education, Healthcare</li>
          <li>• Citizen-first policies</li>
          <li>• Free healthcare</li>
          <li>• Free education for children</li>
          <li>• Favorable climate with sunshine</li>
          <li>• Multicultural cities with high living standards</li>
          <li>• Strong social security & family support</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <img
          src="/australia-pr-benefits.png"
          alt="Benefits of Australian Immigration"
          className="w-full max-w-lg md:max-w-xl h-auto"
        />
      </div>
    </div>
  </div>
</div>



        {/* ================= PR PATHWAYS – ALTERNATE DESIGN ================= */}

<div ref={pathwaysRef} className="scroll-mt-32 mt-16">
  <div className="mt-0">

    <h2 className="text-4xl md:text-5xl font-semibold leading-snug text-center text-[#0B2C4D] mb-16">
  Australia PR Pathways for{" "}
  <span className="text-[#F58220]">Indians</span>
</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
      {/* Pathway 1 */}
      <div className="relative rounded-2xl bg-white border border-gray-200 p-10 shadow-sm hover:shadow-xl transition">
        <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white text-xl font-bold">
          01
        </span>

        <h4 className="!text-2xl font-semibold text-[#0B2C4D] mb-4 mt-6">
          Skilled Independent Visa <br />(Subclass 189)
        </h4>

        <p className="text-gray-600 leading-relaxed">
          A points-based permanent residency visa for highly skilled professionals.
          No employer or state sponsorship required.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          ✔ Direct PR &nbsp; ✔ Work anywhere in Australia
        </p>
      </div>

      {/* Pathway 2 */}
      <div className="relative rounded-2xl bg-white border border-gray-200 p-10 shadow-sm hover:shadow-xl transition">
        <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white text-xl font-bold">
          02
        </span>

        <h4 className="!text-2xl font-semibold text-[#0B2C4D] mb-4 mt-6">
          Skilled Nominated Visa <br />(Subclass 190)
        </h4>

        <p className="text-gray-600 leading-relaxed">
          Permanent residency for skilled workers nominated by an Australian
          state or territory government.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          ✔ State nomination &nbsp; ✔ Extra PR points
        </p>
      </div>

      {/* Pathway 3 */}
      <div className="relative rounded-2xl bg-white border border-gray-200 p-10 shadow-sm hover:shadow-xl transition">
        <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold">
          03
        </span>

        <h4 className="!text-2xl font-semibold text-[#0B2C4D] mb-4 mt-6">
          Skilled Work Regional Visa <br />(Subclass 491)
        </h4>

        <p className="text-gray-600 leading-relaxed">
          A regional pathway that allows skilled migrants to live and work in
          designated regional areas with a route to PR.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          ✔ Regional benefits &nbsp; ✔ PR pathway
        </p>
      </div>

    </div>
  </div>
</div>

{/* =============================================================== */}

      </div>
    </section>
  );
};

export default AustraliaMigrateSection;