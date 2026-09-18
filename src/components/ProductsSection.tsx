import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppUrl } from '../data/aestheticData';
import { PalmLeafLeft } from './BotanicalAccents';

interface ProductsSectionProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenBooking, lang }) => {
  const whatsappUrl = getWhatsAppUrl(
    'Olá! Estava visualizando a seção de Produtos e Protocolos e gostaria de conhecer as opções e valores.'
  );

  const productHighlights = [
    {
      title: 'Cosmecêuticos Biomiméticos',
      desc: 'Ativos puros de alta permeabilidade tecidual sem conservantes agressivos.',
    },
    {
      title: 'Velas Quentes Aromáticas',
      desc: 'Cera vegetal com óleos essenciais para massagens relaxantes Candle Spa.',
    },
    {
      title: 'Pedras Vulcânicas & Cristais',
      desc: 'Termoterapia com pedras de basalto negro e cristais que reequilibram os centros energéticos.',
    },
  ];

  return (
    <section
      id="products"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-[#0d1715]/40 to-transparent"
    >
      {/* Botanical Palm Accent on Left (matching the Figma composition) */}
      <div className="absolute -left-16 top-12 w-64 md:w-[440px] h-[520px] pointer-events-none z-10 opacity-75">
        <PalmLeafLeft className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Organic Cutout Visual (Exact Figma composition: Rolled towels, candles, therapy stones) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start relative">
            {/* Ambient Backing Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c5a880]/15 to-[#1a352c]/30 blur-3xl rounded-full scale-90" />

            <div className="relative w-full max-w-[500px] aspect-[1.1/1]">
              {/* Organic Pebble / Oval Shape matching the image */}
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                style={{
                  borderRadius: '56% 44% 39% 61% / 54% 48% 52% 46%',
                  border: '1px solid rgba(197, 168, 128, 0.25)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.85), 0 0 45px -10px rgba(197,168,128,0.18)',
                }}
              >
                {/* Visual: Rolled towels, lit candles, hot therapy stones */}
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"
                  alt="Velas aromáticas, pedras de basalto quentes e toalhas para spa e estética"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                  loading="lazy"
                />

                {/* Ambient Candlelight Golden Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1413]/60 via-transparent to-transparent pointer-events-none" />

                {/* Inset Badge */}
                <div className="absolute top-6 left-6 bg-[#0c1413]/80 backdrop-blur-md border border-[#c5a880]/30 rounded-full px-3.5 py-1.5 flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-[#c5a880]" />
                  <span className="text-[10px] tracking-widest uppercase text-zinc-300 font-medium">
                    Rituais Premium
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Typography & Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative z-20">
            {/* Watermark Script + Sharp Serif Heading Stack (Figma style) */}
            <div className="relative mb-6">
              {/* Floating Cursive Script Watermark */}
              <span
                aria-hidden="true"
                className="font-script absolute -top-8 -left-3 md:-top-14 md:-left-6 text-7xl sm:text-8xl md:text-9xl text-[#e2cca6]/18 select-none pointer-events-none leading-none z-0 whitespace-nowrap"
              >
                {lang === 'en' ? 'Products' : 'Produtos'}
              </span>

              {/* Foreground Sharp Title */}
              <div className="relative z-10 pt-4 md:pt-6">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-2">
                  {lang === 'en' ? 'Formulations & Protocols' : 'Ativos & Linhas Exclusivas'}
                </span>
                <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
                  {lang === 'en' ? 'Products' : 'Protocolos'}
                </h2>
              </div>
            </div>

            {/* Subheading / Body description matching the Figma paragraph format */}
            <p className="text-zinc-300/90 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-xl">
              {lang === 'en'
                ? 'Crafted with premium clinical dermocosmetics, cold-pressed botanical oils, and cutting-edge biocompatible actives. Visible radiant results from your very first session, delivered with utmost comfort and restorative tranquility.'
                : 'Desenvolvemos rituais com dermocosméticos clínicos de alta tecnologia, óleos botânicos nobres e bioativos compatíveis com a fisiologia cutânea. Resultados visíveis e duradouros desde a primeira sessão, com conforto incomparável e relaxamento restaurador.'}
            </p>

            {/* Feature List */}
            <div className="space-y-3 mb-8">
              {productHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-white block">
                      {item.title}
                    </span>
                    <span className="text-xs text-zinc-400 font-light block">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Exact Figma Outline Style "Learn more" Button */}
              <button
                id="products-learn-more-btn"
                onClick={onOpenBooking}
                className="px-8 py-3.5 border border-white/70 hover:border-[#c5a880] text-white hover:text-[#e4d1b8] bg-transparent hover:bg-[#c5a880]/10 tracking-[0.25em] uppercase text-xs font-light transition-all duration-300 rounded cursor-pointer text-center group"
              >
                <span>{lang === 'en' ? 'Learn more' : 'Saiba mais'}</span>
                <ArrowRight className="inline-block w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Direct WhatsApp Call to action */}
              <a
                id="products-whatsapp-cta-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded bg-[#25D366] hover:bg-[#20ba5a] text-[#0a1512] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-[#0a1512]" />
                <span>Consultar no WhatsApp</span>
              </a>
            </div>

            <p className="mt-4 text-[11px] text-zinc-400">
              Dúvidas sobre o tratamento ideal? Converse diretamente no{' '}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a880] hover:underline font-semibold"
              >
                {WHATSAPP_FORMATTED}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
