import React from 'react';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import { getWhatsAppUrl } from '../data/aestheticData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, lang }) => {
  const whatsappUrl = getWhatsAppUrl();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer
      id="contacts"
      className={`relative pt-20 pb-12 overflow-hidden text-white transition-colors duration-700 ${
        isDark ? 'bg-[#060a09] border-t border-[#152320]' : 'bg-[#26311D] border-t border-[#354128]'
      }`}
    >
      {/* Background soft glow */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-[#c5a880]/10' : 'bg-[#9A7240]/10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <svg
                className={`w-8 h-8 transition-colors ${
                  isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
                }`}
                viewBox="0 0 100 80"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M50 8 C46 24 43 42 50 68 C57 42 54 24 50 8 Z" />
                <path d="M47 22 C32 30 26 46 44 65 C40 51 43 35 47 22 Z" opacity="0.9" />
                <path d="M53 22 C68 30 74 46 56 65 C60 51 57 35 53 22 Z" opacity="0.9" />
              </svg>
              <div>
                <span className="font-cinzel text-2xl tracking-[0.3em] font-medium block text-white">
                  REYA
                </span>
                <span
                  className={`text-[9px] tracking-[0.25em] uppercase block font-light ${
                    isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
                  }`}
                >
                  Estética Avançada & Spa
                </span>
              </div>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Um santuário dedicado à harmonia facial e corporal. Tratamentos integrativos conduzidos por especialistas em conforto e alta tecnologia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-semibold tracking-wider uppercase transition-colors ${
                  isDark
                    ? 'bg-[#c5a880]/15 hover:bg-[#c5a880]/25 border-[#c5a880]/30 text-[#c5a880]'
                    : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                }`}
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              className={`font-cinzel text-sm uppercase tracking-[0.2em] font-medium ${
                isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
              }`}
            >
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300 font-light">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sobre Nós & Conceito
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Procedimentos em Destaque
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Cuidados & Rituais Spa
                </a>
              </li>
              <li>
                <a href="#techniques" className="hover:text-white transition-colors">
                  Pilares do Nosso Cuidado
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className={`hover:text-white transition-colors cursor-pointer text-left ${
                    isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
                  }`}
                >
                  Agendar Horário Online
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4
              className={`font-cinzel text-sm uppercase tracking-[0.2em] font-medium ${
                isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
              }`}
            >
              Atendimento & Contato
            </h4>
            <div className="space-y-3 text-xs text-zinc-300 font-light">
              <div className="flex items-start gap-2.5">
                <MessageCircle
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
                  }`}
                />
                <div>
                  <span className="text-zinc-400 block">WhatsApp Oficial:</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium tracking-wide transition-colors ${
                      isDark ? 'text-white hover:text-[#c5a880]' : 'text-white hover:text-[#D8BF9E]'
                    }`}
                  >
                    Atendimento Online Ativo
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
                  }`}
                />
                <div>
                  <span className="text-zinc-400 block">Horário de Funcionamento:</span>
                  <span>Seg a Sex: 08h às 20h | Sáb: 08h às 14h</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
                  }`}
                />
                <div>
                  <span className="text-zinc-400 block">Atendimento:</span>
                  <span>Espaço de Beleza & Saúde Integrativa • Hora Marcada</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-4">
          <p>
            © {new Date().getFullYear()} REYA Estética & Spa. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Beleza, bem-estar e cuidado em um só lugar.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
