'use client';

import { useState } from 'react';
import { ExecutionResult } from '@/types';
import { CheckCircle, XCircle, Play, Clock, ChevronDown, ChevronRight } from 'lucide-react';

interface ResultsPanelProps {
  executionResult: ExecutionResult | null;
  isRunning: boolean;
}

export default function ResultsPanel({ executionResult, isRunning }: ResultsPanelProps) {
  const [expandedTestCase, setExpandedTestCase] = useState<number | null>(null);

  const toggleTestCase = (index: number) => {
    setExpandedTestCase(expandedTestCase === index ? null : index);
  };

  if (isRunning) {
    return (
      <div className="h-full bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <Clock className="w-8 h-8 text-green-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-300">Running your solution...</p>
        </div>
      </div>
    );
  }

  if (!executionResult) {
    return (
      <div className="h-full bg-gray-900 text-white">
        <div className="border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-medium">Testcase</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded">
                Testcase
              </button>
              <button className="px-3 py-1 text-gray-400 hover:text-white text-sm">
                Test Result
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <Play className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">You must run your code first</p>
            <p className="text-sm text-gray-500">
              Click &quot;Run&quot; to execute your solution
            </p>
          </div>
        </div>
      </div>
    );
  }

  const passedTests = executionResult.testCases.filter(tc => tc.passed).length;
  const totalTests = executionResult.testCases.length;

  return (
    <div className="h-full overflow-y-auto bg-gray-900 text-white">
      {/* Results Header */}
      <div className="border-b border-gray-700 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-4">
            <button className="px-3 py-1 text-gray-400 hover:text-white text-sm">
              Testcase
            </button>
            <button className="px-3 py-1 bg-gray-700 text-white text-sm rounded">
              Test Result
            </button>
          </div>
          <div className="flex items-center space-x-2">
            {executionResult.success ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400" />
            )}
            <span className={`text-sm font-medium ${
              executionResult.success ? 'text-green-400' : 'text-red-400'
            }`}>
              {passedTests}/{totalTests} Passed
            </span>
          </div>
        </div>
        
        {executionResult.error && (
          <div className="p-3 bg-red-900/30 border border-red-800 rounded-md">
            <p className="text-sm text-red-400 font-mono">
              {executionResult.error}
            </p>
          </div>
        )}
      </div>

      {/* Test Cases */}
      <div className="p-4">
        <div className="space-y-3">
          {executionResult.testCases.map((testCase, index) => (
            <div key={index} className={`border rounded-lg overflow-hidden ${
              testCase.passed 
                ? 'border-green-600 bg-green-900/20' 
                : 'border-red-600 bg-red-900/20'
            }`}>
              <div
                className={`p-3 cursor-pointer flex items-center justify-between ${
                  testCase.passed 
                    ? 'bg-green-900/30' 
                    : 'bg-red-900/30'
                }`}
                onClick={() => toggleTestCase(index)}
              >
                <div className="flex items-center space-x-3">
                  {testCase.passed ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className="font-medium text-white">
                    Case {index + 1}
                  </span>
                </div>
                {expandedTestCase === index ? (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </div>
              
              {expandedTestCase === index && (
                <div className="p-4 bg-gray-800 border-t border-gray-700">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Input
                      </label>
                      <div className="bg-gray-700 rounded p-3">
                        <code className="text-sm font-mono text-green-400">
                          {typeof testCase.input === 'string' ? testCase.input : JSON.stringify(testCase.input)}
                        </code>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Expected
                      </label>
                      <div className="bg-gray-700 rounded p-3">
                        <code className="text-sm font-mono text-blue-400">
                          {typeof testCase.expectedOutput === 'string' ? testCase.expectedOutput : JSON.stringify(testCase.expectedOutput)}
                        </code>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Output
                      </label>
                      <div className={`bg-gray-700 rounded p-3 ${
                        testCase.passed ? 'border border-green-600' : 'border border-red-600'
                      }`}>
                        <code className={`text-sm font-mono ${
                          testCase.passed ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {testCase.actualOutput !== undefined 
                            ? (typeof testCase.actualOutput === 'string' ? testCase.actualOutput : JSON.stringify(testCase.actualOutput))
                            : 'No output'
                          }
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Success Message */}
      {executionResult.success && (
        <div className="p-4 mx-4 mb-4 bg-green-900/30 border border-green-600 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <div>
              <p className="text-sm font-medium text-green-400">
                Accepted
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Your solution passed all test cases! 🎉
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
