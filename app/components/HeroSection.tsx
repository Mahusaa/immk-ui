'use client';

import Image from "next/image";
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-16 scroll-mt-20"
    >
      {/* Background image, optimized for performance */}
      <div className="absolute inset-0">
  {/* Background Image */}
  <Image
    src="/balai_sidang.jpg"
    alt="Balai Sidang"
    fill
    priority
    quality={60}
    className="object-cover object-center brightness-60"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463]/70 via-[#F34213]/60 to-[#0A2463]/70 mix-blend-overlay" />

  {/* Halftone / Checkerboard Texture Overlay */}
  <div
    className="absolute inset-0 opacity-30 pointer-events-none"
    style={{
      backgroundImage: 'url("/halftone-pattern.png")', // you provide this image
      backgroundSize: 'cover',
      mixBlendMode: 'multiply',
    }}
  />
</div>


      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-white text-4xl md:text-6xl xl:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Ikatan Mahasiswa Magister Kenotariatan
        </motion.h1>
        <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto mb-8 rounded-full" />
        <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Pusat Informasi Mahasiswa Magister Kenotariatan Universitas Indonesia
        </p>
        <motion.a
          href="#about"
          className="inline-flex items-center gap-3 px-10 py-4 bg-white/20 text-white font-semibold rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </div>
    </section>
  );
}; 
