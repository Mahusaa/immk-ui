import React from "react";
import Navbar from './components/Navbar';
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Programs } from "./components/programs";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TimelineSection } from "./components/TimelineSection";

export default function Home() {
  return (
    <div className="text-gray-900 bg-white">
      <Navbar />

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="noiseFilter">
            <feTurbulence
              baseFrequency="0.9"
              numOctaves="3"
              seed="1"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </defs>
      </svg>

      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <Programs />
      <Gallery />
      <Footer />
    </div>
  );
}
