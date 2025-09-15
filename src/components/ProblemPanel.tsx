'use client';

import { Problem } from '@/types';
import { ExternalLink, Star, Clock } from 'lucide-react';

interface ProblemPanelProps {
  problem: Problem;
}

export default function ProblemPanel({ problem }: ProblemPanelProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Hard': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-gray-900 text-white">
      {/* Problem Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-medium text-white">
            {problem.id}. {problem.title}
          </h1>
          <div className="flex items-center space-x-3">
            <button className="p-1 text-gray-400 hover:text-white">
              <Star className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mb-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
          <div className="flex space-x-2">
            {problem.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Description */}
      <div className="p-6">
        <div className="prose prose-invert max-w-none">
          {problem.description.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
              return (
                <h3 key={index} className="text-lg font-semibold text-white mt-6 mb-3 first:mt-0">
                  {paragraph.replace(/\*\*/g, '')}
                </h3>
              );
            } else if (paragraph.startsWith('- **') && paragraph.includes('**:')) {
              const [title, ...content] = paragraph.split('**:');
              return (
                <div key={index} className="mb-3">
                  <strong className="text-white">
                    {title.replace('- **', '')}:
                  </strong>
                  <span className="text-gray-300 ml-1">
                    {content.join('**:')}
                  </span>
                </div>
              );
            } else if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="text-gray-300 ml-4 mb-1">
                  {paragraph.substring(2)}
                </li>
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
      </div>

      {/* Constraints */}
      {problem.constraints.length > 0 && (
        <div className="px-6 pb-4">
          <h3 className="text-lg font-semibold text-white mb-3">
            Constraints:
          </h3>
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

      {/* Examples */}
      {problem.examples.length > 0 && (
        <div className="px-6 pb-4">
          <h3 className="text-lg font-semibold text-white mb-4">
            Examples:
          </h3>
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

      {/* Links */}
      {problem.links.length > 0 && (
        <div className="px-6 pb-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Related Links:
          </h3>
          <div className="space-y-2">
            {problem.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
