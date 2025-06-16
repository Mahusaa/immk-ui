import Image from "next/image"
export const Footer = () => {
  return (
    <footer className="bg-[#0A2463] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute left-0 right-0 h-16 -top-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0V60C200,0 400,120 600,60S1000,0 1200,60V0H0Z" className="fill-[#0A2463]" />
        </svg>
      </div>
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#F04E23]/20"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-[#F04E23]/10"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/immk-logo.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold">IMM K</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#`}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-sm">{social === 'facebook' ? 'f' : social[0].toUpperCase()}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {['Beranda', 'Tentang', 'Program', 'Galeri', 'Kontak'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span>📍</span>
                <span>Gedung Magister Kenotariatan, Kampus UI Depok, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <span>📧</span>
                <a href="mailto:info@immk.org" className="hover:text-white transition-colors">info@immk.org</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <span>📱</span>
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">+62 812-3456-7890</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-white/80 mb-4">
              Dapatkan informasi terbaru tentang kegiatan dan program kami.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 text-sm text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F04E23] w-full"
              />
              <button
                className="bg-[#F04E23] hover:bg-[#e03d12] text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} IMM K. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
