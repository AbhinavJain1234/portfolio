'use client';

import TopNav from '@/components/TopNav';
import { GraduationCap } from 'lucide-react';
import { problems } from '@/lib/problems';

export default function EducationPage() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Education</h1>
          
          <div className="space-y-8">
            <div className="bg-[#262626] rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#ffa116] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">Bachelor of Engineering - Computer Science</h2>
                  <p className="text-[#ffa116] font-medium">Thapar University, Punjab</p>
                  <p className="text-[#8c8c8c]">2022 - 2026 (Expected)</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Academic Performance</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[#b3b3b3]">Current CGPA</span>
                      <span className="text-[#2cbb5d] font-semibold">Top 10%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#b3b3b3]">Class Ranking</span>
                      <span className="text-[#ffa116] font-semibold">Merit Scholar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#b3b3b3]">Scholarship</span>
                      <span className="text-[#8b5cf6] font-semibold">Full Tuition</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Specializations</h3>
                  <div className="space-y-2">
                    <div className="bg-[#404040] px-3 py-2 rounded">
                      <span className="text-[#2cbb5d] font-medium">●</span>
                      <span className="text-[#b3b3b3] ml-2">Data Structures & Algorithms</span>
                    </div>
                    <div className="bg-[#404040] px-3 py-2 rounded">
                      <span className="text-[#ffa116] font-medium">●</span>
                      <span className="text-[#b3b3b3] ml-2">Machine Learning & AI</span>
                    </div>
                    <div className="bg-[#404040] px-3 py-2 rounded">
                      <span className="text-[#8b5cf6] font-medium">●</span>
                      <span className="text-[#b3b3b3] ml-2">Software Engineering</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <div className="bg-[#404040] text-center py-3 px-2 rounded">
                    <span className="text-[#b3b3b3] text-sm">Data Structures</span>
                  </div>
                  <div className="bg-[#404040] text-center py-3 px-2 rounded">
                    <span className="text-[#b3b3b3] text-sm">Algorithms</span>
                  </div>
                  <div className="bg-[#404040] text-center py-3 px-2 rounded">
                    <span className="text-[#b3b3b3] text-sm">Database Systems</span>
                  </div>
                  <div className="bg-[#404040] text-center py-3 px-2 rounded">
                    <span className="text-[#b3b3b3] text-sm">Software Engineering</span>
                  </div>
                  <div className="bg-[#404040] text-center py-3 px-2 rounded">
                    <span className="text-[#b3b3b3] text-sm">Machine Learning</span>
                  </div>
                  <div className="bg-[#404040] text-center py-3 px-2 rounded">
                    <span className="text-[#b3b3b3] text-sm">Computer Networks</span>
                  </div>
                  <div className="bg-[#404040] text-center py-3 px-2 rounded">
                    <span className="text-[#b3b3b3] text-sm">Operating Systems</span>
                  </div>
                  <div className="bg-[#404040] text-center py-3 px-2 rounded">
                    <span className="text-[#b3b3b3] text-sm">Web Development</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">University Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-[#404040] rounded">
                    <span className="text-[#ffa116] mt-1">🏆</span>
                    <div>
                      <h4 className="text-white font-medium">Merit-based Scholarship</h4>
                      <p className="text-[#8c8c8c] text-sm">Full tuition scholarship for academic excellence and consistent top 10% performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-[#404040] rounded">
                    <span className="text-[#2cbb5d] mt-1">👥</span>
                    <div>
                      <h4 className="text-white font-medium">Computer Science Society Member</h4>
                      <p className="text-[#8c8c8c] text-sm">Active participant in coding competitions and technical workshops</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-[#404040] rounded">
                    <span className="text-[#8b5cf6] mt-1">💡</span>
                    <div>
                      <h4 className="text-white font-medium">Innovation Projects</h4>
                      <p className="text-[#8c8c8c] text-sm">Led multiple innovative projects in AI/ML and full-stack development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Additional Qualifications</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#2cbb5d] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">INMO Qualification</h3>
                  <p className="text-[#2cbb5d] font-medium mb-2">Indian National Mathematical Olympiad • 2021</p>
                  <p className="text-[#b3b3b3] mb-3">
                    Qualified for the prestigious national-level mathematical olympiad, demonstrating exceptional 
                    problem-solving abilities and mathematical reasoning skills.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#2cbb5d]/20 text-[#2cbb5d] px-3 py-1 rounded-full text-sm">Mathematics</span>
                    <span className="bg-[#2cbb5d]/20 text-[#2cbb5d] px-3 py-1 rounded-full text-sm">Problem Solving</span>
                    <span className="bg-[#2cbb5d]/20 text-[#2cbb5d] px-3 py-1 rounded-full text-sm">National Level</span>
                  </div>
                </div>

                <div className="border-l-4 border-[#8b5cf6] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Online Certifications</h3>
                  <div className="space-y-3">
                    <div className="bg-[#404040] p-3 rounded">
                      <h4 className="text-white font-medium">Full Stack Web Development Specialization</h4>
                      <p className="text-[#8c8c8c] text-sm">Coursera - University of Hong Kong</p>
                    </div>
                    <div className="bg-[#404040] p-3 rounded">
                      <h4 className="text-white font-medium">Machine Learning Course</h4>
                      <p className="text-[#8c8c8c] text-sm">Stanford University (Andrew Ng)</p>
                    </div>
                    <div className="bg-[#404040] p-3 rounded">
                      <h4 className="text-white font-medium">Advanced Data Structures and Algorithms</h4>
                      <p className="text-[#8c8c8c] text-sm">MIT OpenCourseWare</p>
                    </div>
                    <div className="bg-[#404040] p-3 rounded">
                      <h4 className="text-white font-medium">Cloud Computing Fundamentals</h4>
                      <p className="text-[#8c8c8c] text-sm">AWS Certified Solutions Architect</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-[#ffa116] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Skills Development</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Technical Skills</h4>
                      <ul className="space-y-1 text-[#b3b3b3] text-sm">
                        <li>• Competitive Programming Practice (500+ problems)</li>
                        <li>• Open Source Contributions (300+ commits)</li>
                        <li>• Technical Writing and Documentation</li>
                        <li>• Code Review and Best Practices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Soft Skills</h4>
                      <ul className="space-y-1 text-[#b3b3b3] text-sm">
                        <li>• Leadership and Team Management</li>
                        <li>• Project Planning and Execution</li>
                        <li>• Public Speaking and Presentations</li>
                        <li>• Mentoring and Knowledge Sharing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Academic Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-[#2cbb5d] rounded-full"></div>
                  <div>
                    <span className="text-white font-medium">2026 (Expected)</span>
                    <span className="text-[#8c8c8c] ml-3">Graduation - B.E. Computer Science</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-[#ffa116] rounded-full"></div>
                  <div>
                    <span className="text-white font-medium">2024</span>
                    <span className="text-[#8c8c8c] ml-3">Startup Co-founder - FA Smart Savaari</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-[#8b5cf6] rounded-full"></div>
                  <div>
                    <span className="text-white font-medium">2022</span>
                    <span className="text-[#8c8c8c] ml-3">Started B.E. Computer Science with Merit Scholarship</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-[#ef4444] rounded-full"></div>
                  <div>
                    <span className="text-white font-medium">2021</span>
                    <span className="text-[#8c8c8c] ml-3">INMO Qualification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
