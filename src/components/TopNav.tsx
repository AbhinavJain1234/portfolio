'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, Shuffle, Play, Send, Search, Bell, Flame, Settings, Notebook, ChevronDown } from 'lucide-react';
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
  const pathname = usePathname();
  const [streak] = useState(42); // Mock GitHub streak
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFunFact, setCurrentFunFact] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [factGenre, setFactGenre] = useState('tech');
  const settingsRef = useRef<HTMLDivElement>(null);

  // Determine which navigation to show
  const isProblemPage = pathname === '/';
  const isAboutPage = pathname?.startsWith('/about') || pathname === '/experience' || pathname === '/skills' || pathname === '/projects' || pathname === '/achievements' || pathname === '/education';

  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
  }, [theme]);

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
      <nav className="bg-[#1a1a1a] border-b border-[#262626] px-4 py-3 relative">
        <div className="flex items-center justify-between">{/* Left Section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#ffa116] rounded flex items-center justify-center text-white font-bold text-sm">
                🔥
              </div>
              <Link href="/" className="font-bold text-white text-xl hover:text-[#ffa116] transition-colors">
                Portfolio
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-4">
              {/* Always show About link */}
              <Link href="/about" className="text-[#8c8c8c] hover:text-white transition-colors px-2 py-1 rounded">
                About
              </Link>
              
              {/* Show Problem link when not on problem page */}
              {!isProblemPage && (
                <Link href="/" className="text-[#8c8c8c] hover:text-white transition-colors px-2 py-1 rounded">
                  Problem
                </Link>
              )}
              
              {/* Show all other tabs only when on about-related pages */}
              {isAboutPage && (
                <>
                  <Link href="/experience" className="text-[#8c8c8c] hover:text-white transition-colors px-2 py-1 rounded">
                    Experience
                  </Link>
                  <Link href="/skills" className="text-[#8c8c8c] hover:text-white transition-colors px-2 py-1 rounded">
                    Skills
                  </Link>
                  <Link href="/projects" className="text-[#8c8c8c] hover:text-white transition-colors px-2 py-1 rounded">
                    Projects
                  </Link>
                  <Link href="/achievements" className="text-[#8c8c8c] hover:text-white transition-colors px-2 py-1 rounded">
                    Achievements
                  </Link>
                  <Link href="/education" className="text-[#8c8c8c] hover:text-white transition-colors px-2 py-1 rounded">
                    Education
                  </Link>
                </>
              )}
            </nav>
            
            <div className="flex items-center space-x-2 ml-6">
              {/* Only show problem navigation controls when not on about page */}
              {!isAboutPage && (
                <>
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
                </>
              )}
              <button
                onClick={handleShuffle}
                className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded"
                title="Random Fun Fact"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Section - Positioned to align with description end */}
          {!isAboutPage && (
            <div className="hidden md:flex items-center space-x-2 absolute left-[40%] transform -translate-x-1/2">
              <button
                onClick={onRun}
                className="p-2 bg-[#404040] text-white rounded hover:bg-[#4d4d4d] transition-colors"
                title="Run Code"
              >
                <Play className="w-5 h-5" />
              </button>
              <button
                onClick={onSubmit}
                className="px-4 py-2 text-sm bg-[#404040] text-[#2cbb5d] rounded hover:bg-[#4d4d4d] flex items-center space-x-2 font-medium"
              >
                <span>Submit</span>
              </button>
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/notes"
              className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded"
              title="Open Notes"
            >
              <Notebook className="w-4 h-4" />
            </Link>
            
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

            <div className="relative" ref={settingsRef}>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 text-[#8c8c8c] hover:text-white hover:bg-[#262626] rounded"
              >
                <Settings className="w-4 h-4" />
              </button>
              
              {showSettings && (
                <div className="absolute top-full right-0 mt-1 bg-[#262626] border border-[#404040] rounded-md shadow-lg z-50 min-w-[200px]">
                  <div className="p-2">
                    <div className="px-3 py-2 text-[#8c8c8c] text-xs font-medium border-b border-[#404040] mb-2">
                      Settings
                    </div>
                    
                    {/* Theme Selection */}
                    <div className="mb-3">
                      <label className="block text-[#b3b3b3] text-sm mb-1">Theme</label>
                      <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="w-full bg-[#404040] text-white text-sm px-2 py-1 rounded border border-[#595959] focus:border-[#ffa116] outline-none"
                      >
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                        <option value="auto">Auto</option>
                      </select>
                    </div>
                    
                    {/* Fun Fact Genre */}
                    <div className="mb-2">
                      <label className="block text-[#b3b3b3] text-sm mb-1">Random Fact Genre</label>
                      <select
                        value={factGenre}
                        onChange={(e) => setFactGenre(e.target.value)}
                        className="w-full bg-[#404040] text-white text-sm px-2 py-1 rounded border border-[#595959] focus:border-[#ffa116] outline-none"
                      >
                        <option value="tech">Technology</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                        <option value="math">Mathematics</option>
                        <option value="programming">Programming</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md animate-pulse">
          <div className="bg-gradient-to-r from-[#ff6b6b] via-[#ffa116] to-[#4ecdc4] p-0.5 rounded-xl shadow-2xl">
            <div className="bg-[#1a1a1a] rounded-lg p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
              <div className="relative flex items-start space-x-3">
                <div className="text-2xl animate-bounce">💡</div>
                <div>
                  <div className="text-[#ffa116] font-bold text-sm mb-1 tracking-wide uppercase">
                    Did You Know?
                  </div>
                  <div className="text-white text-sm leading-relaxed">
                    {currentFunFact}
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 bg-[#4ecdc4] rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
