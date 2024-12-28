import React from 'react';
import { History, Trash2 } from 'lucide-react';
import { useHistory } from './HistoryContext';
import { formatNumber } from '../utils/formatting';

export default function HistoryPanel() {
  const { history, clearHistory } = useHistory();

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-blue-400" />
          <h2 className="text-lg font-semibold">Calculation History</h2>
        </div>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-red-400 hover:text-red-300 p-1 rounded-lg transition-colors"
            title="Clear History"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="space-y-2 max-h-[300px] overflow-y-auto">
        {history.length === 0 ? (
          <p className="text-gray-400 text-sm text-center">No calculations yet</p>
        ) : (
          history.map(entry => (
            <div
              key={entry.id}
              className="bg-gray-700/50 p-3 rounded-lg text-sm"
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-gray-300">{entry.calculation}</span>
                <span className="text-blue-400 font-mono">
                  {formatNumber(entry.result)}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{entry.category}</span>
                <time>
                  {entry.timestamp.toLocaleTimeString()}
                </time>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}