'use client';

import { motion } from 'framer-motion';

export const AboutSection = () => {
  const misi = [
    {
      title: "Rangkai Sinergi",
      description: "Menanamkan nilai dan budaya IMMK UI kepada fungsionaris dalam setiap kegiatan, guna membentuk karakter yang profesional dan kekeluargaan.",
      icon: "🤝",
    },
    {
      title: "Rangkai Tata Kelola",
      description: "Membangun sistem kerja dan SOP yang terstruktur untuk meningkatkan kualitas kerja fungsionaris dan mendukung program IMMK UI.",
      icon: "🏛️",
    },
    {
      title: "Rangkai Guna",
      description: "Menjadi akselerator peningkatan kualitas mahasiswa MKn UI di bidang akademik, karier, dan relasi profesional agar memberi kontribusi nyata bagi masyarakat.",
      icon: "🚀",
    },
    {
      title: "Rangkai Relasi",
      description: "Membangun kolaborasi berkelanjutan dengan stakeholder untuk menciptakan harmoni dan keselarasan dalam bergerak.",
      icon: "🌐",
    },
    {
      title: "Rangkai Aspirasi",
      description: "Menjadikan IMMK UI sebagai jembatan advokasi dan aspirasi kesejahteraan mahasiswa yang responsif, solutif, dan konkret.",
      icon: "📢",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="bg-[#F2F2F2] py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] tracking-tight mb-6">
            Tentang Kami
          </h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#F34213] to-[#F47451] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="relative mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-[#0A2463] rounded-2xl mb-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-2xl">🎯</span>
              </motion.div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[#0A2463] mb-4">
                VISI IMMK UI 2025
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Menjadikan IMMK UI sebagai wadah Rangkai Cita yang menjadi akselerator akademik, karier, dan relasi yang profesional, kolaboratif, dan bermakna, dengan budaya kerja yang inklusif, guna mewujudkan kebermanfaatan nyata bagi Magister Kenotariatan UI, Universitas Indonesia, dan Indonesia.
              </p>

              <motion.div
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#0A2463] to-[#4578eb] rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-white font-semibold text-lg italic">
                  {`"Menata Bersama, Wujudkan Cita"`}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-4">
              MISI IMMK UI 2025
            </h3>

          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {misi.map((item) => (
              <motion.div
                key={item.title}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F34213]/20"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F34213] to-[#F47451] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <h4 className="font-bold text-xl text-[#0A2463] mb-4 group-hover:text-[#F34213] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-1 bg-[#0A2463] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 
