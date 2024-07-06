"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="z-50 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        ref={navRef}
        className={`fixed top-0 right-0 mt-14 h-full w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full hidden'
        }`}
      >
        <ul className="flex flex-col items-center py-10 bg-gray-100 dark:bg-gray-800 rounded-bl-lg outline outline-gray-500">
          <li className="w-full">
            <Link href="/" className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100">
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-100">
              About
            </Link>
          </li>
          <li className="w-full">
            <Link href="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-100">
              Services
            </Link>
          </li>
          <li className="w-full">
            <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-100">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default MobileNav;
