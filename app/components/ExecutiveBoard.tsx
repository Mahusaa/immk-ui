import Image from 'next/image';

const executiveBoard = [
  {
    name: 'Naufal Nedja Deandra, S.H.',
    position: 'Ketua',
    image: '/immk-logo.jpeg',
  },
  {
    name: 'Tasya Rizqyta Radhwa, S.H. ',
    position: 'Wakil Ketua',
    image: '/immk-logo.jpeg',
  },
];

const positionMap: Record<string, string> = {
  'Ketua': 'KETUA',
  'Wakil Ketua': 'WAKIL KETUA',
};

const ExecutiveBoard = () => (
  <section className="w-full">
    <div className="bg-[#F34213] text-white text-center py-3 text-lg sm:text-xl font-bold tracking-wide uppercase">
      Executive Board
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-10 bg-[#F2F2F2]">
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
  </section>
);

export default ExecutiveBoard; 
