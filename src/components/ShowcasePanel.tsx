import React from 'react';
import { ShieldCheck, Sparkles, Smartphone, Code2, BookOpen, Layers } from 'lucide-react';
import { ScreenId } from '../types.ts';

interface ShowcasePanelProps {
  currentScreen: ScreenId;
  isSettingsOpen: boolean;
  onSelectScreen: (screen: ScreenId, openSettings?: boolean) => void;
  onOpenExpoDocs: () => void;
}

export const ShowcasePanel: React.FC<ShowcasePanelProps> = ({
  currentScreen,
  isSettingsOpen,
  onSelectScreen,
  onOpenExpoDocs,
}) => {
  const getScreenNumber = () => {
    if (isSettingsOpen) return '05';
    switch (currentScreen) {
      case 'login':
        return '01';
      case 'dashboard':
        return '02';
      case 'history':
        return '03';
      case 'goals':
        return '04';
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-14 max-w-xl z-10">
      {/* Brand Header */}
      <div>
        <div className="flex items-center justify-between pb-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif]">
              S<span className="text-[#4ee3a5]">/</span>S
            </span>
          </div>
          <span className="text-[11px] font-bold tracking-widest text-[#7dd3c0] uppercase">
            FINANZAS EN CLARO
          </span>
        </div>

        {/* Main Brand Messaging */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#5eead4] uppercase">
            <span className="w-4 h-[2px] bg-[#4ee3a5]" />
            <span>BANCA QUE AVANZA CONTIGO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-['Space_Grotesk',sans-serif]">
            Tu dinero. <br />
            <span className="text-[#4ee3a5]">Tu siguiente</span> <br />
            <span className="text-[#4ee3a5]">gran paso.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md pt-2">
            Todo lo que necesitas para entender tu presente y diseñar tu futuro financiero, en un solo lugar.
          </p>

          {/* Value Prop Badge */}
          <div className="pt-4">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#082a29]/80 border border-[#1b5853]/60 backdrop-blur-sm max-w-md">
              <div className="w-8 h-8 rounded-xl bg-[#0e3f3d] text-[#4ee3a5] flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                Diseñado para darte claridad. <br />
                <span className="text-slate-400">Protegido para darte tranquilidad.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Selector & Project Controls */}
      <div className="pt-8 space-y-4">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#7dd3c0] uppercase block mb-2">
            PANTALLAS DEL SISTEMA (NAVEGACIÓN DIRECTA)
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSelectScreen('login', false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentScreen === 'login' && !isSettingsOpen
                  ? 'bg-[#4ee3a5] text-[#03201e] shadow-md shadow-[#4ee3a5]/20'
                  : 'bg-[#082a29] text-slate-300 border border-[#1b5853] hover:bg-[#0c3938]'
              }`}
            >
              01 · Login
            </button>

            <button
              onClick={() => onSelectScreen('dashboard', false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentScreen === 'dashboard' && !isSettingsOpen
                  ? 'bg-[#4ee3a5] text-[#03201e] shadow-md shadow-[#4ee3a5]/20'
                  : 'bg-[#082a29] text-slate-300 border border-[#1b5853] hover:bg-[#0c3938]'
              }`}
            >
              02 · Inicio
            </button>

            <button
              onClick={() => onSelectScreen('history', false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentScreen === 'history' && !isSettingsOpen
                  ? 'bg-[#4ee3a5] text-[#03201e] shadow-md shadow-[#4ee3a5]/20'
                  : 'bg-[#082a29] text-slate-300 border border-[#1b5853] hover:bg-[#0c3938]'
              }`}
            >
              03 · Historial
            </button>

            <button
              onClick={() => onSelectScreen('goals', false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentScreen === 'goals' && !isSettingsOpen
                  ? 'bg-[#4ee3a5] text-[#03201e] shadow-md shadow-[#4ee3a5]/20'
                  : 'bg-[#082a29] text-slate-300 border border-[#1b5853] hover:bg-[#0c3938]'
              }`}
            >
              04 · Metas
            </button>

            <button
              onClick={() => onSelectScreen('dashboard', true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isSettingsOpen
                  ? 'bg-[#4ee3a5] text-[#03201e] shadow-md shadow-[#4ee3a5]/20'
                  : 'bg-[#082a29] text-slate-300 border border-[#1b5853] hover:bg-[#0c3938]'
              }`}
            >
              05 · Configuración
            </button>
          </div>
        </div>

        {/* Expo Go Instructions button */}
        <div className="pt-2">
          <button
            onClick={onOpenExpoDocs}
            className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0c3a38] to-[#124d4a] border border-[#23706a] hover:border-[#4ee3a5] text-white text-xs font-bold shadow-lg transition-all cursor-pointer hover:shadow-[#4ee3a5]/10"
          >
            <Smartphone size={16} className="text-[#4ee3a5]" />
            <span>Guía de despliegue en Expo Go (SDK 58)</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-[#13423f] flex items-center justify-between text-xs text-slate-400">
          <span>SSS BANK © 2025</span>
          <div className="flex items-center gap-1.5 text-[#5eead4]">
            <span className="w-2 h-2 rounded-full bg-[#4ee3a5] animate-ping" />
            <span className="font-semibold tracking-wider text-[11px]">
              PROTOTIPO INTERACTIVO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
