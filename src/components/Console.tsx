'use client';

import { useState } from 'react';
import { X, Terminal, Play, RotateCcw } from 'lucide-react';

interface ConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  onRun: () => void;
}

export default function Console({ isOpen, onClose, onRun }: ConsoleProps) {
  const [logs, setLogs] = useState<Array<{type: 'log' | 'error' | 'warn', message: string, timestamp: string}>>([]);

  if (!isOpen) return null;

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50" style={{ height: '300px' }}>
      {/* Console Header */}
      <div className="flex items-center justify-between bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-white">Console</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearLogs}
            className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
            title="Clear console"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={onRun}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded flex items-center space-x-1"
          >
            <Play className="w-3 h-3" />
            <span>Run</span>
          </button>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Console Content */}
      <div className="h-full overflow-y-auto p-4 font-mono text-sm">
        {logs.length === 0 ? (
          <div className="text-gray-500 italic">Console output will appear here...</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className={`mb-1 ${
              log.type === 'error' ? 'text-red-400' :
              log.type === 'warn' ? 'text-yellow-400' :
              'text-gray-300'
            }`}>
              <span className="text-gray-500 text-xs">[{log.timestamp}]</span> {log.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
