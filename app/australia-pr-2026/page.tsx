import AustraliaHero from "../components/AustraliaHero";
import AustraliaMigrateSection from "../components/AustraliaMigrateSection";
import AustraliaPRProcessFlow from "../components/AustraliaPRProcessFlow";
import WhyChooseVJCOverseas from "../components/WhyChooseVJCOverseas";
import AustraliaPRFAQ from "../components/AustraliaPRFAQ";

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <AustraliaHero />

      {/* MIGRATE TO AUSTRALIA CONTENT */}
      <AustraliaMigrateSection />

      {/* PR PROCESS FLOW */}
      <AustraliaPRProcessFlow />

      {/* WHY CHOOSE VJC OVERSEAS */}
      <WhyChooseVJCOverseas />

      {/* FAQ SECTION */}
      <AustraliaPRFAQ />
    </>
  );
}
