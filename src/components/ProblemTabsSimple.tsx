'use client';

import { useState } from 'react';
import { FileText, BookOpen, Code, MessageSquare, Star } from 'lucide-react';
import type { Problem } from '@/types';

interface ProblemTabsProps {
  problem: Problem;
}

export default function ProblemTabsSimple({ problem }: ProblemTabsProps) {
  const [activeTab, setActiveTab] = useState('description');
  const [stars, setStars] = useState(0);
  const [isStarred, setIsStarred] = useState(false);

  const tabs = [
    { id: 'description', label: 'Description', icon: FileText },
    { id: 'editorial', label: 'Editorial', icon: BookOpen },
    { id: 'solutions', label: 'Solutions', icon: Code },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
  ];

  const handleStar = () => {
    if (!isStarred) {
      setStars(prev => prev + 1);
      setIsStarred(true);
    } else {
      setStars(prev => prev - 1);
      setIsStarred(false);
    }
  };

  const formatDescription = (text: string) => {
    // Simple markdown-like formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
      .replace(/`(.*?)`/g, '<code class="bg-[#2a2a2a] px-1 py-0.5 rounded text-[#ffa116]">$1</code>') // Inline code
      .replace(/\n\n/g, '</p><p class="text-[#b3b3b3] mb-4 leading-relaxed">') // Paragraphs
      .replace(/\n/g, '<br>'); // Line breaks
  };

  return (
    <div className="h-full flex flex-col bg-[#1a1a1a]">
      {/* Tabs Header */}
      <div className="flex border-b border-[#262626] overflow-x-auto scrollbar-thin scrollbar-thumb-[#404040] scrollbar-track-transparent">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-white border-[#ffa116] bg-[#262626]'
                  : 'text-[#8c8c8c] border-transparent hover:text-white hover:bg-[#262626]'
              }`}
            >
              <IconComponent size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'description' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">
                {problem.id}. {problem.title}
              </h1>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleStar}
                  className={`flex items-center space-x-1 px-3 py-1 rounded ${
                    isStarred 
                      ? 'bg-[#ffa116] text-[#1a1a1a]' 
                      : 'bg-[#262626] text-[#8c8c8c] hover:text-white'
                  } transition-colors`}
                >
                  <Star size={16} fill={isStarred ? 'currentColor' : 'none'} />
                  <span>{stars}</span>
                </button>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                problem.difficulty === 'Easy' 
                  ? 'bg-[#2cbb5d] text-white' 
                  : problem.difficulty === 'Medium'
                  ? 'bg-[#ffa116] text-white'
                  : 'bg-[#ef4444] text-white'
              }`}>
                {problem.difficulty}
              </span>
              {problem.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-[#262626] text-[#8c8c8c] rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-[#b3b3b3] mb-4 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: `<p class="text-[#b3b3b3] mb-4 leading-relaxed">${formatDescription(problem.description)}</p>` 
                }}
              />
              
              {problem.examples && problem.examples.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Examples</h3>
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-[#262626] rounded-lg p-4">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-[#8c8c8c]">Example {index + 1}:</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-white">Input:</span>
                          <span className="text-[#b3b3b3] ml-2 font-mono">{example.input}</span>
                        </div>
                        <div>
                          <span className="font-medium text-white">Output:</span>
                          <span className="text-[#b3b3b3] ml-2 font-mono">{example.output}</span>
                        </div>
                        {example.explanation && (
                          <div>
                            <span className="font-medium text-white">Explanation:</span>
                            <span className="text-[#b3b3b3] ml-2">{example.explanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {problem.constraints && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Constraints</h3>
                  <ul className="list-disc list-inside space-y-1 text-[#b3b3b3]">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index} className="font-mono text-sm">{constraint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'editorial' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Editorial</h2>
            <div className="bg-[#262626] rounded-lg p-6">
              <p className="text-[#b3b3b3] mb-4">
                This editorial will walk you through the solution approach step by step.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Approach</h3>
                  <p className="text-[#b3b3b3]">
                    The optimal solution uses a dynamic programming approach to solve this problem efficiently.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Complexity Analysis</h3>
                  <ul className="space-y-1 text-[#b3b3b3]">
                    <li><strong>Time Complexity:</strong> O(n)</li>
                    <li><strong>Space Complexity:</strong> O(1)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Solutions</h2>
            <div className="space-y-4">
              <div className="bg-[#262626] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">JavaScript Solution</h3>
                  <span className="text-[#2cbb5d] text-sm">Accepted</span>
                </div>
                <pre className="bg-[#1a1a1a] rounded p-3 text-sm text-[#b3b3b3] overflow-x-auto">
                  <code>{`function solution(nums) {
    // Your solution here
    return result;
}`}</code>
                </pre>
              </div>
              <div className="bg-[#262626] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">Python Solution</h3>
                  <span className="text-[#2cbb5d] text-sm">Accepted</span>
                </div>
                <pre className="bg-[#1a1a1a] rounded p-3 text-sm text-[#b3b3b3] overflow-x-auto">
                  <code>{`def solution(nums):
    # Your solution here
    return result`}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'discussions' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Discussions</h2>
            <div className="space-y-4">
              <div className="bg-[#262626] rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    U
                  </div>
                  <div>
                    <div className="font-semibold text-white">User123</div>
                    <div className="text-[#8c8c8c] text-sm">2 hours ago</div>
                  </div>
                </div>
                <p className="text-[#b3b3b3] mb-3">
                  Great problem! Here's my approach using a sliding window technique...
                </p>
                <div className="flex items-center space-x-4 text-sm text-[#8c8c8c]">
                  <button className="hover:text-white">👍 15</button>
                  <button className="hover:text-white">💬 Reply</button>
                </div>
              </div>
              
              <div className="bg-[#262626] rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-white">Developer456</div>
                    <div className="text-[#8c8c8c] text-sm">5 hours ago</div>
                  </div>
                </div>
                <p className="text-[#b3b3b3] mb-3">
                  Can someone explain why the greedy approach doesn't work here?
                </p>
                <div className="flex items-center space-x-4 text-sm text-[#8c8c8c]">
                  <button className="hover:text-white">👍 8</button>
                  <button className="hover:text-white">💬 Reply</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
