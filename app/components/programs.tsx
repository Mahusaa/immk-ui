export const Programs = () => {
  return (
    <section id="programs" className="py-24 px-6 bg-[#F04E23]/80 relative">
      <div className="absolute left-0 right-0 h-16 -top-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0V60C200,0 400,120 600,60S1000,0 1200,60V0H0Z" className="fill-white" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Program & Kegiatan</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Kegiatan Rutin",
              desc: "Berbagai kegiatan rutin untuk pengembangan diri dan keilmuan mahasiswa Magister Kenotariatan.",
              icon: "📚"
            },
            {
              title: "Workshop & Seminar",
              desc: "Pembelajaran mendalam dengan para ahli di bidang hukum dan kenotariatan.",
              icon: "🎓"
            },
            {
              title: "Pengabdian Masyarakat",
              desc: "Berkontribusi langsung kepada masyarakat melalui program-program sosial dan edukasi.",
              icon: "🤝"
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#0A2463]">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
