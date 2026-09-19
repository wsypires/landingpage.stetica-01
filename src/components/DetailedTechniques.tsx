import React from 'react';
import { TECHNIQUES, getWhatsAppUrl } from '../data/aestheticData';
import { MessageCircle, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DetailedTechniquesProps {
  lang: 'pt' | 'en';
}

export const DetailedTechniques: React.FC<DetailedTechniquesProps> = ({ lang }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const renderAestheticIcon = (iconName: string) => {
    const iconColor = isDark ? 'text-[#c5a880]' : 'text-[#9A7240]';

    switch (iconName) {
      case 'massage':
        return (
          <svg className={`w-10 h-10 ${iconColor}`} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 42 C12 36 16 32 24 32 C30 32 36 34 44 34 C50 34 54 38 56 42" strokeLinecap="round" />
            <circle cx="16" cy="24" r="5" strokeLinecap="round" />
            <path d="M30 16 C30 20 34 24 38 26" strokeLinecap="round" />
            <path d="M42 14 C42 19 44 24 48 26" strokeLinecap="round" />
            <path d="M26 18 Q32 14 36 18" strokeLinecap="round" />
            <line x1="8" y1="46" x2="58" y2="46" strokeLinecap="round" strokeDasharray="3 3" />
          </svg>
        );
      case 'diffuser':
        return (
          <svg className={`w-10 h-10 ${iconColor}`} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="32" cy="42" rx="14" ry="7" />
            <path d="M20 44 L24 56 L40 56 L44 44" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="32" y1="56" x2="32" y2="50" strokeLinecap="round" />
            <circle cx="32" cy="48" r="1.5" fill="currentColor" />
            <path d="M32 32 L32 20" strokeLinecap="round" strokeDasharray="2 3" />
            <path d="M25 33 L20 22" strokeLinecap="round" strokeDasharray="2 3" />
            <path d="M39 33 L44 22" strokeLinecap="round" strokeDasharray="2 3" />
            <circle cx="14" cy="42" r="3" />
            <circle cx="50" cy="42" r="3" />
          </svg>
        );
      case 'face':
        return (
          <svg className={`w-10 h-10 ${iconColor}`} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M32 14 C22 14 16 22 16 32 C16 42 22 50 32 50 C42 50 48 42 48 32 C48 22 42 14 32 14 Z" strokeLinecap="round" />
            <path d="M24 30 Q28 34 32 30" strokeLinecap="round" />
            <path d="M36 30 Q40 34 44 30" strokeLinecap="round" />
            <path d="M28 42 Q32 45 36 42" strokeLinecap="round" />
            <path d="M16 22 Q32 18 48 22" strokeLinecap="round" />
            <circle cx="46" cy="20" r="3" />
          </svg>
        );
      case 'bath':
        return (
          <svg className={`w-10 h-10 ${iconColor}`} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 32 H54 C54 44 46 50 32 50 C18 50 10 44 10 32 Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 50 L14 56" strokeLinecap="round" />
            <path d="M48 50 L50 56" strokeLinecap="round" />
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
    <section
      id="techniques"
      className={`relative py-20 md:py-28 overflow-hidden transition-colors duration-700 ${
        isDark ? 'bg-[#0c1413]' : 'bg-[#FAF7F2]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-20">
        <div className="text-center mb-16">
          <span
            className={`text-[11px] tracking-[0.3em] uppercase font-semibold block mb-2 transition-colors ${
              isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
            }`}
          >
            Metodologia & Excelência
          </span>
          <h2
            className={`font-cormorant text-3xl sm:text-5xl font-normal tracking-tight transition-colors ${
              isDark ? 'text-[#f3f7f6]' : 'text-[#28321D]'
            }`}
          >
            Pilares do Nosso Cuidado
          </h2>
          <div
            className={`w-12 h-[1.5px] mx-auto mt-3 transition-colors ${
              isDark ? 'bg-[#c5a880]' : 'bg-[#9A7240]'
            }`}
          />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TECHNIQUES.map((tech) => {
            const techWhatsappUrl = getWhatsAppUrl(tech.whatsappMessage);

            return (
              <div
                key={tech.id}
                className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start border ${
                  isDark
                    ? 'bg-[#13201d] border-[#1e3831] hover:border-[#c5a880] shadow-sm hover:shadow-black/50'
                    : 'bg-white border-[#E8DFD4] hover:border-[#9A7240] shadow-xs hover:shadow-md'
                }`}
              >
                {/* Visual Line Art Icon */}
                <div
                  className={`shrink-0 p-3.5 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-[#0e1917] border-[#1e3831] group-hover:border-[#c5a880]/40'
                      : 'bg-[#FAF7F2] border-[#E7DFD4] group-hover:border-[#9A7240]/40'
                  }`}
                >
                  {renderAestheticIcon(tech.iconName)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`font-cormorant text-xl sm:text-2xl font-medium transition-colors mb-2 ${
                      isDark
                        ? 'text-[#f3f7f6] group-hover:text-[#c5a880]'
                        : 'text-[#28321D] group-hover:text-[#9A7240]'
                    }`}
                  >
                    {tech.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-light leading-relaxed mb-4 transition-colors ${
                      isDark ? 'text-[#8a9e98]' : 'text-[#5C5549]'
                    }`}
                  >
                    {tech.description}
                  </p>

                  <a
                    href={techWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group/link ${
                      isDark
                        ? 'text-[#c5a880] hover:text-[#e6d5be]'
                        : 'text-[#354128] hover:text-[#9A7240]'
                    }`}
                  >
                    <MessageCircle
                      className={`w-3.5 h-3.5 ${isDark ? 'fill-[#c5a880]' : 'fill-[#354128]'}`}
                    />
                    <span>Agendar este procedimento</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Conversion Banner for WhatsApp */}
        <div
          className={`mt-16 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl text-white transition-all duration-700 ${
            isDark
              ? 'bg-gradient-to-br from-[#162e26] via-[#10221c] to-[#0a1512] border border-[#c5a880]/30 shadow-black/60'
              : 'bg-[#354128]'
          }`}
        >
          {/* Subtle background ambient leaf pattern */}
          <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-black/20 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span
              className={`text-[11px] uppercase tracking-[0.25em] font-medium block mb-2 ${
                isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
              }`}
            >
              Atendimento Exclusivo
            </span>
            <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-4">
              Pronta para vivenciar sua melhor versão?
            </h3>
            <p className="text-zinc-200 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-lg mx-auto">
              Converse com nossas especialistas pelo WhatsApp. Tire dúvidas sobre contraindicações, valores de pacotes e reserve seu horário com total comodidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="banner-whatsapp-direct"
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma consulta estética na Reya Estética.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer ${
                  isDark
                    ? 'bg-[#c5a880] hover:bg-[#d8bf9e] text-[#0c1413]'
                    : 'bg-white hover:bg-[#FAF7F2] text-[#354128]'
                }`}
              >
                <MessageCircle
                  className={`w-4 h-4 ${isDark ? 'fill-[#0c1413]' : 'fill-[#354128]'}`}
                />
                <span>Conversar no WhatsApp</span>
                <ArrowRight
                  className={`w-4 h-4 ${isDark ? 'text-[#0c1413]' : 'text-[#354128]'}`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
