import React from 'react';
import { SERVICES, ServiceItem, getWhatsAppUrl } from '../data/aestheticData';
import { PalmLeafRight } from './BotanicalAccents';
import { MessageCircle, Clock, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  lang: 'pt' | 'en';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, lang }) => {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Botanical Palm Leaf on the Right Edge (matching Figma's foliage positioning) */}
      <div className="absolute -right-20 top-20 md:top-28 w-72 md:w-[460px] h-[550px] pointer-events-none z-10 opacity-75">
        <PalmLeafRight className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header with Script Watermark + Serif Heading (Center aligned as in Figma) */}
        <div className="text-center relative mb-16 md:mb-20">
          {/* Watermark script behind */}
          <span
            aria-hidden="true"
            className="font-script absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl md:text-9xl text-[#e2cca6]/18 select-none pointer-events-none leading-none z-0 whitespace-nowrap"
          >
            {lang === 'en' ? 'Services' : 'Serviços'}
          </span>

          {/* Foreground Title */}
          <div className="relative z-10 pt-4">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-2">
              {lang === 'en' ? 'Exclusive Experiences' : 'Nossos Procedimentos'}
            </span>
            <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              {lang === 'en' ? 'Services' : 'Procedimentos'}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light tracking-wide mt-3 max-w-lg mx-auto">
              {lang === 'en'
                ? 'Select a treatment below to view protocol details and book directly via WhatsApp.'
                : 'Selecione um tratamento abaixo para ver detalhes e agendar diretamente pelo WhatsApp.'}
            </p>
          </div>
        </div>

        {/* 4 Circular Visual Service Cards (Identical to Figma mockup) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center group cursor-pointer"
              onClick={() => onSelectService(service)}
            >
              {/* Circular Illuminated Avatar Frame */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-1 transition-transform duration-500 group-hover:scale-105">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c5a880]/30 to-emerald-500/20 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Outer delicate border */}
                <div className="relative w-full h-full rounded-full overflow-hidden border border-[#c5a880]/50 group-hover:border-[#e2cca6] shadow-xl transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Hover Overlay with Action Icon */}
                  <div className="absolute inset-0 bg-[#0c1413]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
                    <Sparkles className="w-5 h-5 text-[#c5a880] mb-1" />
                    <span className="text-[10px] uppercase tracking-widest text-white font-medium">
                      Ver Detalhes
                    </span>
                  </div>
                </div>
              </div>

              {/* Title underneath (Exact Figma Serif style) */}
              <h3 className="font-cinzel text-lg sm:text-xl md:text-2xl text-white font-normal mt-4 group-hover:text-[#e2cca6] transition-colors">
                {service.title}
              </h3>

              {/* Portuguese Subtitle / Category info */}
              <span className="text-[11px] text-zinc-400 font-light mt-1 max-w-[170px] line-clamp-2">
                {service.subtitle}
              </span>

              {/* Quick WhatsApp Action Button */}
              <a
                href={getWhatsAppUrl(`Olá! Gostaria de agendar o procedimento de ${service.title} (${service.subtitle}).`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#25D366] hover:text-white transition-colors py-1 px-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30"
              >
                <MessageCircle className="w-3 h-3" />
                <span>Agendar</span>
              </a>
            </div>
          ))}
        </div>

        {/* Floating Call to Action Banner under services */}
        <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <p className="text-zinc-300 text-xs sm:text-sm font-light mb-4">
            Deseja uma recomendação personalizada para as necessidades específicas da sua pele ou corpo?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="services-full-whatsapp-btn"
              href={getWhatsAppUrl('Olá! Gostaria de uma avaliação com especialista para saber qual procedimento é ideal para mim.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded bg-[#25D366] hover:bg-[#20ba5a] text-[#0a1512] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-[#0a1512]" />
              <span>Falar com Especialista no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
