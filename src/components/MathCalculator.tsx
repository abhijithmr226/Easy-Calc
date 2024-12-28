import React, { useState, useEffect } from 'react';
import { Plus, Minus, X, Divide, Square, RotateCcw } from 'lucide-react';
import { useHistory } from './history/HistoryContext';
import { mathKeyMap, type MathKey } from './utils/keyboardHandlers';

export default function MathCalculator() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);
  const { addToHistory } = useHistory();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key as MathKey;
      if (key in mathKeyMap) {
        e.preventDefault();
        const action = mathKeyMap[key];
        
        if (action === 'backspace') {
          if (!newNumber && display !== '0') {
            setDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
          }
        } else if (action === 'clear') {
          clear();
        } else if (action === '=') {
          calculate();
        } else if (['+', '-', '*', '/', 'square'].includes(action)) {
          handleOperation(action);
        } else {
          handleNumber(action);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [display, firstNumber, operation, newNumber]);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    setFirstNumber(parseFloat(display));
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (firstNumber === null || operation === null) return;
    
    const secondNumber = parseFloat(display);
    let result = 0;
    let calculation = '';

    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        calculation = `${firstNumber} + ${secondNumber}`;
        break;
      case '-':
        result = firstNumber - secondNumber;
        calculation = `${firstNumber} - ${secondNumber}`;
        break;
      case '*':
        result = firstNumber * secondNumber;
        calculation = `${firstNumber} × ${secondNumber}`;
        break;
      case '/':
        result = firstNumber / secondNumber;
        calculation = `${firstNumber} ÷ ${secondNumber}`;
        break;
      case 'square':
        result = Math.pow(firstNumber, 2);
        calculation = `${firstNumber}²`;
        break;
    }

    setDisplay(result.toString());
    addToHistory({
      calculation,
      result,
      category: 'Mathematics'
    });
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const clear = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-4 bg-gray-900 p-4 rounded-lg mb-4">
        <div className="text-right text-3xl font-mono">{display}</div>
      </div>

      {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((num) => (
        <button
          key={num}
          onClick={() => handleNumber(num)}
          className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => handleOperation('+')}
        className="bg-blue-600 hover:bg-blue-500 p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <Plus className="w-5 h-5 mx-auto" />
      </button>

      <button
        onClick={() => handleOperation('-')}
        className="bg-blue-600 hover:bg-blue-500 p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <Minus className="w-5 h-5 mx-auto" />
      </button>

      <button
        onClick={() => handleOperation('*')}
        className="bg-blue-600 hover:bg-blue-500 p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <X className="w-5 h-5 mx-auto" />
      </button>

      <button
        onClick={() => handleOperation('/')}
        className="bg-blue-600 hover:bg-blue-500 p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <Divide className="w-5 h-5 mx-auto" />
      </button>

      <button
        onClick={() => handleOperation('square')}
        className="bg-blue-600 hover:bg-blue-500 p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <Square className="w-5 h-5 mx-auto" />
      </button>

      <button
        onClick={calculate}
        className="bg-green-600 hover:bg-green-500 p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        =
      </button>

      <button
        onClick={clear}
        className="bg-red-600 hover:bg-red-500 p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        <RotateCcw className="w-5 h-5 mx-auto" />
      </button>
    </div>
  );
}