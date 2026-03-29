import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WaveDivider } from "@/components/WaveDivider";
import { SkillsSection } from "@/components/SkillsSection";
import { JourneySection } from "@/components/JourneySection";
import { ConnectSection } from "@/components/ConnectSection";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="container">
        <HeroSection />
      </div>
      <div className="container">
        <WaveDivider />
      </div>
      <SkillsSection />
      <JourneySection />
      <ConnectSection />
    </>
  );
}
