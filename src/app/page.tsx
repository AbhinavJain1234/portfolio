'use client';

import { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import TopNav from '@/components/TopNav';
import ProblemTabsSimple from '@/components/ProblemTabsSimple';
import CodeEditor from '@/components/CodeEditor';
import ResultsPanel from '@/components/ResultsPanel';
import Notepad from '@/components/Notepad';
import { problems } from '@/lib/problems';
import { Problem, ExecutionResult, TestCase } from '@/types';

export default function Home() {
  const [currentProblemId, setCurrentProblemId] = useState(1);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);

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
      const testCases: TestCase[] = [];
      let allPassed = true;

      // Define test cases based on the current problem
      const problemTestCases = getTestCasesForProblem(currentProblem.id);

      if (language === 'javascript' || language === 'typescript') {
        // JavaScript/TypeScript execution
        try {
          // Create a safe execution environment
          const wrappedCode = `
            ${code}
            
            // Return the function for testing
            if (typeof ${currentProblem.functionName} !== 'undefined') {
              ${currentProblem.functionName};
            } else {
              throw new Error('Function ${currentProblem.functionName} not found');
            }
          `;
          
          const func = new Function('return ' + wrappedCode)();
          
          // Run test cases
          for (const testCase of problemTestCases) {
            try {
              const actualOutput = func.apply(null, testCase.input);
              const passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expectedOutput);
              allPassed = allPassed && passed;
              
              testCases.push({
                input: JSON.stringify(testCase.input),
                expectedOutput: JSON.stringify(testCase.expectedOutput),
                actualOutput: JSON.stringify(actualOutput),
                passed
              });
            } catch (error) {
              allPassed = false;
              testCases.push({
                input: JSON.stringify(testCase.input),
                expectedOutput: JSON.stringify(testCase.expectedOutput),
                actualOutput: `Runtime Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
                passed: false
              });
            }
          }
        } catch (error) {
          allPassed = false;
          testCases.push({
            input: 'Code compilation',
            expectedOutput: 'Success',
            actualOutput: `Compilation Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
            passed: false
          });
        }
      } else {
        // For other languages, simulate execution
        for (const testCase of problemTestCases) {
          // Simulate execution with reasonable success rate
          const passed = Math.random() > 0.2; // 80% chance of passing for demo
          allPassed = allPassed && passed;
          
          testCases.push({
            input: JSON.stringify(testCase.input),
            expectedOutput: JSON.stringify(testCase.expectedOutput),
            actualOutput: passed ? JSON.stringify(testCase.expectedOutput) : 'Runtime Error',
            passed
          });
        }
      }

      setExecutionResult({
        success: allPassed,
        output: allPassed ? `✅ All test cases passed!` : `❌ ${testCases.filter(tc => !tc.passed).length} test case(s) failed`,
        testCases
      });
      
    } catch (error) {
      setExecutionResult({
        success: false,
        output: `❌ Execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        testCases: []
      });
    }

    setIsRunning(false);
  };

  const getTestCasesForProblem = (problemId: number) => {
    // Define test cases for each problem
    switch (problemId) {
      case 1: // Two Sum
        return [
          { input: [[2, 7, 11, 15], 9], expectedOutput: [0, 1] },
          { input: [[3, 2, 4], 6], expectedOutput: [1, 2] },
          { input: [[3, 3], 6], expectedOutput: [0, 1] }
        ];
      case 2: // Add Two Numbers
        return [
          { input: [[2, 4, 3], [5, 6, 4]], expectedOutput: [7, 0, 8] },
          { input: [[0], [0]], expectedOutput: [0] },
          { input: [[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]], expectedOutput: [8, 9, 9, 9, 0, 0, 0, 1] }
        ];
      case 3: // Longest Substring
        return [
          { input: ["abcabcbb"], expectedOutput: 3 },
          { input: ["bbbbb"], expectedOutput: 1 },
          { input: ["pwwkew"], expectedOutput: 3 }
        ];
      default:
        return [
          { input: ["test"], expectedOutput: "test" },
          { input: [123], expectedOutput: 123 }
        ];
    }
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

  const handleNotepadToggle = () => {
    setIsNotepadOpen(!isNotepadOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <TopNav
        currentProblem={currentProblem}
        onProblemChange={handleProblemChange}
        onRun={handleRun}
        onSubmit={handleSubmit}
        onShuffle={handleShuffle}
        onNotepadToggle={handleNotepadToggle}
      />
      
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal">
          {/* Left Panel - Problem Description */}
          <Panel defaultSize={40} minSize={30}>
            <div className="h-full border-r border-[#262626] overflow-hidden">
              <ProblemTabsSimple problem={currentProblem} />
            </div>
          </Panel>
          
          <PanelResizeHandle className="w-1 bg-[#262626] hover:bg-[#404040] transition-colors" />
          
          {/* Right Panel - Split between Editor and Results */}
          <Panel defaultSize={60} minSize={40}>
            <PanelGroup direction="vertical">
              {/* Code Editor */}
              <Panel defaultSize={70} minSize={40}>
                <CodeEditor
                  problem={currentProblem}
                  onCodeChange={setCode}
                  onLanguageChange={setLanguage}
                  code={code}
                />
              </Panel>
              
              <PanelResizeHandle className="h-1 bg-[#262626] hover:bg-[#404040] transition-colors" />
              
              {/* Results Panel */}
              <Panel defaultSize={30} minSize={20}>
                <ResultsPanel
                  executionResult={executionResult}
                  isRunning={isRunning}
                />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>

      {/* Notepad */}
      <Notepad
        isOpen={isNotepadOpen}
        onClose={() => setIsNotepadOpen(false)}
      />
    </div>
  );
}
