"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Set mounted state for animations
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // Force a small delay to ensure the theme is applied before removing the transition class
    document.documentElement.classList.add('no-transition');
    setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
    }, 10);
  };

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#technologies' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); // Close mobile menu if open
  };

  // Rest of your component remains the same, just update the Link components to use scrollToSection

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="#home" 
          className="text-xl font-bold text-gray-900 dark:text-white"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Kiran
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 md:hidden border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-amber-400 dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Theme Toggle */}
        {/* <button
          onClick={toggleTheme}
          className="ml-6 p-2 rounded-full text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 focus:outline-none transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {!mounted ? (
            <span className="w-6 h-6" />
          ) : theme === 'dark' ? (
            <span className="text-xl">🌞</span>
          ) : (
            <span className="text-xl">🌙</span>
          )}
        </button> */}
      </div>
    </header>
  );
};

export default Header;