import React from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/aestheticData';
import { PalmLeafLeft } from './BotanicalAccents';

interface HeroAboutProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
}

export const HeroAbout: React.FC<HeroAboutProps> = ({ onOpenBooking, lang }) => {
  const whatsappUrl = getWhatsAppUrl(
    'Olá! Estava navegando na seção Sobre Nós e gostaria de agendar uma avaliação estética personalizada.'
  );

  return (
    <section
      id="about"
      className="relative min-h-[90vh] md:min-h-screen pt-32 md:pt-40 pb-20 overflow-hidden flex items-center"
    >
      {/* Botanical Palm Fronds on Left / Background Accent */}
      <div className="absolute -left-20 top-24 md:top-28 w-72 md:w-[480px] h-[550px] pointer-events-none z-10 opacity-70">
        <PalmLeafLeft className="w-full h-full" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-6 xl:col-span-5 relative z-20">
            {/* Watermarked Script + Sharp Serif Heading Stack (Mirroring Figma exactly) */}
            <div className="relative mb-6">
              {/* Floating Cursive Script Watermark */}
              <span
                aria-hidden="true"
                className="font-script absolute -top-8 -left-3 md:-top-14 md:-left-6 text-7xl sm:text-8xl md:text-9xl text-[#e2cca6]/18 select-none pointer-events-none leading-none z-0 whitespace-nowrap"
              >
                {lang === 'en' ? 'About us' : 'Sobre nós'}
              </span>

              {/* Foreground Sharp Title */}
              <div className="relative z-10 pt-4 md:pt-6">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-2">
                  {lang === 'en' ? 'Holistic Aesthetics & Spa' : 'Estética & Bem-Estar'}
                </span>
                <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
                  {lang === 'en' ? 'About us' : 'Sobre nós'}
                </h1>
              </div>
            </div>

            {/* Subheading / Body description */}
            <p className="text-zinc-300/90 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-xl">
              {lang === 'en'
                ? 'Dedicated to natural harmony and conscious rejuvenation. We create an atmosphere of profound serenity where innovative aesthetic protocols meet therapeutic sensory rituals to elevate your authentic beauty.'
                : 'Dedicada à harmonia natural e ao rejuvenescimento consciente. Criamos uma atmosfera de serenidade absoluta onde protocolos de alta tecnologia estética encontram rituais sensoriais de relaxamento para realçar sua beleza autêntica e restaurar sua vitalidade.'}
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
              <div className="flex items-center gap-2 text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <span>Protocolos Personalizados</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0 animate-pulse" />
                <span>Atendimento WhatsApp Ativo</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Exact Figma Outline Style "Learn more" Button */}
              <button
                id="hero-learn-more-btn"
                onClick={onOpenBooking}
                className="px-8 py-3.5 border border-white/70 hover:border-[#c5a880] text-white hover:text-[#e4d1b8] bg-transparent hover:bg-[#c5a880]/10 tracking-[0.25em] uppercase text-xs font-light transition-all duration-300 rounded cursor-pointer text-center group"
              >
                <span>{lang === 'en' ? 'Learn more' : 'Saiba mais'}</span>
                <ArrowRight className="inline-block w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Direct WhatsApp Action */}
              <a
                id="hero-whatsapp-cta-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded bg-[#25D366] hover:bg-[#20ba5a] text-[#0a1512] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-950/50 hover:shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 fill-[#0a1512]" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Organic Cutout Visual (Exact Figma Organic Shape with Woman at Spa) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end relative">
            {/* Ambient Backing Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#162723] to-[#25423a]/40 blur-2xl rounded-full scale-90 opacity-60" />

            <div className="relative w-full max-w-[520px] aspect-[1.05/1]">
              {/* The Organic Pebble/Drop Mask (Custom SVG Clip-path for smooth rendering) */}
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                style={{
                  borderRadius: '52% 48% 68% 32% / 38% 46% 54% 62%',
                  border: '1px solid rgba(197, 168, 128, 0.25)',
                  boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(197,168,128,0.15)',
                }}
              >
                {/* Spa Photography: Relaxing woman receiving treatment with flower */}
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
                  alt="Tratamento estético e massagem relaxante na Reya Estética"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.05]"
                  loading="eager"
                />

                {/* Subtle dark vignette overlay matching Figma */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1413]/50 via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
