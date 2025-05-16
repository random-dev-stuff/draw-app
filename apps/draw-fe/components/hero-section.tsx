import { Button } from "@repo/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="bg-slate-100 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Creative collaboration,{" "}
          <span className="text-vivid-purple">reimagined</span>.
        </h1>
        <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto mb-10">
          Draw, sketch, and collaborate in real-time with your team. Live
          Strokes makes creative collaboration effortless and fun.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button size="lg">
              Start Drawing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-vivid-purple border-vivid-purple hover:bg-vivid-purple/10 hover:text-vivid-purple"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
