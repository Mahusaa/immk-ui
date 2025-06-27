import React from "react";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Programs } from "./components/programs";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TimelineSection } from "./components/TimelineSection";
import { OrganizationStructure } from "./components/OrganizationStructure";

export default function Home() {
  return (
    <>


      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <Programs />
      <Gallery />
      <Footer />

    </>
  );
}
