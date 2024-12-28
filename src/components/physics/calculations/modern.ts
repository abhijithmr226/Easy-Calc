import { PhysicsCalculation } from '../types';

export const modernPhysicsCalculations: PhysicsCalculation[] = [
  {
    name: 'Mass-Energy Equivalence',
    category: 'Modern Physics',
    formula: ([mass]) => mass * Math.pow(299792458, 2), // c = 299,792,458 m/s
    inputs: ['Mass (kg)'],
    unit: 'J'
  },
  {
    name: 'De Broglie Wavelength',
    category: 'Modern Physics',
    formula: ([momentum]) => 6.626e-34 / momentum, // h = 6.626e-34 J⋅s
    inputs: ['Momentum (kg⋅m/s)'],
    unit: 'm'
  }
];