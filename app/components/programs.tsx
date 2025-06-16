'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Programs = () => {
  const programsRef = useRef(null);
  const isInView = useInView(programsRef, { once: true, amount: 0.1 });

  const programs = [
    {
      title: "Kegiatan Rutin",
      desc: "Berbagai kegiatan rutin untuk pengembangan diri dan keilmuan mahasiswa Magister Kenotariatan.",
      icon: "📚",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Workshop & Seminar",
      desc: "Pembelajaran mendalam dengan para ahli di bidang hukum dan kenotariatan.",
      icon: "🎓",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Pengabdian Masyarakat",
      desc: "Berkontribusi langsung kepada masyarakat melalui program-program sosial dan edukasi.",
      icon: "🤝",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section
      id="programs"
      ref={programsRef}
      className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-[#0A2463] to-[#1a3a8f] overflow-hidden"
    >
      {/* Top wave divider */}
      <div className="absolute left-0 right-0 h-16 -top-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0V60C200,0 400,120 600,60S1000,0 1200,60V0H0Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Program & Kegiatan
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-white to-transparent mx-auto"
            transition={{ delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-3xl bg-white/10 backdrop-blur-sm"
                  whileHover={{
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  {program.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {program.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {program.desc}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                  <span>Selengkapnya</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

