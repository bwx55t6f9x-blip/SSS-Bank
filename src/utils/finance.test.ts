import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateNetFlow,
  filterTransactions,
  calculateBudgetDistribution,
  calculateGoalProgress,
  formatCurrency,
  Transaction,
} from './finance.js';

test('calculateNetFlow computes difference accurately', () => {
  // Screen 2 shows Income: 5450.00, Expenses: 2970.00 -> Screen 3 shows Net Flow: +$2,480.00
  const flow = calculateNetFlow(5450.0, 2970.0);
  assert.equal(flow, 2480.0);
});

test('filterTransactions filters by type', () => {
  const dummy: Transaction[] = [
    { id: '1', date: '28 MAY', category: 'Nómina', subtitle: 'Tech', type: 'ingreso', amount: 4800, iconType: 'income' },
    { id: '2', date: '26 MAY', category: 'Super', subtitle: 'Semanal', type: 'gasto', amount: 186, iconType: 'supermarket' },
    { id: '3', date: '15 MAY', category: 'Consultoría', subtitle: 'UX', type: 'ingreso', amount: 650, iconType: 'freelance' },
  ];

  assert.equal(filterTransactions(dummy, 'todas').length, 3);
  assert.equal(filterTransactions(dummy, 'ingresos').length, 2);
  assert.equal(filterTransactions(dummy, 'gastos').length, 1);
});

test('calculateBudgetDistribution yields correct proportions', () => {
  // Screen 4 shows: Total $5,450. Fijos: 37%, Variables: 24%, Disponible: 39%
  const distribution = calculateBudgetDistribution(5450, 37, 24);
  assert.equal(distribution.disponiblePercentage, 39);
  assert.equal(distribution.fijosAmount, 2016.5);
  assert.equal(distribution.variablesAmount, 1308);
  assert.equal(distribution.disponibleAmount, 2125.5);
});

test('calculateGoalProgress calculates percentages accurately', () => {
  // Screen 4: Emergency fund $3,400 of $5,000 -> 68%
  const progress = calculateGoalProgress(3400, 5000);
  assert.equal(progress, 68);
});

test('formatCurrency formats with signs properly', () => {
  assert.equal(formatCurrency(12480.5, false), '$12,480.50');
  assert.equal(formatCurrency(2480, true), '+$2,480.00');
  assert.equal(formatCurrency(-186, true), '-$186.00');
});
