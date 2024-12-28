import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, Atom, Binary, History } from 'lucide-react';
import MathCalculator from './MathCalculator';
import PhysicsCalculator from './physics/PhysicsCalculator';
import HistoryPanel from './history/HistoryPanel';
import { useHistory } from './history/HistoryContext';

type CalculatorType = 'math' | 'physics';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<CalculatorType>('math');
  const [showHistory, setShowHistory] = useState(false);
  const { history } = useHistory();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
  <img src="/logo.png" className="w-75 h-40" /></h1>
<p className="text-blue-300">Advanced Mathematical & Physics Calculations</p>

        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-700">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('math')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === 'math'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <Binary className="w-4 h-4" />
                  Mathematics
                </button>
                <button
                  onClick={() => setActiveTab('physics')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === 'physics'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <Atom className="w-4 h-4" />
                  Physics
                </button>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                >
                  <History className="w-4 h-4" />
                  History
                </button>
              </div>

              {activeTab === 'math' ? <MathCalculator /> : <PhysicsCalculator />}
            </div>
          </div>

          <div className={`lg:block ${showHistory ? 'block' : 'hidden'}`}>
            <HistoryPanel />
          </div>
        </div>
      </div>
    </div>
  );
}