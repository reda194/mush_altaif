'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const firstFocusable = mobileMenuRef.current?.querySelector<HTMLElement>('a, button');
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        return;
      }
      if (e.key === 'Tab' && mobileMenuRef.current) {
        const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const toggleDropdown = (href: string) => {
    setOpenDropdown((prev) => (prev === href ? null : href));
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown(href);
    }
    if (e.key === 'Escape') {
      setOpenDropdown(null);
    }
  };

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const topLinks = NAV_LINKS.filter((_, i) => i < 6);
  const isSolid = isScrolled || isMobileMenuOpen || !isHomePage;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-brand focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:text-lg"
      >
        تخطي إلى المحتوى
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 border-b ${
          isSolid ? 'bg-charcoal/95 border-white/10' : 'bg-transparent border-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-50" aria-label="مشاة الطائف - الصفحة الرئيسية">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpeg" alt="شعار مشاة الطائف" className="w-10 h-10 rounded-full object-cover" />
            <span className={`text-xl font-bold tracking-tight ${isSolid ? 'text-white' : 'text-white'}`}>
              مشاة الطائف
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="القائمة الرئيسية">
            {topLinks.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      toggleDropdown(item.href);
                    }
                  }}
                  onKeyDown={(e) => item.children && handleDropdownKeyDown(e, item.href)}
                  aria-expanded={item.children ? openDropdown === item.href : undefined}
                  aria-haspopup={item.children ? 'true' : undefined}
                  className={`text-sm font-medium transition-colors hover:text-brand flex items-center gap-1 ${
                    isSolid ? 'text-gray-300' : 'text-white/90'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" aria-hidden="true" />}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.href && (
                    <motion.ul
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      role="menu"
                      className="absolute top-full right-0 mt-2 bg-warm-white rounded-xl shadow-lg shadow-charcoal/10 border border-charcoal/5 py-2 min-w-[200px] z-50"
                    >
                      {item.children.map((child) => (
                        <li key={child.href} role="menuitem">
                          <Link
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-charcoal hover:bg-brand/5 hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <Link
            href="/membership"
            className="hidden lg:flex items-center bg-brand hover:bg-brand-warm text-white px-6 py-2.5 rounded-xl font-medium transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            انضم إلينا
          </Link>

          <button
            ref={hamburgerRef}
            className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center text-white rounded-xl focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="القائمة الرئيسية"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal pt-24 px-6 pb-6 flex flex-col h-screen overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 items-start justify-start flex-grow pb-8" aria-label="القائمة الرئيسية">
              {NAV_LINKS.map((item, i) => (
                <div key={item.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-bold text-white/90 hover:text-brand transition-colors block py-2 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
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
                          transition={{ delay: i * 0.03 + j * 0.02 }}
                        >
                          <Link
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base text-white/60 hover:text-brand transition-colors block py-1.5 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
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
              transition={{ delay: 0.3 }}
              className="mt-auto"
            >
              <Link
                href="/membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full bg-brand hover:bg-brand-warm text-white py-4 rounded-xl font-bold text-lg mb-8 transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
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
