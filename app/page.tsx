import React from "react";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Programs } from "./components/programs";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda - IMMK UI",
  description: "Selamat datang di IMMK UI - Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia. Program unggulan, workshop, dan kegiatan rutin untuk pengembangan akademik dan profesional.",
  keywords: [
    "IMMK UI Beranda",
    "Magister Kenotariatan UI",
    "Program Mahasiswa Notaris",
    "Workshop Kenotariatan",
    "Akademik UI Depok",
    "Kegiatan Mahasiswa Notaris",
    "Pengembangan Profesional Notaris"
  ],
  openGraph: {
    title: "Beranda - IMMK UI",
    description: "Selamat datang di IMMK UI - Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia.",
    url: "https://immkui.com",
    images: [
      {
        url: "/balai_sidang.jpg",
        width: 1200,
        height: 630,
        alt: "IMMK UI - Balai Sidang Universitas Indonesia",
      },
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "IMMK UI - Logo",
      },
    ],
  },
  twitter: {
    title: "Beranda - IMMK UI",
    description: "Selamat datang di IMMK UI - Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia.",
  },
  alternates: {
    canonical: "/",
  },
};

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
