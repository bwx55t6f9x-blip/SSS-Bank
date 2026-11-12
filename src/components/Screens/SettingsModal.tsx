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
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal sheet card */}
      <div
        className="bg-white rounded-t-[32px] p-5 shadow-2xl border-t border-slate-100 animate-in slide-in-from-bottom duration-300 text-[#0c2e2c]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />

        {/* User profile row */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#0d3f3c] text-[#4ee3a5] font-extrabold text-sm flex items-center justify-center shadow-inner">
              {user.initials}
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0c2e2c] leading-tight">
                {user.name}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                Tu espacio seguro en SSS Bank
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Cerrar modal"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-black transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Section title */}
        <div className="mt-4">
          <h4 className="text-sm font-extrabold text-[#0c2e2c]">
            Configuración
          </h4>
        </div>

        {/* End-to-end security badge card */}
        <div className="mt-3 bg-[#e8fbf3] border border-[#a7f3d0] rounded-2xl p-3.5 flex items-start gap-2.5">
          <div className="text-[#10b981] mt-0.5 shrink-0">
            <ShieldCheck size={18} strokeWidth={2.2} />
          </div>
          <p className="text-xs text-[#064e3b] font-medium leading-relaxed">
            Tu cuenta está protegida con cifrado de extremo a extremo.
          </p>
        </div>

        {/* Actions list */}
        <div className="mt-3 divide-y divide-slate-100">
          <button
            type="button"
            onClick={onLogout}
            className="w-full flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-red-50/60 text-slate-700 hover:text-red-600 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <LogOut size={16} className="text-slate-500" />
              <span className="text-xs font-semibold">Cerrar sesión</span>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
