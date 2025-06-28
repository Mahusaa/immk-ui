import MKNGuide from "@/components/MKNGuide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MKN UI Guide - Panduan Lengkap Magister Kenotariatan",
  description: "Panduan lengkap dan informasi terkini seputar program Magister Kenotariatan UI. Informasi akademik, prosedur, dan tips untuk mahasiswa MKN UI.",
  keywords: [
    "MKN UI Guide",
    "Panduan Magister Kenotariatan",
    "Program MKN UI",
    "Akademik Kenotariatan",
    "Mahasiswa Notaris UI",
    "Panduan Kuliah Notaris",
    "Informasi MKN UI"
  ],
  openGraph: {
    title: "MKN UI Guide - Panduan Lengkap Magister Kenotariatan",
    description: "Panduan lengkap dan informasi terkini seputar program Magister Kenotariatan UI. Informasi akademik, prosedur, dan tips untuk mahasiswa MKN UI.",
    url: "https://immkui.com/mkn-guide",
    images: [
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "MKN UI Guide - Logo IMMK UI",
      },
    ],
  },
  twitter: {
    title: "MKN UI Guide - Panduan Lengkap Magister Kenotariatan",
    description: "Panduan lengkap dan informasi terkini seputar program Magister Kenotariatan UI.",
  },
  alternates: {
    canonical: "/mkn-guide",
  },
};

export default function MKNGuidePage() {
  return (
    <main className="bg-[#F2F2F2] min-h-screen pt-20">
      <MKNGuide />
    </main>
  );
} 
