export type ScreenId = 'login' | 'dashboard' | 'history' | 'goals';

export interface UserProfile {
  name: string;
  initials: string;
  email: string;
  accountNumber: string;
  isLoggedIn: boolean;
  biometricsEnabled: boolean;
}

export interface BankAccount {
  balance: number;
  currency: string;
  lastMonthChangePercent: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlyNetFlow: number;
  asOfDate: string;
}

export interface TransactionItem {
  id: string;
  date: string;
  category: string;
  subtitle: string;
  type: 'ingreso' | 'gasto';
  amount: number;
  iconType: 'income' | 'supermarket' | 'rent' | 'services' | 'freelance' | 'dining';
}

export interface GoalItem {
  id: string;
  name: string;
  currentAmount: number;
  targetAmount: number;
  percentage: number;
  category: string;
}

export interface BudgetBreakdown {
  total: number;
  fijosPercent: number;
  variablesPercent: number;
  disponiblePercent: number;
}
