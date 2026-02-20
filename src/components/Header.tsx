'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = ['الرئيسية', 'المبادرات', 'مساراتنا', 'لماذا المشي؟', 'الحوكمة'];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 border-b border-transparent ${
          isScrolled || isMobileMenuOpen ? 'glass-dark bg-charcoal/95 border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 relative z-50">
            <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold text-xl leading-none">
              م
            </div>
            <span className={`text-xl font-bold tracking-tight ${(isScrolled || isMobileMenuOpen) ? 'text-white' : 'text-white drop-shadow-md'}`}>
              مشاة الطائف
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => (
              <Link 
                key={i} 
                href="#" 
                className={`text-sm font-medium transition-colors hover:text-brand ${isScrolled ? 'text-gray-300' : 'text-white/90 drop-shadow-sm hover:text-white'}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <button className="hidden md:block glass bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,166,81,0.3)] border border-white/30">
            انضم إلينا
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col h-screen"
          >
            <nav className="flex flex-col gap-6 items-center justify-center flex-grow">
              {navLinks.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href="#" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white/90 hover:text-brand transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-brand text-white py-4 rounded-full font-bold text-lg mb-8 shadow-[0_0_20px_rgba(0,166,81,0.4)]"
              >
                انضم إلينا الآن
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
