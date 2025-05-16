import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { FeaturesSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
