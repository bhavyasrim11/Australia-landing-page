"use client";

import React, { useEffect, useRef } from "react";

const WhyChooseVJCOverseas = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const floatingImgRef = useRef<HTMLImageElement | null>(null);

  const hasEnteredRef = useRef(false);
  const lockedXRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !floatingImgRef.current) return;

      const section = sectionRef.current;
      const img = floatingImgRef.current;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // section visible
      if (rect.top < vh && rect.bottom > 0) {
        const progress = (vh - rect.top) / (vh + rect.height);
        const p = Math.min(Math.max(progress, 0), 1);

        let x = lockedXRef.current;

        // 🔥 ONE-TIME SIDE IN
        if (!hasEnteredRef.current) {
          x = -60 + p * 60; // -60 → 0
          if (p >= 0.35) {
            hasEnteredRef.current = true;
            lockedXRef.current = 0; // LOCK
            x = 0;
          }
        }

        // 🔥 SUBTLE FLOAT (ALWAYS)
        const y = Math.sin(p * Math.PI) * 12; // smooth float

        img.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F58220] mb-6">
            Why Choose <span className="text-[#0B2C4D]">VJC Overseas?</span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10">
            At VJC Overseas, we don’t just process visas — we build migration
            journeys. With expert consultants, transparent processes, and a
            proven success record, we help you move abroad with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 border-l-4 border-orange-400">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold text-[#0B2C4D]">
                  Expert Eligibility Check
                </h4>
                <p className="text-sm text-gray-600">
                  Profile evaluation by certified migration consultants.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 border-l-4 border-orange-400">
              <span className="text-2xl">📋</span>
              <div>
                <h4 className="font-semibold text-[#0B2C4D]">
                  Transparent Process
                </h4>
                <p className="text-sm text-gray-600">
                  No fake promises, only realistic guidance.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 border-l-4 border-orange-400">
              <span className="text-2xl">🌍</span>
              <div>
                <h4 className="font-semibold text-[#0B2C4D]">
                  Global Visa Expertise
                </h4>
                <p className="text-sm text-gray-600">
                  Australia, Canada, UK, Europe & more.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 border-l-4 border-orange-400">
              <span className="text-2xl">🤝</span>
              <div>
                <h4 className="font-semibold text-[#0B2C4D]">
                  End-to-End Support
                </h4>
                <p className="text-sm text-gray-600">
                  From documentation to visa filing.
                </p>
              </div>
            </div>
          </div>

          <button
  onClick={() => {
    const el = document.getElementById("australia-pr-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
  className="bg-[#F58220] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e36f10] transition"
>
  Explore Australia PR
</button>

        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative flex justify-center">
          <img
            src="/why-vjc-main.jpg"
            alt="Why Choose VJC Overseas"
            className="rounded-3xl shadow-xl w-full max-w-md"
          />

          <div className="absolute -top-6 right-0 bg-[#0099D8] text-white px-6 py-4 rounded-2xl shadow-lg text-center">
            <p className="text-3xl font-bold">16+</p>
            <p className="text-sm font-medium">Years of Experience</p>
          </div>

          {/* 🔥 FLOATING IMAGE */}
          <img
            ref={floatingImgRef}
            src="/travel-docs.png"
            alt="Travel Documents"
            className="absolute -bottom-10 -left-6 w-48 md:w-56 rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseVJCOverseas;
