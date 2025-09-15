'use client';

import { useState } from 'react';
import TopNav from '@/components/TopNav';
import ProblemTabs from '@/components/ProblemTabs';
import CodeEditor from '@/components/CodeEditor';
import ResultsPanel from '@/components/ResultsPanel';
import Console from '@/components/Console';
import { problems } from '@/lib/problems';
import { Problem, ExecutionResult, TestCase } from '@/types';

export default function Home() {
  const [currentProblemId, setCurrentProblemId] = useState(1);
  const [code, setCode] = useState('');
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  const currentProblem = problems.find(p => p.id === currentProblemId) || problems[0];

  const handleProblemChange = (problemId: number) => {
    setCurrentProblemId(problemId);
    setCode('');
    setExecutionResult(null);
  };

  const executeCode = async () => {
    setIsRunning(true);
    
    // Simulate execution delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // Create a safe execution context
      const func = new Function('return ' + code)();
      
      const testCases: TestCase[] = [];
      let allPassed = true;

      // Generate test cases based on expected outputs
      for (const [functionCall, expectedOutput] of Object.entries(currentProblem.expectedOutputs)) {
        try {
          let actualOutput: unknown;
          
          // Parse function call and execute
          if (functionCall.includes('(')) {
            const args = functionCall.match(/\((.*?)\)/)?.[1];
            
            if (args && args !== '') {
              // Parse arguments (simple string arguments for now)
              const parsedArgs = args.split(',').map(arg => {
                const trimmed = arg.trim();
                if (trimmed.startsWith("'") || trimmed.startsWith('"')) {
                  return trimmed.slice(1, -1);
                }
                return trimmed;
              });
              actualOutput = func(...parsedArgs);
            } else {
              actualOutput = func();
            }
          } else {
            actualOutput = func();
          }

          const passed = JSON.stringify(actualOutput) === JSON.stringify(expectedOutput);
          
          testCases.push({
            input: functionCall,
            expectedOutput,
            actualOutput,
            passed
          });

          if (!passed) allPassed = false;
        } catch (error) {
          testCases.push({
            input: functionCall,
            expectedOutput,
            actualOutput: `Error: ${error}`,
            passed: false
          });
          allPassed = false;
        }
      }

      setExecutionResult({
        success: allPassed,
        output: 'Execution completed',
        testCases
      });

    } catch (error) {
      setExecutionResult({
        success: false,
        output: null,
        error: `Syntax Error: ${error}`,
        testCases: []
      });
    }

    setIsRunning(false);
  };

  const handleRun = () => {
    executeCode();
  };

  const handleSubmit = () => {
    executeCode();
  };

  const handleShuffle = () => {
    // Shuffle is handled in TopNav component for fun facts
    console.log('Shuffled fun fact!');
  };

  const handleConsoleToggle = () => {
    setIsConsoleOpen(!isConsoleOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <TopNav
        currentProblem={currentProblem}
        onProblemChange={handleProblemChange}
        onRun={handleRun}
        onSubmit={handleSubmit}
        onShuffle={handleShuffle}
        onConsoleToggle={handleConsoleToggle}
      />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 lg:w-2/5 border-r border-gray-700 overflow-hidden">
          <ProblemTabs problem={currentProblem} />
        </div>
        
        {/* Right Panel - Split between Editor and Results */}
        <div className="w-1/2 lg:w-3/5 flex flex-col">
          {/* Code Editor */}
          <div className="flex-1 border-b border-gray-700">
            <CodeEditor
              problem={currentProblem}
              onCodeChange={setCode}
              code={code}
            />
          </div>
          
          {/* Results Panel */}
          <div className="h-80">
            <ResultsPanel
              executionResult={executionResult}
              isRunning={isRunning}
            />
          </div>
        </div>
      </div>

      {/* Console */}
      <Console
        isOpen={isConsoleOpen}
        onClose={() => setIsConsoleOpen(false)}
        onRun={handleRun}
      />
    </div>
  );
}
