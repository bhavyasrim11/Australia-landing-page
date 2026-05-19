"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  age: string;
  qualification: string;
  experience: string;
  resume: File | null;
};

export default function AustraliaHero() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    age: "",
    qualification: "",
    experience: "",
    resume: null,
  });

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const Option = ({
    value,
    selected,
    onClick,
  }: {
    value: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold border-2 transition
        ${
          selected
            ? "border-orange-500 bg-orange-50 text-orange-600"
            : "border-slate-900 text-slate-700 hover:border-orange-400 hover:text-orange-500"
        }`}
    >
      <span
        className={`h-3 w-3 rounded-full border-2 flex-shrink-0
          ${selected ? "bg-orange-500 border-orange-500" : "border-slate-900"}`}
      ></span>
      {value}
    </button>
  );

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) {
      alert("Name, phone and email required");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("phone", form.phone);
      data.append("email", form.email);
      data.append("age", form.age);
      data.append("qualification", form.qualification);
      data.append("experience", form.experience);

      if (form.resume) {
        data.append("resume", form.resume);
      }

      const res = await fetch("/api/assessment", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const errorText = await res.text();
        alert("Submit failed: " + errorText);
        return;
      }
      router.push("/australia-pr-2026/thankyou");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <section className="bg-white">
      {/* ✅ px-6 → px-0 md:px-6 — left edge gap remove */}
      <div className="w-full px-5 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          {/* LEFT SIDE */}
<div className="pt-6 space-y-10 px-5 md:px-0 max-w-[760px]">
            <div className="inline-flex items-center gap-4 rounded-full bg-orange-50 px-6 py-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <p className="text-sm font-medium text-slate-700">
                Australia PR Skilled Migration · 2026
                <span className="mx-2 text-slate-300">|</span>
                <span className="text-slate-600">Points-based Assessment</span>
              </p>
            </div>

            <div>
              <h1>
                <span className="block text-6xl md:text-8xl font-extrabold tracking-tight text-[#0A2A66]">
                  Australia <span className="text-[#D80027]">PR</span>
                </span>
               <span className="mt-4 block text-xl md:text-2xl font-medium text-slate-600 md:ml-28">
  eligibility made <span className="font-semibold text-[#D80027]">simple</span>
</span>
                <div className="mt-6 ml-40 md:ml-52 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#0A2A66] via-[#B0B7C3] to-[#D80027]"></div>
              </h1>
            </div>

           <div className="w-full max-w-none m-0 p-0 mt-8 space-y-8">
  <div>
    <p className="text-lg text-slate-600 leading-9">
  Australia is one of the top destinations for skilled professionals
  seeking better career growth, high salaries, quality healthcare,
  and long-term settlement opportunities for their families. The country
  also offers excellent work-life balance, multicultural communities,
  and strong demand for skilled workers across industries like IT,
  healthcare, engineering, and finance, making it an ideal destination
  for individuals planning a secure and successful future abroad.
</p>
  </div>

  <div>
  <h3 className="text-2xl font-bold text-[#00247D] mb-3">
  Skilled Migration Program
</h3>
    <p className="text-lg text-slate-600 leading-9">
      Australia PR is mainly based on a points-tested skilled migration
      system where applicants are evaluated based on age, education,
      occupation, and work experience. Eligible professionals can apply
      for Permanent Residency through various skilled visa pathways.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-[#012169] mb-3">
  Benefits of Australia PR
</h3>

    <p className="text-lg text-slate-600 leading-9">
      PR holders can live, work, and study anywhere in Australia while
      accessing healthcare benefits, better job opportunities, and a
      pathway towards Australian citizenship for themselves and their
      family members. Australia also offers a safe environment,
      excellent public infrastructure, and globally recognized education
      systems that help families build a secure and successful future.
    </p>
  </div>
</div>
            <div className="mt-5 flex justify-start">
              <button
                onClick={() => {
                  const el = document.getElementById("australia-pr-form");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-10 py-3 rounded-xl bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition"
              >
                Apply Now →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4 px-4 md:px-0">
            <div className="relative overflow-hidden rounded-2xl h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9"
                alt="Australia"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 max-w-[90%]">
                  <h2 className="text-white text-3xl md:text-4xl font-semibold leading-snug">
                    Check your eligibility for{" "}
                    <span className="text-orange-400 font-bold">
                      Australia PR
                    </span>{" "}
                    in under 60 seconds.
                  </h2>
                </div>
              </div>
            </div>

            <div
              id="australia-pr-form"
              className="border-2 border-orange-300 rounded-xl overflow-hidden shadow-[0_0_0_3px_rgba(249,115,22,0.18)]"
            >
              {/* Header */}
              <div className="px-5 py-5 border-b border-orange-500 text-center bg-orange-50/60">
                <h3 className="text-xl font-extrabold tracking-wide text-slate-900">
                  SIGN UP & GET{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    AUSTRALIA
                  </span>{" "}
                  ASSESSMENT
                </h3>
              </div>

              {/* Inputs */}
              <div className="px-5 pt-4 pb-4 space-y-4">
                <input
                  placeholder="Full name"
                  className="w-full border-b-2 border-orange-400 py-2 text-base font-medium text-slate-900 placeholder:text-slate-800 placeholder:font-medium placeholder:text-base focus:outline-none focus:border-orange-600 transition-colors bg-transparent"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
                <input
                  placeholder="Phone number"
                  className="w-full border-b-2 border-orange-400 py-2 text-base font-medium text-slate-900 placeholder:text-slate-800 placeholder:font-medium placeholder:text-base focus:outline-none focus:border-orange-600 transition-colors bg-transparent"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
                <input
                  placeholder="Email address"
                  className="w-full border-b-2 border-orange-400 pb-2 text-base font-medium text-slate-900 placeholder:text-slate-800 placeholder:font-medium placeholder:text-base focus:outline-none focus:border-orange-600 transition-colors bg-transparent"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              {/* Age */}
              <div className="px-5 py-4">
                <p className="text-sm font-bold mb-3 text-slate-800 flex items-center gap-1.5">
                  <span className="inline-block w-[3px] h-4 rounded-full bg-orange-500"></span>
                  Age
                </p>
                <div className="flex flex-wrap gap-2">
                  {["18–24", "25–32", "33–39", "40+"].map((a) => (
                    <Option
                      key={a}
                      value={a}
                      selected={form.age === a}
                      onClick={() => update("age", a)}
                    />
                  ))}
                </div>
              </div>

              {/* Qualification */}
              <div className="border-t-2 border-orange-500 px-5 py-4">
                <p className="text-sm font-bold mb-3 text-slate-800 flex items-center gap-1.5">
                  <span className="inline-block w-[3px] h-4 rounded-full bg-orange-500"></span>
                  Qualification
                </p>
                <div className="flex flex-wrap gap-2">
                  {["PhD", "Master's", "Bachelor's", "Diploma", "<12 yrs"].map((q) => (
                    <Option
                      key={q}
                      value={q}
                      selected={form.qualification === q}
                      onClick={() => update("qualification", q)}
                    />
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="border-t-2 border-orange-500 px-5 py-4">
                <p className="text-sm font-bold mb-3 text-slate-800 flex items-center gap-1.5">
                  <span className="inline-block w-[3px] h-4 rounded-full bg-orange-500"></span>
                  Experience
                </p>
                <div className="flex flex-wrap gap-2">
                  {["0–1 yr", "2–3 yrs", "4–5 yrs", "6+ yrs"].map((e) => (
                    <Option
                      key={e}
                      value={e}
                      selected={form.experience === e}
                      onClick={() => update("experience", e)}
                    />
                  ))}
                </div>
              </div>

              {/* Upload Resume */}
              <div className="border-t-2 border-orange-500 px-5 py-4 space-y-2">
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="inline-block w-[3px] h-4 rounded-full bg-orange-500"></span>
                  Upload Resume
                </p>
                <label className="inline-block cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setForm((prev) => ({ ...prev, resume: file }));
                    }}
                  />
                  <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                    Choose File
                  </span>
                </label>
                {form.resume && (
                  <p className="text-[11px] text-green-600">
                    Selected: {form.resume.name}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="border-t-2 border-orange-500 px-5 py-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-bold shadow-[0_2px_12px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.4)] transition-all"
                >
                  Check My PR Eligibility →
                </button>
                <p className="mt-2 text-[11px] text-slate-500 text-center">
                  Secure · Confidential · No spam
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}