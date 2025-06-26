"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const aboutDropdown = [
  { name: 'Visi & Misi', href: '#about' },
  { name: 'Tim Pimpinan', href: '#team' },
  { name: 'MKN UI GUIDE', href: '#mkn-guide' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about', dropdown: aboutDropdown },
  { name: 'Organization', href: '#organization' },
  { name: 'Programs', href: '#programs' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Timeline', href: '#timeline' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    // Close accordion when mobile menu is closed
    if (!menuOpen) {
      setOpenDropdown(null);
    }
  }, [menuOpen]);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  
  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 96; // Navbar height + extra space
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    // For non-hash links, let the Link component handle navigation.
    // Close mobile menu after any link click
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 h-20 bg-[#0A2463] shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" onClick={(e) => handleLinkClick(e, '/')} aria-label="Go to Home" className="flex items-center space-x-3">
          <Image src="/immk-logo.jpeg" alt="IMMK Logo" width={48} height={48} className="rounded-full bg-white p-1" />
          <span className="font-bold text-xl text-white font-montserrat uppercase">IMMK UI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                onClick={(e) => {
                  // Prevent parent link from navigating if it has a dropdown
                  if (link.dropdown) e.preventDefault();
                  else handleLinkClick(e, link.href);
                }}
                className="flex items-center gap-2 text-white font-montserrat font-medium uppercase tracking-wide px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#F34213]/30 focus:bg-[#F34213]/40 focus:outline-none"
              >
                {link.name}
                {link.dropdown && (
                  <svg className="w-4 h-4 fill-current transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                )}
              </Link>
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#0A2463] rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="block px-4 py-2 text-white/90 hover:bg-[#F34213]/50">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} aria-label="Toggle menu" className="p-2 text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0A2463] transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className="w-full flex justify-between items-center px-3 py-3 text-white font-semibold uppercase rounded-md hover:bg-[#F34213]/80"
                  >
                    <span>{link.name}</span>
                    <svg className={`w-6 h-6 fill-current transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </button>
                  <div className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === link.name ? 'max-h-48' : 'max-h-0'}`}>
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="block px-3 py-2 text-white/80 rounded-md hover:bg-[#F34213]/50">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-3 text-white font-semibold uppercase rounded-md hover:bg-[#F34213]/80"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
