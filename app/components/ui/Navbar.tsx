"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const aboutDropdown = [
  { name: 'Visi & Misi', href: '/#about' },
  { name: 'Struktur Organisasi', href: '/organization' },
];

const programsDropdown = [
  { name: 'Panduan MKN UI', href: '/mkn-guide' },
];

const navLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '#about', dropdown: aboutDropdown },
  { name: 'Program', href: '/#programs', dropdown: programsDropdown },
  { name: 'Galeri', href: '/#gallery' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close dropdown when menu closes
  useEffect(() => {
    if (!menuOpen) setOpenDropdown(null);
  }, [menuOpen]);

  // Handle link click (for smooth scroll and closing menu)
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMenuOpen(false);
      setOpenDropdown(null);
      setTimeout(() => {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        const navbar = document.getElementById('navbar');
        if (targetElement && navbar) {
          const navbarRect = navbar.getBoundingClientRect();
          const offset = navbarRect.height + 16;
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
        }
      }, 100);
    } else {
      setMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  return (
    <header id="navbar" className="w-full fixed z-50 bg-[#0A2463] shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" aria-label="Ke Beranda" className="flex items-center space-x-3">
          <Image src="/immk-logo.jpeg" alt="Logo IMMK UI" width={40} height={40} className="rounded-full bg-white p-1 sm:w-12 sm:h-12 w-10 h-10" />
          <span className="font-bold text-xl text-white font-montserrat uppercase tracking-wide ml-1 sm:ml-2">IMMK UI</span>
        </Link>

        {/* Desktop Nav with shadcn NavigationMenu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                {link.dropdown ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent text-white font-montserrat font-bold uppercase tracking-wide hover:bg-transparent hover:text-[#F34213] focus:bg-transparent focus:text-[#F34213] data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[#F34213]",
                        "h-auto px-4 py-2"
                      )}
                    >
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border-0 bg-transparent p-0 shadow-none">
                      <div className="w-52 p-2 bg-white rounded-xl shadow-xl border border-[#0A2463]/10">
                        {link.dropdown.map((item) => (
                          <NavigationMenuLink key={item.name} asChild>
                            <Link
                              href={item.href}
                              onClick={(e) => handleLinkClick(e, item.href)}
                              className="block px-5 py-2 text-[#0A2463] font-montserrat font-medium rounded-lg hover:bg-[#F34213]/10 hover:text-[#F34213] focus:bg-[#F34213]/20 focus:text-[#F34213] focus:outline-none transition-colors"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-white font-montserrat font-bold uppercase tracking-wide hover:bg-transparent hover:text-[#F34213] focus:bg-transparent focus:text-[#F34213]",
                        "h-auto px-4 py-2"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen} className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#F34213] rounded-md">
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Enhanced Design */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#0A2463] via-[#0F2A5C] to-[#142E55] z-50 flex flex-col">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <Image src="/immk-logo.jpeg" alt="Logo IMMK UI" width={32} height={32} className="rounded-full bg-white p-0.5" />
              <span className="font-bold text-lg text-white font-montserrat uppercase tracking-wide">IMMK UI</span>
            </div>
            <button onClick={() => setMenuOpen(false)} aria-label="Tutup menu" className="text-white p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F34213] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full">
                                     {link.dropdown ? (
                     <>
                       <button
                         onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                         aria-expanded={openDropdown === link.name}
                         className="w-full flex items-center justify-between px-4 py-4 text-white font-montserrat font-semibold text-lg uppercase tracking-wide rounded-xl bg-white/5 hover:bg-[#F34213]/20 active:bg-[#F34213]/30 focus:outline-none focus:ring-2 focus:ring-[#F34213] transition-all duration-200 border border-white/10 hover:border-[#F34213]/30"
                       >
                         <span className="flex items-center space-x-3">
                           <span className="w-2 h-2 bg-[#F34213] rounded-full"></span>
                           <span>{link.name}</span>
                         </span>
                         <svg className={`w-5 h-5 fill-current transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                         </svg>
                       </button>

                       {/* Dropdown Items with Animation */}
                       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === link.name ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                         <div className="bg-[#183B6B]/40 backdrop-blur-sm rounded-xl border border-white/10 p-2">
                           {link.dropdown.map((item) => (
                             <Link
                               key={item.name}
                               href={item.href}
                               onClick={(e) => { handleLinkClick(e, item.href); setOpenDropdown(null); }}
                               className="flex items-center space-x-3 px-4 py-3 text-white/90 font-montserrat font-medium text-base rounded-lg hover:bg-[#F34213]/15 hover:text-white active:bg-[#F34213]/25 focus:bg-[#F34213]/20 focus:text-white focus:outline-none transition-all duration-200"
                             >
                               <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                               <span>{item.name}</span>
                             </Link>
                           ))}
                         </div>
                       </div>
                     </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="flex items-center space-x-3 w-full px-4 py-4 text-white font-montserrat font-semibold text-lg uppercase tracking-wide rounded-xl bg-white/5 hover:bg-[#F34213]/20 active:bg-[#F34213]/30 focus:outline-none focus:ring-2 focus:ring-[#F34213] transition-all duration-200 border border-white/10 hover:border-[#F34213]/30"
                    >
                      <span className="w-2 h-2 bg-[#F34213] rounded-full"></span>
                      <span>{link.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer with Branding */}
          <div className="px-6 py-4 border-t border-white/10">
            <p className="text-center text-white/60 text-sm font-montserrat">
              © 2025 IMMK UI - Ikatan Mahasiswa Magister Kenotariatan UI
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
