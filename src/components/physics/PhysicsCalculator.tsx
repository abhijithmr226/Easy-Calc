import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { mechanicsCalculations } from './calculations/mechanics';
import { thermodynamicsCalculations } from './calculations/thermodynamics';
import { electromagnetismCalculations } from './calculations/electromagnetism';
import { modernPhysicsCalculations } from './calculations/modern';
import { PhysicsCalculation } from './types';
import { useHistory } from '../history/HistoryContext';

const allCalculations = [
  ...mechanicsCalculations,
  ...thermodynamicsCalculations,
  ...electromagnetismCalculations,
  ...modernPhysicsCalculations,
];

const categories = [...new Set(allCalculations.map(calc => calc.category))];

export default function PhysicsCalculator() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedCalc, setSelectedCalc] = useState<PhysicsCalculation>(
    allCalculations.find(calc => calc.category === categories[0]) || allCalculations[0]
  );
  const [values, setValues] = useState<number[]>(new Array(selectedCalc.inputs.length).fill(0));
  const [result, setResult] = useState<number | null>(null);
  const { addToHistory } = useHistory();

  const categoryCalculations = allCalculations.filter(
    calc => calc.category === selectedCategory
  );

  const handleCalculate = () => {
    const calculatedResult = selectedCalc.formula(values);
    setResult(calculatedResult);

    // Create calculation string
    const calcString = `${selectedCalc.name}: ${selectedCalc.inputs
      .map((input, i) => `${input}=${values[i]}`)
      .join(', ')}`;

    addToHistory({
      calculation: calcString,
      result: calculatedResult,
      category: selectedCalc.category
    });
  };

  const handleInputChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = parseFloat(value) || 0;
    setValues(newValues);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              const newCalc = allCalculations.find(calc => calc.category === e.target.value);
              if (newCalc) {
                setSelectedCalc(newCalc);
                setValues(new Array(newCalc.inputs.length).fill(0));
                setResult(null);
              }
            }}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-300">Calculation</label>
          <select
            value={selectedCalc.name}
            onChange={(e) => {
              const newCalc = categoryCalculations.find(calc => calc.name === e.target.value);
              if (newCalc) {
                setSelectedCalc(newCalc);
                setValues(new Array(newCalc.inputs.length).fill(0));
                setResult(null);
              }
            }}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white"
          >
            {categoryCalculations.map(calc => (
              <option key={calc.name} value={calc.name}>{calc.name}</option>
            ))}
          </select>
        </div>
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
              {result.toExponential(4)} {selectedCalc.unit}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}