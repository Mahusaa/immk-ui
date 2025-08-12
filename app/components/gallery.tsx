'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const cardGradient = 'from-orange-100 to-orange-50';
const faintCircleColor = '#FFE5D0';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  date: string;
  src: string;
  desc: string;
}

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Notary in Action',
      category: 'Praktikum',
      date: '2023-03-12',
      src: '/Notary_In_Action_1.webp',
      desc: 'Sesi praktik langsung kenotariatan bersama mahasiswa dan profesional.'
    },
    {
      id: 2,
      title: 'Notary in Action',
      category: 'Praktikum',
      date: '2023-03-13',
      src: '/Notary_In_Action_2.webp',
      desc: 'Simulasi nyata prosedur kenotariatan.'
    },
    {
      id: 3,
      title: 'Notary in Action',
      category: 'Praktikum',
      date: '2023-03-14',
      src: '/Notary_In_Action_3.webp',
      desc: 'Mahasiswa belajar melalui studi kasus kenotariatan secara langsung.'
    },
    {
      id: 4,
      title: 'Seminar & Workshop',
      category: 'Seminar',
      date: '2023-04-10',
      src: '/Seminar_Dan_Workshop_IMMK_UI.webp',
      desc: 'Seminar dan workshop interaktif untuk mahasiswa kenotariatan.'
    },
    {
      id: 5,
      title: 'Seminar & Workshop',
      category: 'Seminar',
      date: '2023-04-11',
      src: '/Seminar_Dan_Workshop_IMMK_UI_1.webp',
      desc: 'Pembelajaran kolaboratif dan diskusi topik kenotariatan.'
    },
    {
      id: 6,
      title: 'Pekan Notaris',
      category: 'Event',
      date: '2023-05-05',
      src: '/Pekan_Notaris_1.webp',
      desc: 'Pekan notaris tahunan dengan berbagai aktivitas.'
    },
    {
      id: 7,
      title: 'Pekan Notaris',
      category: 'Event',
      date: '2023-05-06',
      src: '/Pekan_Notaris_2.webp',
      desc: 'Kompetisi dan workshop selama Pekan Notaris.'
    },
    {
      id: 8,
      title: 'Pekan Notaris',
      category: 'Event',
      date: '2023-05-07',
      src: '/Pekan_Notaris_3.webp',
      desc: 'Acara penutupan Pekan Notaris.'
    },
    {
      id: 9,
      title: 'Kunjungan Kantor Notaris',
      category: 'Kunjungan',
      date: '2023-06-15',
      src: '/visit_kantor_notaris.webp',
      desc: 'Kunjungan ke kantor notaris profesional untuk pengalaman praktis.'
    },
    {
      id: 10,
      title: 'Konferensi FOMNI',
      category: 'Konferensi',
      date: '2023-07-20',
      src: '/Konferensi_Forum_Organisasi_Mahasiswa_Notariat_Indonesia_(FOMNI).webp',
      desc: 'Konferensi nasional organisasi mahasiswa kenotariatan.'
    },
  ];

  // Duplicate items for seamless infinite marquee
  const marqueeItems = [...galleryItems, ...galleryItems];

  const handlePrev = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(prev =>
        prev === null ? null : prev === 0 ? galleryItems.length - 1 : prev - 1
      );
    }
  }, [selectedImage, galleryItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(prev =>
        prev === null ? null : prev === galleryItems.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedImage, galleryItems.length]);

  // Close modal on ESC key and handle arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
      if (selectedImage !== null) {
        if (e.key === 'ArrowLeft') {
          handlePrev();
        }
        if (e.key === 'ArrowRight') {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto bg-[#F2F2F2] overflow-hidden scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0A2463]">Galeri</h2>
        <div className="w-20 h-1 bg-[#F04E23] mx-auto mb-6" />
        <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
          Dokumentasi kegiatan dan momen penting IMMK UI.
        </p>
      </div>
      <div className="relative w-full">
        <div className="marquee flex items-center gap-8" style={{ width: 'max-content', animation: 'marquee 32s linear infinite' }}>
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative p-0 rounded-2xl bg-gradient-to-br ${cardGradient} shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden flex-shrink-0 w-64`}
              style={{ minWidth: 256 }}
              onClick={() => setSelectedImage(idx % galleryItems.length)}
            >
              {/* Faint colored circle behind image */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-40 z-0" style={{ background: faintCircleColor }} />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-white/40 flex items-center justify-center">
                  <Image src={item.src} alt={item.title} width={320} height={192} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0A2463] text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            will-change: transform;
          }
          @media (max-width: 768px) {
            .marquee > div { width: 80vw; min-width: 80vw; }
          }
        `}</style>
      </div>
      {/* Modal for selected image */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-[#F2F2F2] rounded-2xl p-4 max-w-lg w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <Image src={galleryItems[selectedImage].src} alt={galleryItems[selectedImage].title} width={600} height={400} className="rounded-xl object-cover w-full h-64" />
              <h3 className="text-lg font-bold mt-4 text-[#0A2463]">{galleryItems[selectedImage].title}</h3>
              <button className="absolute top-2 right-2 text-[#F04E23] hover:text-[#0A2463] text-2xl font-bold" onClick={() => setSelectedImage(null)}>&times;</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
