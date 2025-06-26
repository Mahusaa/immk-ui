import Image from 'next/image';

const mainBoard = [
  {
    name: 'Salma Nabilah',
    position: 'Sekretaris Umum',
    icon: '✍️',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Risyalma Fadia',
    position: 'Bendahara Umum',
    icon: '💰',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Tri Yulinda',
    position: 'Bendahara Umum',
    icon: '💰',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Aga',
    position: 'Bendahara Umum',
    icon: '💰',
    image: '/immk-logo.jpeg',
  },
];

const departments = [
  {
    name: 'Departemen Akademik',
    icon: '📚',
    divisions: [
      {
        name: 'Nabilla Oktafiana',
        position: 'Kepala Divisi Fundraising',
        icon: '💵',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Syarah Safithri',
        position: 'Wakil Kepala Divisi Fundraising',
        icon: '💵',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Alya Hasna Yogasara',
        position: 'Kepala Divisi Dikti',
        icon: '🧠',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Tasya Ratu Zalsabilah',
        position: 'Wakil Kepala Divisi Dikti',
        icon: '🧠',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Aisyiyah Hidayat',
        position: 'Kepala Divisi Pengkar',
        icon: '💼',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Noviantika Agustine',
        position: 'Wakil Kepala Divisi Pengkar',
        icon: '💼',
        image: '/immk-logo.jpeg',
      },
    ],
  },
  {
    name: 'Departemen Internal',
    icon: '🏠',
    divisions: [
      {
        name: 'Shanisa Berliana',
        position: 'Kepala Divisi PSDM',
        icon: '🧬',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Rachel Paskaria S.',
        position: 'Wakil Kepala Divisi PSDM',
        icon: '🧬',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Alvin Fahar',
        position: 'Kepala Divisi Ganbon',
        icon: '🤝',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Salsabila Mufidah',
        position: 'Wakil Kepala Divisi Ganbon',
        icon: '🤝',
        image: '/immk-logo.jpeg',
      },
    ],
  },
  {
    name: 'Departemen Eksternal',
    icon: '🌐',
    divisions: [
      {
        name: 'Tabitha Adischa',
        position: 'Kepala Divisi Medvo',
        icon: '📢',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Addia Nova Kayaka',
        position: 'Wakil Kepala Divisi Medvo',
        icon: '📢',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Gloria Beatrix',
        position: 'Wakil Kepala Divisi Medvo',
        icon: '📢',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Ramadhani Intan',
        position: 'Kepala Divisi PJK',
        icon: '🌉',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Putri Afra',
        position: 'Wakil Kepala Divisi PJK',
        icon: '🌉',
        image: '/immk-logo.jpeg',
      },
      {
        name: 'Nama belum tertulis',
        position: 'Kepala Divisi Pengmas',
        icon: '❤️',
        image: '/immk-logo.jpeg',
      },
    ],
  },
];

const expertStaff = [
  { name: 'Rizqyta Radhwa, S.H.', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'Nedja Deandra, S.H.', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'Alisa', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'Emmirani Azka', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'Mutiara Husna Wahono', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'Laurensia Lefina Mulauli', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'M. Alfareza Rezwandy', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'Tarisha Jasmine', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'Kevin Arya Muhammad', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
  { name: 'Nabila Sabrina Riza', position: 'Staf Ahli / Pendamping', icon: '👥', image: '/immk-logo.jpeg' },
];

const ManagementBoard = () => (
  <section className="w-full">
    <div className="bg-[#0A2463] text-white text-center py-3 text-lg sm:text-xl font-bold tracking-wide uppercase">
      Management Board
    </div>
    {/* Main Board */}
    <div className="flex flex-wrap justify-center gap-6 py-8 bg-[#F2F2F2]">
      {mainBoard.map((member) => (
        <div key={member.name + member.position} className="flex flex-col items-center w-full max-w-xs sm:w-60 md:w-64">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-[#0A2463] flex items-center justify-center">
            <span className="absolute z-10 text-3xl left-2 top-2">{member.icon}</span>
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
    {/* Departments and Divisions */}
    <div className="px-2 sm:px-8 pb-8">
      {departments.map((dept) => (
        <div key={dept.name} className="mb-8">
          {/* Department Card */}
          <div className="flex items-center gap-3 bg-white border border-[#0A2463]/30 rounded-xl px-4 py-3 mb-3 shadow-sm">
            <span className="text-2xl">{dept.icon}</span>
            <span className="font-bold text-[#0A2463] text-lg sm:text-xl uppercase tracking-wide font-montserrat">{dept.name}</span>
          </div>
          {/* Divisions under Department */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pl-6 sm:pl-12">
            {dept.divisions.map((member) => (
              <div key={member.name + member.position} className="flex flex-col items-center w-32 sm:w-36 md:w-40">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-[#0A2463] flex items-center justify-center">
                  <span className="absolute z-10 text-xl left-1 top-1">{member.icon}</span>
                  <Image
                    src={member.image}
                    alt={`Foto ${member.name}`}
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>
                <div className="bg-white border border-[#0A2463]/20 text-[#0A2463] w-full text-center py-1 px-2 mt-2 rounded-md">
                  <div className="font-semibold text-xs sm:text-sm leading-tight font-montserrat">
                    {member.name}
                  </div>
                  <div className="uppercase text-[10px] sm:text-xs tracking-wider font-montserrat opacity-80">
                    {member.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    {/* Expert Staff */}
    <div className="px-2 sm:px-8 pb-8">
      <div className="font-bold text-[#0A2463] text-base sm:text-lg mb-2 sm:mb-3 pl-2 sm:pl-0 uppercase tracking-wide">
        Staf Ahli / Pendamping
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {expertStaff.map((member) => (
          <div key={member.name} className="flex flex-col items-center w-32 sm:w-36 md:w-40">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-100 border-2 border-[#0A2463] flex items-center justify-center">
              <span className="absolute z-10 text-lg left-1 top-1">{member.icon}</span>
              <Image
                src={member.image}
                alt={`Foto ${member.name}`}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 640px) 56px, 64px"
              />
            </div>
            <div className="bg-white border border-[#0A2463]/20 text-[#0A2463] w-full text-center py-1 px-2 mt-2 rounded-md">
              <div className="font-semibold text-xs sm:text-sm leading-tight font-montserrat">
                {member.name}
              </div>
              <div className="uppercase text-[10px] sm:text-xs tracking-wider font-montserrat opacity-80">
                {member.position}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ManagementBoard; 