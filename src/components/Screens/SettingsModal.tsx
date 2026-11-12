import React from 'react';
import { X, ShieldCheck, LogOut, ChevronRight } from 'lucide-react';
import { UserProfile } from '../../types.ts';

interface SettingsModalProps {
  isOpen: boolean;
  user: UserProfile;
  onClose: () => void;
  onLogout: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  user,
  onClose,
  onLogout,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-[3px] transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Modal bottom sheet card */}
      <div
        className="bg-white rounded-t-[32px] p-6 shadow-2xl border-t border-slate-100/80 animate-in slide-in-from-bottom duration-300 text-[#0c2e2c] max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accessible Drag indicator handle */}
        <div className="w-12 h-1.5 bg-slate-200/90 rounded-full mx-auto mb-4" />

        {/* User profile row & 44x44 pt touch-target 'X' close button */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#0d3f3c] text-[#4ee3a5] font-extrabold text-sm flex items-center justify-center shadow-inner shrink-0">
              {user.initials}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-[#0c2e2c] leading-tight truncate">
                {user.name}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium truncate">
                Tu espacio seguro en SSS Bank
              </p>
            </div>
          </div>

          {/* Close button with exact 44x44 pt (44px) touch target for WCAG/Apple HIG mobile accessibility */}
          <button
            onClick={onClose}
            type="button"
            aria-label="Cerrar modal"
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4ee3a5]/50 shrink-0"
          >
            <X size={18} strokeWidth={2.2} />
          </button>
        </div>

        {/* Section title */}
        <div className="mt-4">
          <h4 id="settings-modal-title" className="text-sm font-extrabold text-[#0c2e2c]">
            Configuración
          </h4>
        </div>

        {/* End-to-end security badge card */}
        <div className="mt-3 bg-[#e8fbf3] border border-[#a7f3d0] rounded-2xl p-3.5 flex items-start gap-2.5 shadow-sm">
          <div className="text-[#10b981] mt-0.5 shrink-0">
            <ShieldCheck size={18} strokeWidth={2.2} />
          </div>
          <p className="text-xs text-[#064e3b] font-medium leading-relaxed">
            Tu cuenta está protegida con cifrado de extremo a extremo.
          </p>
        </div>

        {/* Actions list */}
        <div className="mt-3.5 divide-y divide-slate-100">
          <button
            type="button"
            onClick={onLogout}
            className="w-full min-h-[44px] flex items-center justify-between py-3 px-3 rounded-xl hover:bg-red-50/70 active:bg-red-100/60 text-slate-700 hover:text-red-600 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <LogOut size={16} className="text-slate-500 group-hover:text-red-500 transition-colors" />
              <span className="text-xs font-semibold">Cerrar sesión</span>
            </div>
            <ChevronRight size={16} className="text-slate-400 group-hover:text-red-500 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};
