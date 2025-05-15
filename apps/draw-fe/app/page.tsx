import Link from "next/link";
import { Button } from "../components/button";
import { Brush, Users, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-liveStrokes-purple to-liveStrokes-darkPurple text-transparent bg-clip-text">
            Live Strokes
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A simple, collaborative drawing platform for teams and creative minds.
        </p>
        <div className="flex justify-center gap-4">
          <Link href={"/signin"}>
            <Button className="bg-liveStrokes-purple hover:bg-liveStrokes-darkPurple text-white">
              Sign In
            </Button>
          </Link>
          <Link href={"signup"}>
            <Button
              variant="outline"
              className="border-liveStrokes-purple text-liveStrokes-purple"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      {/* Canvas Preview */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16 shadow-sm">
        <div className="aspect-video rounded border-2 border-dashed border-gray-300 flex items-center justify-center bg-white">
          <div className="text-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md mx-auto">
              <rect
                x="40"
                y="20"
                width="120"
                height="60"
                rx="5"
                className="stroke-liveStrokes-purple stroke-2 fill-none"
              />
              <circle
                cx="100"
                cy="50"
                r="20"
                className="stroke-liveStrokes-purple stroke-2 fill-none"
              />
              <path
                d="M70,30 L130,70"
                className="stroke-liveStrokes-purple stroke-2"
              />
              <path
                d="M70,70 L130,30"
                className="stroke-liveStrokes-purple stroke-2"
              />
            </svg>
            <p className="text-gray-500 mt-4">Canvas Preview</p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-liveStrokes-light h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brush className="h-6 w-6 text-liveStrokes-purple" />
          </div>
          <h3 className="font-medium mb-2">Drawing Tools</h3>
          <p className="text-gray-500 text-sm">
            Simple yet powerful tools for all your creative needs
          </p>
        </div>

        <div className="text-center">
          <div className="bg-liveStrokes-light h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-6 w-6 text-liveStrokes-purple" />
          </div>
          <h3 className="font-medium mb-2">Real-time Collaboration</h3>
          <p className="text-gray-500 text-sm">
            Work together with your team in real-time
          </p>
        </div>

        <div className="text-center">
          <div className="bg-liveStrokes-light h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Share2 className="h-6 w-6 text-liveStrokes-purple" />
          </div>
          <h3 className="font-medium mb-2">Easy Sharing</h3>
          <p className="text-gray-500 text-sm">
            Share your creations with a simple link
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button className="bg-liveStrokes-purple hover:bg-liveStrokes-darkPurple text-white px-8">
          Try Now - It's Free
        </Button>
      </div>
    </div>
  );
}
