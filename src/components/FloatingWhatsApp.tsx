import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
<<<<<<< HEAD
import { getWhatsAppUrl } from '../data/aestheticData';
=======
import { WHATSAPP_FORMATTED, getWhatsAppUrl } from '../data/aestheticData';
>>>>>>> 388faeab63f7a10fd6f023cf290be4b436a8350b

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const defaultMsg = 'Olá! Vim pelo site da Reya Estética e gostaria de mais informações.';

  const handleSend = () => {
    const textToSend = customText.trim() || defaultMsg;
    window.open(getWhatsAppUrl(textToSend), '_blank');
    setIsOpen(false);
    setCustomText('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup Widget */}
      {isOpen && (
        <div
          id="whatsapp-quick-popup"
          className="mb-3 w-80 sm:w-88 bg-[#0d1715] border border-[#c5a880]/40 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 text-white"
        >
          {/* Header */}
          <div className="bg-[#142320] p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c5a880]/50">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=200&auto=format&fit=crop"
                  alt="Reya Atendimento"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#0d1715]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  Reya Estética & Spa
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#25D366]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
<<<<<<< HEAD
                  <span>Online agora • Atendimento exclusivo</span>
=======
                  <span>Online agora • {WHATSAPP_FORMATTED}</span>
>>>>>>> 388faeab63f7a10fd6f023cf290be4b436a8350b
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
              aria-label="Fechar popup WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message preview */}
          <div className="p-4 space-y-3 bg-[#0a1210]/60">
            <div className="bg-[#142320] border border-white/5 rounded-xl rounded-tl-none p-3 text-xs text-zinc-200 shadow-sm">
              <p>
                ✨ Olá! Seja muito bem-vinda(o) à <strong>Reya Estética & Spa</strong>.
              </p>
              <p className="mt-1.5 text-[11px] text-zinc-400">
                Deseja agendar uma sessão de massagem, drenagem, facial ou conhecer nossos pacotes? Como podemos te ajudar hoje?
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              {[
                'Agendar Massagem Relaxante',
                'Limpeza de Pele & Facial',
                'Consultar Pacotes & Preços',
              ].map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    window.open(getWhatsAppUrl(`Olá! Gostaria de ${prompt}.`), '_blank');
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg bg-black/40 hover:bg-[#c5a880]/20 border border-white/5 hover:border-[#c5a880]/30 text-[11px] text-zinc-300 hover:text-white transition-all cursor-pointer"
                >
                  💬 {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Input & Send */}
          <div className="p-3 bg-[#0d1715] border-t border-white/5 flex items-center gap-2">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a880]"
            />
            <button
              onClick={handleSend}
              className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#07130f] transition-colors cursor-pointer"
              aria-label="Enviar mensagem para WhatsApp"
            >
              <Send className="w-3.5 h-3.5 fill-[#07130f]" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 py-3 px-4 sm:px-5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#06120e] shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
        aria-label="Abrir WhatsApp para agendamento"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-[#06120e] text-[#06120e]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#25D366]" />
        </div>

        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
<<<<<<< HEAD
            Fale Conosco
          </span>
          <span className="text-xs font-extrabold tracking-wide font-medium">
            WhatsApp
          </span>
=======
            WhatsApp
          </span>
          <span className="text-xs font-extrabold tracking-wide font-mono">
            {WHATSAPP_FORMATTED}
          </span>
>>>>>>> 388faeab63f7a10fd6f023cf290be4b436a8350b
        </div>
      </button>
    </div>
  );
};
