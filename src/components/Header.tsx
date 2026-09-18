import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppUrl } from '../data/aestheticData';

interface HeaderProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: lang === 'en' ? 'About us' : 'Sobre nós', href: '#about' },
    { label: lang === 'en' ? 'Services' : 'Procedimentos', href: '#services' },
    { label: lang === 'en' ? 'Products' : 'Produtos', href: '#products' },
    { label: lang === 'en' ? 'Aboniments' : 'Planos & Spa', href: '#plans' },
    { label: lang === 'en' ? 'Contacts' : 'Contato', href: '#contacts' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a1110]/90 backdrop-blur-md py-3 border-b border-emerald-950/40 shadow-xl'
          : 'bg-transparent py-5 md:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left Nav (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.25em] uppercase text-zinc-300 font-light">
          <a
            id="nav-about"
            href="#about"
            className="transition-colors hover:text-[#e4d1b8] relative group py-1"
          >
            {lang === 'en' ? 'About us' : 'Sobre nós'}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            id="nav-services"
            href="#services"
            className="transition-colors hover:text-[#e4d1b8] relative group py-1"
          >
            {lang === 'en' ? 'Services' : 'Procedimentos'}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            id="nav-products"
            href="#products"
            className="transition-colors hover:text-[#e4d1b8] relative group py-1"
          >
            {lang === 'en' ? 'Products' : 'Cuidados'}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Central Brand Identity (Matching Figma: Lotus + REYA) */}
        <a
          id="brand-logo"
          href="#"
          className="flex flex-col items-center justify-center group text-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          aria-label="Reya Estética & Spa"
        >
          {/* Stylized Lotus Icon */}
          <svg
            className="w-7 h-7 md:w-8 md:h-8 text-[#e2cca6] group-hover:text-white transition-colors duration-300 filter drop-shadow-[0_2px_8px_rgba(226,204,166,0.3)]"
            viewBox="0 0 100 80"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center Petal */}
            <path d="M50 5 C46 22 42 42 50 68 C58 42 54 22 50 5 Z" />
            {/* Mid Left Petal */}
            <path d="M47 18 C30 27 24 45 44 65 C40 50 43 32 47 18 Z" opacity="0.9" />
            {/* Mid Right Petal */}
            <path d="M53 18 C70 27 76 45 56 65 C60 50 57 32 53 18 Z" opacity="0.9" />
            {/* Outer Left Petal */}
            <path d="M40 34 C18 42 12 60 38 72 C32 58 35 44 40 34 Z" opacity="0.8" />
            {/* Outer Right Petal */}
            <path d="M60 34 C82 42 88 60 62 72 C68 58 65 44 60 34 Z" opacity="0.8" />
            {/* Base Lotus Line */}
            <path d="M35 72 C45 76 55 76 65 72 C55 74 45 74 35 72 Z" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-cinzel text-xl md:text-2xl tracking-[0.35em] text-white font-medium mt-1">
            REYA
          </span>
          <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-[#c5a880] font-light -mt-0.5">
            Estética & Spa
          </span>
        </a>

        {/* Right Nav (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.25em] uppercase text-zinc-300 font-light">
          <a
            id="nav-aboniments"
            href="#plans"
            className="transition-colors hover:text-[#e4d1b8] relative group py-1"
          >
            {lang === 'en' ? 'Aboniments' : 'Planos'}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            id="nav-contacts"
            href="#contacts"
            className="transition-colors hover:text-[#e4d1b8] relative group py-1"
          >
            {lang === 'en' ? 'Contacts' : 'Contato'}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Language Selector (like ENG in Figma) */}
          <button
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            className="px-2.5 py-1 text-[10px] tracking-wider rounded border border-zinc-700 hover:border-[#c5a880] text-zinc-300 hover:text-white transition-all cursor-pointer"
            title="Alternar Idioma"
          >
            {lang === 'en' ? 'PT' : 'ENG'}
          </button>

          {/* WhatsApp Direct Action */}
          <a
            id="header-whatsapp-btn"
            href={getWhatsAppUrl('Olá! Gostaria de agendar um horário na Reya Estética.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded border border-[#c5a880]/70 bg-[#c5a880]/10 hover:bg-[#c5a880]/20 text-[#e4d1b8] hover:text-white transition-all duration-300 text-[11px] tracking-widest font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{WHATSAPP_FORMATTED}</span>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            id="header-whatsapp-mobile-btn"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[#c5a880]/40 text-[#c5a880] hover:bg-[#c5a880]/10"
            aria-label="Chamar no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0a1211]/98 backdrop-blur-xl border-b border-zinc-800 px-6 py-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl"
        >
          <div className="flex flex-col space-y-4 text-center tracking-[0.2em] uppercase text-sm font-light">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-zinc-300 hover:text-[#c5a880] border-b border-zinc-800/40"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col items-center gap-4">
            <button
              onClick={() => {
                setLang(lang === 'en' ? 'pt' : 'en');
                setMobileMenuOpen(false);
              }}
              className="text-xs tracking-widest text-zinc-400 hover:text-[#c5a880]"
            >
              Idioma / Language: <span className="font-semibold text-white">{lang === 'en' ? 'English (ENG)' : 'Português (PT)'}</span>
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded border border-[#25D366]/50 bg-[#25D366]/10 text-white text-xs tracking-widest font-medium"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chamar no WhatsApp: {WHATSAPP_FORMATTED}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded border border-[#c5a880] bg-[#c5a880] text-[#0c1413] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8be96] transition-colors"
            >
              Agendar Avaliação Gratuita
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
