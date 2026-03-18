import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import PainPoints from "@/components/sections/PainPoints";
import CaseStudy from "@/components/sections/CaseStudy";
import Services from "@/components/sections/Services";
import Audit from "@/components/sections/Audit";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <main className="overflow-x-hidden">
    <Hero />
    <Problem />
    <Services />
    <PainPoints />
    <Audit />
    <CaseStudy />
    <Footer />
  </main>
);

export default Index;
