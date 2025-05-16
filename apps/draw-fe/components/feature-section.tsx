import { PencilLine, Users, Share } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Work with your team simultaneously on a shared canvas. See changes live and brainstorm effectively.",
  },
  {
    icon: PencilLine,
    title: "Intuitive Drawing Tools",
    description:
      "A simple yet powerful set of tools that are easy to pick up and use, letting you focus on your creativity.",
  },
  {
    icon: Share,
    title: "Export & Share Easily",
    description:
      "Save your creations in various formats or share a link with others in just a few clicks.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Collaborate Visually
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Discover the core features that make CanvasCollab the perfect tool
            for your creative projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              //   @ts-ignore
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
