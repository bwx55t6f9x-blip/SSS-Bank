import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
  bottomNav?: React.ReactNode;
  modal?: React.ReactNode;
  activeScreenId: string;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  children,
  bottomNav,
  modal,
  activeScreenId,
}) => {
  return (
    <div className="relative mx-auto w-[360px] sm:w-[380px] h-[780px] sm:h-[800px] max-h-[92vh] bg-[#031516] rounded-[46px] p-2.5 shadow-[0_20px_70px_rgba(0,0,0,0.85)] border-[6px] border-[#153635] flex flex-col transition-all">
      {/* Outer subtle edge shine */}
      <div className="absolute inset-0 rounded-[40px] pointer-events-none border border-white/10" />

      {/* Screen container */}
      <div className="relative flex-1 bg-[#062121] rounded-[36px] overflow-hidden flex flex-col shadow-inner">
        {/* iOS-style Status Bar */}
        <div className="px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-300 select-none shrink-0 z-30">
          <span>9:41</span>
          {/* Dynamic Island / speaker */}
          <div className="w-20 h-4 bg-black rounded-full mx-auto flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a1a1a] mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1b3d3a]" />
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Signal size={12} strokeWidth={2.2} />
            <Wifi size={12} strokeWidth={2.2} />
            <BatteryMedium size={14} strokeWidth={2.2} />
          </div>
        </div>

        {/* Scrollable screen content */}
        <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative min-h-0">
          {children}
        </div>

        {/* Fixed Bottom Navigation */}
        {bottomNav}

        {/* Modal Overlay if open */}
        {modal}

        {/* Home Indicator bar */}
        <div className="py-1 bg-white flex justify-center shrink-0 z-40 border-t border-slate-100">
          <div className="w-28 h-1 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};
