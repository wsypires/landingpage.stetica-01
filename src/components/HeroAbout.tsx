import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/aestheticData';
import { PalmLeafLeft } from './BotanicalAccents';
import { useTheme } from '../context/ThemeContext';

interface HeroAboutProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
}

export const HeroAbout: React.FC<HeroAboutProps> = ({ onOpenBooking, lang }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const whatsappUrl = getWhatsAppUrl(
    'Olá! Gostaria de agendar um horário na Reya Estética & Spa.'
  );

  return (
    <section
      id="about"
      className="relative min-h-[92vh] md:min-h-screen pt-32 md:pt-40 pb-16 overflow-hidden flex flex-col justify-center"
    >
      {/* Botanical Palm Fronds on Left / Ambient Organic Foliage */}
      <div className="absolute -left-20 top-20 md:top-24 w-72 md:w-[480px] h-[550px] pointer-events-none z-10 opacity-80">
        <PalmLeafLeft className="w-full h-full" isDark={isDark} />
      </div>

      {/* Ambient Glows adapting to palette */}
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-[#1b4337]/30' : 'bg-[#354128]/5'
        }`}
      />
      <div
        className={`absolute top-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-[#c5a880]/10' : 'bg-[#9A7240]/8'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typography matching the image / palette */}
          <div className="lg:col-span-6 xl:col-span-5 relative z-20">
            {/* Brand Emblem on Hero */}
            <div className="flex flex-col items-start mb-6">
              <svg
                className={`w-8 h-8 mb-1.5 transition-colors duration-500 ${
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
              <h2
                className={`font-cinzel text-3xl sm:text-4xl tracking-[0.32em] font-semibold leading-tight transition-colors duration-500 ${
                  isDark ? 'text-[#c5a880]' : 'text-[#354128]'
                }`}
              >
                REYA
              </h2>
              <span
                className={`text-[10px] tracking-[0.32em] uppercase font-medium mt-0.5 transition-colors duration-500 ${
                  isDark ? 'text-[#d8bf9e]' : 'text-[#354128]'
                }`}
              >
                ESTÉTICA & SPA
              </span>
            </div>

            {/* Slogan */}
            <div className="mb-4">
              <h1
                className={`font-cormorant text-4xl sm:text-5xl md:text-[56px] font-normal leading-[1.12] transition-colors duration-500 ${
                  isDark ? 'text-[#f3f7f6]' : 'text-[#28321D]'
                }`}
              >
                Realce o que te faz <br />
                <span
                  className={`italic font-normal transition-colors duration-500 ${
                    isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
                  }`}
                >
                  sentir bem.
                </span>
              </h1>
              {/* Decorative underline */}
              <div
                className={`w-14 h-[1.5px] mt-3 transition-colors duration-500 ${
                  isDark ? 'bg-[#c5a880]' : 'bg-[#9A7240]'
                }`}
              />
            </div>

            {/* Subheading in italic font */}
            <p
              className={`font-cormorant italic text-lg sm:text-xl font-normal mb-8 transition-colors duration-500 ${
                isDark ? 'text-[#a2b5af]' : 'text-[#615B50]'
              }`}
            >
              Beleza, bem-estar e cuidado em um só lugar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                id="hero-whatsapp-main-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-3.5 rounded-full shadow-lg cursor-pointer transition-all duration-300 ${
                  isDark
                    ? 'bg-[#c5a880] hover:bg-[#d8bf9e] text-[#0c1413]'
                    : 'btn-reya-whatsapp'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                    isDark
                      ? 'bg-[#0c1413]/10 border-[#0c1413]/20 group-hover:bg-[#0c1413]/20'
                      : 'bg-white/10 border-white/20 group-hover:bg-white/20'
                  }`}
                >
                  <MessageCircle
                    className={`w-5 h-5 ${isDark ? 'text-[#0c1413]' : 'text-white'}`}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className={`text-[9px] tracking-[0.25em] uppercase font-medium leading-none ${
                      isDark ? 'text-[#0c1413]/70' : 'text-white/80'
                    }`}
                  >
                    AGENDAMENTO
                  </span>
                  <span
                    className={`text-base font-semibold tracking-wide leading-tight ${
                      isDark ? 'text-[#0c1413]' : 'text-white'
                    }`}
                  >
                    WhatsApp
                  </span>
                </div>
                <ArrowRight
                  className={`w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 ${
                    isDark ? 'text-[#0c1413]' : 'text-white'
                  }`}
                />
              </a>

              <button
                id="hero-modal-trigger"
                onClick={onOpenBooking}
                className={`px-6 py-3.5 border rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 text-center cursor-pointer ${
                  isDark
                    ? 'border-[#c5a880]/40 hover:border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880]/10'
                    : 'border-[#354128]/40 hover:border-[#354128] text-[#354128] hover:bg-[#354128]/5'
                }`}
              >
                Agendar Consulta
              </button>
            </div>
          </div>

          {/* Right Column: Organic Cutout Visual */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end relative">
            <div
              className={`absolute inset-0 blur-2xl rounded-full scale-95 transition-colors duration-700 ${
                isDark
                  ? 'bg-gradient-to-tr from-[#1b3d33]/30 to-[#c5a880]/20'
                  : 'bg-gradient-to-tr from-[#354128]/15 to-[#9A7240]/15'
              }`}
            />

            <div className="relative w-full max-w-[530px] aspect-[1.05/1]">
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                style={{
                  borderRadius: '52% 48% 68% 32% / 38% 46% 54% 62%',
                  border: isDark
                    ? '2px solid rgba(197, 168, 128, 0.4)'
                    : '2px solid rgba(154, 114, 64, 0.35)',
                  boxShadow: isDark
                    ? '0 25px 50px -15px rgba(0, 0, 0, 0.7), 0 0 35px -10px rgba(197, 168, 128, 0.25)'
                    : '0 25px 50px -15px rgba(53, 65, 40, 0.25), 0 0 30px -10px rgba(154, 114, 64, 0.2)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
                  alt="Tratamento estético e spa facial na Reya Estética"
                  className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.02]"
                  loading="eager"
                />

                <div
                  className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
                    isDark
                      ? 'bg-gradient-to-t from-[#0c1413]/50 via-transparent to-transparent'
                      : 'bg-gradient-to-t from-[#354128]/25 via-transparent to-transparent'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip: 4 categories & handwritten signature */}
        <div
          className={`mt-14 pt-8 border-t grid grid-cols-2 md:grid-cols-5 gap-6 items-center transition-colors duration-500 ${
            isDark ? 'border-[#1b322c]' : 'border-[#E8DFD3]'
          }`}
        >
          {/* 1. Tratamentos Faciais */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div
              className={`w-10 h-10 rounded-full border flex items-center justify-center mb-2 transition-colors ${
                isDark
                  ? 'bg-[#12211e] border-[#1e3831] text-[#c5a880] group-hover:border-[#c5a880]'
                  : 'bg-[#FAF7F2] border-[#E2D7C8] text-[#9A7240] group-hover:border-[#9A7240] group-hover:text-[#354128]'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="11" r="7" />
                <path d="M12 18 C14 18 16 16 16 14" strokeLinecap="round" />
                <path d="M9 10 Q10 11 11 10" strokeLinecap="round" />
                <path d="M13 10 Q14 11 15 10" strokeLinecap="round" />
                <path d="M19 5 L20 7 L22 8 L20 9 L19 11 L18 9 L16 8 L18 7 Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <span
              className={`text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                isDark ? 'text-[#d8bf9e]' : 'text-[#354128]'
              }`}
            >
              TRATAMENTOS FACIAIS
            </span>
          </div>

          {/* 2. Tratamentos Corporais */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div
              className={`w-10 h-10 rounded-full border flex items-center justify-center mb-2 transition-colors ${
                isDark
                  ? 'bg-[#12211e] border-[#1e3831] text-[#c5a880] group-hover:border-[#c5a880]'
                  : 'bg-[#FAF7F2] border-[#E2D7C8] text-[#9A7240] group-hover:border-[#9A7240] group-hover:text-[#354128]'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3 C10.5 5 10 7 11 9 C12 11 8 13 8 17 C8 20 10 22 12 22 C14 22 16 20 16 17 C16 13 12 11 13 9 C14 7 13.5 5 12 3 Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              className={`text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                isDark ? 'text-[#d8bf9e]' : 'text-[#354128]'
              }`}
            >
              TRATAMENTOS CORPORAIS
            </span>
          </div>

          {/* 3. Spa & Relaxamento */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div
              className={`w-10 h-10 rounded-full border flex items-center justify-center mb-2 transition-colors ${
                isDark
                  ? 'bg-[#12211e] border-[#1e3831] text-[#c5a880] group-hover:border-[#c5a880]'
                  : 'bg-[#FAF7F2] border-[#E2D7C8] text-[#9A7240] group-hover:border-[#9A7240] group-hover:text-[#354128]'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 6 C10 10 9 14 12 18 C15 14 14 10 12 6 Z" />
                <path d="M10 11 C6 13 5 16 9 18" strokeLinecap="round" />
                <path d="M14 11 C18 13 19 16 15 18" strokeLinecap="round" />
              </svg>
            </div>
            <span
              className={`text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                isDark ? 'text-[#d8bf9e]' : 'text-[#354128]'
              }`}
            >
              SPA & RELAXAMENTO
            </span>
          </div>

          {/* 4. Beleza Integral */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div
              className={`w-10 h-10 rounded-full border flex items-center justify-center mb-2 transition-colors ${
                isDark
                  ? 'bg-[#12211e] border-[#1e3831] text-[#c5a880] group-hover:border-[#c5a880]'
                  : 'bg-[#FAF7F2] border-[#E2D7C8] text-[#9A7240] group-hover:border-[#9A7240] group-hover:text-[#354128]'
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 9 L12 3 L18 9 L12 21 L6 9 Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 9 H18" strokeLinecap="round" />
              </svg>
            </div>
            <span
              className={`text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                isDark ? 'text-[#d8bf9e]' : 'text-[#354128]'
              }`}
            >
              BELEZA INTEGRAL
            </span>
          </div>

          {/* 5. Handwritten Accent */}
          <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-end text-center md:text-right pt-2 md:pt-0">
            <span
              className={`font-script text-3xl sm:text-4xl leading-tight select-none transition-colors ${
                isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
              }`}
            >
              Seu momento <br />
              <span className="text-2xl sm:text-3xl">é agora</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
