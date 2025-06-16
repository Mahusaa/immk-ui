
import React from "react";
import Image from "next/image";
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { Programs } from "./components/programs";

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



      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-16"
      >
        {/* Background image with noise filter */}
        <div className="absolute inset-0">
          <Image
            src="/balai_sidang.jpg"
            alt="Balai Sidang"
            fill
            priority
            className="object-cover object-center brightness-50"
            style={{ filter: 'url(#noiseFilter)' }}
          />
        </div>

        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463]/80 via-[#F34213]/80 to-[#0A2463]/80" />


        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg">
            Ikatan Mahasiswa Magister Kenotariatan
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Pusat Informasi Mahasiswa Magister Kenotariatan Universitas Indonesia
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white/20 text-white font-semibold rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-orange-500/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-3 h-3 bg-red-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-orange-400/50 rounded-full animate-pulse delay-500"></div>
      </section>



      {/* About Section */}
      <section id="about" className="pt-16 pb-24 px-6 max-w-5xl mx-auto bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0A2463]">Tentang Kami</h2>
          <div className="w-20 h-1 bg-[#F04E23] mx-auto mb-6"></div>
          <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            IMM K adalah organisasi mahasiswa yang berkomitmen untuk mengembangkan potensi mahasiswa Magister Kenotariatan
            melalui berbagai program yang mendukung pengembangan akademik, profesional, dan sosial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Visi",
              desc: "Menjadi wadah pengembangan diri yang unggul bagi mahasiswa Magister Kenotariatan.",
              icon: "🎯",
              color: "bg-orange-50 text-[#F04E23]"
            },
            {
              title: "Misi",
              desc: "Mengadakan program pengembangan kapasitas, membangun jejaring, dan berkontribusi pada masyarakat.",
              icon: "✨",
              color: "bg-orange-50 text-[#F04E23]"
            },
            {
              title: "Nilai",
              desc: "Integritas, Kolaborasi, Inovasi, dan Kepedulian Sosial menjadi landasan setiap kegiatan kami.",
              icon: "💎",
              color: "bg-orange-50 text-[#F04E23]"
            }
          ].map((item, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${item.color} hover:-translate-y-1`}>
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Programs />
      <Gallery />
      <Footer />
    </div>
  );
}
