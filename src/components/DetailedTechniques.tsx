import React from 'react';
import { TECHNIQUES, getWhatsAppUrl } from '../data/aestheticData';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

interface DetailedTechniquesProps {
  lang: 'pt' | 'en';
}

export const DetailedTechniques: React.FC<DetailedTechniquesProps> = ({ lang }) => {
  // Custom Fine-Line Aesthetic SVGs matching the Figma illustration icons exactly
  const renderAestheticIcon = (iconName: string) => {
    switch (iconName) {
      case 'massage':
        // Hands on back massage icon (matching Figma top-left icon)
        return (
          <svg className="w-12 h-12 text-[#c5a880]/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Person silhouette lying down */}
            <path d="M12 42 C12 36 16 32 24 32 C30 32 36 34 44 34 C50 34 54 38 56 42" strokeLinecap="round" />
            <circle cx="16" cy="24" r="5" strokeLinecap="round" />
            {/* Therapist hands gently pressing */}
            <path d="M30 16 C30 20 34 24 38 26" strokeLinecap="round" />
            <path d="M42 14 C42 19 44 24 48 26" strokeLinecap="round" />
            <path d="M26 18 Q32 14 36 18" strokeLinecap="round" />
            {/* Table base line */}
            <line x1="8" y1="46" x2="58" y2="46" strokeLinecap="round" strokeDasharray="3 3" />
          </svg>
        );
      case 'diffuser':
        // Oil burner / diffuser / botanical dropper icon (matching Figma top-right icon)
        return (
          <svg className="w-12 h-12 text-[#c5a880]/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Diffuser / oil burner bowl */}
            <ellipse cx="32" cy="42" rx="14" ry="7" />
            <path d="M20 44 L24 56 L40 56 L44 44" strokeLinecap="round" strokeLinejoin="round" />
            {/* Candle inside */}
            <line x1="32" y1="56" x2="32" y2="50" strokeLinecap="round" />
            <circle cx="32" cy="48" r="1.5" fill="currentColor" />
            {/* Rising aroma steam vapor rays */}
            <path d="M32 32 L32 20" strokeLinecap="round" strokeDasharray="2 3" />
            <path d="M25 33 L20 22" strokeLinecap="round" strokeDasharray="2 3" />
            <path d="M39 33 L44 22" strokeLinecap="round" strokeDasharray="2 3" />
            {/* Surrounding botanical petals */}
            <circle cx="14" cy="42" r="3" />
            <circle cx="50" cy="42" r="3" />
          </svg>
        );
      case 'face':
        // Facial contour / soothing skincare icon (matching Figma bottom-left icon)
        return (
          <svg className="w-12 h-12 text-[#c5a880]/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Head contour */}
            <path d="M32 14 C22 14 16 22 16 32 C16 42 22 50 32 50 C42 50 48 42 48 32 C48 22 42 14 32 14 Z" strokeLinecap="round" />
            {/* Serene closed eye */}
            <path d="M24 30 Q28 34 32 30" strokeLinecap="round" />
            <path d="M36 30 Q40 34 44 30" strokeLinecap="round" />
            {/* Gentle smile */}
            <path d="M28 42 Q32 45 36 42" strokeLinecap="round" />
            {/* Spa headband & floral accent */}
            <path d="M16 22 Q32 18 48 22" strokeLinecap="round" />
            <circle cx="46" cy="20" r="3" />
          </svg>
        );
      case 'bath':
        // Clawfoot bathtub with rising thermal steam (matching Figma bottom-right icon)
        return (
          <svg className="w-12 h-12 text-[#c5a880]/80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Tub rim and basin */}
            <path d="M10 32 H54 C54 44 46 50 32 50 C18 50 10 44 10 32 Z" strokeLinecap="round" strokeLinejoin="round" />
            {/* Tub legs */}
            <path d="M16 50 L14 56" strokeLinecap="round" />
            <path d="M48 50 L50 56" strokeLinecap="round" />
            {/* Steam curves */}
            <path d="M24 24 Q22 18 26 12" strokeLinecap="round" />
            <path d="M32 26 Q30 18 34 10" strokeLinecap="round" />
            <path d="M40 24 Q38 18 42 12" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="plans" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-20">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-2">
            Metodologia & Excelência
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl text-white font-normal tracking-tight">
            Pilares do Nosso Cuidado
          </h2>
          <div className="w-12 h-[1px] bg-[#c5a880]/50 mx-auto mt-4" />
        </div>

        {/* 2x2 Grid matching the Figma lower half */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TECHNIQUES.map((tech) => {
            const techWhatsappUrl = getWhatsAppUrl(tech.whatsappMessage);

            return (
              <div
                key={tech.id}
                className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#c5a880]/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Visual Line Art Icon */}
                <div className="shrink-0 p-3.5 rounded-xl bg-black/40 border border-[#c5a880]/20 group-hover:border-[#c5a880]/60 transition-colors shadow-inner">
                  {renderAestheticIcon(tech.iconName)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-cinzel text-lg sm:text-xl text-white font-medium group-hover:text-[#e2cca6] transition-colors mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300/80 font-light leading-relaxed mb-4">
                    {tech.description}
                  </p>

                  {/* Direct WhatsApp Action for this specific technique */}
                  <a
                    href={techWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:text-[#52e78b] font-medium transition-colors group/link"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Agendar este procedimento</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Central Conversion Banner for WhatsApp */}
        <div className="mt-16 bg-gradient-to-r from-[#11211d] via-[#172d27] to-[#11211d] border border-[#c5a880]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium block mb-2">
              Atendimento Exclusivo
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-white font-normal mb-4">
              Pronta para vivenciar sua melhor versão?
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-8">
              Converse com nossas especialistas pelo WhatsApp. Tire dúvidas sobre contraindicações, valores de pacotes e reserve seu horário com total comodidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="banner-whatsapp-direct"
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma consulta estética na Reya Estética.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#07130f] font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-emerald-950/60"
              >
                <MessageCircle className="w-5 h-5 fill-[#07130f]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
