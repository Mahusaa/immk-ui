export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0A2463]">Galeri Kegiatan</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0A2463] to-[#F04E23] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi momen-momen berharga dalam setiap kegiatan dan acara yang telah kami selenggarakan.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="group aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-full h-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm text-gray-500">Galeri {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
