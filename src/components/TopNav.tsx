'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Shuffle, Play, Send, Search, Bell, Flame, Settings, Notebook } from 'lucide-react';
import { problems, funFacts } from '@/lib/problems';
import { Problem } from '@/types';

interface TopNavProps {
  currentProblem: Problem;
  onProblemChange: (problemId: number) => void;
  onRun: () => void;
  onSubmit: () => void;
  onShuffle: () => void;
  onNotepadToggle: () => void;
}

export default function TopNav({ 
  currentProblem, 
  onProblemChange, 
  onRun, 
  onSubmit,
  onShuffle,
  onNotepadToggle
}: TopNavProps) {
  const [streak] = useState(42); // Mock GitHub streak
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFunFact, setCurrentFunFact] = useState('');

  const handleShuffle = () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setCurrentFunFact(randomFact);
    setShowFunFact(true);
    onShuffle();
    
    // Hide fun fact after 3 seconds
    setTimeout(() => setShowFunFact(false), 3000);
  };

  const goToPrevious = () => {
    const currentIndex = problems.findIndex(p => p.id === currentProblem.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : problems.length - 1;
    onProblemChange(problems[prevIndex].id);
  };

  const goToNext = () => {
    const currentIndex = problems.findIndex(p => p.id === currentProblem.id);
    const nextIndex = currentIndex < problems.length - 1 ? currentIndex + 1 : 0;
    onProblemChange(problems[nextIndex].id);
  };

  return (
    <>
      <nav className="bg-[#1a1a1a] border-b border-[#262626] px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#ffa116] rounded flex items-center justify-center text-white font-bold text-sm">
                🔥
              </div>
              <span className="font-bold text-white text-xl">
                Portfolio
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {/* Removed navigation buttons - moved to problem tabs */}
            </div>
            
            <div className="flex items-center space-x-2 ml-6">
              <button
                onClick={goToPrevious}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                title="Previous Problem"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded"
                title="Next Problem"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleShuffle}
                className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded"
                title="Random Fun Fact"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Section */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={onRun}
              className="px-4 py-2 text-sm bg-[#2cbb5d] text-white rounded hover:bg-[#2a9950] flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Run</span>
            </button>
            <button
              onClick={onSubmit}
              className="px-4 py-2 text-sm bg-[#2cbb5d] text-white rounded hover:bg-[#2a9950] flex items-center space-x-2 font-medium"
            >
              <Send className="w-4 h-4" />
              <span>Submit</span>
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onNotepadToggle}
              className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded"
              title="Open Notepad"
            >
              <Notebook className="w-4 h-4" />
            </button>
            
            <button className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded">
              <Search className="w-4 h-4" />
            </button>
            
            <button className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ef4444] rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-2 text-[#ffa116]">
              <Flame className="w-4 h-4" />
              <span className="font-semibold text-sm">{streak}</span>
            </div>

            <button className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded">
              <Settings className="w-4 h-4" />
            </button>

            <div className="relative">
              <button className="flex items-center space-x-2 p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded">
                <div className="w-6 h-6 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fun Fact Popup */}
      {showFunFact && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-[#ffa116] text-[#1a1a1a] border border-[#ffb84d] rounded-lg p-4 shadow-xl z-50 max-w-md">
          <div className="text-sm font-medium">
            💡 <strong>Fun Fact:</strong> {currentFunFact}
          </div>
        </div>
      )}
    </>
  );
}
