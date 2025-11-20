'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

export const PekanNotaris = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleRegistrasi = () => {
    window.open('https://forms.gle/V134ARnM1b8AN1mB6', '_blank');
  };

  const activities = [
    {
      icon: Calendar,
      title: "Seminar Nasional",
      desc: "Pemaparan dari pakar dan praktisi notaris",
      color: "from-[#0A2463] to-[#1a3a8f]"
    },
    {
      icon: Users,
      title: "Konferensi FOMNI",
      desc: "Forum kolaborasi mahasiswa se-Indonesia",
      color: "from-[#F34213] to-[#ff6b3d]"
    },
    {
      icon: Award,
      title: "Kompetisi Akta",
      desc: "Lomba pembuatan dan simulasi akta",
      color: "from-[#0A2463] to-[#1a3a8f]"
    },
    {
      icon: MapPin,
      title: "Campus Tour",
      desc: "Eksplorasi lingkungan FH UI",
      color: "from-[#F34213] to-[#ff6b3d]"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#F2F2F2]">
      {/* Hero Section with Parallax */}
      <motion.section
        className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Header Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/pekan-notaris-header.png"
            alt="Pekan Notaris 2026 Header"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/60 via-[#0A2463]/40 to-[#F2F2F2]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#F34213]/20 blur-xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-[#0A2463]/20 blur-xl"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
            >
              Pekan Notaris
              <span className="block text-[#F34213] mt-2">2026</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg"
            >
              Penguatan Kerangka Hukum dalam Aspek Kenotariatan untuk Mendukung Investasi dan Pengelolaan Ruang di Indonesia
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Activities Grid */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#F2F2F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              Rangkaian Kegiatan
            </h2>
            <div className="w-24 h-1.5 bg-[#F34213] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${activity.color} mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2463] mb-2 group-hover:text-[#F34213] transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section with Enhanced Typography */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-10 md:p-12 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Pada tahun ini, <span className="font-bold text-[#0A2463]">PEKAN NOTARIS 2026</span> mengangkat tema <span className="font-bold text-[#F34213] underline decoration-[#F34213]">&quot;Penguatan Kerangka Hukum dalam Aspek Kenotariatan untuk Mendukung Investasi dan Pengelolaan Ruang di Indonesia.&quot;</span> Sebagai <strong className="text-[#0A2463]">program kerja yang berskala nasional</strong>, program ini akan diikuti oleh delegasi mahasiswa magister kenotariatan dari berbagai perguruan tinggi di Indonesia. Rangkaian kegiatan yang disiapkan mencakup <span className="font-semibold text-[#0A2463]">Seminar Nasional Pekan Notaris</span>, <span className="font-semibold text-[#0A2463]">Konferensi Forum Mahasiswa Notariat Indonesia (FOMNI)</span>, <span className="font-semibold text-[#0A2463]">Kompetisi Pembuatan Akta</span>, <span className="font-semibold text-[#0A2463]">Campus Tour</span> di wilayah FH UI, hingga kegiatan penutupan dan Awarding.
              </p>

              <p>
                Melalui rangkaian kegiatan tersebut, Pekan Notaris diharapkan menjadi <span className="font-bold text-[#F34213]">wadah strategis</span> dalam meningkatkan <span className="font-semibold underline decoration-[#0A2463]">wawasan, keterampilan, dan jejaring akademik</span> mahasiswa magister kenotariatan seluruh Indonesia. Kehadiran para <strong className="text-[#0A2463]">pakar, akademisi, serta praktisi langsung sebagai Notaris</strong> dalam Seminar Nasional akan memberikan pemahaman yang komprehensif mengenai dinamika perkembangan hukum dan investasi yang berdampak pada praktik kenotariatan. Sementara itu, <span className="font-bold text-[#F34213]">Konferensi Forum Mahasiswa Notariat Indonesia (FOMNI)</span> menjadi ruang musyawarah dan kolaborasi antar mahasiswa dari berbagai perguruan tinggi dalam merumuskan gagasan serta rekomendasi untuk kemajuan pendidikan dan profesi kenotariatan di Indonesia.
              </p>

              <p>
                <span className="font-bold text-[#F34213]">Lomba Pembuatan Akta dan simulasi</span> hadir sebagai sarana pengasahan <span className="font-semibold text-[#0A2463]">kemampuan praktis mahasiswa</span> dalam menyusun <span className="underline decoration-[#F34213]">akta autentik</span> sesuai dengan kaidah hukum, etika, serta keterampilan teknis yang dibutuhkan oleh seorang notaris. Kegiatan ini, tidak hanya menekankan <strong className="text-[#0A2463]">aspek kompetitif</strong>, tetapi juga <strong className="text-[#0A2463]">aspek edukatif</strong> untuk menumbuhkan kualitas profesionalitas sejak dini. <span className="font-semibold text-[#0A2463]">Campus Tour</span> di lingkungan FH UI juga akan memperkenalkan budaya akademik serta atmosfer intelektual FH UI kepada para peserta dari berbagai daerah, sehingga memperluas wawasan serta mempererat hubungan kekeluargaan di antara mahasiswa kenotariatan.
              </p>

              <p>
                Dengan demikian, <span className="font-bold text-[#0A2463]">Pekan Notaris</span> tidak hanya bersifat seremonial, tetapi juga <span className="font-bold text-[#F34213] underline decoration-[#F34213]">substansial</span> dalam mewujudkan mahasiswa kenotariatan yang <span className="font-semibold text-[#0A2463]">unggul, profesional, serta adaptif</span> terhadap perubahan zaman. Melalui penyelenggaraan kegiatan ini, diharapkan terjalin <strong className="text-[#F34213]">sinergi antara mahasiswa, akademisi, praktisi, dan pemangku kepentingan</strong> terkait untuk bersama-sama memperkuat peran notaris sebagai <span className="font-bold underline decoration-[#0A2463]">pejabat umum yang berintegritas dan responsif</span> terhadap kebutuhan masyarakat di era digital.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#0A2463] via-[#1a3a8f] to-[#0A2463] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#F34213] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#0A2463] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Bergabung?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Daftarkan diri Anda sekarang untuk mengikuti Lomba Pembuatan dan Simulasi Akta 2026
            </p>

            <motion.button
              onClick={handleRegistrasi}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 sm:px-12 sm:py-6 bg-white text-[#0A2463] font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#F34213] to-[#ff6b3d] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <span className="relative flex items-center gap-3 group-hover:text-white transition-colors">
                <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                <span>Formulir Registrasi</span>
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
