import { PhysicsCalculation } from '../types';

export const electromagnetismCalculations: PhysicsCalculation[] = [
  {
    name: "Ohm's Law",
    category: 'Electromagnetism',
    formula: ([voltage, resistance]) => voltage / resistance,
    inputs: ['Voltage (V)', 'Resistance (Ω)'],
    unit: 'A'
  },
  {
    name: "Coulomb's Law",
    category: 'Electromagnetism',
    formula: ([charge1, charge2, distance]) => 
      (8.99e9 * charge1 * charge2) / Math.pow(distance, 2),
    inputs: ['Charge 1 (C)', 'Charge 2 (C)', 'Distance (m)'],
    unit: 'N'
  }
];