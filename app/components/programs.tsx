'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Programs = () => {
  const programsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleComingSoon = () => {
    alert('Coming Soon! Program ini akan segera hadir.');
  };

  const handleNotarisMasaKini = () => {
    window.open('https://www.instagram.com/notarismasakini', '_blank');
  };

  const programCategories = [
    {
      title: "Program",
      subtitle: "Program Unggulan",
      desc: "Program unggulan dan inisiatif khusus IMMK UI.",
      icon: "🎯",
      color: "from-blue-500 to-blue-600",
      items: [
        {
          title: "MKN UI GUIDE",
          desc: "Panduan lengkap dan informasi terkini seputar program Magister Kenotariatan UI.",
          icon: "📖",
          onClick: undefined
        },
        {
          title: "Lomba Pembuatan Akta",
          desc: "Kompetisi pembuatan akta untuk mengasah kemampuan praktis mahasiswa.",
          icon: "🏆",
          onClick: handleComingSoon
        },
        {
          title: "Notaris Masa Kini",
          desc: "Ikuti perkembangan terkini dunia notaris melalui Instagram kami.",
          icon: "📱",
          onClick: handleNotarisMasaKini
        }
      ]
    },
    {
      title: "Workshop & Seminar",
      subtitle: "Pembelajaran Mendalam",
      desc: "Pembelajaran mendalam dengan para ahli di bidang hukum dan kenotariatan.",
      icon: "🎓",
      color: "from-purple-500 to-purple-600",
      items: [
        {
          title: "Notarial Training",
          desc: "Pelatihan intensif untuk mengembangkan keterampilan notarial.",
          icon: "⚖️",
          onClick: undefined
        },
        {
          title: "Seminar Workshop",
          desc: "Workshop interaktif dengan topik-topik terkini di dunia notaris.",
          icon: "🔨",
          onClick: undefined
        },
        {
          title: "Pekan Notaris",
          desc: "Serangkaian acara selama seminggu penuh untuk memperingati hari notaris.",
          icon: "📅",
          onClick: undefined
        }
      ]
    },
    {
      title: "Kegiatan Rutin",
      subtitle: "Pengembangan Diri",
      desc: "Berbagai kegiatan rutin untuk pengembangan diri dan keilmuan mahasiswa.",
      icon: "📚",
      color: "from-green-500 to-green-600",
      items: [
        {
          title: "Tentir Akademik",
          desc: "Sesi tanya jawab dan diskusi akademik untuk memperdalam pemahaman.",
          icon: "💬",
          onClick: undefined
        },
        {
          title: "Visit Kantor Notaris",
          desc: "Kunjungan langsung ke kantor notaris untuk melihat praktik nyata.",
          icon: "🏢",
          onClick: undefined
        },
        {
          title: "Mentoring Lomba",
          desc: "Program mentoring untuk persiapan mengikuti berbagai kompetisi.",
          icon: "👥",
          onClick: undefined
        }
      ]
    },
    {
      title: "Pengabdian Masyarakat",
      subtitle: "Kontribusi Sosial",
      desc: "Berkontribusi langsung kepada masyarakat melalui program-program sosial.",
      icon: "🤝",
      color: "from-orange-500 to-orange-600",
      items: [
        {
          title: "Bakti Sosial",
          desc: "Kegiatan sosial untuk membantu masyarakat yang membutuhkan.",
          icon: "❤️",
          onClick: undefined
        },
        {
          title: "Konsultasi Hukum",
          desc: "Memberikan konsultasi hukum gratis kepada masyarakat.",
          icon: "⚖️",
          onClick: undefined
        },
        {
          title: "Edukasi Hukum",
          desc: "Program edukasi hukum untuk meningkatkan literasi hukum masyarakat.",
          icon: "📖",
          onClick: undefined
        }
      ]
    }
  ];

  return (
    <section
      id="programs"
      ref={programsRef}
      className="relative py-16 sm:py-20 bg-gradient-to-br from-[#0A2463] via-[#1a3a8f] to-[#0A2463] overflow-hidden scroll-mt-24"
    >
      {/* Top wave divider */}
      <div className="absolute left-0 right-0 h-16 -top-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0V60C200,0 400,120 600,60S1000,0 1200,60V0H0Z" className="fill-[#F2F2F2]" />
        </svg>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white  tracking-tight mb-4">
            Program & Kegiatan
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Jelajahi berbagai program dan kegiatan yang kami tawarkan untuk pengembangan diri dan keilmuan
          </p>
          <motion.div
            className="w-24 h-1.5 bg-[#F34213] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 gap-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2 max-w-4xl w-full sm:flex sm:grid-cols-none sm:grid-rows-none sm:gap-2 sm:w-auto">
            {programCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap w-full sm:w-auto justify-center ${index === activeTab
                    ? 'bg-[#F34213] text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          {programCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`${categoryIndex === activeTab ? 'block' : 'hidden'}`}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 text-3xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-[#F34213] font-semibold text-sm sm:text-base mb-3">
                  {category.subtitle}
                </p>
                <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
                  {category.desc}
                </p>
              </div>

              {/* Category Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    <div
                      onClick={item.onClick}
                      className={`group bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 ${item.onClick ? 'cursor-pointer hover:bg-white/20 hover:border-[#F34213]' : 'cursor-default'
                        }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl group-hover:bg-[#F34213]/20 transition-colors">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-bold text-white group-hover:text-[#F34213] transition-colors mb-2">
                            {item.title}
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed mb-3">
                            {item.desc}
                          </p>
                          <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                            <span>
                              {item.onClick === handleComingSoon ? 'Coming Soon' :
                                item.onClick === handleNotarisMasaKini ? 'Kunjungi Instagram' :
                                  'Selengkapnya'}
                            </span>
                            {item.onClick && (
                              <svg
                                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

