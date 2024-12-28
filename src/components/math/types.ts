export type MathCalculation = {
  name: string;
  category: string;
  formula: (values: number[]) => number;
  inputs: string[];
  validation?: (values: number[]) => string | null;
  allowDynamicInputs?: boolean;
  inputTypes?: ('number' | 'boolean')[];
};