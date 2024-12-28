export type PhysicsConstant = {
  name: string;
  symbol: string;
  value: number;
  unit: string;
  description: string;
};

export const physicsConstants: PhysicsConstant[] = [
  {
    name: 'Speed of Light in Vacuum',
    symbol: 'c',
    value: 299792458,
    unit: 'm/s',
    description: 'The speed at which light travels in a vacuum'
  },
  {
    name: 'Planck Constant',
    symbol: 'h',
    value: 6.62607015e-34,
    unit: 'J⋅s',
    description: 'Quantum of electromagnetic action'
  },
  {
    name: 'Gravitational Constant',
    symbol: 'G',
    value: 6.67430e-11,
    unit: 'm³/(kg⋅s²)',
    description: 'Universal gravitational constant'
  }
];