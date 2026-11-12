import React from 'react';
import { Calendar, ArrowUpRight, ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react';
import { SssLogo } from '../SssLogo.tsx';
import { BankAccount, UserProfile } from '../../types.ts';
import { formatCurrency } from '../../utils/finance.ts';

interface DashboardScreenProps {
  user: UserProfile;
  account: BankAccount;
  onNavigateToGoals: () => void;
  onOpenSettings: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  user,
  account,
  onNavigateToGoals,
  onOpenSettings,
}) => {
  return (
    <div className="flex-1 flex flex-col bg-[#072424] text-white overflow-y-auto no-scrollbar relative min-h-full">
      {/* Top Header */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between">
        <SssLogo size="md" />
        <button
          onClick={onOpenSettings}
          type="button"
          aria-label="Abrir configuración y perfil"
          className="w-8 h-8 rounded-full bg-[#0d3d3a] border border-[#23635e] flex items-center justify-center text-xs font-bold text-[#5eead4] hover:bg-[#124b47] transition-all cursor-pointer shadow-sm"
        >
          {user.initials}
        </button>
      </div>

      {/* Greeting & Date */}
      <div className="px-5 pt-1 pb-3 flex items-start justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#7dd3c0] uppercase">
            {account.asOfDate.toUpperCase()}
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <h1 className="text-xl font-extrabold text-white tracking-tight">
              Hola, {user.name.split(' ')[0]}
            </h1>
            <span className="text-[#4ee3a5] text-base leading-none">✻</span>
          </div>
        </div>

        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0b3332] border border-[#1b5853] text-[10px] text-slate-300">
          <Calendar size={11} className="text-[#4ee3a5]" />
          <span>Mayo 2025</span>
        </div>
      </div>

      {/* Total Balance Card */}
      <div className="px-5 pb-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0e4441] to-[#082a29] border border-[#1e5c57] p-4 shadow-lg shadow-black/20">
          {/* Subtle concentric arc background decoration */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute right-4 bottom-4 w-20 h-20 rounded-full border border-white/10 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-wider text-[#9de0d2] uppercase">
              SALDO TOTAL DISPONIBLE
            </span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#4ee3a5]">
              <ArrowUpRight size={15} />
            </div>
          </div>

          <div className="relative z-10 mt-2">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {formatCurrency(account.balance)}
            </span>
          </div>

          <div className="relative z-10 mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#4ee3a5] text-[#04201e] text-[10px] font-bold shadow-sm">
            <ArrowUpRight size={12} strokeWidth={2.5} />
            <span>+{account.lastMonthChangePercent}% vs. el mes pasado</span>
          </div>
        </div>
      </div>

      {/* Lower White Panorama Container */}
      <div className="flex-1 bg-[#f3f7f6] rounded-t-[28px] px-5 pt-5 pb-4 text-[#0d2e2c] flex flex-col justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div>
          {/* Tu Panorama Section */}
          <div>
            <span className="text-[10px] font-extrabold tracking-wider text-[#0e5c54] uppercase block">
              TU PANORAMA
            </span>
            <div className="flex items-center justify-between mt-0.5">
              <h2 className="text-base font-bold text-[#0c2e2c]">
                Resumen mensual
              </h2>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider">
                MAYO 2025
              </span>
            </div>

            {/* Income & Expense Dual Grid Cards */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {/* Ingresos Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#e8fbf3] flex items-center justify-center text-[#10b981] mb-2">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Ingresos</span>
                  <div className="text-sm font-bold text-[#0c2e2c] mt-0.5">
                    {formatCurrency(account.monthlyIncome)}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-2 flex items-center gap-1">
                  <span>Este mes</span>
                  <ArrowUpRight size={11} className="text-[#10b981]" />
                </div>
              </div>

              {/* Gastos Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#fff1ec] flex items-center justify-center text-[#f97316] mb-2">
                    <ArrowDownRight size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Gastos</span>
                  <div className="text-sm font-bold text-[#0c2e2c] mt-0.5">
                    {formatCurrency(account.monthlyExpenses)}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-2 flex items-center gap-1">
                  <span>Este mes</span>
                  <ArrowDownRight size={11} className="text-[#f97316]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bajo Control Section */}
          <div className="mt-4">
            <span className="text-[10px] font-extrabold tracking-wider text-[#0e5c54] uppercase block">
              BAJO CONTROL
            </span>
            <div className="flex items-center justify-between mt-1">
              <h3 className="text-sm font-bold text-[#0c2e2c]">
                Tus presupuestos
              </h3>
              <button
                type="button"
                onClick={onNavigateToGoals}
                className="text-xs text-[#0f766e] hover:text-[#0a524c] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Ver detalles</span>
                <ArrowRight size={13} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
