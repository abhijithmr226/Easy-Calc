import { MathCalculation } from '../types';

export const advancedCalculations: MathCalculation[] = [
  {
    name: 'Sine',
    category: 'Trigonometry',
    formula: ([angle, isRadians]) => 
      Math.sin(isRadians ? angle : angle * Math.PI / 180),
    inputs: ['Angle', 'Use Radians'],
    inputTypes: ['number', 'boolean']
  },
  {
    name: 'Cosine',
    category: 'Trigonometry',
    formula: ([angle, isRadians]) => 
      Math.cos(isRadians ? angle : angle * Math.PI / 180),
    inputs: ['Angle', 'Use Radians'],
    inputTypes: ['number', 'boolean']
  },
  {
    name: 'Natural Logarithm',
    category: 'Advanced',
    formula: ([x]) => Math.log(x),
    inputs: ['Number'],
    validation: (values) => values[0] > 0 ? null : 'Input must be positive'
  },
  {
    name: 'Factorial',
    category: 'Advanced',
    formula: ([n]) => {
      if (n < 0) return NaN;
      if (n === 0) return 1;
      let result = 1;
      for (let i = 2; i <= n; i++) result *= i;
      return result;
    },
    inputs: ['Number'],
    validation: (values) => 
      Number.isInteger(values[0]) && values[0] >= 0 ? 
      null : 'Input must be a non-negative integer'
  }
];