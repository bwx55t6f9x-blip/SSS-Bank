export interface Transaction {
  id: string;
  date: string;
  category: string;
  subtitle: string;
  type: 'ingreso' | 'gasto';
  amount: number;
  iconType: 'income' | 'supermarket' | 'rent' | 'services' | 'freelance' | 'dining';
}

export interface BudgetDistribution {
  total: number;
  fijosPercentage: number;
  variablesPercentage: number;
  disponiblePercentage: number;
  fijosAmount: number;
  variablesAmount: number;
  disponibleAmount: number;
}

export interface Goal {
  id: string;
  name: string;
  currentAmount: number;
  targetAmount: number;
  percentage: number;
}

/**
 * Calculates net monthly cash flow: Total Incomes - Total Expenses
 */
export function calculateNetFlow(income: number, expenses: number): number {
  return Number((income - expenses).toFixed(2));
}

/**
 * Filters transaction list according to active tab
 */
export function filterTransactions(
  transactions: Transaction[],
  filter: 'todas' | 'ingresos' | 'gastos'
): Transaction[] {
  if (filter === 'ingresos') {
    return transactions.filter(t => t.type === 'ingreso');
  }
  if (filter === 'gastos') {
    return transactions.filter(t => t.type === 'gasto');
  }
  return transactions;
}

/**
 * Calculates budget distribution breakdown
 */
export function calculateBudgetDistribution(
  total: number,
  fijosPercent: number,
  variablesPercent: number
): BudgetDistribution {
  const disponiblePercent = Math.max(0, 100 - fijosPercent - variablesPercent);
  const fijosAmount = (total * fijosPercent) / 100;
  const variablesAmount = (total * variablesPercent) / 100;
  const disponibleAmount = (total * disponiblePercent) / 100;

  return {
    total,
    fijosPercentage: fijosPercent,
    variablesPercentage: variablesPercent,
    disponiblePercentage: disponiblePercent,
    fijosAmount: Number(fijosAmount.toFixed(2)),
    variablesAmount: Number(variablesAmount.toFixed(2)),
    disponibleAmount: Number(disponibleAmount.toFixed(2)),
  };
}

/**
 * Calculates goal progress percentage capped at 100%
 */
export function calculateGoalProgress(current: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(100, Math.round((current / target) * 100));
}

/**
 * Formats standard currency string
 */
export function formatCurrency(amount: number, showSign: boolean = false): string {
  const absVal = Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (showSign) {
    if (amount > 0) return `+$${absVal}`;
    if (amount < 0) return `-$${absVal}`;
    return `$${absVal}`;
  }
  return `$${absVal}`;
}
