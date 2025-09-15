'use client';

import { useState } from 'react';
import { FileText, BookOpen, Code, MessageSquare, Star, User, Briefcase, Code2, FolderOpen, Award, GraduationCap } from 'lucide-react';
import type { Problem } from '@/types';

interface ProblemTabsProps {
  problem: Problem;
}

export default function ProblemTabs({ problem }: ProblemTabsProps) {
  const [activeTab, setActiveTab] = useState('description');
  const [stars, setStars] = useState(0);
  const [isStarred, setIsStarred] = useState(false);

  const tabs = [
    { id: 'description', label: 'Description', icon: FileText },
    { id: 'editorial', label: 'Editorial', icon: BookOpen },
    { id: 'solutions', label: 'Solutions', icon: Code },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
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
                  ? 'border-[#ffa116] text-[#ffa116] bg-[#262626]/50'
                  : 'border-transparent text-[#8c8c8c] hover:text-white hover:bg-[#262626]/30'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'description' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-white">
                  {problem.id}. {problem.title}
                </h1>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  problem.difficulty === 'Easy' ? 'text-[#2cbb5d] bg-[#2cbb5d]/20' :
                  problem.difficulty === 'Medium' ? 'text-[#ffa116] bg-[#ffa116]/20' :
                  'text-[#ef4444] bg-[#ef4444]/20'
                }`}>
                  {problem.difficulty}
                </span>
              </div>
              <button 
                onClick={handleStar}
                className={`flex items-center space-x-1 hover:text-[#fbbf24] transition-colors ${
                  isStarred ? 'text-[#fbbf24]' : 'text-[#8c8c8c]'
                }`}
              >
                <Star className={`w-5 h-5 ${isStarred ? 'fill-current' : ''}`} />
                <span className="text-sm">{stars}</span>
              </button>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-[#b3b3b3] mb-6 leading-relaxed whitespace-pre-line">
                {problem.description}
              </div>
              
              {problem.examples && problem.examples.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-md font-semibold text-white">Examples:</h4>
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-[#262626] rounded-lg p-4">
                      <div className="space-y-2">
                        <div>
                          <span className="text-white font-medium">Input: </span>
                          <span className="text-[#b3b3b3] font-mono">{example.input}</span>
                        </div>
                        <div>
                          <span className="text-white font-medium">Output: </span>
                          <span className="text-[#b3b3b3] font-mono">{example.output}</span>
                        </div>
                        {example.explanation && (
                          <div>
                            <span className="text-white font-medium">Explanation: </span>
                            <span className="text-[#b3b3b3]">{example.explanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {problem.constraints && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-white mb-3">Constraints:</h4>
                  <ul className="space-y-1 text-[#b3b3b3]">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index} className="font-mono text-sm">
                        • {constraint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'editorial' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Editorial</h3>
            <div className="bg-[#262626] rounded-lg p-6">
              <h4 className="text-md font-semibold text-white mb-3">Approach</h4>
              <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                This problem can be solved using a greedy approach. The key insight is to identify the pattern
                and optimize for the most efficient solution.
              </p>
              
              <h4 className="text-md font-semibold text-white mb-3">Time Complexity</h4>
              <p className="text-[#b3b3b3] mb-4">O(n) where n is the input size</p>
              
              <h4 className="text-md font-semibold text-white mb-3">Space Complexity</h4>
              <p className="text-[#b3b3b3]">O(1) constant extra space</p>
            </div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <div className="space-y-4">
              <div className="bg-[#262626] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-md font-semibold text-white">JavaScript Solution</h4>
                  <span className="text-sm text-[#2cbb5d]">Accepted</span>
                </div>
                <pre className="bg-[#1a1a1a] rounded p-3 text-sm text-[#b3b3b3] overflow-x-auto">
                  <code>{problem.functionStub}</code>
                </pre>
              </div>
              
              <div className="bg-[#262626] rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-md font-semibold text-white">Python Solution</h4>
                  <span className="text-sm text-[#8c8c8c]">Coming Soon</span>
                </div>
                <p className="text-[#8c8c8c] text-sm">Python implementation will be available soon.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'discussions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Discussions</h3>
              <button className="bg-[#ffa116] hover:bg-[#ff8c00] transition-colors text-black px-4 py-2 rounded text-sm font-medium">
                New Discussion
              </button>
            </div>
            
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-[#8c8c8c] mx-auto mb-4" />
              <h4 className="text-md font-semibold text-white mb-2">No discussions yet</h4>
              <p className="text-[#8c8c8c] mb-4">Be the first to start a discussion about this problem!</p>
              <p className="text-sm text-[#8c8c8c]">Sign in with Google to join the conversation</p>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold text-white mb-3">About Abhinav Jain</h3>
              <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                Passionate Computer Science student at Chitkara University with strong expertise in full-stack development, 
                AI/ML, and competitive programming. Demonstrated leadership through founding startups and contributing to 
                innovative technical solutions.
              </p>
              
              <h4 className="text-md font-semibold text-white mt-6 mb-3">Professional Summary</h4>
              <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                Software Engineer with proven experience in backend development, having worked as an intern at GEP Worldwide. 
                Co-founder and CTO of FA Smart Savaari, bringing innovative transportation solutions to market. Strong foundation 
                in algorithms, data structures, and system design with consistent top 10% academic performance.
              </p>

              <h4 className="text-md font-semibold text-white mt-6 mb-3">Key Highlights</h4>
              <ul className="space-y-2 text-[#b3b3b3]">
                <li className="flex items-start">
                  <span className="text-[#2cbb5d] mr-2">●</span>
                  Merit-based scholarship recipient with exceptional academic record
                </li>
                <li className="flex items-start">
                  <span className="text-[#2cbb5d] mr-2">●</span>
                  INMO (Indian National Mathematical Olympiad) qualifier
                </li>
                <li className="flex items-start">
                  <span className="text-[#2cbb5d] mr-2">●</span>
                  Startup founder with proven leadership and technical execution
                </li>
                <li className="flex items-start">
                  <span className="text-[#2cbb5d] mr-2">●</span>
                  Full-stack developer with expertise across modern tech stack
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Professional Experience</h3>
            
            <div className="space-y-6">
              <div className="border-l-2 border-[#ffa116] pl-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-md font-semibold text-white">Software Engineer Intern</h4>
                  <span className="text-sm text-[#8c8c8c]">Jun 2024 - Aug 2024</span>
                </div>
                <div className="text-[#ffa116] text-sm mb-3">GEP Worldwide</div>
                <ul className="space-y-2 text-[#b3b3b3] text-sm">
                  <li className="flex items-start">
                    <span className="text-[#ffa116] mr-2">▶</span>
                    Developed backend services using Spring Boot and Java
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffa116] mr-2">▶</span>
                    Implemented RESTful APIs for procurement management systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffa116] mr-2">▶</span>
                    Optimized database queries resulting in 25% performance improvement
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[#ffa116] pl-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-md font-semibold text-white">Co-Founder & CTO</h4>
                  <span className="text-sm text-[#8c8c8c]">Jan 2024 - Present</span>
                </div>
                <div className="text-[#ffa116] text-sm mb-3">FA Smart Savaari</div>
                <ul className="space-y-2 text-[#b3b3b3] text-sm">
                  <li className="flex items-start">
                    <span className="text-[#ffa116] mr-2">▶</span>
                    Founded innovative transportation technology startup
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffa116] mr-2">▶</span>
                    Led technical architecture and full-stack development
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffa116] mr-2">▶</span>
                    Built scalable mobile and web applications using React Native and Node.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#262626] rounded-lg p-4">
                <h4 className="text-md font-semibold text-white mb-3">Programming Languages</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">JavaScript/TypeScript</span>
                    <span className="text-[#2cbb5d]">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Java</span>
                    <span className="text-[#2cbb5d]">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Python</span>
                    <span className="text-[#ffa116]">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">C++</span>
                    <span className="text-[#ffa116]">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#262626] rounded-lg p-4">
                <h4 className="text-md font-semibold text-white mb-3">Frameworks & Libraries</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">React/Next.js</span>
                    <span className="text-[#2cbb5d]">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Node.js/Express</span>
                    <span className="text-[#2cbb5d]">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Spring Boot</span>
                    <span className="text-[#ffa116]">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">React Native</span>
                    <span className="text-[#ffa116]">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#262626] rounded-lg p-4">
                <h4 className="text-md font-semibold text-white mb-3">Databases & Tools</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">MongoDB</span>
                    <span className="text-[#2cbb5d]">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">PostgreSQL</span>
                    <span className="text-[#ffa116]">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Git/GitHub</span>
                    <span className="text-[#2cbb5d]">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Docker</span>
                    <span className="text-[#ffa116]">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#262626] rounded-lg p-4">
                <h4 className="text-md font-semibold text-white mb-3">Specializations</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Full-Stack Development</span>
                    <span className="text-[#2cbb5d]">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Data Structures & Algorithms</span>
                    <span className="text-[#2cbb5d]">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">Machine Learning</span>
                    <span className="text-[#ffa116]">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#b3b3b3]">System Design</span>
                    <span className="text-[#ffa116]">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Featured Projects</h3>
            
            <div className="space-y-6">
              <div className="bg-[#262626] rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">FA Smart Savaari</h4>
                  <span className="text-sm text-[#ffa116] bg-[#ffa116]/20 px-2 py-1 rounded">Startup</span>
                </div>
                <p className="text-[#b3b3b3] mb-4">
                  Innovative transportation technology platform connecting riders with smart mobility solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">React Native</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">MongoDB</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Express</span>
                </div>
                <ul className="space-y-1 text-[#b3b3b3] text-sm">
                  <li>• Built cross-platform mobile app with real-time tracking</li>
                  <li>• Implemented secure payment integration</li>
                  <li>• Designed scalable backend architecture</li>
                </ul>
              </div>

              <div className="bg-[#262626] rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">LeetCode Portfolio</h4>
                  <span className="text-sm text-[#2cbb5d] bg-[#2cbb5d]/20 px-2 py-1 rounded">Web App</span>
                </div>
                <p className="text-[#b3b3b3] mb-4">
                  Interactive portfolio website styled as LeetCode with problem-solving interface and resizable panels.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">TailwindCSS</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Monaco Editor</span>
                </div>
                <ul className="space-y-1 text-[#b3b3b3] text-sm">
                  <li>• Authentic LeetCode-style UI with dark theme</li>
                  <li>• Multi-language code editor with syntax highlighting</li>
                  <li>• Resizable panels and interactive components</li>
                </ul>
              </div>

              <div className="bg-[#262626] rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">AI-Powered Study Assistant</h4>
                  <span className="text-sm text-[#8b5cf6] bg-[#8b5cf6]/20 px-2 py-1 rounded">AI/ML</span>
                </div>
                <p className="text-[#b3b3b3] mb-4">
                  Machine learning application that helps students with personalized study recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">TensorFlow</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Flask</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">scikit-learn</span>
                </div>
                <ul className="space-y-1 text-[#b3b3b3] text-sm">
                  <li>• Implemented recommendation algorithms</li>
                  <li>• Natural language processing for content analysis</li>
                  <li>• RESTful API for frontend integration</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Achievements & Recognition</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#ffa116] pl-6">
                <h4 className="text-lg font-semibold text-white">Academic Excellence</h4>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#ffa116] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">Merit-based Scholarship</span>
                      <p className="text-[#b3b3b3] text-sm">Chitkara University - Top 10% academic performance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#ffa116] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">INMO Qualifier</span>
                      <p className="text-[#b3b3b3] text-sm">Indian National Mathematical Olympiad</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#ffa116] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">Consistent Top Performer</span>
                      <p className="text-[#b3b3b3] text-sm">Maintained top 10% ranking throughout academic career</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#2cbb5d] pl-6">
                <h4 className="text-lg font-semibold text-white">Professional Achievements</h4>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#2cbb5d] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">Startup Co-founder</span>
                      <p className="text-[#b3b3b3] text-sm">Successfully launched FA Smart Savaari transportation platform</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#2cbb5d] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">Performance Optimization</span>
                      <p className="text-[#b3b3b3] text-sm">Achieved 25% performance improvement at GEP Worldwide</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#2cbb5d] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">Full-Stack Leadership</span>
                      <p className="text-[#b3b3b3] text-sm">Led technical architecture and development teams</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#8b5cf6] pl-6">
                <h4 className="text-lg font-semibold text-white">Technical Achievements</h4>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">Competitive Programming</span>
                      <p className="text-[#b3b3b3] text-sm">Strong foundation in algorithms and data structures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">Multi-Platform Development</span>
                      <p className="text-[#b3b3b3] text-sm">Expertise in web, mobile, and backend technologies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">Open Source Contributions</span>
                      <p className="text-[#b3b3b3] text-sm">Active contributor to various open source projects</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
            
            <div className="space-y-6">
              <div className="bg-[#262626] rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">Bachelor of Engineering - Computer Science</h4>
                  <span className="text-sm text-[#ffa116]">2022 - 2026</span>
                </div>
                <div className="text-[#ffa116] font-medium mb-3">Chitkara University, Punjab</div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-[#b3b3b3]">CGPA:</span>
                    <span className="text-white font-medium">Top 10% (Merit Scholarship Recipient)</span>
                  </div>
                  <div>
                    <span className="text-[#b3b3b3] block mb-2">Relevant Coursework:</span>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-sm bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded">Data Structures & Algorithms</span>
                      <span className="text-sm bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded">Database Management</span>
                      <span className="text-sm bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded">Software Engineering</span>
                      <span className="text-sm bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded">Machine Learning</span>
                      <span className="text-sm bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded">Computer Networks</span>
                      <span className="text-sm bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded">Operating Systems</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[#b3b3b3] block mb-2">Achievements:</span>
                    <ul className="space-y-1 text-[#b3b3b3] text-sm">
                      <li>• Merit-based scholarship for academic excellence</li>
                      <li>• Consistent top 10% academic performance</li>
                      <li>• Active participant in coding competitions</li>
                      <li>• Member of Computer Science Society</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#262626] rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Additional Qualifications</h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-[#2cbb5d] pl-4">
                    <h5 className="text-white font-medium">INMO Qualification</h5>
                    <p className="text-[#b3b3b3] text-sm">Indian National Mathematical Olympiad - Demonstrated exceptional mathematical problem-solving abilities</p>
                  </div>
                  
                  <div className="border-l-2 border-[#8b5cf6] pl-4">
                    <h5 className="text-white font-medium">Online Certifications</h5>
                    <ul className="text-[#b3b3b3] text-sm space-y-1">
                      <li>• Full Stack Web Development Specialization</li>
                      <li>• Machine Learning Course (Stanford)</li>
                      <li>• Advanced Data Structures and Algorithms</li>
                      <li>• Cloud Computing Fundamentals</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#ffa116] pl-4">
                    <h5 className="text-white font-medium">Skills Development</h5>
                    <ul className="text-[#b3b3b3] text-sm space-y-1">
                      <li>• Competitive Programming Practice</li>
                      <li>• Open Source Contributions</li>
                      <li>• Technical Writing and Documentation</li>
                      <li>• Leadership and Team Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
