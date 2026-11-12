import React, { useState } from 'react';
import { ChevronLeft, Target, Plus, Check } from 'lucide-react';
import { SssLogo } from '../SssLogo.tsx';
import { GoalItem, BudgetBreakdown } from '../../types.ts';
import { calculateBudgetDistribution, calculateGoalProgress, formatCurrency } from '../../utils/finance.ts';

interface GoalsScreenProps {
  budget: BudgetBreakdown;
  goals: GoalItem[];
  onBackToHome: () => void;
}

export const GoalsScreen: React.FC<GoalsScreenProps> = ({
  budget,
  goals: initialGoalsList,
  onBackToHome,
}) => {
  const [goals, setGoals] = useState<GoalItem[]>(initialGoalsList);
  const [justSaved, setJustSaved] = useState(false);

  const budgetDist = calculateBudgetDistribution(
    budget.total,
    budget.fijosPercent,
    budget.variablesPercent
  );

  const handleQuickAddSavings = (goalId: string, amount: number) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === goalId) {
          const newCurrent = Math.min(g.targetAmount, g.currentAmount + amount);
          return {
            ...g,
            currentAmount: newCurrent,
            percentage: calculateGoalProgress(newCurrent, g.targetAmount),
          };
        }
        return g;
      })
    );
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  // Donut chart parameters
  const radius = 54;
  const strokeWidth = 16;
  const circumference = 2 * Math.PI * radius;

  // Segment stroke calculations
  const fijosLength = (budget.fijosPercent / 100) * circumference;
  const variablesLength = (budget.variablesPercent / 100) * circumference;
  const disponibleLength = (budget.disponiblePercent / 100) * circumference;

  const fijosOffset = 0;
  const variablesOffset = -fijosLength;
  const disponibleOffset = -(fijosLength + variablesLength);

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
          PLANEA LO QUE SIGUE
        </span>
        <h1 className="text-xl font-extrabold text-[#0c2e2c] tracking-tight mt-0.5">
          Haz espacio para tus metas.
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Visualiza tu presente. Construye lo que viene.
        </p>
      </div>

      {/* Budget Card with SVG Donut Chart */}
      <div className="px-5 pb-3">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
            <div>
              <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase block">
                MAYO 2025
              </span>
              <h2 className="text-sm font-bold text-[#0c2e2c]">Tu presupuesto</h2>
            </div>
            <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">
              DISTRIBUCIÓN
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-1">
            {/* SVG Donut */}
            <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 140 140">
                {/* Background Ring */}
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke="#e6f0ed"
                  strokeWidth={strokeWidth}
                />
                {/* Fijos (Dark Teal) */}
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke="#0f3836"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${fijosLength} ${circumference}`}
                  strokeDashoffset={fijosOffset}
                  strokeLinecap="round"
                />
                {/* Variables (Mint Green) */}
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke="#34d399"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${variablesLength} ${circumference}`}
                  strokeDashoffset={variablesOffset}
                  strokeLinecap="round"
                />
                {/* Disponible (Soft Sage/Mint) */}
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke="#a7f3d0"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${disponibleLength} ${circumference}`}
                  strokeDashoffset={disponibleOffset}
                  strokeLinecap="round"
                />
              </svg>

              {/* Donut Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[8px] font-bold tracking-wider text-slate-400 uppercase">
                  TOTAL
                </span>
                <span className="text-sm font-extrabold text-[#0c2e2c] leading-tight">
                  ${budget.total.toLocaleString()}
                </span>
                <span className="text-[9px] text-slate-400 font-medium">
                  este mes
                </span>
              </div>
            </div>

            {/* Donut Legend */}
            <div className="flex-1 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0f3836]" />
                  <span className="text-slate-600 font-medium">Fijos</span>
                </div>
                <span className="font-bold text-[#0c2e2c]">{budget.fijosPercent}%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
                  <span className="text-slate-600 font-medium">Variables</span>
                </div>
                <span className="font-bold text-[#0c2e2c]">{budget.variablesPercent}%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a7f3d0]" />
                  <span className="text-slate-600 font-medium">Disponible</span>
                </div>
                <span className="font-bold text-[#0c2e2c]">{budget.disponiblePercent}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mirando Adelante / Mis Metas */}
      <div className="px-5 pb-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#0e5c54] uppercase block">
            MIRANDO ADELANTE
          </span>
          <div className="flex items-center justify-between mt-0.5">
            <h3 className="text-sm font-bold text-[#0c2e2c]">Mis metas</h3>
            <span className="text-lg font-extrabold text-slate-300">01</span>
          </div>

          {/* Goal Cards */}
          <div className="space-y-3 mt-3">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#e6f9f1] text-[#10b981] flex items-center justify-center shrink-0">
                      <Target size={18} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0c2e2c]">
                        {goal.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        ${goal.currentAmount.toLocaleString()} de ${goal.targetAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold text-[#10b981]">
                    {goal.percentage}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-3.5 w-full bg-[#e8f6f2] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#34d399] to-[#10b981] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${goal.percentage}%` }}
                  />
                </div>

                {/* Interactive Saving Action */}
                <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">
                    Faltan ${(goal.targetAmount - goal.currentAmount).toLocaleString()} para la meta
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuickAddSavings(goal.id, 100)}
                    className="px-2.5 py-1 rounded-lg bg-[#e8fbf3] hover:bg-[#d1fae5] text-[#0f766e] text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {justSaved ? (
                      <>
                        <Check size={11} />
                        <span>¡Abonado!</span>
                      </>
                    ) : (
                      <>
                        <Plus size={11} />
                        <span>Abonar $100</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
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
