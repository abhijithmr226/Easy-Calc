export type PhysicsCalculation = {
  name: string;
  category: string;
  formula: (values: number[]) => number;
  inputs: string[];
  unit: string;
};