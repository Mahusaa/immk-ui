"use client"
import { motion } from 'framer-motion';

const guideLinks = [
  { name: "Kalender Akademik", icon: "📅", url: "https://drive.google.com/drive/folders/1nnlW2uSJmWMLQGNxj4aKsWweeEStgGj-" },
  { name: "Buku Pedoman", icon: "📖", url: "https://drive.google.com/drive/folders/1nnlW2uSJmWMLQGNxj4aKsWweeEStgGj-" },
  { name: "Buku Kuliah", icon: "📚", url: "https://drive.google.com/drive/folders/1nJHUZne4fTw__3RjuuXZIZdAv2B8ncv6?usp=drive_link" },
  { name: "Diktat", icon: "📑", url: "https://drive.google.com/drive/folders/1LXxAaCxinv-vrNeDIbSt9vcNQ_fHmZrH?usp=drive_link" },
  { name: "Panduan Tugas Akhir", icon: "✍️", url: "https://drive.google.com/drive/folders/1nnlW2uSJmWMLQGNxj4aKsWweeEStgGj-" },
  { name: "Dokumentasi Lomba Akademik", icon: "🏆", url: "https://drive.google.com/drive/folders/1daaG5ZAMKo_y2YHqQvHlJJGWnlQbqCYi" },
];

const MKNGuide = () => {
  return (
    <section id="mkn-guide" className="bg-[#F2F2F2] py-12 sm:py-20 lg:py-24 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2463] font-serif tracking-tight font-butler">
            MKN UI GUIDE
          </h2>
          <motion.div
            className="w-20 sm:w-24 h-1 sm:h-1.5 bg-[#F34213] mx-auto mt-4 sm:mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed font-montserrat">
            Akses cepat ke semua sumber daya akademik yang Anda butuhkan. Unduh panduan, buku, dan kalender akademik di sini.
          </p>
        </motion.div>
        {/* Guide Links Grid */}
        <div className="bg-[#F2F2F2] rounded-xl p-4 sm:p-6 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {guideLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center justify-between bg-[#F2F2F2] rounded-xl border border-[#0A2463]/15 min-h-[180px] w-full max-w-xs mx-auto p-6 sm:p-7 transition-all hover:shadow-lg hover:border-[#F34213] focus:outline-none focus:ring-2 focus:ring-[#F34213] group"
                tabIndex={0}
                aria-label={link.name}
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-[#F34213]" />
                <div className="flex flex-col items-center justify-center flex-1 w-full">
                  <span className="text-4xl mb-4 transition-transform duration-200 group-hover:scale-110 group-focus:scale-110">
                    {link.icon}
                  </span>
                  <span className="font-bold text-[#0A2463] text-lg sm:text-xl mb-2 text-center font-montserrat leading-tight">
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MKNGuide
