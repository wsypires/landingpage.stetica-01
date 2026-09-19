import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  variant?: 'compact' | 'pill' | 'floating';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'pill', className = '' }) => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'floating') {
    return (
      <div
        id="floating-palette-switcher"
        className={`fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 p-1.5 rounded-full backdrop-blur-md shadow-xl border transition-all duration-300 ${
          isDark
            ? 'bg-[#12201d]/90 border-[#c5a880]/30 shadow-black/40'
            : 'bg-white/95 border-[#E2D8CC] shadow-[#354128]/10'
        } ${className}`}
      >
        <div className="flex items-center gap-1.5 pl-2.5 pr-1 text-[11px] font-medium tracking-wide">
          <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-[#c5a880]' : 'text-[#9A7240]'}`} />
          <span className={isDark ? 'text-zinc-300' : 'text-[#4A4337]'}>Paleta:</span>
        </div>

        {/* Option 1: Oliva & Linho (Natural) */}
        <button
          onClick={() => setTheme('light')}
          title="Ativar Paleta Clara: Verde Oliva & Linho Natural"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
            !isDark
              ? 'bg-[#354128] text-white shadow-sm scale-102'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FAF7F2] border border-[#9A7240]" />
          <span>Oliva & Linho</span>
        </button>

        {/* Option 2: Esmeralda & Ouro (Noturno) */}
        <button
          onClick={() => setTheme('dark')}
          title="Ativar Paleta Escura: Verde Esmeralda & Ouro Imperial"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
            isDark
              ? 'bg-[#c5a880] text-[#0c1413] font-bold shadow-sm scale-102'
              : 'text-[#655E52] hover:text-[#28321D] hover:bg-[#354128]/5'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0c1413] border border-[#c5a880]" />
          <span>Esmeralda & Ouro</span>
        </button>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <button
        onClick={toggleTheme}
        title={isDark ? 'Mudar para Paleta Oliva & Linho' : 'Mudar para Paleta Esmeralda & Ouro'}
        className={`relative flex items-center justify-center p-2 rounded-full border transition-all duration-300 cursor-pointer ${
          isDark
            ? 'bg-[#152723] border-[#c5a880]/40 text-[#c5a880] hover:bg-[#1a342e]'
            : 'bg-[#FAF7F2] border-[#E2D8CC] text-[#354128] hover:bg-[#F3ECE0]'
        } ${className}`}
        aria-label="Alternar Paleta de Cores"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#c5a880] animate-spin-slow" />
        ) : (
          <Moon className="w-4 h-4 text-[#354128]" />
        )}
      </button>
    );
  }

  // Default 'pill' variant (Header navigation)
  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-full border transition-all duration-300 ${
        isDark
          ? 'bg-[#0f1b18] border-[#c5a880]/30'
          : 'bg-[#F2ECE1] border-[#DFD5C6]'
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        title="Paleta Clara (Oliva & Linho)"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
          !isDark
            ? 'bg-[#354128] text-white shadow-xs'
            : 'text-zinc-400 hover:text-white'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#D8BF9E]" />
        <span>Oliva</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        title="Paleta Escura (Esmeralda & Ouro)"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
          isDark
            ? 'bg-[#c5a880] text-[#0c1413] shadow-xs font-bold'
            : 'text-[#6A6255] hover:text-[#354128]'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#0c1413] border border-[#c5a880]" />
        <span>Esmeralda</span>
      </button>
    </div>
  );
};
