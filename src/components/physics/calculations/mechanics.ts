import { PhysicsCalculation } from '../types';

export const mechanicsCalculations: PhysicsCalculation[] = [
  {
    name: 'Kinematic Distance',
    category: 'Mechanics',
    formula: ([initialVelocity, time, acceleration]) => 
      initialVelocity * time + (0.5 * acceleration * Math.pow(time, 2)),
    inputs: ['Initial Velocity (m/s)', 'Time (s)', 'Acceleration (m/s²)'],
    unit: 'm'
  },
  {
    name: "Newton's Second Law",
    category: 'Mechanics',
    formula: ([mass, acceleration]) => mass * acceleration,
    inputs: ['Mass (kg)', 'Acceleration (m/s²)'],
    unit: 'N'
  },
  {
    name: 'Work',
    category: 'Mechanics',
    formula: ([force, distance]) => force * distance,
    inputs: ['Force (N)', 'Distance (m)'],
    unit: 'J'
  },
  {
    name: 'Centripetal Force',
    category: 'Mechanics',
    formula: ([mass, velocity, radius]) => 
      (mass * Math.pow(velocity, 2)) / radius,
    inputs: ['Mass (kg)', 'Velocity (m/s)', 'Radius (m)'],
    unit: 'N'
  },
  {
    name: 'Momentum',
    category: 'Mechanics',
    formula: ([mass, velocity]) => mass * velocity,
    inputs: ['Mass (kg)', 'Velocity (m/s)'],
    unit: 'kg⋅m/s'
  }
];