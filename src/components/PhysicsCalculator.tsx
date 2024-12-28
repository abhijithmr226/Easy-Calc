import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

type Calculation = {
  name: string;
  formula: (values: number[]) => number;
  inputs: string[];
  unit: string;
};

const calculations: Calculation[] = [
  {
    name: 'Velocity',
    formula: ([distance, time]) => distance / time,
    inputs: ['Distance (m)', 'Time (s)'],
    unit: 'm/s'
  },
  {
    name: 'Force',
    formula: ([mass, acceleration]) => mass * acceleration,
    inputs: ['Mass (kg)', 'Acceleration (m/s²)'],
    unit: 'N'
  },
  {
    name: 'Kinetic Energy',
    formula: ([mass, velocity]) => 0.5 * mass * Math.pow(velocity, 2),
    inputs: ['Mass (kg)', 'Velocity (m/s)'],
    unit: 'J'
  }
];

export default function PhysicsCalculator() {
  const [selectedCalc, setSelectedCalc] = useState<Calculation>(calculations[0]);
  const [values, setValues] = useState<number[]>(new Array(selectedCalc.inputs.length).fill(0));
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const calculatedResult = selectedCalc.formula(values);
    setResult(calculatedResult);
  };

  const handleInputChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = parseFloat(value) || 0;
    setValues(newValues);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-2">
        {calculations.map((calc) => (
          <button
            key={calc.name}
            onClick={() => {
              setSelectedCalc(calc);
              setValues(new Array(calc.inputs.length).fill(0));
              setResult(null);
            }}
            className={`p-3 rounded-lg transition-colors ${
              selectedCalc.name === calc.name
                ? 'bg-blue-600'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {calc.name}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {selectedCalc.inputs.map((input, index) => (
          <div key={input} className="space-y-1">
            <label className="text-sm text-gray-300">{input}</label>
            <input
              type="number"
              value={values[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white"
            />
          </div>
        ))}

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          Calculate
        </button>

        {result !== null && (
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="text-sm text-gray-300">Result:</div>
            <div className="text-2xl font-bold">
              {result.toFixed(2)} {selectedCalc.unit}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}