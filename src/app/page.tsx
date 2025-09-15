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
      let func: any;
      
      // Handle different languages
      if (language === 'javascript' || language === 'typescript') {
        // JavaScript/TypeScript execution
        func = new Function('return ' + code)();
      } else {
        // For other languages, simulate execution with predefined results
        // In a real application, this would call a backend service
        const testCases: TestCase[] = [];
        let allPassed = true;

        for (const [functionCall, expectedOutput] of Object.entries(currentProblem.expectedOutputs)) {
          // Simulate different language behavior
          const passed = Math.random() > 0.3; // 70% chance of passing for demo
          allPassed = allPassed && passed;
          
          testCases.push({
            input: functionCall,
            expectedOutput,
            actualOutput: passed ? expectedOutput : 'Runtime Error',
            passed
          });
        }

        setExecutionResult({
          success: allPassed,
          output: allPassed ? 'Execution completed' : 'Some test cases failed',
          testCases
        });
        
        setIsRunning(false);
        return;
      }
      
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
                // Try to parse as number
                const num = Number(trimmed);
                if (!isNaN(num)) {
                  return num;
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
