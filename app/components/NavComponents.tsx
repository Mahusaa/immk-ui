'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
}

// Desktop Navigation Link
const NavLink = ({ href, children, className = '' }: NavItemProps) => (
  <Link
    href={href}
    className={`px-4 py-2 text-sm font-medium text-white hover:text-orange-200 transition-colors ${className}`}
  >
    {children}
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({ href, children, className = '' }: NavItemProps) => (
  <Link
    href={href}
    className={`block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors ${className}`}
    onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
  >
    {children}
  </Link>
);

// Desktop Dropdown Menu
export const DropdownMenu = ({ title, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="px-4 py-2 text-sm font-medium text-white hover:text-orange-200 flex items-center gap-1 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile Dropdown Menu
export const MobileDropdownMenu = ({ title, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1">
          {items.map((item) => (
            <MobileNavLink
              key={item.href}
              href={item.href}
              className="text-sm"
            >
              {item.label}
            </MobileNavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export { NavLink, MobileNavLink };
