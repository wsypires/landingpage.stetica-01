import React, { useState } from 'react';
import { X, MessageCircle, Sparkles, Clock, User } from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/aestheticData';
import { useTheme } from '../context/ThemeContext';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [preferredShift, setPreferredShift] = useState<'manha' | 'tarde' | 'sabado'>('tarde');
  const [notes, setNotes] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-300 border transition-colors ${
          isDark
            ? 'bg-[#12201d] border-[#c5a880]/30 text-[#e0e7e5]'
            : 'bg-white border-[#E8DFD4] text-[#28321D]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-booking-modal-btn"
          onClick={onClose}
          className={`absolute top-5 right-5 p-1.5 rounded-full transition-colors cursor-pointer ${
            isDark
              ? 'bg-[#1a2e2a] hover:bg-[#233d37] text-[#c5a880]'
              : 'bg-[#FAF7F2] hover:bg-[#F3ECE0] text-[#554F44]'
          }`}
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div
            className={`inline-flex p-2.5 rounded-full border mb-3 ${
              isDark
                ? 'bg-[#c5a880]/10 border-[#c5a880]/30 text-[#c5a880]'
                : 'bg-[#354128]/10 border-[#354128]/20 text-[#354128]'
            }`}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <h3
            className={`font-cormorant text-2xl sm:text-3xl font-medium ${
              isDark ? 'text-[#f3f7f6]' : 'text-[#28321D]'
            }`}
          >
            Agendar Horário
          </h3>
          <p
            className={`text-xs mt-1 font-light ${
              isDark ? 'text-[#a2b5af]' : 'text-[#6E6659]'
            }`}
          >
            Preencha seus dados para iniciar o atendimento direto pelo WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              className={`block text-xs uppercase tracking-wider font-medium mb-1.5 flex items-center gap-1.5 ${
                isDark ? 'text-[#d8bf9e]' : 'text-[#4E473B]'
              }`}
            >
              <User className={`w-3.5 h-3.5 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`} />
              <span>Seu Nome</span>
            </label>
            <input
              type="text"
              required
              placeholder="Como prefere ser chamada(o)?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                isDark
                  ? 'bg-[#0c1413] border-[#1e3831] focus:border-[#c5a880] text-white placeholder-[#5e7771]'
                  : 'bg-[#FAF7F2] border-[#E7DFD4] focus:border-[#9A7240] text-[#28321D] placeholder-[#9E9689]'
              }`}
            />
          </div>

          {/* Procedure */}
          <div>
            <label
              className={`block text-xs uppercase tracking-wider font-medium mb-1.5 flex items-center gap-1.5 ${
                isDark ? 'text-[#d8bf9e]' : 'text-[#4E473B]'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`} />
              <span>Procedimento Desejado</span>
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors cursor-pointer ${
                isDark
                  ? 'bg-[#0c1413] border-[#1e3831] focus:border-[#c5a880] text-white'
                  : 'bg-[#FAF7F2] border-[#E7DFD4] focus:border-[#9A7240] text-[#28321D]'
              }`}
            >
              {SERVICES.map((s) => (
                <option
                  key={s.id}
                  value={s.id}
                  className={isDark ? 'bg-[#0c1413] text-white' : 'bg-white text-[#28321D]'}
                >
                  {s.title} — {s.subtitle}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Turn / Period */}
          <div>
            <label
              className={`block text-xs uppercase tracking-wider font-medium mb-1.5 flex items-center gap-1.5 ${
                isDark ? 'text-[#d8bf9e]' : 'text-[#4E473B]'
              }`}
            >
              <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`} />
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
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    preferredShift === shift.id
                      ? isDark
                        ? 'bg-[#c5a880] border-[#c5a880] text-[#0c1413] font-bold shadow-xs'
                        : 'bg-[#354128] border-[#354128] text-white shadow-xs'
                      : isDark
                      ? 'bg-[#0c1413] border-[#1e3831] text-[#9cb2ac] hover:text-white'
                      : 'bg-[#FAF7F2] border-[#E7DFD4] text-[#635B4E] hover:text-[#28321D]'
                  }`}
                >
                  {shift.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label
              className={`block text-xs uppercase tracking-wider font-medium mb-1.5 ${
                isDark ? 'text-[#d8bf9e]' : 'text-[#4E473B]'
              }`}
            >
              Observações ou dúvidas (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Tenho interesse no pacote facial, pele sensível..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={`w-full px-4 py-2 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                isDark
                  ? 'bg-[#0c1413] border-[#1e3831] focus:border-[#c5a880] text-white placeholder-[#5e7771]'
                  : 'bg-[#FAF7F2] border-[#E7DFD4] focus:border-[#9A7240] text-[#28321D] placeholder-[#9E9689]'
              }`}
            />
          </div>

          {/* WhatsApp Submit Action */}
          <div className="pt-3">
            <button
              type="submit"
              id="confirm-booking-whatsapp-btn"
              className={`w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all ${
                isDark
                  ? 'bg-[#c5a880] hover:bg-[#d8bf9e] text-[#0c1413]'
                  : 'btn-reya-whatsapp'
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Confirmar pelo WhatsApp</span>
            </button>
            <p
              className={`text-center text-[10px] mt-2 font-light ${
                isDark ? 'text-[#8a9e98]' : 'text-[#7A7264]'
              }`}
            >
              Você será direcionado diretamente ao WhatsApp para confirmação do horário.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
