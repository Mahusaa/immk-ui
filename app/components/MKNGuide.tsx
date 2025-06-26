"use client"
import { motion } from 'framer-motion';

const guideLinks = [
  { name: "Kalender Akademik", icon: "📅", url: "#" },
  { name: "Buku Pedoman", icon: "📖", url: "#" },
  { name: "Buku Kuliah", icon: "📚", url: "#" },
  { name: "Diktat", icon: "📑", url: "#" },
  { name: "Panduan Tugas Akhir", icon: "✍️", url: "#" },
];
const MKNGuide = () => {
  return (
    <div className='flex items-center justify-center mx-3 md:mx-auto'>

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
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, scale: 1.05, backgroundColor: '#F34213' }}
              className={`block p-4 bg-white/10 rounded-xl text-white text-center transition-colors duration-300 backdrop-blur-sm border border-white/20 ${guideLinks.length % 2 !== 0 && index === guideLinks.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                }`}
            >
              <div className="text-3xl mb-2">{link.icon}</div>
              <h4 className="font-semibold text-sm">{link.name}</h4>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>

  )
}

export default MKNGuide;
