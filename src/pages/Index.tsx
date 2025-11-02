import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhyCyberNest } from "@/components/WhyCyberNest";
import { HowWeWork } from "@/components/HowWeWork";
import { Founder } from "@/components/Founder";
import { Services } from "@/components/Services";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navigation />
      <Hero />
      <WhyCyberNest />
      <HowWeWork />
      <Founder />
      <Services />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
