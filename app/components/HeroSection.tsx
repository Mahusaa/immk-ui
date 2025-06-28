'use client';

import Image from "next/image";
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center scroll-mt-24"
      aria-label="Halaman Utama IMMK UI"
    >
      {/* Background image, optimized for performance */}
      <div className="absolute inset-0">
        {/* Background Image with loading optimization */}
        <Image
          src="/balai_sidang.jpg"
          alt="Balai Sidang Universitas Indonesia - Latar belakang halaman utama IMMK UI"
          fill
          priority
          quality={30}
          sizes="100vw"
          className="object-cover object-center brightness-20"
        />
      </div>

      {/* Hero content with staggered animations */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-8 leading-tight drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1
          }}
        >
          Ikatan Mahasiswa Magister Kenotariatan
        </motion.h1>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto mb-8 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.3
          }}
          aria-hidden="true"
        />

        <motion.p
          className="text-white text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5
          }}
        >
          Pusat Informasi Mahasiswa Magister Kenotariatan Universitas Indonesia
        </motion.p>

        <motion.a
          href="#about"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full shadow-lg hover:bg-white/30 transition-all duration-200 border border-white/20"
          whileHover={{
            scale: 1.02,
            y: -1,
            transition: { duration: 0.15 }
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.7
          }}
          aria-label="Pelajari lebih lanjut tentang IMMK UI"
        >
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            aria-hidden="true"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
          <span className="sr-only">Scroll ke bawah untuk informasi lebih lanjut</span>
        </motion.a>
      </div>
    </section>
  );
}; 
