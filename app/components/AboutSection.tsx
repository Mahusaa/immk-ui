'use client';

import { motion } from 'framer-motion';

const cardGradient = 'from-orange-100 to-orange-50';
const faintCircleColor = '#FFE5D0';

export const AboutSection = () => {
  return (
    <section id="about" className="pt-16 pb-24 px-6 max-w-5xl mx-auto bg-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0A2463]">Tentang Kami</h2>
        <motion.div
          className="w-20 h-1 bg-[#F04E23] mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
          IMM K adalah organisasi mahasiswa yang berkomitmen untuk mengembangkan potensi mahasiswa Magister Kenotariatan
          melalui berbagai program yang mendukung pengembangan akademik, profesional, dan sosial.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          {
            title: "Visi",
            desc: "Menjadi wadah pengembangan diri yang unggul bagi mahasiswa Magister Kenotariatan.",
            icon: "🎯",
            link: '#visi',
          },
          {
            title: "Misi",
            desc: "Mengadakan program pengembangan kapasitas, membangun jejaring, dan berkontribusi pada masyarakat.",
            icon: "✨",
            link: '#misi',
          },
          {
            title: "Nilai",
            desc: "Integritas, Kolaborasi, Inovasi, dan Kepedulian Sosial menjadi landasan setiap kegiatan kami.",
            icon: "💎",
            link: '#nilai',
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`relative p-8 rounded-2xl bg-gradient-to-br ${cardGradient} shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            {/* Faint colored circle behind icon */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-40 z-0" style={{ background: faintCircleColor }} />
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-3xl bg-white/40 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-[#0A2463] text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 
