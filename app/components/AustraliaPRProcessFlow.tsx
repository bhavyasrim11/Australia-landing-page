"use client";

import { useState } from "react";
import React from "react";
import {
  FaUserCheck,
  FaFileAlt,
  FaLanguage,
  FaLaptopCode,
  FaClipboardList,
  FaUserShield,
  FaMoneyCheckAlt,
  FaHeartbeat,
  FaClock,
  FaIdCard
} from "react-icons/fa";

const steps = [
  {
    title: "Step 1: Check Eligibility",
    desc: "The Australian PR process starts with eligibility. We ensure your profile qualifies before applying, giving you confidence for a successful journey to Australia.",
    icon: <FaUserCheck />
  },
  {
    title: "Step 2: Skills Assessment",
    desc: "Skill assessment is a vital step in the Australian PR process. The Aptech Visa team guides you in selecting the right authority and ensures that your documents meet all the requirements for approval.",
    icon: <FaFileAlt />
  },
  {
    title: "Step 3: English Test",
    desc: "We provide coaching, training, and mock sessions to help applicants achieve higher IELTS or PTE scores, strengthening their profile in the Australia PR process.",
    icon: <FaLanguage />
  },
  {
    title: "Step 4: Submit EOI",
    desc: "It’s about choosing the right visa subclass, targeting the best state, and updating EOI/ROI strategically to maximise your chances.",
    icon: <FaLaptopCode />
  },
  {
    title: "Step 5: State / Territory Nomination",
    desc: "If your visa subclass is 190 or 491, we prepare flawless documents ensuring higher chances of nomination.",
    icon: <FaClipboardList />
  },
  {
    title: "Step 6: Receive ITA",
    desc: "High scores alone aren’t enough—smart strategy, timing, and precise planning make all the difference.",
    icon: <FaUserShield />
  },
  {
    title: "Step 7: Apply for Australia PR",
    desc: "Apply for PR & pay AUD 4910. Every document matters.",
    icon: <FaMoneyCheckAlt />
  },
  {
    title: "Step 8: Health & Medical",
    desc: "Complete medical examination and provide PCCs.",
    icon: <FaHeartbeat />
  },
  {
    title: "Step 9: Wait for Processing",
    desc: "DHA reviews your application & documents.",
    icon: <FaClock />
  },
  {
    title: "Step 10: Visa Grant Letter",
    desc: "Receive Australia PR visa & start your journey.",
    icon: <FaIdCard />
  }
];

const AustraliaProcessFlow = () => {
  const [showProcess, setShowProcess] = useState(false);

  return (
    <>
      {/* SCREENSHOT-LIKE HERO SECTION */}
      <section className="hero-section">
        <h1>Australia Pr Process Guidence</h1>
        <p>Explore different pathways to Australian permanent residency.</p>

        {!showProcess && (
          <button onClick={() => setShowProcess(true)}>
            Show PR Process
          </button>
        )}
      </section>

      {/* TIMELINE SECTION */}
      {showProcess && (
        <section className="au-pr">
         
          <div className="timeline">
            {steps.map((step, i) => (
              <div key={i} className={`row ${i % 2 === 0 ? "left" : "right"}`}>
                <div className="card">
                  <div className="icon-box">{step.icon}</div>
                  <h3>{step.title}</h3>
                 <p className="card-desc">{step.desc}</p>
                </div>
                <span className="node" />
              </div>
            ))}
          </div>

          <div className="hide-wrap">
            <button onClick={() => setShowProcess(false)}>
              Hide PR Process
            </button>
          </div>
        </section>
      )}

      <style>{`
       .hero-section {
  background: #fffaf3;
  padding: 10px 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-section h1 {
  font-size: 42px;
  font-weight: 800;
  color: #e65100;
  margin-bottom: 8px;
}

.hero-section p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
}


        .hero-section button {
          background: #0aa2e3;
          color: #fff;
          border: none;
          padding: 14px 34px;
          font-size: 16px;
          border-radius: 10px;
          cursor: pointer;
        }

        /* TIMELINE (NEE OLD CODE SAME) */
        .au-pr {
          background: #f3f3f3;
          padding: 60px 20px;
          font-family: "Segoe UI", sans-serif;
        }

        .heading {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 40px;
        }

        .heading span {
          color: #ff4d4f;
        }

        .timeline {
          position: relative;
          max-width: 1200px;
          margin: auto;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #0b3c8a;
          transform: translateX(-50%);
        }

        .row {
          position: relative;
          width: 50%;
          padding: 8px 40px;
        }

        .row.left { left: 0; }
        .row.right { left: 50%; }

      .card {
  background: #fdeceb;
  padding: 22px 28px 22px 90px;
  border-radius: 16px;
  position: relative;
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
}

.card p {
  font-size: 14px;
  line-height: 1.6;
}


        .icon-box {
          position: absolute;
          left: 22px;
          top: 22px;
          width: 42px;
          height: 42px;
          background: #fff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff4d4f;
          font-size: 22px;
        }

        .node {
          position: absolute;
          top: 32px;
          width: 16px;
          height: 16px;
          background: #fff;
          border: 4px solid #0b3c8a;
          border-radius: 50%;
        }

        .row.left .node { right: -8px; }
        .row.right .node { left: -8px; }

        .hide-wrap {
          text-align: center;
          margin-top: 40px;
        }

        .hide-wrap button {
          background: #ff4d4f;
          color: #fff;
          border: none;
          padding: 12px 32px;
          border-radius: 8px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .timeline::before { left: 20px; }
          .row {
            width: 100%;
            left: 0 !important;
            padding-left: 60px;
          }
          .node { left: 11px !important; }
        }
      `}</style>
    </>
  );
};

export default AustraliaProcessFlow;