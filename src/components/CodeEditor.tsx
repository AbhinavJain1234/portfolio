'use client';

import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import CodeEditorHeader from './CodeEditorHeader';
import { Problem } from '@/types';

interface CodeEditorProps {
  problem: Problem;
  onCodeChange: (code: string) => void;
  code: string;
}

export default function CodeEditor({ problem, onCodeChange, code }: CodeEditorProps) {
  const [language, setLanguage] = useState('javascript');
  const [theme] = useState('vs-dark');

  useEffect(() => {
    // Set initial code if empty
    if (!code) {
      onCodeChange(getLanguageStub(language));
    }
  }, [problem.id, code, onCodeChange, language]);

  const handleEditorChange = (value: string | undefined) => {
    onCodeChange(value || '');
  };

  const getLanguageStub = (lang: string) => {
    switch (lang) {
      case 'python':
        return problem.functionStub
          .replace(/function/g, 'def')
          .replace(/{\s*\n/g, ':\n')
          .replace(/}/g, '')
          .replace(/\/\/ TODO:/g, '# TODO:');
      case 'java':
        return `public class Solution {\n    ${problem.functionStub.replace(/function/g, 'public String')}\n}`;
      case 'cpp':
        return `#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\n${problem.functionStub.replace(/function/g, 'string')}`;
      case 'typescript':
        return problem.functionStub.replace(/function/g, 'function');
      default:
        return problem.functionStub;
    }
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    onCodeChange(getLanguageStub(newLanguage));
  };

  const handleReset = () => {
    onCodeChange(getLanguageStub(language));
  };

  return (
    <div className="h-full flex flex-col bg-gray-900">
      {/* Editor Header */}
      <CodeEditorHeader
        language={language}
        onLanguageChange={handleLanguageChange}
        onReset={handleReset}
      />

      {/* Monaco Editor */}
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage={language}
          language={language}
          theme={theme}
          value={code}
          onChange={handleEditorChange}
          options={{
            fontSize: 14,
            fontFamily: 'Fira Code, Consolas, Monaco, monospace',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            insertSpaces: true,
            wordWrap: 'on',
            lineNumbers: 'on',
            roundedSelection: false,
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8
            },
            folding: true,
            renderWhitespace: 'selection',
            bracketPairColorization: {
              enabled: true
            },
            suggestOnTriggerCharacters: true,
            quickSuggestions: true,
            snippetSuggestions: 'inline',
            formatOnPaste: true,
            formatOnType: true
          }}
          loading={
            <div className="flex items-center justify-center h-full bg-gray-900">
              <div className="text-gray-400">Loading Monaco Editor...</div>
            </div>
          }
        />
      </div>

      {/* Editor Footer */}
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-4">
            <span>Ln 1, Col 1</span>
            <span>Spaces: 2</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{language.toUpperCase()}</span>
            <div className="w-2 h-2 bg-green-400 rounded-full" title="Connected"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
