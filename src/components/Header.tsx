import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/aestheticData';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: lang === 'en' ? 'About us' : 'Sobre nós', href: '#about' },
    { label: lang === 'en' ? 'Services' : 'Procedimentos', href: '#services' },
    { label: lang === 'en' ? 'Care & Spa' : 'Cuidados & Spa', href: '#products' },
    { label: lang === 'en' ? 'Techniques' : 'Técnicas', href: '#techniques' },
    { label: lang === 'en' ? 'Contact' : 'Contato', href: '#contacts' },
  ];

  const whatsappUrl = getWhatsAppUrl('Olá! Vim pelo site da Reya Estética e gostaria de agendar uma consulta.');

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-[#0c1413]/95 backdrop-blur-md py-3.5 border-b border-[#c5a880]/20 shadow-lg shadow-black/30'
            : 'bg-[#FAF7F2]/95 backdrop-blur-md py-3.5 border-b border-[#E8DFD3] shadow-sm'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left Nav (Desktop) */}
        <nav
          className={`hidden lg:flex items-center space-x-7 text-xs tracking-[0.25em] uppercase font-medium transition-colors ${
            isDark ? 'text-[#9cb2ac]' : 'text-[#474F3B]'
          }`}
        >
          <a
            id="nav-about"
            href="#about"
            className={`transition-colors relative group py-1 ${
              isDark ? 'hover:text-[#c5a880]' : 'hover:text-[#9A7240]'
            }`}
          >
            {lang === 'en' ? 'About us' : 'Sobre nós'}
            <span
              className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                isDark ? 'bg-[#c5a880]' : 'bg-[#9A7240]'
              }`}
            />
          </a>
          <a
            id="nav-services"
            href="#services"
            className={`transition-colors relative group py-1 ${
              isDark ? 'hover:text-[#c5a880]' : 'hover:text-[#9A7240]'
            }`}
          >
            {lang === 'en' ? 'Services' : 'Procedimentos'}
            <span
              className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                isDark ? 'bg-[#c5a880]' : 'bg-[#9A7240]'
              }`}
            />
          </a>
          <a
            id="nav-products"
            href="#products"
            className={`transition-colors relative group py-1 ${
              isDark ? 'hover:text-[#c5a880]' : 'hover:text-[#9A7240]'
            }`}
          >
            {lang === 'en' ? 'Care & Rituals' : 'Cuidados'}
            <span
              className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                isDark ? 'bg-[#c5a880]' : 'bg-[#9A7240]'
              }`}
            />
          </a>
        </nav>

        {/* Central Brand Identity */}
        <a
          id="brand-logo"
          href="#"
          className="flex flex-col items-center justify-center group text-center focus:outline-none"
          aria-label="Reya Estética & Spa"
        >
          <svg
            className={`w-7 h-7 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-105 ${
              isDark ? 'text-[#c5a880]' : 'text-[#354128]'
            }`}
            viewBox="0 0 100 80"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 8 C46 24 43 42 50 68 C57 42 54 24 50 8 Z" />
            <path d="M47 22 C32 30 26 46 44 65 C40 51 43 35 47 22 Z" opacity="0.9" />
            <path d="M53 22 C68 30 74 46 56 65 C60 51 57 35 53 22 Z" opacity="0.9" />
          </svg>
          <span
            className={`font-cinzel text-xl md:text-2xl tracking-[0.32em] font-medium mt-1 transition-colors ${
              isDark ? 'text-[#c5a880]' : 'text-[#354128]'
            }`}
          >
            REYA
          </span>
          <span
            className={`text-[8px] md:text-[9px] tracking-[0.3em] uppercase font-normal -mt-0.5 transition-colors ${
              isDark ? 'text-[#d8bf9e] opacity-80' : 'text-[#354128] opacity-90'
            }`}
          >
            Estética & Spa
          </span>
        </a>

        {/* Right CTA / Language toggle (Desktop) */}
        <div className="hidden lg:flex items-center space-x-5">
          <a
            id="nav-techniques"
            href="#techniques"
            className={`text-xs tracking-[0.25em] uppercase font-medium relative group py-1 transition-colors ${
              isDark ? 'text-[#9cb2ac] hover:text-[#c5a880]' : 'text-[#474F3B] hover:text-[#9A7240]'
            }`}
          >
            {lang === 'en' ? 'Techniques' : 'Técnicas'}
            <span
              className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                isDark ? 'bg-[#c5a880]' : 'bg-[#9A7240]'
              }`}
            />
          </a>

          <a
            id="nav-contacts"
            href="#contacts"
            className={`text-xs tracking-[0.25em] uppercase font-medium relative group py-1 transition-colors ${
              isDark ? 'text-[#9cb2ac] hover:text-[#c5a880]' : 'text-[#474F3B] hover:text-[#9A7240]'
            }`}
          >
            {lang === 'en' ? 'Contact' : 'Contato'}
            <span
              className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                isDark ? 'bg-[#c5a880]' : 'bg-[#9A7240]'
              }`}
            />
          </a>

          {/* Palette Switcher Pill in Navbar */}
          <ThemeToggle variant="pill" />

          {/* Quick Schedule Button */}
          <button
            id="header-booking-btn"
            onClick={onOpenBooking}
            className={`px-3.5 py-2 rounded-full border text-xs font-medium tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              isDark
                ? 'border-[#c5a880]/40 text-[#c5a880] hover:bg-[#c5a880]/10 hover:border-[#c5a880]'
                : 'border-[#354128]/30 hover:border-[#354128] text-[#354128] hover:bg-[#354128]/5'
            }`}
          >
            <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`} />
            <span>Agendar</span>
          </button>

          {/* Direct WhatsApp Callout Pill */}
          <a
            id="header-whatsapp-pill"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 ${
              isDark
                ? 'bg-[#c5a880] hover:bg-[#d8bf9e] text-[#0c1413]'
                : 'bg-[#354128] hover:bg-[#27311D] text-white'
            }`}
          >
            <MessageCircle className={`w-3.5 h-3.5 ${isDark ? 'fill-[#0c1413]' : 'fill-white'}`} />
            <span>WhatsApp</span>
          </a>

          {/* Language Selector */}
          <div
            className={`flex items-center space-x-1.5 text-xs border-l pl-3 transition-colors ${
              isDark ? 'border-zinc-800 text-zinc-400' : 'border-[#E2D8CC] text-[#7A7264]'
            }`}
          >
            <button
              onClick={() => setLang('pt')}
              className={`transition-colors font-medium ${
                lang === 'pt'
                  ? isDark
                    ? 'text-[#c5a880] font-bold underline decoration-[#c5a880]'
                    : 'text-[#354128] font-bold underline decoration-[#9A7240]'
                  : isDark
                  ? 'hover:text-[#c5a880]'
                  : 'hover:text-[#354128]'
              }`}
            >
              PT
            </button>
            <span>/</span>
            <button
              onClick={() => setLang('en')}
              className={`transition-colors font-medium ${
                lang === 'en'
                  ? isDark
                    ? 'text-[#c5a880] font-bold underline decoration-[#c5a880]'
                    : 'text-[#354128] font-bold underline decoration-[#9A7240]'
                  : isDark
                  ? 'hover:text-[#c5a880]'
                  : 'hover:text-[#354128]'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile menu trigger + Quick Toggle */}
        <div className="flex items-center space-x-2.5 lg:hidden">
          <ThemeToggle variant="compact" />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'bg-[#c5a880] text-[#0c1413]' : 'bg-[#354128] text-white'
            }`}
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? 'text-[#c5a880] hover:bg-[#c5a880]/10'
                : 'text-[#354128] hover:bg-[#354128]/5'
            }`}
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl ${
            isDark
              ? 'bg-[#0f1b18] border-[#c5a880]/20 text-[#e0e7e5]'
              : 'bg-[#FAF7F2] border-[#E8DFD3] text-[#354128]'
          }`}
        >
          {/* Mobile Theme Palette Selector Row */}
          <div
            className={`p-3 rounded-2xl border flex items-center justify-between ${
              isDark ? 'bg-[#152723] border-[#c5a880]/30' : 'bg-white border-[#E8DFD3]'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-medium">
              <Sparkles className={`w-4 h-4 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`} />
              <span className={isDark ? 'text-[#e0e7e5]' : 'text-[#28321D]'}>
                Paleta de Cores:
              </span>
            </div>
            <ThemeToggle variant="pill" />
          </div>

          <nav
            className={`flex flex-col space-y-3 text-sm tracking-[0.2em] uppercase font-medium ${
              isDark ? 'text-[#e0e7e5]' : 'text-[#354128]'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b transition-colors ${
                  isDark
                    ? 'border-[#1b342e] hover:text-[#c5a880]'
                    : 'border-[#EDE6DC] hover:text-[#9A7240]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className={`w-full py-3 rounded-full border font-medium text-xs tracking-wider uppercase text-center transition-colors ${
                isDark
                  ? 'border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880]/10'
                  : 'border-[#354128] text-[#354128] hover:bg-[#354128]/5'
              }`}
            >
              Agendar Avaliação
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3 rounded-full font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md ${
                isDark ? 'bg-[#c5a880] text-[#0c1413]' : 'bg-[#354128] text-white'
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          <div
            className={`pt-2 flex items-center justify-between text-xs ${
              isDark ? 'text-zinc-400' : 'text-[#6A6255]'
            }`}
          >
            <span>Idioma:</span>
            <div className="space-x-3">
              <button
                onClick={() => setLang('pt')}
                className={`font-semibold ${
                  lang === 'pt'
                    ? isDark
                      ? 'text-[#c5a880] underline'
                      : 'text-[#354128] underline'
                    : ''
                }`}
              >
                Português
              </button>
              <button
                onClick={() => setLang('en')}
                className={`font-semibold ${
                  lang === 'en'
                    ? isDark
                      ? 'text-[#c5a880] underline'
                      : 'text-[#354128] underline'
                    : ''
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
