import { PhysicsCalculation } from '../types';

export const thermodynamicsCalculations: PhysicsCalculation[] = [
  {
    name: 'Heat Transfer',
    category: 'Thermodynamics',
    formula: ([mass, specificHeat, tempChange]) => 
      mass * specificHeat * tempChange,
    inputs: ['Mass (kg)', 'Specific Heat (J/kg⋅K)', 'Temperature Change (K)'],
    unit: 'J'
  },
  {
    name: 'Ideal Gas Law',
    category: 'Thermodynamics',
    formula: ([pressure, volume, moles]) => 
      pressure * volume / (8.314 * moles), // R = 8.314 J/(mol⋅K)
    inputs: ['Pressure (Pa)', 'Volume (m³)', 'Number of Moles'],
    unit: 'K'
  }
];