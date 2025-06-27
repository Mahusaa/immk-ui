'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: '2023-01',
    title: 'IMM K Didirikan',
    desc: 'Awal berdirinya Ikatan Mahasiswa Magister Kenotariatan.'
  },
  {
    date: '2023-03',
    title: 'Workshop Perdana',
    desc: 'Mengadakan workshop pertama untuk mahasiswa baru.'
  },
  {
    date: '2023-06',
    title: 'Pengabdian Masyarakat',
    desc: 'Kegiatan sosial pertama IMM K di masyarakat.'
  },
  {
    date: '2023-10',
    title: 'Seminar Nasional',
    desc: 'Seminar nasional dengan pembicara dari berbagai universitas.'
  },
];

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto  scroll-mt-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0A2463] font-serif">Timeline Kegiatan</h2>
        <motion.div
          className="w-20 h-1 bg-[#F04E23] mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
          Perjalanan dan tonggak penting IMM K.
        </p>
      </motion.div>
      <div className="relative border-l-4 border-orange-200 pl-8">
        {timelineEvents.map((event, idx) => (
          <motion.div
            key={idx}
            className="mb-12 last:mb-0 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="absolute -left-10 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-300 to-orange-100 border-4 border-white shadow" />
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-sm">
              <div className="text-sm text-[#F04E23] font-semibold mb-1">{event.date}</div>
              <div className="text-lg font-bold text-[#0A2463] mb-2">{event.title}</div>
              <div className="text-gray-600 text-sm">{event.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 
