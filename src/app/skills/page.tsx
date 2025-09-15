'use client';

import TopNav from '@/components/TopNav';
import { problems } from '@/lib/problems';

export default function SkillsPage() {
  const currentProblem = problems[0];

  const handleProblemChange = () => {};
  const handleRun = () => {};
  const handleSubmit = () => {};
  const handleShuffle = () => {};
  const handleNotepadToggle = () => {};

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
      
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Technical Skills</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Programming Languages</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">JavaScript/TypeScript</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Advanced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Java</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Advanced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Python</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">C++</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Frontend Development</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">React/Next.js</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Expert</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">HTML/CSS</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Advanced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">TailwindCSS</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Advanced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">React Native</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Backend Development</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Node.js/Express</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Advanced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Spring Boot</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">REST APIs</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Advanced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">GraphQL</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Beginner</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Databases</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">MongoDB</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Advanced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">PostgreSQL</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">MySQL</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Redis</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Beginner</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">DevOps & Tools</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Git/GitHub</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Expert</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Docker</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">AWS</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Beginner</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Linux</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Specializations</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Data Structures & Algorithms</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Advanced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">System Design</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Machine Learning</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#ffa116] h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-[#ffa116] text-sm">Intermediate</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#b3b3b3]">Problem Solving</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-[#404040] rounded-full h-2">
                      <div className="bg-[#2cbb5d] h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-[#2cbb5d] text-sm">Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#262626] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Certifications & Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-[#404040] rounded">
                <div className="w-3 h-3 bg-[#2cbb5d] rounded-full"></div>
                <span className="text-[#b3b3b3]">Full Stack Web Development Specialization</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-[#404040] rounded">
                <div className="w-3 h-3 bg-[#ffa116] rounded-full"></div>
                <span className="text-[#b3b3b3]">Machine Learning Course (Stanford)</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-[#404040] rounded">
                <div className="w-3 h-3 bg-[#8b5cf6] rounded-full"></div>
                <span className="text-[#b3b3b3]">Advanced Data Structures and Algorithms</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-[#404040] rounded">
                <div className="w-3 h-3 bg-[#ef4444] rounded-full"></div>
                <span className="text-[#b3b3b3]">Cloud Computing Fundamentals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
