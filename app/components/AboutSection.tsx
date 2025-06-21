'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutSection = () => {
  const leadershipTeam = [
    {
      name: "Vira Chairunnisa",
      title: "EXECUTIVE DIRECTOR",
      image: "/immk-logo.jpeg",
    },
    {
      name: "Jayanti Lintang S.",
      title: "DIRECTOR OF ORGANIZATION",
      image: "/immk-logo.jpeg",
    },
    {
      name: "Naufal Baraia R.",
      title: "DIRECTOR OF RESEARCH",
      image: "/immk-logo.jpeg",
    },
  ];

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

  const guideLinks = [
    { name: "Kalender Akademik", icon: "📅", url: "#" },
    { name: "Buku Pedoman", icon: "📖", url: "#" },
    { name: "Buku Kuliah", icon: "📚", url: "#" },
    { name: "Diktat", icon: "📑", url: "#" },
    { name: "Panduan Tugas Akhir", icon: "✍️", url: "#" },
  ];

  return (
    <section id="about" className="bg-[#F2F2F2] py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Intro */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] font-serif tracking-tight">
            Tentang Kami
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-[#F34213] mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Ikatan Mahasiswa Magister Kenotariatan (IMM K) adalah organisasi mahasiswa yang berkomitmen penuh untuk mengembangkan potensi mahasiswa Magister Kenotariatan melalui berbagai program inovatif yang mendukung pengembangan akademik, profesional, dan sosial.
          </p>
          <motion.h3 
            className="mt-6 text-2xl font-semibold text-[#F34213] font-serif tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            &ldquo;Menata Bersama, Wujudkan Cita&rdquo;
          </motion.h3>
        </motion.div>

        {/* Section 2: Visi */}
        <motion.div
          className="mt-20 text-center bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-[#0A2463] font-serif">VISI IMMK UI 2025</h3>
          <div className="w-20 h-1 bg-[#F34213] mt-4 mb-6 mx-auto rounded-full"></div>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Menjadikan IMMK UI sebagai wadah Rangkai Cita yang menjadi akselerator akademik, karier, dan relasi yang profesional, kolaboratif, dan bermakna, dengan budaya kerja yang inklusif, guna mewujudkan kebermanfaatan nyata bagi Magister Kenotariatan UI, Universitas Indonesia, dan Indonesia.
          </p>
        </motion.div>
        
        {/* Section 3: Misi */}
        <div className="mt-24">
          <motion.h3 
            className="text-3xl font-bold text-[#0A2463] font-serif text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            MISI IMMK UI 2025
          </motion.h3>
          <motion.div
            className="w-20 h-1 bg-[#F34213] mt-4 mb-12 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {misi.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-3xl text-[#F34213]">{item.icon}</span>
                  <h4 className="font-bold text-xl text-[#0A2463]">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Tim Pimpinan */}
        <div id="team" className="mt-24 scroll-mt-20">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-[#0A2463] font-serif tracking-tight">Tim Pimpinan</h3>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Kenali tim pimpinan kami yang berdedikasi untuk memajukan IMM K dan melayani seluruh mahasiswa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative">
                    <Image 
                      src={member.image} 
                      alt={`Foto ${member.name}`} 
                      width={400}
                      height={320}
                      className="w-full h-80 object-cover" 
                    />
                  </div>
                  <div className="py-5 px-4 bg-[#0A2463]">
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-sm uppercase tracking-wider font-medium text-white/80 mt-1">{member.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5: MKN UI GUIDE */}
        <motion.div
          id="mkn-guide"
          className="mt-24 bg-[#0A2463] rounded-2xl p-8 md:p-12 scroll-mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white">MKN UI GUIDE</h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              Akses cepat ke semua sumber daya akademik yang Anda butuhkan. Unduh panduan, buku, dan kalender akademik di sini.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
            {guideLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
                whileHover={{ y: -4, scale: 1.05, backgroundColor: '#F34213' }}
                className={`block p-4 bg-white/10 rounded-xl text-white text-center transition-colors duration-300 backdrop-blur-sm border border-white/20 ${
                  guideLinks.length % 2 !== 0 && index === guideLinks.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                <h4 className="font-semibold text-sm">{link.name}</h4>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 
