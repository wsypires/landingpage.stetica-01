import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/aestheticData';
import { PalmLeafLeft } from './BotanicalAccents';
import { useTheme } from '../context/ThemeContext';

interface ProductsSectionProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenBooking, lang }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
      desc: 'Termoterapia com pedras de basalto e cristais que reequilibram os centros energéticos.',
    },
  ];

  return (
    <section
      id="products"
      className={`relative py-20 md:py-28 overflow-hidden transition-colors duration-700 ${
        isDark
          ? 'bg-gradient-to-b from-transparent via-[#101c19]/70 to-transparent'
          : 'bg-gradient-to-b from-transparent via-[#F3EDE3]/70 to-transparent'
      }`}
    >
      {/* Botanical Palm Accent on Left */}
      <div className="absolute -left-16 top-12 w-64 md:w-[440px] h-[520px] pointer-events-none z-10 opacity-75">
        <PalmLeafLeft className="w-full h-full" isDark={isDark} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Organic Cutout Visual (Velas quentes e pedras) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start relative">
            <div
              className={`absolute inset-0 blur-3xl rounded-full scale-90 transition-colors duration-700 ${
                isDark
                  ? 'bg-gradient-to-br from-[#c5a880]/15 to-[#1b3d33]/25'
                  : 'bg-gradient-to-br from-[#9A7240]/15 to-[#354128]/15'
              }`}
            />

            <div className="relative w-full max-w-[500px] aspect-[1.1/1]">
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                style={{
                  borderRadius: '56% 44% 39% 61% / 54% 48% 52% 46%',
                  border: isDark
                    ? '2px solid rgba(197, 168, 128, 0.35)'
                    : '2px solid rgba(154, 114, 64, 0.3)',
                  boxShadow: isDark
                    ? '0 25px 50px -15px rgba(0, 0, 0, 0.6)'
                    : '0 25px 50px -15px rgba(53, 65, 40, 0.18)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"
                  alt="Velas aromáticas, pedras de basalto e toalhas para spa e estética"
                  className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
                  loading="lazy"
                />

                <div
                  className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
                    isDark
                      ? 'bg-gradient-to-t from-[#0c1413]/50 via-transparent to-transparent'
                      : 'bg-gradient-to-t from-[#354128]/25 via-transparent to-transparent'
                  }`}
                />

                <div
                  className={`absolute top-6 left-6 backdrop-blur-md border rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm transition-colors ${
                    isDark
                      ? 'bg-[#0c1413]/90 border-[#c5a880]/40'
                      : 'bg-[#FAF7F2]/90 border-[#9A7240]/40'
                  }`}
                >
                  <Sparkles
                    className={`w-3.5 h-3.5 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`}
                  />
                  <span
                    className={`text-[10px] tracking-widest uppercase font-semibold ${
                      isDark ? 'text-[#d8bf9e]' : 'text-[#354128]'
                    }`}
                  >
                    Rituais Exclusivos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Typography & Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative mb-6">
              <span
                aria-hidden="true"
                className={`font-script absolute -top-8 -left-2 text-7xl sm:text-8xl select-none pointer-events-none leading-none z-0 whitespace-nowrap transition-colors duration-500 ${
                  isDark ? 'text-[#c5a880]/15' : 'text-[#9A7240]/15'
                }`}
              >
                {lang === 'en' ? 'Rituals' : 'Rituais'}
              </span>

              <div className="relative z-10 pt-4">
                <span
                  className={`text-[11px] tracking-[0.3em] uppercase font-semibold block mb-1 transition-colors ${
                    isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
                  }`}
                >
                  {lang === 'en' ? 'Sensory Care' : 'Sensações & Aromas'}
                </span>
                <h2
                  className={`font-cormorant text-4xl sm:text-5xl font-normal tracking-tight leading-tight transition-colors duration-500 ${
                    isDark ? 'text-[#f3f7f6]' : 'text-[#28321D]'
                  }`}
                >
                  Velas aromáticas, óleos <br />
                  <span
                    className={`italic font-normal transition-colors duration-500 ${
                      isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
                    }`}
                  >
                    e termoterapia.
                  </span>
                </h2>
              </div>
            </div>

            <p
              className={`text-sm sm:text-base leading-relaxed font-light mb-8 transition-colors duration-500 ${
                isDark ? 'text-[#a2b5af]' : 'text-[#554F44]'
              }`}
            >
              {lang === 'en'
                ? 'Every treatment at Reya is an immersive sensory journey. We combine organic botanical balms with deep therapeutic warmth to ease muscle tension, stimulate cellular circulation, and restore calm.'
                : 'Cada atendimento na Reya é uma imersão de aconchego e cuidado. Combinamos cosméticos de alta tecnologia e ceras aquecidas que desfazem pontos de tensão muscular, estimulam a circulação e renovam a sua vitalidade.'}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3 mb-8">
              {productHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-[#13201d] border-[#1e3831] shadow-sm'
                      : 'bg-white border-[#E7DFD4] shadow-xs'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isDark
                        ? 'bg-[#c5a880]/15 text-[#c5a880]'
                        : 'bg-[#354128]/10 text-[#354128]'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${isDark ? 'text-[#c5a880]' : 'text-[#354128]'}`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text-xs sm:text-sm font-semibold transition-colors ${
                        isDark ? 'text-[#f3f7f6]' : 'text-[#28321D]'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-xs font-light mt-0.5 transition-colors ${
                        isDark ? 'text-[#8a9e98]' : 'text-[#6B6356]'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="products-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full shadow-md text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isDark
                    ? 'bg-[#c5a880] hover:bg-[#d8bf9e] text-[#0c1413]'
                    : 'btn-reya-whatsapp'
                }`}
              >
                <MessageCircle
                  className={`w-4 h-4 ${isDark ? 'text-[#0c1413]' : 'text-white'}`}
                />
                <span>Consultar Tratamentos</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isDark ? 'text-[#0c1413]' : 'text-white'
                  }`}
                />
              </a>

              <button
                onClick={onOpenBooking}
                className={`px-6 py-3.5 border rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 text-center cursor-pointer ${
                  isDark
                    ? 'border-[#c5a880]/40 hover:border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880]/10'
                    : 'border-[#354128]/30 hover:border-[#354128] text-[#354128] hover:bg-[#354128]/5'
                }`}
              >
                Agendar Horário
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
