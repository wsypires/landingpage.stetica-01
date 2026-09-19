import React from 'react';
import { X, MessageCircle, Clock, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { ServiceItem, getWhatsAppUrl } from '../data/aestheticData';
import { useTheme } from '../context/ThemeContext';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!service) return null;

  const whatsappMessage = `Olá! Tenho interesse no procedimento de ${service.title} (${service.subtitle}). Poderia me informar os horários disponíveis e valores?`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div
      id="service-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="service-modal-card"
        className={`relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border transition-colors ${
          isDark
            ? 'bg-[#12201d] border-[#c5a880]/30 text-[#e0e7e5]'
            : 'bg-white border-[#E7DFD4] text-[#28321D]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-service-modal-btn"
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full border shadow-sm transition-colors cursor-pointer ${
            isDark
              ? 'bg-[#0c1413]/80 hover:bg-[#0c1413] text-[#c5a880] border-[#c5a880]/30'
              : 'bg-white/80 hover:bg-white text-[#354128] border-[#E7DFD4]'
          }`}
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-100"
          />
          <div
            className={`absolute inset-0 transition-colors ${
              isDark
                ? 'bg-gradient-to-t from-[#12201d] via-[#12201d]/20 to-transparent'
                : 'bg-gradient-to-t from-white via-white/20 to-transparent'
            }`}
          />

          {/* Badges */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold flex items-center gap-1.5 shadow-xs border ${
                isDark
                  ? 'bg-[#0c1413]/90 border-[#c5a880]/40 text-[#c5a880]'
                  : 'bg-white/90 border-[#9A7240]/40 text-[#9A7240]'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              {service.title}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[10px] tracking-wider flex items-center gap-1.5 shadow-xs font-medium border ${
                isDark
                  ? 'bg-[#0c1413]/90 border-[#1e3831] text-[#a2b5af]'
                  : 'bg-white/90 border-[#E7DFD4] text-[#635C50]'
              }`}
            >
              <Clock className={`w-3 h-3 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`} />
              {service.duration}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3
              className={`font-cormorant text-2xl sm:text-3xl font-medium transition-colors ${
                isDark ? 'text-[#f3f7f6]' : 'text-[#28321D]'
              }`}
            >
              {service.subtitle}
            </h3>
            <p
              className={`text-xs sm:text-sm font-light leading-relaxed mt-2 transition-colors ${
                isDark ? 'text-[#a2b5af]' : 'text-[#554F44]'
              }`}
            >
              {service.description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <span
              className={`text-[11px] uppercase tracking-[0.2em] font-semibold block mb-2.5 transition-colors ${
                isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
              }`}
            >
              Principais Benefícios
            </span>
            <div className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 text-xs font-normal transition-colors ${
                    isDark ? 'text-[#e0e7e5]' : 'text-[#554F44]'
                  }`}
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
                    }`}
                  />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendation */}
          <div
            className={`border rounded-xl p-3.5 text-xs flex items-start gap-2.5 transition-colors ${
              isDark
                ? 'bg-[#0e1917] border-[#1e3831] text-[#a2b5af]'
                : 'bg-[#FAF7F2] border-[#E8DFD4] text-[#554F44]'
            }`}
          >
            <ShieldCheck
              className={`w-4 h-4 shrink-0 mt-0.5 ${
                isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'
              }`}
            />
            <div>
              <span
                className={`font-semibold block ${isDark ? 'text-[#c5a880]' : 'text-[#354128]'}`}
              >
                Indicação clínica:
              </span>
              <span>{service.recommendedFor}</span>
            </div>
          </div>

          {/* WhatsApp Direct Action Button */}
          <div className="pt-2">
            <a
              id="modal-whatsapp-action"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer ${
                isDark
                  ? 'bg-[#c5a880] hover:bg-[#d8bf9e] text-[#0c1413]'
                  : 'btn-reya-whatsapp'
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agendar no WhatsApp</span>
            </a>
            <p
              className={`text-center text-[11px] mt-2.5 font-light ${
                isDark ? 'text-[#8a9e98]' : 'text-[#7A7264]'
              }`}
            >
              Resposta rápida por nossas esteticistas especializadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
