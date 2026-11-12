import { UserProfile, BankAccount, TransactionItem, GoalItem, BudgetBreakdown } from '../types.ts';

export const initialUser: UserProfile = {
  name: 'Alex Cruz',
  initials: 'AC',
  email: 'alex.cruz@sssbank.io',
  accountNumber: '****-9821',
  isLoggedIn: true,
  biometricsEnabled: true,
};

export const initialAccount: BankAccount = {
  balance: 12480.50,
  currency: 'USD',
  lastMonthChangePercent: 8.2,
  monthlyIncome: 5450.00,
  monthlyExpenses: 2970.00,
  monthlyNetFlow: 2480.00,
  asOfDate: 'Miércoles, 28 de mayo',
};

export const initialTransactions: TransactionItem[] = [
  {
    id: 'tx-1',
    date: '28 MAY',
    category: 'Nómina',
    subtitle: 'Empresa Tech',
    type: 'ingreso',
    amount: 4800.00,
    iconType: 'income',
  },
  {
    id: 'tx-2',
    date: '26 MAY',
    category: 'Supermercado',
    subtitle: 'Compra semanal',
    type: 'gasto',
    amount: 186.00,
    iconType: 'supermarket',
  },
  {
    id: 'tx-3',
    date: '24 MAY',
    category: 'Renta',
    subtitle: 'Departamento mensual',
    type: 'gasto',
    amount: 1200.00,
    iconType: 'rent',
  },
  {
    id: 'tx-4',
    date: '20 MAY',
    category: 'Servicios',
    subtitle: 'Luz, agua e internet',
    type: 'gasto',
    amount: 145.00,
    iconType: 'services',
  },
  {
    id: 'tx-5',
    date: '15 MAY',
    category: 'Consultoría UX',
    subtitle: 'Proyecto freelance',
    type: 'ingreso',
    amount: 650.00,
    iconType: 'freelance',
  },
  {
    id: 'tx-6',
    date: '10 MAY',
    category: 'Restaurante',
    subtitle: 'Cena con amigos',
    type: 'gasto',
    amount: 84.50,
    iconType: 'dining',
  },
];

export const initialBudget: BudgetBreakdown = {
  total: 5450,
  fijosPercent: 37,
  variablesPercent: 24,
  disponiblePercent: 39,
};

export const initialGoals: GoalItem[] = [
  {
    id: 'goal-1',
    name: 'Fondo de emergencia',
    currentAmount: 3400,
    targetAmount: 5000,
    percentage: 68,
    category: 'Ahorro prioritario',
  },
];
