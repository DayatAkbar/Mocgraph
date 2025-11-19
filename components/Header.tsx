import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 md:py-8
      ${scrolled ? 'bg-black/30 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative group cursor-pointer">
          <span className="text-sm font-bold tracking-[1.6px] uppercase font-body">Mocgraph ©</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 -translate-x-1/2 group-hover:w-2/3 group-hover:opacity-90"></span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="relative text-xs font-bold uppercase tracking-widest hover:opacity-100 opacity-80 transition-opacity group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col gap-4 min-w-[200px] md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;