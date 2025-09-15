'use client';

import { useState } from 'react';
import { ChevronDown, Clock, Code, FileText, BarChart3, Star, ThumbsUp, MessageSquare } from 'lucide-react';
import { Problem } from '@/types';

interface ProblemTabsProps {
  problem: Problem;
}

export default function ProblemTabs({ problem }: ProblemTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description', icon: FileText },
    { id: 'solutions', label: 'Solutions', icon: Code },
    { id: 'submissions', label: 'Submissions', icon: BarChart3 },
    { id: 'discuss', label: 'Discuss', icon: MessageSquare }
  ];

  const renderDescription = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
          problem.difficulty === 'Easy' ? 'text-green-400 bg-green-500/20' :
          problem.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/20' :
          'text-red-400 bg-red-500/20'
        }`}>
          {problem.difficulty}
        </span>
        <div className="flex items-center space-x-2 text-gray-400">
          <ThumbsUp className="w-4 h-4" />
          <span className="text-sm">1.2k</span>
          <span className="text-sm">👎 45</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-400">
          <Star className="w-4 h-4" />
          <span className="text-sm">Add to List</span>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        {problem.description.split('\n').map((paragraph, index) => {
          if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
            return (
              <h3 key={index} className="text-lg font-semibold text-white mt-6 mb-3 first:mt-0">
                {paragraph.replace(/\*\*/g, '')}
              </h3>
            );
          } else if (paragraph.trim()) {
            return (
              <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          }
          return null;
        })}
      </div>

      {/* Examples */}
      {problem.examples.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Examples:</h3>
          {problem.examples.map((example, index) => (
            <div key={index} className="mb-6 bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="mb-3">
                <span className="font-semibold text-white">Input: </span>
                <code className="text-sm bg-gray-700 text-green-400 px-2 py-1 rounded font-mono">
                  {example.input}
                </code>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-white">Output: </span>
                <code className="text-sm bg-gray-700 text-blue-400 px-2 py-1 rounded font-mono">
                  {example.output}
                </code>
              </div>
              {example.explanation && (
                <div>
                  <span className="font-semibold text-white">Explanation: </span>
                  <span className="text-gray-300">{example.explanation}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Constraints */}
      {problem.constraints.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Constraints:</h3>
          <ul className="space-y-2">
            {problem.constraints.map((constraint, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                {constraint}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderSolutions = () => (
    <div className="space-y-4">
      <div className="text-center py-12">
        <Code className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">No solutions available yet</p>
        <p className="text-sm text-gray-500 mt-2">Check back later for community solutions</p>
      </div>
    </div>
  );

  const renderSubmissions = () => (
    <div className="space-y-4">
      <div className="text-center py-12">
        <BarChart3 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">No submissions yet</p>
        <p className="text-sm text-gray-500 mt-2">Submit your solution to see your progress</p>
      </div>
    </div>
  );

  const renderDiscuss = () => (
    <div className="space-y-4">
      <div className="text-center py-12">
        <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">No discussions yet</p>
        <p className="text-sm text-gray-500 mt-2">Start a discussion about this problem</p>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-gray-900">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-700 bg-gray-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-orange-500 text-white bg-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'description' && renderDescription()}
        {activeTab === 'solutions' && renderSolutions()}
        {activeTab === 'submissions' && renderSubmissions()}
        {activeTab === 'discuss' && renderDiscuss()}
      </div>
    </div>
  );
}
