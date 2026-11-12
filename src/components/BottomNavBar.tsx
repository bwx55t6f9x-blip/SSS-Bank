import React from 'react';
import { Home, History, Target, Settings } from 'lucide-react';
import { ScreenId } from '../types.ts';

interface BottomNavBarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenSettings: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentScreen,
  onNavigate,
  onOpenSettings,
}) => {
  const navItems = [
    {
      id: 'dashboard' as ScreenId,
      label: 'Inicio',
      icon: Home,
      action: () => onNavigate('dashboard'),
    },
    {
      id: 'history' as ScreenId,
      label: 'Historial',
      icon: History,
      action: () => onNavigate('history'),
    },
    {
      id: 'goals' as ScreenId,
      label: 'Metas',
      icon: Target,
      action: () => onNavigate('goals'),
    },
    {
      id: 'settings' as any,
      label: 'Configuración',
      icon: Settings,
      action: onOpenSettings,
    },
  ];

  return (
    <nav
      aria-label="Navegación principal"
      className="bg-white border-t border-emerald-900/10 px-4 py-2 flex items-center justify-around shadow-sm shrink-0"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.label}
            onClick={item.action}
            type="button"
            className={`flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-xl transition-all ${
              isActive
                ? 'text-[#0e5c54] font-semibold'
                : 'text-slate-400 hover:text-slate-600 font-normal'
            }`}
          >
            <div className={`p-1 rounded-lg ${isActive ? 'text-[#0f766e]' : 'text-slate-400'}`}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
            </div>
            <span className="text-[11px] tracking-tight">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
