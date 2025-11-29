import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Audience from "@/components/Audience";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Audience />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
