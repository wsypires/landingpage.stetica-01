import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { getWhatsAppUrl } from '../data/aestheticData';
import { useTheme } from '../context/ThemeContext';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
          className={`mb-3 w-80 sm:w-88 border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 transition-colors ${
            isDark
              ? 'bg-[#12201d] border-[#c5a880]/30 text-[#e0e7e5]'
              : 'bg-white border-[#E8DFD4] text-[#28321D]'
          }`}
        >
          {/* Header */}
          <div
            className={`p-4 flex items-center justify-between transition-colors ${
              isDark ? 'bg-[#0a1412] text-white border-b border-[#1e3831]' : 'bg-[#354128] text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/30">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=200&auto=format&fit=crop"
                  alt="Reya Atendimento"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#354128]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  Reya Estética & Spa
                </h4>
                <div
                  className={`flex items-center gap-1.5 text-[10px] ${
                    isDark ? 'text-[#c5a880]' : 'text-[#D8BF9E]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online agora • Atendimento exclusivo</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 cursor-pointer"
              aria-label="Fechar popup WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message preview */}
          <div
            className={`p-4 space-y-3 transition-colors ${
              isDark ? 'bg-[#0e1917]' : 'bg-[#FAF7F2]'
            }`}
          >
            <div
              className={`border rounded-xl rounded-tl-none p-3 text-xs shadow-xs transition-colors ${
                isDark
                  ? 'bg-[#152723] border-[#1e3831] text-[#d6e2df]'
                  : 'bg-white border-[#E8DFD4] text-[#554F44]'
              }`}
            >
              <p>
                ✨ Olá! Seja muito bem-vinda(o) à <strong>Reya Estética & Spa</strong>.
              </p>
              <p
                className={`mt-1.5 text-[11px] ${
                  isDark ? 'text-[#9cb2ac]' : 'text-[#7A7264]'
                }`}
              >
                Deseja agendar uma sessão de massagem, tratamento facial, corporal ou conhecer nossos pacotes? Como podemos te ajudar hoje?
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
                  className={`w-full text-left px-3 py-1.5 rounded-lg border text-[11px] transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#13201d] hover:bg-[#1a2d28] border-[#1e3831] hover:border-[#c5a880]/40 text-[#c5a880]'
                      : 'bg-white hover:bg-[#354128]/5 border-[#E8DFD4] hover:border-[#354128]/40 text-[#4E473B]'
                  }`}
                >
                  💬 {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Input & Send */}
          <div
            className={`p-3 border-t flex items-center gap-2 transition-colors ${
              isDark ? 'bg-[#12201d] border-[#1e3831]' : 'bg-white border-[#E8DFD4]'
            }`}
          >
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className={`flex-1 border rounded-xl px-3 py-2 text-xs focus:outline-none transition-colors ${
                isDark
                  ? 'bg-[#0c1413] border-[#1e3831] text-white placeholder-[#5e7771] focus:border-[#c5a880]'
                  : 'bg-[#FAF7F2] border-[#E8DFD4] text-[#28321D] placeholder-[#9E9689] focus:border-[#9A7240]'
              }`}
            />
            <button
              onClick={handleSend}
              className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                isDark
                  ? 'bg-[#c5a880] hover:bg-[#d8bf9e] text-[#0c1413]'
                  : 'bg-[#354128] hover:bg-[#27311D] text-white'
              }`}
              aria-label="Enviar mensagem para WhatsApp"
            >
              <Send className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-3 py-3 px-4 sm:px-5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none ${
          isDark
            ? 'bg-[#c5a880] hover:bg-[#d8bf9e] text-[#0c1413]'
            : 'bg-[#354128] hover:bg-[#27311D] text-white'
        }`}
        aria-label="Abrir WhatsApp para agendamento"
      >
        <span
          className={`absolute -inset-1 rounded-full animate-ping pointer-events-none ${
            isDark ? 'bg-[#c5a880]/20' : 'bg-[#354128]/20'
          }`}
        />

        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span
            className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 ${
              isDark ? 'border-[#c5a880]' : 'border-[#354128]'
            }`}
          />
        </div>

        <div className="flex flex-col text-left leading-tight">
          <span
            className={`text-[9px] uppercase font-medium tracking-wider ${
              isDark ? 'text-[#0c1413]/70' : 'text-white/80'
            }`}
          >
            AGENDAMENTO
          </span>
          <span className="text-xs font-semibold tracking-wide">
            WhatsApp
          </span>
        </div>
      </button>
    </div>
  );
};
