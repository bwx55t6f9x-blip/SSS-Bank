import React, { useState } from 'react';
import {
  ChevronLeft,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  ShoppingBag,
  Home,
  Zap,
  Briefcase,
  Utensils,
} from 'lucide-react';
import { SssLogo } from '../SssLogo.tsx';
import { TransactionItem } from '../../types.ts';
import { filterTransactions, formatCurrency } from '../../utils/finance.ts';

interface HistoryScreenProps {
  transactions: TransactionItem[];
  netFlow: number;
  onBackToHome: () => void;
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({
  transactions,
  netFlow,
  onBackToHome,
}) => {
  const [activeFilter, setActiveFilter] = useState<'todas' | 'ingresos' | 'gastos'>('todas');

  const filtered = filterTransactions(transactions, activeFilter);

  const getCategoryIcon = (iconType: TransactionItem['iconType'], type: 'ingreso' | 'gasto') => {
    switch (iconType) {
      case 'income':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#e6f9f1] text-[#10b981] flex items-center justify-center shrink-0">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        );
      case 'supermarket':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#ffede6] text-[#f97316] flex items-center justify-center shrink-0">
            <ShoppingBag size={15} />
          </div>
        );
      case 'rent':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#f0ecfc] text-[#8b5cf6] flex items-center justify-center shrink-0">
            <Home size={15} />
          </div>
        );
      case 'services':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#e6f4fe] text-[#0284c7] flex items-center justify-center shrink-0">
            <Zap size={15} />
          </div>
        );
      case 'freelance':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#e6f9f1] text-[#10b981] flex items-center justify-center shrink-0">
            <Briefcase size={15} />
          </div>
        );
      case 'dining':
        return (
          <div className="w-8 h-8 rounded-xl bg-[#fff2e8] text-[#ea580c] flex items-center justify-center shrink-0">
            <Utensils size={15} />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
            {type === 'ingreso' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          </div>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f3f7f6] text-[#0c2e2c] overflow-y-auto no-scrollbar relative min-h-full">
      {/* Top Header */}
      <div className="px-5 pt-4 pb-2 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          type="button"
          aria-label="Regresar al inicio"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-black hover:bg-slate-50 transition-all cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
        <SssLogo size="md" textColor="text-[#0c2e2c]" />
      </div>

      {/* Screen Title */}
      <div className="px-5 pt-2 pb-3">
        <span className="text-[10px] font-bold tracking-widest text-[#0e5c54] uppercase block">
          TU ACTIVIDAD
        </span>
        <h1 className="text-xl font-extrabold text-[#0c2e2c] tracking-tight mt-0.5">
          Historial de movimientos.
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Una vista clara de cada movimiento de tu dinero.
        </p>
      </div>

      {/* Monthly Net Flow Card */}
      <div className="px-5 pb-3">
        <div className="bg-[#0b3332] rounded-2xl p-4 text-white shadow-md flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-wider text-[#7dd3c0] uppercase block">
              FLUJO DEL MES
            </span>
            <div className="text-2xl font-extrabold text-[#4ee3a5] tracking-tight mt-1">
              +{formatCurrency(netFlow)}
            </div>
          </div>
          <div className="w-8 h-8 rounded-xl bg-[#124543] border border-[#1d5c58] flex items-center justify-center text-[#4ee3a5]">
            <TrendingUp size={18} />
          </div>
        </div>
      </div>

      {/* Transactions Container */}
      <div className="px-5 pb-4 flex-1 flex flex-col">
        {/* Section Header with count badge */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-bold text-[#0c2e2c]">Transacciones</h2>
              <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-[10px] font-extrabold text-slate-600">
                0{filtered.length}
              </span>
            </div>
            <span className="text-[10px] text-slate-400">
              {filtered.length} movimientos · Mayo 2025
            </span>
          </div>

          <span className="text-lg font-extrabold text-slate-300">06</span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-3">
          {(['todas', 'ingresos', 'gastos'] as const).map((filter) => {
            const isActive = activeFilter === filter;
            const label = filter.charAt(0).toUpperCase() + filter.slice(1);
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 text-xs rounded-full font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0c2e2c] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-1 text-[9px] font-bold tracking-wider text-slate-400 uppercase mt-4 px-2 pb-1 border-b border-slate-200/60">
          <span className="col-span-2">FECHA</span>
          <span className="col-span-5">CATEGORÍA</span>
          <span className="col-span-2 text-center">TIPO</span>
          <span className="col-span-3 text-right">MONTO</span>
        </div>

        {/* Transaction Rows */}
        <div className="divide-y divide-slate-100 bg-white rounded-2xl border border-slate-100 shadow-sm mt-1 overflow-hidden">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-1 items-center px-3 py-2.5 hover:bg-slate-50/80 transition-colors"
            >
              <div className="col-span-2 text-[10px] font-bold text-slate-500">
                {item.date}
              </div>

              <div className="col-span-5 flex items-center gap-2 min-w-0">
                {getCategoryIcon(item.iconType, item.type)}
                <div className="min-w-0 truncate">
                  <div className="text-xs font-bold text-[#0c2e2c] truncate">
                    {item.category}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              <div className="col-span-2 text-center">
                <span
                  className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                    item.type === 'ingreso'
                      ? 'bg-[#e8fbf3] text-[#10b981]'
                      : 'bg-[#fff1ec] text-[#f97316]'
                  }`}
                >
                  {item.type === 'ingreso' ? 'Ingreso' : 'Gasto'}
                </span>
              </div>

              <div
                className={`col-span-3 text-right text-xs font-extrabold ${
                  item.type === 'ingreso' ? 'text-[#10b981]' : 'text-[#0c2e2c]'
                }`}
              >
                {item.type === 'ingreso'
                  ? `+${formatCurrency(item.amount)}`
                  : `-${formatCurrency(item.amount)}`}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button at bottom of screen */}
        <div className="mt-4 pt-1">
          <button
            type="button"
            onClick={onBackToHome}
            className="w-full bg-white hover:bg-slate-50 border border-[#b2d5ce] text-[#0e5c54] text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <ChevronLeft size={16} />
            <span>Regresar al inicio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
