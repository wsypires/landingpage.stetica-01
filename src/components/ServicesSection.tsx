import React from 'react';
import { SERVICES, ServiceItem, getWhatsAppUrl } from '../data/aestheticData';
import { PalmLeafRight } from './BotanicalAccents';
import { MessageCircle, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  lang: 'pt' | 'en';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, lang }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="services"
      className={`relative py-20 md:py-28 overflow-hidden transition-colors duration-700 ${
        isDark ? 'bg-[#0c1413]' : 'bg-[#FAF7F2]'
      }`}
    >
      {/* Botanical Palm Leaf on the Right Edge */}
      <div className="absolute -right-20 top-20 md:top-28 w-72 md:w-[460px] h-[550px] pointer-events-none z-10 opacity-75">
        <PalmLeafRight className="w-full h-full" isDark={isDark} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center relative mb-14 md:mb-18">
          <span
            aria-hidden="true"
            className={`font-script absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl md:text-9xl select-none pointer-events-none leading-none z-0 whitespace-nowrap transition-colors duration-500 ${
              isDark ? 'text-[#c5a880]/15' : 'text-[#9A7240]/15'
            }`}
          >
            {lang === 'en' ? 'Services' : 'Serviços'}
          </span>

          <div className="relative z-10 pt-4">
            <span
              className={`text-[11px] tracking-[0.3em] uppercase font-semibold block mb-2 transition-colors ${
                isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
              }`}
            >
              {lang === 'en' ? 'Exclusive Experiences' : 'Nossos Procedimentos'}
            </span>
            <h2
              className={`font-cormorant text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight transition-colors duration-500 ${
                isDark ? 'text-[#f3f7f6]' : 'text-[#28321D]'
              }`}
            >
              Cuidados sob medida para você
            </h2>
            <p
              className={`text-xs sm:text-sm font-light tracking-wide mt-3 max-w-lg mx-auto transition-colors duration-500 ${
                isDark ? 'text-[#a2b5af]' : 'text-[#655E52]'
              }`}
            >
              {lang === 'en'
                ? 'Select a treatment below to view protocol details and book directly via WhatsApp.'
                : 'Selecione um tratamento abaixo para ver detalhes e agendar diretamente pelo WhatsApp.'}
            </p>
          </div>
        </div>

        {/* 4 Circular Visual Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center group cursor-pointer"
              onClick={() => onSelectService(service)}
            >
              {/* Circular Illuminated Avatar Frame */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-1 transition-transform duration-500 group-hover:scale-105">
                {/* Glow ring */}
                <div
                  className={`absolute inset-0 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark
                      ? 'bg-gradient-to-tr from-[#c5a880]/40 to-[#1e4237]/40'
                      : 'bg-gradient-to-tr from-[#9A7240]/30 to-[#354128]/25'
                  }`}
                />

                {/* Outer border */}
                <div
                  className={`relative w-full h-full rounded-full overflow-hidden border-2 shadow-md transition-all duration-300 ${
                    isDark
                      ? 'border-[#1e3831] group-hover:border-[#c5a880]'
                      : 'border-[#E2D8CC] group-hover:border-[#9A7240]'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Gentle hover overlay */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                      isDark ? 'bg-[#0c1413]/40' : 'bg-[#354128]/20'
                    }`}
                  >
                    <span
                      className={`text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full shadow ${
                        isDark ? 'bg-[#c5a880] text-[#0c1413]' : 'bg-[#354128]/90 text-white'
                      }`}
                    >
                      Ver Mais
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Title */}
              <h3
                className={`font-cormorant text-xl sm:text-2xl mt-4 font-normal transition-colors ${
                  isDark
                    ? 'text-[#f3f7f6] group-hover:text-[#c5a880]'
                    : 'text-[#28321D] group-hover:text-[#9A7240]'
                }`}
              >
                {service.title}
              </h3>

              {/* Tag / Category */}
              <span
                className={`text-[10px] tracking-[0.25em] uppercase font-medium mt-1 transition-colors ${
                  isDark ? 'text-[#8a9e98]' : 'text-[#7A7264]'
                }`}
              >
                {service.category}
              </span>

              {/* Duration and detail pill */}
              <div
                className={`flex items-center gap-1.5 text-[11px] mt-2 border px-3 py-1 rounded-full shadow-2xs transition-colors ${
                  isDark
                    ? 'bg-[#13201d] border-[#1e3831] text-[#a2b5af]'
                    : 'bg-white border-[#E6DDD0] text-[#6B6356]'
                }`}
              >
                <Clock
                  className={`w-3 h-3 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`}
                />
                <span>{service.duration}</span>
              </div>

              {/* Quick WhatsApp Action on hover/mobile */}
              <a
                href={getWhatsAppUrl(
                  `Olá! Gostaria de agendar o procedimento de ${service.title} (${service.subtitle}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-full transition-colors ${
                  isDark
                    ? 'text-[#c5a880] hover:text-[#e6d5be] hover:bg-[#c5a880]/10'
                    : 'text-[#354128] hover:text-[#9A7240] hover:bg-[#354128]/5'
                }`}
              >
                <MessageCircle
                  className={`w-3.5 h-3.5 ${isDark ? 'fill-[#c5a880]' : 'fill-[#354128]'}`}
                />
                <span>Agendar</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
