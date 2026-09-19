import React from 'react';
import { X, MessageCircle, Clock, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { ServiceItem, getWhatsAppUrl } from '../data/aestheticData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappMessage = `Olá! Tenho interesse no procedimento de ${service.title} (${service.subtitle}). Poderia me informar os horários disponíveis e valores?`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div
      id="service-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="service-modal-card"
        className="relative w-full max-w-xl bg-[#0e1917] border border-[#c5a880]/40 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-service-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1917] via-[#0e1917]/30 to-transparent" />

          {/* Badge */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#e2cca6] text-[10px] tracking-widest uppercase font-medium flex items-center gap-1.5 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[#c5a880]" />
              {service.title}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-zinc-300 text-[10px] tracking-wider flex items-center gap-1.5 backdrop-blur-md">
              <Clock className="w-3 h-3 text-[#c5a880]" />
              {service.duration}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-medium">
              {service.subtitle}
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mt-2">
              {service.description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-medium block mb-2.5">
              Principais Benefícios
            </span>
            <div className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 text-xs text-zinc-300 font-light flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#c5a880] font-medium block">Indicação clínica:</span>
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
              className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#0c1413] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4 fill-[#0c1413]" />
              <span>Agendar no WhatsApp</span>
            </a>
            <p className="text-center text-[10px] text-zinc-400 mt-2 font-light">
              Resposta rápida por nossas fisioterapeutas e esteticistas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
