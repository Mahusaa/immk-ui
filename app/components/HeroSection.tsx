'use client';

import Image from "next/image";
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-16"
    >
      {/* Background image with noise filter */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/balai_sidang.jpg"
          alt="Balai Sidang"
          fill
          priority
          className="object-cover object-center brightness-50"
          style={{ filter: 'url(#noiseFilter)' }}
        />
      </motion.div>

      {/* Orange gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0A2463]/80 via-[#F34213]/80 to-[#0A2463]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-white text-4xl md:text-6xl xl:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg"
          style={{ opacity, scale }}
        >
          Ikatan Mahasiswa Magister Kenotariatan
        </motion.h1>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.p
          className="text-white text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Pusat Informasi Mahasiswa Magister Kenotariatan Universitas Indonesia
        </motion.p>
        <motion.a
          href="#about"
          className="inline-flex items-center gap-3 px-10 py-4 bg-white/20 text-white font-semibold rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-bounce"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </motion.div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-orange-500/40 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-3 h-3 bg-red-400/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-orange-400/50 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}; 
