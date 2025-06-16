'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink, MobileNavLink, DropdownMenu, MobileDropdownMenu } from './NavComponents';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#0A2463]/90 backdrop-blur-sm shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 font-bold text-2xl transition-colors ${isScrolled ? 'text-[#F04E23]' : 'text-white'
              }`}
          >
            <Image
              src="/immk-logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span>IMMK UI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-md font-medium transition-colors ${isScrolled ? 'text-[#F04E23] hover:underline' : 'text-white/90 hover:text-white'
                      }`}
                  >
                    {item.name}
                    {openDropdown === item.name ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  {openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-md font-medium transition-colors text-white'
                    }`}
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          } bg-[#0A2463]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="px-2 py-3">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
                >
                  {item.name}
                  {openDropdown === item.name ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {openDropdown === item.name && (
                  <div className="mt-2 space-y-1 pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-md"
                        onClick={closeMobileMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <MobileNavLink
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                {item.name}
              </MobileNavLink>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
