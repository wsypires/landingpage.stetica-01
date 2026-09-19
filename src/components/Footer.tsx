import React from 'react';
import { MessageCircle, MapPin, Clock, Instagram, Heart } from 'lucide-react';
import { getWhatsAppUrl } from '../data/aestheticData';

interface FooterProps {
  onOpenBooking: () => void;
  lang: 'pt' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, lang }) => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer id="contacts" className="relative bg-[#080e0d] border-t border-emerald-950/50 pt-20 pb-12 overflow-hidden text-white">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-[#e2cca6]"
                viewBox="0 0 100 80"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M50 5 C46 22 42 42 50 68 C58 42 54 22 50 5 Z" />
                <path d="M47 18 C30 27 24 45 44 65 C40 50 43 32 47 18 Z" opacity="0.9" />
                <path d="M53 18 C70 27 76 45 56 65 C60 50 57 32 53 18 Z" opacity="0.9" />
                <path d="M40 34 C18 42 12 60 38 72 C32 58 35 44 40 34 Z" opacity="0.8" />
                <path d="M60 34 C82 42 88 60 62 72 C68 58 65 44 60 34 Z" opacity="0.8" />
              </svg>
              <div>
                <span className="font-cinzel text-2xl tracking-[0.3em] font-medium block">
                  REYA
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#c5a880] block font-light">
                  Estética Avançada & Spa
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Um santuário dedicado à harmonia facial e corporal. Tratamentos integrativos conduzidos por profissionais especializados em conforto e alta tecnologia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white text-xs font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm uppercase tracking-[0.2em] text-[#c5a880] font-medium">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300 font-light">
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  Sobre Nós & Conceito
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-colors">
                  Procedimentos em Destaque
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white hover:underline transition-colors">
                  Protocolos & Dermocosméticos
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white hover:underline transition-colors">
                  Pilares de Atendimento
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#c5a880] hover:text-white transition-colors cursor-pointer text-left"
                >
                  Agendar Consulta Online
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm uppercase tracking-[0.2em] text-[#c5a880] font-medium">
              Atendimento & Contato
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300 font-light">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block">WhatsApp Oficial:</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-medium tracking-wider"
                  >
                    Conversar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block">Horário de Funcionamento:</span>
                  <span>Seg a Sex: 08h às 20h | Sáb: 08h às 14h</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block">Localização:</span>
                  <span>Espaço de Beleza & Saúde Integrativa • Atendimento com Hora Marcada</span>
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
            <span>Atendimento exclusivo e personalizado via WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
