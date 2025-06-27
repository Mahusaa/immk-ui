import React from "react";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Programs } from "./components/programs";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";

export default function Home() {
  return (
    <>


      <HeroSection />
      <AboutSection />
      <Programs />
      <Gallery />
      <Footer />

    </>
  );
}
