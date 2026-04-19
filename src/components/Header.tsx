'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const topLinks = NAV_LINKS.filter((_, i) => i < 6);

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
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold text-xl leading-none">
              م
            </div>
            <span className={`text-xl font-bold tracking-tight ${(isScrolled || isMobileMenuOpen) ? 'text-white' : 'text-white drop-shadow-md'}`}>
              مشاة الطائف
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {topLinks.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand flex items-center gap-1 ${
                    isScrolled ? 'text-gray-300' : 'text-white/90 drop-shadow-sm hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {item.children && openDropdown === item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-charcoal/5 py-2 min-w-[200px] z-50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-charcoal hover:bg-brand/5 hover:text-brand transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="/membership"
            className="hidden lg:block glass bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,166,81,0.3)] border border-white/30"
          >
            انضم إلينا
          </Link>

          <button
            className="lg:hidden relative z-50 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col h-screen overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 items-start justify-start flex-grow pb-8">
              {NAV_LINKS.map((item, i) => (
                <div key={item.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-bold text-white/90 hover:text-brand transition-colors block py-2"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                  {item.children && (
                    <div className="pr-6 space-y-1 mt-1 mb-2">
                      {item.children.map((child, j) => (
                        <motion.div
                          key={child.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + j * 0.03 }}
                        >
                          <Link
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base text-white/60 hover:text-brand transition-colors block py-1.5"
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <Link
                href="/membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-brand text-white py-4 rounded-full font-bold text-lg text-center mb-8 shadow-[0_0_20px_rgba(0,166,81,0.4)]"
              >
                انضم إلينا الآن
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
