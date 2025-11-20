'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Programs = () => {
  const programsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<{ title: string; fullDesc: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComingSoon = () => {
    alert('Coming Soon! Program ini akan segera hadir.');
  };

  const handleNotarisMasaKini = () => {
    window.open('https://www.instagram.com/notarismasakini', '_blank');
  };

  const handleMKNGuide = () => {
    window.open('https://immkui.com/mkn-guide', '_blank');
  };

  const handlePekanNotaris = () => {
    window.open('/pekannotaris', '_self');
  };

  const handleSelengkapnya = (program: { title: string; fullDesc: string }) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
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
          onClick: handleMKNGuide
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
          onClick: handlePekanNotaris
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
          title: "Notary In Action",
          desc: "Penyuluhan hukum mengenai Pengelolaan, Pendaftaran dan Pengalihan Hak Atas Tanah untuk memberikan pemahaman dan edukasi kepada masyarakat.",
          fullDesc: "Merupakan kegiatan pengabdian kepada masyarakat berupa penyuluhan hukum mengenai Pengelolaan, Pendaftaran dan Pengalihan Hak Atas Tanah bertajuk Notary In Action, dengan maksud dan tujuan sebagai berikut:\n\n1. Memberikan pemaparan kepada masyarakat mengenai pengelolaan, pendaftaran dan pengalihan hak atas tanah;\n2. Memberikan edukasi kepada masyarakat untuk mencegah dan mengatasi masalah yang berhubungan dengan pengadaan sertifikat;\n3. Memberikan pemahaman dan pengetahuan mengenai isu-isu hukum terkini yang terjadi di kalangan masyarakat.",
          icon: "⚖️",
          onClick: () => handleSelengkapnya({
            title: "Notary In Action",
            fullDesc: "Merupakan kegiatan pengabdian kepada masyarakat berupa penyuluhan hukum mengenai Pengelolaan, Pendaftaran dan Pengalihan Hak Atas Tanah bertajuk Notary In Action, dengan maksud dan tujuan sebagai berikut:\n\n1. Memberikan pemaparan kepada masyarakat mengenai pengelolaan, pendaftaran dan pengalihan hak atas tanah;\n2. Memberikan edukasi kepada masyarakat untuk mencegah dan mengatasi masalah yang berhubungan dengan pengadaan sertifikat;\n3. Memberikan pemahaman dan pengetahuan mengenai isu-isu hukum terkini yang terjadi di kalangan masyarakat."
          })
        },
        {
          title: "Donasi",
          desc: "Kerjasama dengan Yayasan Pita Kuning Anak Indonesia sebagai wujud kepedulian bagi penderita kanker.",
          fullDesc: "Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia Divisi bidang Pengabdian Masyarakat akan menjalin kerjasama dengan Yayasan Pita Kuning Anak Indonesia sebagai wujud nyata dari kepedulian kami sebagai Mahasiswa Magister Kenotariatan Universitas Indonesia akan pentingnya kegiatan berdonasi untuk masyarakat khususnya bagi para penderita kanker.",
          icon: "❤️",
          onClick: () => handleSelengkapnya({
            title: "Donasi",
            fullDesc: "Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia Divisi bidang Pengabdian Masyarakat akan menjalin kerjasama dengan Yayasan Pita Kuning Anak Indonesia sebagai wujud nyata dari kepedulian kami sebagai Mahasiswa Magister Kenotariatan Universitas Indonesia akan pentingnya kegiatan berdonasi untuk masyarakat khususnya bagi para penderita kanker."
          })
        },
        {
          title: "Donor Darah",
          desc: "Kerjasama dengan PMI untuk mengadakan kegiatan donor darah sebagai bentuk kepedulian di bidang kesehatan.",
          fullDesc: "Divisi Pengabdian Masyarakat Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia bekerja sama dengan PMI (Palang Merah Indonesia), untuk mengadakan suatu rangkaian acara Donor Darah.\n\nAcara ini merupakan wujud nyata akan pentingnya kegiatan donor darah sebagai bentuk kepedulian bagi masyarakat khususnya pada bidang kesehatan.\n\nKegiatan ini bertujuan untuk menyediakan wadah bagi masyarakat agar dapat mendonorkan darahnya serta sebagai ajang edukasi tentang pentingnya donor darah.",
          icon: "🩸",
          onClick: () => handleSelengkapnya({
            title: "Donor Darah",
            fullDesc: "Divisi Pengabdian Masyarakat Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia bekerja sama dengan PMI (Palang Merah Indonesia), untuk mengadakan suatu rangkaian acara Donor Darah.\n\nAcara ini merupakan wujud nyata akan pentingnya kegiatan donor darah sebagai bentuk kepedulian bagi masyarakat khususnya pada bidang kesehatan.\n\nKegiatan ini bertujuan untuk menyediakan wadah bagi masyarakat agar dapat mendonorkan darahnya serta sebagai ajang edukasi tentang pentingnya donor darah."
          })
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
                    className="h-full"
                  >
                    <div
                      onClick={item.onClick}
                      className={`group bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 h-full flex flex-col ${item.onClick ? 'cursor-pointer hover:bg-white/20 hover:border-[#F34213]' : 'cursor-default'
                        }`}
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl group-hover:bg-[#F34213]/20 transition-colors">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col">
                          <h4 className="text-lg font-bold text-white group-hover:text-[#F34213] transition-colors mb-2">
                            {item.title}
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed mb-3 flex-1">
                            {item.desc}
                          </p>
                          <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors mt-auto">
                            <span>
                              {item.onClick === handleComingSoon ? 'Coming Soon' :
                                item.onClick === handleNotarisMasaKini ? 'Kunjungi Instagram' :
                                  item.onClick ? 'Selengkapnya' : 'Selengkapnya'}
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

      {/* Modal for Program Details */}
      {isModalOpen && selectedProgram && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0A2463] to-[#1a3a8f] p-6 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{selectedProgram.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-white/70 hover:text-white transition-colors p-2"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {selectedProgram.fullDesc}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

