"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "What is the easiest way to get permanent residency in Australia right now?",
    a: "The easiest way depends on your profile. Skilled Independent (Subclass 189), Skilled Nominated (190), and Skilled Work Regional (491) visas are the most popular PR pathways."
  },
  {
    q: "What are the current requirements for applying for Australian permanent residency?",
    a: "You generally need a positive skills assessment, English language test scores, sufficient points, age eligibility, health checks, and police clearance certificates."
  },
  {
    q: "Can I see a checklist for the Australian PR application process?",
    a: "Yes. The checklist includes passport, skills assessment, IELTS/PTE results, EOI submission, nomination (if applicable), medical exams, PCC, and visa application documents."
  },
  {
    q: "How long does the Australian PR application process typically take?",
    a: "Processing time varies by visa subclass. On average, it can take anywhere from 6 months to 18 months depending on case complexity and visa category."
  },
  {
    q: "What are the different pathways to immigrate to Australia and get a PR?",
    a: "Major pathways include Skilled Independent (189), Skilled Nominated (190), Skilled Work Regional (491), Employer Sponsored visas, and Business/Investor visas."
  },
  {
    q: "What is the minimum points required for Australia PR?",
    a: "The minimum requirement is 65 points, but higher points significantly improve your chances of receiving an invitation."
  },
  {
    q: "Is IELTS mandatory for Australia PR?",
    a: "Yes, English proficiency is mandatory. IELTS, PTE, TOEFL, or OET scores are accepted depending on visa type."
  },
  {
    q: "What age limit applies for Australian PR visas?",
    a: "Most skilled PR visas require applicants to be under 45 years of age at the time of invitation."
  },
  {
    q: "Can I apply for Australia PR without a job offer?",
    a: "Yes. Subclass 189 and some state-nominated visas do not require a job offer."
  },
  {
    q: "What is a skills assessment and why is it important?",
    a: "A skills assessment verifies that your qualifications and work experience meet Australian standards for your nominated occupation."
  },
  {
    q: "Which occupations are in demand for Australia PR?",
    a: "Occupations in IT, healthcare, engineering, construction, education, and trades are currently in high demand."
  },
  {
    q: "Can my family be included in my Australia PR application?",
    a: "Yes. You can include your spouse and dependent children in your PR application."
  },
  {
    q: "What are the benefits of Australian permanent residency?",
    a: "PR holders can live, work, study anywhere in Australia, access Medicare, sponsor family, and apply for citizenship later."
  },
  {
    q: "What is an Expression of Interest (EOI)?",
    a: "EOI is an online profile submitted through SkillSelect showing your interest in applying for an Australian skilled visa."
  },
  {
    q: "Do I need state nomination for Australia PR?",
    a: "State nomination is required for Subclass 190 and 491 visas but not for Subclass 189."
  },
  {
    q: "What is the cost of applying for Australia PR?",
    a: "Visa fees start from AUD 4,640 for the main applicant, excluding assessment, English test, and other charges."
  },
  {
    q: "Is Australian PR guaranteed after submitting EOI?",
    a: "No. An invitation depends on points score, occupation demand, and government quotas."
  },
  {
    q: "Can I move to Australia while my PR is being processed?",
    a: "Yes, if you hold a valid temporary visa, you may stay in Australia while your PR is under processing."
  },
  {
    q: "What happens after I receive my Australia PR visa?",
    a: "You can move permanently to Australia, work without restrictions, and later apply for citizenship."
  },
  {
    q: "How can VJC Overseas help with Australia PR?",
    a: "VJC Overseas provides eligibility checks, documentation support, EOI strategy, visa filing, and end-to-end guidance."
  }
];

const AustraliaPRFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white pt-0 py-6">
      <div className="max-w-screen-xl mx-auto px-7">

<h2 className="text-4xl font-extrabold text-center mb-12">
  <span className="text-[#012169]">Frequently Asked</span>{" "}
  <span className="text-[#E4002B]">Questions</span>
</h2>


        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-lg"
              >
                {faq.q}
                <span className="text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AustraliaPRFAQ;
