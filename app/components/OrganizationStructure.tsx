'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


const executiveBoard = [
  {
    name: 'Naufal Nedja Deandra, S.H.',
    position: 'Ketua',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Tazkya Rizqyta Radhwa, S.H.',
    position: 'Wakil Ketua',
    image: '/immk-logo.jpeg',
  },
];

const positionMap: Record<string, string> = {
  'Ketua': 'KETUA',
  'Wakil Ketua': 'WAKIL KETUA',
};

const manajemenBoard = [
  {
    name: 'Salma Nabilah',
    position: 'Sekretaris Umum',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Risyalma Fadia',
    position: 'Bendahara Umum',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Tri Yulinda',
    position: 'Bendahara Umum',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Aga',
    position: 'Bendahara Umum',
    image: '/immk-logo.jpeg',
  },
];

const departemenAkademik = [
  {
    name: 'Mutiara Husna Wahono, S.H.',
    position: 'Kepala Depatemen Akademik',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Laurensia Lefina Mulauli, S.H',
    position: 'Wakil Kepala Depatemen Akademik',
    image: '/immk-logo.jpeg',
  },
];

const divisiAkademik = [
  {
    name: 'Divisi Pendidikan dan Penelitian (Dikti)',
    kepala: 'Alya Hasna Yogasara',
    wakil: 'Tasya Ratu Zalsabilah',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Divisi Pengembangan Karir (Pengkar)',
    kepala: 'Aisyiyah Hidayat',
    wakil: 'Noviantika Agustine',
    image: '/immk-logo.jpeg',
  },
];

const departemenInternal = [
  {
    name: 'M. Alfareza Rezwandy',
    position: 'Kepala Depatemen Internal',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Tarisha Jasmine',
    position: 'Wakil Kepala Depatemen Internal',
    image: '/immk-logo.jpeg',
  },
];


const departemenEksternal = [
  {
    name: 'Kevin Arya Muhammad',
    position: 'Kepala Depatemen Eksternal',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Nabila Sabrina Riza',
    position: 'Wakil Kepala Depatemen Eksternal',
    image: '/immk-logo.jpeg',
  },
];

const divisiEksternal = [
  {
    name: 'Divisi Pembinaan Jaringan dan Kerjasama (PJK)',
    kepala: 'Ramadhani Intan',
    wakil: ['Putri Afra'],
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Divisi Pengabdian Masyarakat (Pengmas)',
    kepala: 'Gamast M. Fazzira',
    wakil: ['Niken Mulya'],
    image: '/immk-logo.jpeg',
  },
];

const divisiInternal = [
  {
    name: 'Divisi Pengembangan Sumber Daya Mahasiswa (PSDM)',
    kepala: 'Shanisa Berliana',
    wakil: ['Rachel Paskaria S.'],
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Divisi Gathering dan Bonding (Ganbon)',
    kepala: 'Alvin Fahar',
    wakil: ['Salsabila Mufidah'],
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Divisi Media dan Advokasi (Medvo)',
    kepala: 'Tabitha Adischa',
    wakil: ['Addia Nova Kayaka', 'Gloria Beatrix'],
    image: '/immk-logo.jpeg',
  },
];

export const OrganizationStructure = () => {
  return (
    <section id="organization" className="bg-white py-12 sm:py-20 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2463] font-serif tracking-tight">
            Struktur Organisasi
          </h2>
          <motion.div
            className="w-20 sm:w-24 h-1 sm:h-1.5 bg-[#F34213] mx-auto mt-4 sm:mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            Kenali tim kepemimpinan dan struktur organisasi IMMK UI yang berdedikasi untuk memajukan mahasiswa Magister Kenotariatan.
          </p>
        </motion.div>

      </div>
      <div className="bg-[#F34213] text-white text-center py-3 text-lg sm:text-xl font-bold tracking-wide uppercase">
        Executive Board
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-10 bg-white">
        {executiveBoard.map((member) => (
          <div key={member.name} className="flex flex-col items-center w-full max-w-xs">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gray-200 border-4 border-[#F34213]">
              <Image
                src={member.image}
                alt={`Foto ${member.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 128px, 160px"
              />
            </div>
            <div className="bg-[#0A2463] text-white w-full text-center py-3 px-4 mt-4 rounded-lg">
              <div className="font-bold text-base sm:text-lg md:text-xl leading-tight font-montserrat">
                {member.name}
              </div>
              <div className="uppercase text-xs sm:text-sm tracking-wider font-montserrat opacity-80">
                {positionMap[member.position] || member.position}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F34213] text-white text-center py-3 text-lg sm:text-xl font-bold tracking-wide uppercase">
        Management Board
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-8 bg-white">
        {manajemenBoard.map((member) => (
          <div key={member.name + member.position} className="flex flex-col items-center w-full max-w-xs sm:w-60 md:w-64">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-[#F34213] flex items-center justify-center">
              <Image
                src={member.image}
                alt={`Foto ${member.name}`}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
            <div className="bg-[#0A2463] text-white w-full text-center py-2 px-3 mt-3 rounded-lg">
              <div className="font-bold text-base sm:text-lg leading-tight font-montserrat">
                {member.name}
              </div>
              <div className="uppercase text-xs sm:text-sm tracking-wider font-montserrat opacity-80">
                {member.position}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F34213] text-white text-center py-3 text-lg sm:text-xl font-bold tracking-wide uppercase">
        Departemen Akademik
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-8 bg-white">
        {departemenAkademik.map((member) => (
          <div key={member.name + member.position} className="flex flex-col items-center w-full max-w-xs sm:w-60 md:w-64">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-[#0A2463] flex items-center justify-center">
              <Image
                src={member.image}
                alt={`Foto ${member.name}`}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
            <div className="bg-[#0A2463] text-white w-full text-center py-2 px-3 mt-3 rounded-lg">
              <div className="font-bold text-base sm:text-lg leading-tight font-montserrat">
                {member.name}
              </div>
              <div className="uppercase text-xs sm:text-sm tracking-wider font-montserrat opacity-80">
                {member.position}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Divisi under Departemen Akademik */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-[#0A2463] font-semibold text-sm sm:text-base mb-3 pl-2 uppercase tracking-wide opacity-80">Divisi di bawah Departemen Akademik</div>
        <div className="bg-[#F2F2F2] rounded-xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
            {divisiAkademik.map((divisi) => (
              <div
                key={divisi.name}
                className="relative flex flex-col items-center justify-between bg-white rounded-xl shadow-sm border border-[#0A2463]/15 min-h-[320px] w-full max-w-md p-6 pt-7 pb-7 transition-all"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-[#F34213]" />
                {/* Division name */}
                <div className="font-bold text-[#0A2463] text-lg mb-6 text-center font-montserrat leading-tight">
                  {divisi.name}
                </div>
                {/* Row for Kepala & Wakil */}
                <div className="flex flex-row justify-center items-stretch gap-6 w-full flex-1">
                  {/* Kepala */}
                  <div className="flex flex-col items-center flex-1 justify-center">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-[#0A2463] mb-2">
                      <Image
                        src={divisi.image}
                        alt={`Foto Kepala ${divisi.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#F34213] uppercase tracking-wide font-montserrat mb-1">
                      Kepala Divisi
                    </span>
                    <span className="text-sm text-black font-montserrat text-center break-words">
                      {divisi.kepala}
                    </span>
                  </div>
                  {/* Wakil */}
                  <div className="flex flex-col items-center flex-1 justify-center">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-[#F34213] mb-2">
                      <Image
                        src={divisi.image}
                        alt={`Foto Wakil ${divisi.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#F34213] uppercase tracking-wide font-montserrat mb-1">
                      Wakil Kepala
                    </span>
                    <span className="text-sm text-black font-montserrat text-center break-words">
                      {divisi.wakil}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F34213] text-white text-center py-3 text-lg sm:text-xl font-bold tracking-wide uppercase">
        Departemen Internal
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-8 bg-white">
        {departemenInternal.map((member) => (
          <div key={member.name + member.position} className="flex flex-col items-center w-full max-w-xs sm:w-60 md:w-64">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-[#0A2463] flex items-center justify-center">
              <Image
                src={member.image}
                alt={`Foto ${member.name}`}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
            <div className="bg-[#0A2463] text-white w-full text-center py-2 px-3 mt-3 rounded-lg">
              <div className="font-bold text-base sm:text-lg leading-tight font-montserrat">
                {member.name}
              </div>
              <div className="uppercase text-xs sm:text-sm tracking-wider font-montserrat opacity-80">
                {member.position}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Divisi under Departemen Internal */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-[#0A2463] font-semibold text-sm sm:text-base mb-3 pl-2 uppercase tracking-wide opacity-80">Divisi di bawah Departemen Internal</div>
        <div className="bg-[#F2F2F2] rounded-xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {divisiInternal.map((divisi) => (
              <div
                key={divisi.name}
                className="relative flex flex-col items-center justify-between bg-white rounded-xl shadow-sm border border-[#0A2463]/15 min-h-[320px] w-full p-6 pt-7 pb-7 transition-all"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-[#F34213]" />
                {/* Division name */}
                <div className="font-bold text-[#0A2463] text-lg mb-6 text-center font-montserrat leading-tight">
                  {divisi.name}
                </div>
                {/* Row for Kepala & Wakil */}
                <div className="flex flex-row justify-center items-stretch gap-6 w-full flex-1">
                  {/* Kepala */}
                  <div className="flex flex-col items-center flex-1 justify-center">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-[#0A2463] mb-2">
                      <Image
                        src={divisi.image}
                        alt={`Foto Kepala ${divisi.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#F34213] uppercase tracking-wide font-montserrat mb-1">
                      Kepala Divisi
                    </span>
                    <span className="text-sm text-black font-montserrat text-center break-words">
                      {divisi.kepala}
                    </span>
                  </div>
                  {/* Wakil */}
                  <div className={`flex ${divisi.wakil.length > 1 ? 'flex-row gap-4' : 'flex-col'} items-center flex-1 justify-center`}>
                    {divisi.wakil.map((wakil) => (
                      <div key={wakil} className="flex flex-col items-center">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-[#F34213] mb-2">
                          <Image
                            src={divisi.image}
                            alt={`Foto Wakil ${divisi.name}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[11px] font-semibold text-[#F34213] uppercase tracking-wide font-montserrat mb-1">
                          Wakil Kepala
                        </span>
                        <span className="text-sm text-black font-montserrat text-center break-words">
                          {wakil}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F34213] text-white text-center py-3 text-lg sm:text-xl font-bold tracking-wide uppercase">
        Departemen Eksternal
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-8 bg-white">
        {departemenEksternal.map((member) => (
          <div key={member.name + member.position} className="flex flex-col items-center w-full max-w-xs sm:w-60 md:w-64">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-[#0A2463] flex items-center justify-center">
              <Image
                src={member.image}
                alt={`Foto ${member.name}`}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
            <div className="bg-[#0A2463] text-white w-full text-center py-2 px-3 mt-3 rounded-lg">
              <div className="font-bold text-base sm:text-lg leading-tight font-montserrat">
                {member.name}
              </div>
              <div className="uppercase text-xs sm:text-sm tracking-wider font-montserrat opacity-80">
                {member.position}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Divisi under Departemen Eksternal */}
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-[#0A2463] font-semibold text-sm sm:text-base mb-3 pl-2 uppercase tracking-wide opacity-80">Divisi di bawah Departemen Eksternal</div>
        <div className="bg-[#F2F2F2] rounded-xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {divisiEksternal.map((divisi) => (
              <div
                key={divisi.name}
                className="relative flex flex-col items-center justify-between bg-white rounded-xl shadow-sm border border-[#0A2463]/15 min-h-[320px] w-full p-6 pt-7 pb-7 transition-all"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-[#F34213]" />
                {/* Division name */}
                <div className="font-bold text-[#0A2463] text-lg mb-6 text-center font-montserrat leading-tight">
                  {divisi.name}
                </div>
                {/* Row for Kepala & Wakil */}
                <div className="flex flex-row justify-center items-stretch gap-6 w-full flex-1">
                  {/* Kepala */}
                  <div className="flex flex-col items-center flex-1 justify-center">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-[#0A2463] mb-2">
                      <Image
                        src={divisi.image}
                        alt={`Foto Kepala ${divisi.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#F34213] uppercase tracking-wide font-montserrat mb-1">
                      Kepala Divisi
                    </span>
                    <span className="text-sm text-black font-montserrat text-center break-words">
                      {divisi.kepala}
                    </span>
                  </div>
                  {/* Wakil */}
                  <div className={`flex ${divisi.wakil.length > 1 ? 'flex-row gap-4' : 'flex-col'} items-center flex-1 justify-center`}>
                    {divisi.wakil.map((wakil) => (
                      <div key={wakil} className="flex flex-col items-center">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-[#F34213] mb-2">
                          <Image
                            src={divisi.image}
                            alt={`Foto Wakil ${divisi.name}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[11px] font-semibold text-[#F34213] uppercase tracking-wide font-montserrat mb-1">
                          Wakil Kepala
                        </span>
                        <span className="text-sm text-black font-montserrat text-center break-words">
                          {wakil}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 
