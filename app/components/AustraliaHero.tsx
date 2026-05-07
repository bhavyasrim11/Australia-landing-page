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
    className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs border transition
      ${
        selected
          ? "border-black bg-slate-100"
          : "border-slate-300 hover:border-black"
      }`}
  >
    <span
      className={`h-2.5 w-2.5 rounded-full border
        ${selected ? "bg-black border-black" : "border-slate-400"}`}
    />
    {value}
  </button>
);

// ✅ HANDLE SUBMIT — COMPLETE & CORRECT
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
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="pt-6 space-y-10">
<div className="inline-flex items-center gap-4 rounded-full bg-orange-50 px-6 py-2">
  <span className="h-2 w-2 rounded-full bg-orange-500" />
  <p className="text-sm font-medium text-slate-700">
    Australia PR Skilled Migration · 2026
    <span className="mx-2 text-slate-300">|</span>
    <span className="text-slate-600">Points-based Assessment</span>
  </p>
</div>
            {/* headline */}
            <div>
              <h1 className="text-center max-w-3xl mx-auto">
  {/* MAIN TITLE */}
  <span className="block text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A2A66]">
    Australia <span className="text-[#D80027]">PR</span>
  </span>
  <span className="mt-4 block text-xl md:text-2xl font-medium text-slate-600">
    eligibility made <span className="font-semibold text-[#D80027]">simple</span>
  </span>

  {/* UNDERLINE */}
  <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#0A2A66] via-[#B0B7C3] to-[#D80027]" />
</h1>
              <p className="mt-5 text-lg text-slate-600 max-w-xl">
                A quick, points-based check designed to give you
                <span className="font-medium text-slate-800"> real clarity</span>
                — not sales talk.
              </p>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["95%", "Accuracy"],
                ["60 sec", "Completion time"],
                ["189 · 190 · 491", "Skilled visas"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-semibold text-slate-900">
                    {value}
                  </p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            {/* value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {[
                ["Points-based check", "Aligned with official migration rules"],
                ["Occupation scoring", "Age & experience weighted"],
                ["Family benefits", "Include spouse & children"],
                ["Healthcare access", "Medicare after PR"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-lg border p-4 hover:border-slate-400 transition"
                >
                  <p className="font-medium text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-500">{desc}</p>
                </div>
              ))}
            </div>

            
            <div className="mt-6 max-w-xl rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-6">
              <p className="text-sm font-semibold text-slate-900 mb-4">
                Why professionals trust our assessment
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🧠</span>
                  <p className="text-slate-600">
                    Logic built strictly on official DHA points matrix
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">🔒</span>
                  <p className="text-slate-600">
                    Your data is never shared or sold
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📊</span>
                  <p className="text-slate-600">
                    Instant scoring — no consultant bias
                  </p>
                </div>
              </div>
            </div>{/* APPLY NOW CTA */}
<div className="mt-8 flex justify-center">
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

          {/* RIGHT SIDE — UNCHANGED */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9"
                alt="Australia"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
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
  className="border border-slate-300 rounded-xl overflow-hidden"
>

              <div className="px-5 py-4 border-b text-center">
                <h3 className="text-sm font-semibold tracking-wide text-slate-900">
                  SIGN UP & GET{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    AUSTRALIA
                  </span>{" "}
                  ASSESSMENT
                </h3>
              </div>

              <div className="px-5 py-4 space-y-3">
                <input
                  placeholder="Full name"
                  className="w-full border-b border-slate-300 py-2 text-sm focus:outline-none focus:border-black"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
                <input
                  placeholder="Phone number"
                  className="w-full border-b border-slate-300 py-2 text-sm focus:outline-none focus:border-black"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
                <input
                  placeholder="Email address"
                  className="w-full border-b border-slate-300 py-2 text-sm focus:outline-none focus:border-black"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
              <div className="border-t px-5 py-4 space-y-2">
  <p className="text-xs font-medium">Upload Resume</p>

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

              <div className="border-t px-5 py-3">
                <p className="text-xs font-medium mb-2">Age</p>
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

              <div className="border-t px-5 py-3">
                <p className="text-xs font-medium mb-2">Qualification</p>
                <div className="flex flex-wrap gap-2">
                  {["PhD", "Master’s", "Bachelor’s", "Diploma", "<12 yrs"].map(
                    (q) => (
                      <Option
                        key={q}
                        value={q}
                        selected={form.qualification === q}
                        onClick={() => update("qualification", q)}
                      />
                    )
                  )}
                </div>
              </div>

              <div className="border-t px-5 py-3">
                <p className="text-xs font-medium mb-2">Experience</p>
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

              <div className="border-t px-5 py-4">
 <button
  onClick={handleSubmit}
  className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium"
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
