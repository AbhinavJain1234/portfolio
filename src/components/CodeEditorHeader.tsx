'use client';

import { useState } from 'react';
import { ChevronDown, Copy, RotateCcw, Maximize2, Minimize2, Code, Check } from 'lucide-react';

interface CodeEditorHeaderProps {
  language: string;
  onLanguageChange: (language: string) => void;
  onReset: () => void;
  code?: string;
  onCodeChange?: (code: string) => void;
  onFullscreenToggle?: (isFullscreen: boolean) => void;
}

export default function CodeEditorHeader({ 
  language, 
  onLanguageChange, 
  onReset,
  code = '',
  onCodeChange,
  onFullscreenToggle
}: CodeEditorHeaderProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formatted, setFormatted] = useState(false);

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'typescript', label: 'TypeScript' }
  ];

  const currentLanguage = languages.find(lang => lang.value === language);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleFormat = () => {
    // Basic code formatting implementation
    if (!onCodeChange) return;
    
    let formattedCode = code;
    
    // Basic formatting based on language
    switch (language) {
      case 'javascript':
      case 'typescript':
        formattedCode = formatJavaScript(code);
        break;
      case 'python':
        formattedCode = formatPython(code);
        break;
      case 'java':
      case 'cpp':
        formattedCode = formatCStyle(code);
        break;
      default:
        formattedCode = code.split('\n').map(line => line.trim()).join('\n');
    }
    
    onCodeChange(formattedCode);
    setFormatted(true);
    setTimeout(() => setFormatted(false), 2000);
  };

  const formatJavaScript = (code: string) => {
    return code
      .split('\n')
      .map(line => {
        const trimmed = line.trim();
        if (trimmed.includes('{') || trimmed.includes('}')) {
          return trimmed;
        }
        return '  ' + trimmed;
      })
      .join('\n');
  };

  const formatPython = (code: string) => {
    return code
      .split('\n')
      .map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('def ') || trimmed.startsWith('class ') || trimmed.startsWith('if ') || trimmed.startsWith('for ') || trimmed.startsWith('while ')) {
          return trimmed;
        }
        if (trimmed && !trimmed.startsWith('#')) {
          return '    ' + trimmed;
        }
        return trimmed;
      })
      .join('\n');
  };

  const formatCStyle = (code: string) => {
    return code
      .split('\n')
      .map(line => {
        const trimmed = line.trim();
        if (trimmed.includes('{') || trimmed.includes('}')) {
          return trimmed;
        }
        return '    ' + trimmed;
      })
      .join('\n');
  };

  const handleFullscreen = () => {
    const newFullscreenState = !isFullscreen;
    setIsFullscreen(newFullscreenState);
    onFullscreenToggle?.(newFullscreenState);
  };

  return (
    <div className="flex items-center justify-between bg-[#262626] border-b border-[#404040] px-4 py-2">
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="flex items-center space-x-2 bg-[#404040] hover:bg-[#4d4d4d] text-white px-3 py-2 rounded text-sm"
          >
            <span>{currentLanguage?.label}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isLanguageDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-[#404040] border border-[#595959] rounded-md shadow-lg z-10 min-w-[150px]">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => {
                    onLanguageChange(lang.value);
                    setIsLanguageDropdownOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-left text-white hover:bg-[#4d4d4d] first:rounded-t-md last:rounded-b-md"
                >
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Auto-complete toggle */}
        <label className="flex items-center space-x-2 text-sm text-[#b3b3b3]">
          <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 text-[#2cbb5d] bg-[#404040] border-[#595959] rounded focus:ring-[#2cbb5d]"
          />
          <span>Auto-complete</span>
        </label>
      </div>

      <div className="flex items-center space-x-2">
        {/* Reset Code */}
        <button
          onClick={onReset}
          className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#404040] rounded transition-all duration-200 active:scale-95 active:bg-[#4d4d4d]"
          title="Reset to default code"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Copy Code */}
        <button
          onClick={handleCopy}
          className={`p-2 rounded transition-all duration-200 active:scale-95 ${
            copied 
              ? 'text-[#2cbb5d] bg-[#2cbb5d]/20' 
              : 'text-[#8c8c8c] hover:text-white hover:bg-[#404040] active:bg-[#4d4d4d]'
          }`}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>

        {/* Refactor/Format Code */}
        <button
          onClick={handleFormat}
          className={`p-2 rounded transition-all duration-200 active:scale-95 ${
            formatted 
              ? 'text-[#2cbb5d] bg-[#2cbb5d]/20' 
              : 'text-[#8c8c8c] hover:text-white hover:bg-[#404040] active:bg-[#4d4d4d]'
          }`}
          title={formatted ? "Code formatted!" : "Format code"}
        >
          <Code className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={handleFullscreen}
          className={`p-2 rounded transition-all duration-200 active:scale-95 ${
            isFullscreen 
              ? 'text-[#ffa116] bg-[#ffa116]/20' 
              : 'text-[#8c8c8c] hover:text-white hover:bg-[#404040] active:bg-[#4d4d4d]'
          }`}
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
