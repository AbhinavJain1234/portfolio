'use client';

import { useState } from 'react';
import { ChevronDown, Settings, Copy, RotateCcw, Maximize2 } from 'lucide-react';

interface CodeEditorHeaderProps {
  language: string;
  onLanguageChange: (language: string) => void;
  onReset: () => void;
}

export default function CodeEditorHeader({ 
  language, 
  onLanguageChange, 
  onReset 
}: CodeEditorHeaderProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
    { value: 'javascript', label: 'JavaScript', icon: '🟨' },
    { value: 'python', label: 'Python', icon: '🐍' },
    { value: 'java', label: 'Java', icon: '☕' },
    { value: 'cpp', label: 'C++', icon: '⚡' },
    { value: 'typescript', label: 'TypeScript', icon: '🔷' }
  ];

  const currentLanguage = languages.find(lang => lang.value === language);

  return (
    <div className="flex items-center justify-between bg-gray-800 border-b border-gray-700 px-4 py-2">
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm"
          >
            <span>{currentLanguage?.icon}</span>
            <span>{currentLanguage?.label}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isLanguageDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-lg z-10 min-w-[150px]">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => {
                    onLanguageChange(lang.value);
                    setIsLanguageDropdownOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-left text-white hover:bg-gray-600 first:rounded-t-md last:rounded-b-md"
                >
                  <span>{lang.icon}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Auto-complete toggle */}
        <label className="flex items-center space-x-2 text-sm text-gray-300">
          <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
          />
          <span>Auto-complete</span>
        </label>
      </div>

      <div className="flex items-center space-x-2">
        {/* Reset Code */}
        <button
          onClick={onReset}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
          title="Reset to default code"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Copy Code */}
        <button
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
          title="Copy code"
        >
          <Copy className="w-4 h-4" />
        </button>

        {/* Settings */}
        <button
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
          title="Editor settings"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* Fullscreen */}
        <button
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
          title="Fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
