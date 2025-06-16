'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    {
      name: 'About',
      href: '#about',
      dropdown: [
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Visi & Misi', href: '#vision' },
        { name: 'Struktur Organisasi', href: '#structure' }
      ]
    },
    {
      name: 'Programs',
      href: '#programs',
      dropdown: [
        { name: 'Kegiatan', href: '#programs' },
        { name: 'Event Mendatang', href: '#events' },
        { name: 'Prestasi', href: '#achievements' }
      ]
    },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
    setOpenDropdown(null);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#0A2463]/90 backdrop-blur-lg shadow-lg py-2'
        : 'bg-transparent py-4'
        }`}
      style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-2xl text-white"
          >
            <Image
              src="/immk-logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain rounded-full border-2 border-[#F04E23] bg-white"
            />
            <span className="tracking-tight">IMMK UI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F04E23] ${openDropdown === item.name ? 'bg-[#F04E23]/10 text-[#F04E23]' : 'text-white hover:bg-[#F04E23]/10 hover:text-[#F04E23]'} `}
                  >
                    {item.name}
                    {openDropdown === item.name ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 rounded-2xl shadow-xl bg-white ring-1 ring-black/10 overflow-hidden z-20"
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-5 py-2 text-sm text-[#0A2463] hover:bg-[#F04E23]/10 hover:text-[#F04E23] transition-all"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-full font-medium text-white hover:bg-[#F04E23]/10 hover:text-[#F04E23] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F04E23]"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-white bg-[#0A2463]/80 shadow focus:outline-none focus:ring-2 focus:ring-[#F04E23] transition-all"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X className="block h-7 w-7" />
                ) : (
                  <Menu className="block h-7 w-7" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0A2463] backdrop-blur-xl flex flex-col md:hidden"
          >
            {/* Logo and Close Button */}
            <div className="flex items-center justify-between w-full px-6 pt-6 pb-2 border-b border-[#F04E23]/20 bg-[#0A2463]">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/immk-logo.jpeg" alt="Logo" width={40} height={40} className="object-contain rounded-full border-2 border-[#F04E23] bg-white" />
                <span className="text-white font-bold text-xl tracking-tight">IMMK UI</span>
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full bg-[#F04E23]/10 text-white shadow focus:outline-none focus:ring-2 focus:ring-[#F04E23] z-[110]"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-4 w-full px-4 py-8">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="w-full">
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                      className="flex w-full items-center justify-between px-6 py-4 rounded-full font-semibold text-lg text-white bg-[#0A2463] hover:bg-[#F04E23]/10 focus:outline-none focus:ring-2 focus:ring-[#F04E23] transition-all shadow"
                    >
                      {item.name}
                      {mobileDropdown === item.name ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="w-full mt-2 rounded-2xl bg-white/90 shadow-lg overflow-hidden flex flex-col border border-[#F04E23]/20"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="w-full px-8 py-4 text-base text-[#0A2463] hover:bg-[#F04E23]/10 hover:text-[#F04E23] transition-all text-left border-b border-[#F04E23]/10 last:border-b-0"
                              onClick={closeMobileMenu}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-full px-6 py-4 rounded-full font-semibold text-lg text-white bg-[#0A2463] hover:bg-[#F04E23]/10 focus:outline-none focus:ring-2 focus:ring-[#F04E23] transition-all text-center shadow"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
            <div className="h-8" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
