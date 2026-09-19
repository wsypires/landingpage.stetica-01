import React, { useState } from 'react';
import { X, MessageCircle, Sparkles, Calendar, Clock, User, Check } from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/aestheticData';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [preferredShift, setPreferredShift] = useState<'manha' | 'tarde' | 'sabado'>('tarde');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const shiftLabel =
      preferredShift === 'manha' ? 'Manhã' : preferredShift === 'tarde' ? 'Tarde' : 'Sábado (Horário Especial)';

    let msg = `Olá! Meu nome é ${name || 'Cliente'} e gostaria de agendar um atendimento na Reya Estética & Spa.\n`;
    msg += `• Procedimento de interesse: ${currentService.title} (${currentService.subtitle})\n`;
    msg += `• Turno de preferência: ${shiftLabel}\n`;
    if (notes.trim()) {
      msg += `• Observações: ${notes.trim()}\n`;
    }
    msg += `Poderiam me informar os próximos horários disponíveis?`;

    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className="relative w-full max-w-lg bg-[#0e1816] border border-[#c5a880]/50 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-300 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-booking-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-zinc-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-2.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#c5a880] mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-2xl text-white font-medium">
            Agendar Horário
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Preencha seus dados para iniciar o agendamento direto pelo WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Seu Nome</span>
            </label>
            <input
              type="text"
              required
              placeholder="Como prefere ser chamada(o)?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#c5a880] text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Procedure */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Procedimento Desejado</span>
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-[#c5a880] text-sm text-white focus:outline-none transition-colors"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id} className="bg-[#0e1816] text-white">
                  {s.title} — {s.subtitle}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Turn / Period */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Turno de Preferência</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'manha', label: 'Manhã' },
                { id: 'tarde', label: 'Tarde' },
                { id: 'sabado', label: 'Sábado' },
              ].map((shift) => (
                <button
                  type="button"
                  key={shift.id}
                  onClick={() => setPreferredShift(shift.id as any)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    preferredShift === shift.id
                      ? 'bg-[#c5a880]/20 border-[#c5a880] text-[#e2cca6]'
                      : 'bg-black/30 border-white/10 text-zinc-400 hover:text-white'
                  }`}
                >
                  {shift.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-1.5">
              Observações ou dúvidas (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Tenho pele sensível, gostaria de pacote para 4 sessões..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/10 focus:border-[#c5a880] text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* WhatsApp Submit Action */}
          <div className="pt-3">
            <button
              type="submit"
              id="confirm-booking-whatsapp-btn"
              className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#07130f] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-[#25D366]/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#07130f]" />
              <span>Confirmar pelo WhatsApp</span>
            </button>
            <p className="text-center text-[10px] text-zinc-400 mt-2 font-light">
              Você será direcionado diretamente ao WhatsApp para confirmação do horário.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
