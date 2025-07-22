'use client';

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const Footer = () => {
  return (
    <footer className="bg-[#0A2463] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      <motion.div
        className="absolute left-0 right-0 h-16 -top-16 overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0V60C200,0 400,120 600,60S1000,0 1200,60V0H0Z" className="fill-[#0A2463]" />
        </svg>
      </motion.div>
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#F04E23]/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-[#F04E23]/10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/immk-logo.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold">IMMK UI</span>
            </motion.div>
            <p className="text-sm text-white/80 mb-4">
              Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, name: 'facebook', href: '#' },
                { icon: Twitter, name: 'twitter', href: '#' },
                { icon: Instagram, name: 'instagram', href: '#' },
                { icon: Linkedin, name: 'linkedin', href: '#' }
              ].map(({ icon: Icon, name, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label={name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {['Beranda', 'Tentang', 'Program', 'Galeri', 'Kontak'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <motion.li
                className="flex items-start gap-2 text-sm text-white/80"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span>📍</span>
                <span>Gedung Magister Kenotariatan, Kampus UI Depok, Jawa Barat</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2 text-sm text-white/80"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span>📧</span>
                <a href="mailto:immk.ui.2025@gmail.com" className="hover:text-white transition-colors">immk.ui.2025@gmail.com</a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-white/80 mb-4">
              Dapatkan informasi terbaru tentang kegiatan dan program kami.
            </p>
            <div className="flex">
              <motion.input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 text-sm text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F04E23] w-full"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.button
                className="bg-[#F04E23] hover:bg-[#e03d12] text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Kirim
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} IMMK UI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Kebijakan Privasi
            </motion.a>
            <motion.a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Syarat & Ketentuan
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
