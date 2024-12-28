import { MathCalculation } from '../types';

export const basicCalculations: MathCalculation[] = [
  {
    name: 'Addition',
    category: 'Basic',
    formula: (values: number[]) => values.reduce((a, b) => a + b, 0),
    inputs: ['Number 1', 'Number 2'],
    allowDynamicInputs: true
  },
  {
    name: 'Multiplication',
    category: 'Basic',
    formula: (values: number[]) => values.reduce((a, b) => a * b, 1),
    inputs: ['Number 1', 'Number 2'],
    allowDynamicInputs: true
  },
  {
    name: 'Division',
    category: 'Basic',
    formula: ([a, b]) => b !== 0 ? a / b : NaN,
    inputs: ['Dividend', 'Divisor'],
    validation: (values) => values[1] !== 0 ? null : 'Division by zero is not allowed'
  },
  {
    name: 'Modulo',
    category: 'Basic',
    formula: ([a, b]) => b !== 0 ? a % b : NaN,
    inputs: ['Number', 'Divisor'],
    validation: (values) => values[1] !== 0 ? null : 'Division by zero is not allowed'
  }
];