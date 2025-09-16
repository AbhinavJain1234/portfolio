'use client';

import TopNav from '@/components/TopNav';
import { Award } from 'lucide-react';
import { problems } from '@/lib/problems';

export default function AchievementsPage() {
  const currentProblem = problems[0];

  const handleProblemChange = () => {};
  const handleRun = () => {};
  const handleSubmit = () => {};
  const handleShuffle = () => {};

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <TopNav
        currentProblem={currentProblem}
        onProblemChange={handleProblemChange}
        onRun={handleRun}
        onSubmit={handleSubmit}
        onShuffle={handleShuffle}
      />
      
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Achievements & Recognition</h1>
          
          <div className="space-y-8">
            <div className="bg-[#262626] rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#ffa116] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">Academic Excellence</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#ffa116] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Merit-based Scholarship</h3>
                  <p className="text-[#ffa116] font-medium mb-2">Thapar University • 2022-2026</p>
                  <p className="text-[#b3b3b3] mb-3">
                    Awarded full tuition scholarship for outstanding academic performance and maintaining top 10% ranking 
                    throughout the Computer Science program.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#ffa116]/20 text-[#ffa116] px-3 py-1 rounded-full text-sm">Academic Excellence</span>
                    <span className="text-[#8c8c8c] text-sm">Ongoing</span>
                  </div>
                </div>

                <div className="border-l-4 border-[#2cbb5d] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">INMO Qualification</h3>
                  <p className="text-[#2cbb5d] font-medium mb-2">Indian National Mathematical Olympiad • 2021</p>
                  <p className="text-[#b3b3b3] mb-3">
                    Qualified for the prestigious Indian National Mathematical Olympiad, demonstrating exceptional 
                    mathematical problem-solving abilities among thousands of participants nationwide.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#2cbb5d]/20 text-[#2cbb5d] px-3 py-1 rounded-full text-sm">Mathematics</span>
                    <span className="text-[#8c8c8c] text-sm">National Level</span>
                  </div>
                </div>

                <div className="border-l-4 border-[#8b5cf6] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Consistent Top Performer</h3>
                  <p className="text-[#8b5cf6] font-medium mb-2">Academic Career • 2018-Present</p>
                  <p className="text-[#b3b3b3] mb-3">
                    Maintained top 10% academic ranking consistently throughout high school and university, 
                    demonstrating sustained excellence in STEM subjects.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#8b5cf6]/20 text-[#8b5cf6] px-3 py-1 rounded-full text-sm">Consistency</span>
                    <span className="text-[#8c8c8c] text-sm">7+ Years</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#2cbb5d] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">Professional Achievements</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#2cbb5d] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Startup Co-founder & CTO</h3>
                  <p className="text-[#2cbb5d] font-medium mb-2">FA Smart Savaari • 2024-Present</p>
                  <p className="text-[#b3b3b3] mb-3">
                    Successfully co-founded and launched an innovative transportation technology startup, 
                    leading the technical architecture and development of scalable mobile and web platforms.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#2cbb5d]/20 text-[#2cbb5d] px-3 py-1 rounded-full text-sm">Leadership</span>
                    <span className="bg-[#2cbb5d]/20 text-[#2cbb5d] px-3 py-1 rounded-full text-sm">Innovation</span>
                    <span className="text-[#8c8c8c] text-sm">Ongoing</span>
                  </div>
                </div>

                <div className="border-l-4 border-[#ffa116] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Optimization Expert</h3>
                  <p className="text-[#ffa116] font-medium mb-2">GEP Worldwide • Summer 2024</p>
                  <p className="text-[#b3b3b3] mb-3">
                    Achieved remarkable 25% performance improvement in database query optimization for enterprise-scale 
                    procurement systems, directly impacting Fortune 500 client operations.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#ffa116]/20 text-[#ffa116] px-3 py-1 rounded-full text-sm">Optimization</span>
                    <span className="bg-[#ffa116]/20 text-[#ffa116] px-3 py-1 rounded-full text-sm">Enterprise</span>
                    <span className="text-[#8c8c8c] text-sm">25% Improvement</span>
                  </div>
                </div>

                <div className="border-l-4 border-[#ef4444] pl-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Leadership</h3>
                  <p className="text-[#ef4444] font-medium mb-2">Multiple Projects • 2023-Present</p>
                  <p className="text-[#b3b3b3] mb-3">
                    Demonstrated exceptional technical leadership by successfully managing development teams, 
                    establishing coding standards, and delivering complex full-stack applications on time.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#ef4444]/20 text-[#ef4444] px-3 py-1 rounded-full text-sm">Team Lead</span>
                    <span className="bg-[#ef4444]/20 text-[#ef4444] px-3 py-1 rounded-full text-sm">Full-Stack</span>
                    <span className="text-[#8c8c8c] text-sm">Multiple Projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">Technical Achievements</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#404040] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Algorithm Mastery</h3>
                  <p className="text-[#b3b3b3] text-sm mb-3">
                    Solved 500+ algorithmic problems across various platforms, demonstrating strong foundation 
                    in data structures and algorithms.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8b5cf6] text-sm">500+ Problems</span>
                    <span className="bg-[#8b5cf6]/20 text-[#8b5cf6] px-2 py-1 rounded text-xs">Expert</span>
                  </div>
                </div>

                <div className="bg-[#404040] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Open Source Impact</h3>
                  <p className="text-[#b3b3b3] text-sm mb-3">
                    Active contributor to multiple open source projects with 300+ contributions and 
                    maintained libraries used by thousands of developers.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#2cbb5d] text-sm">300+ Contributions</span>
                    <span className="bg-[#2cbb5d]/20 text-[#2cbb5d] px-2 py-1 rounded text-xs">Active</span>
                  </div>
                </div>

                <div className="bg-[#404040] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Innovation Recognition</h3>
                  <p className="text-[#b3b3b3] text-sm mb-3">
                    Developed innovative solutions for real-world problems, including AI-powered recommendation 
                    systems and scalable web architectures.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#ffa116] text-sm">AI/ML Projects</span>
                    <span className="bg-[#ffa116]/20 text-[#ffa116] px-2 py-1 rounded text-xs">Innovation</span>
                  </div>
                </div>

                <div className="bg-[#404040] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">System Design Expertise</h3>
                  <p className="text-[#b3b3b3] text-sm mb-3">
                    Designed and implemented scalable systems handling 1000+ concurrent users with 
                    microservices architecture and cloud deployment.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#ef4444] text-sm">1000+ Users</span>
                    <span className="bg-[#ef4444]/20 text-[#ef4444] px-2 py-1 rounded text-xs">Scalable</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Recognition & Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#2cbb5d] mb-2">Top 10%</div>
                  <p className="text-[#8c8c8c] text-sm">Academic Ranking</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ffa116] mb-2">25%</div>
                  <p className="text-[#8c8c8c] text-sm">Performance Boost</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8b5cf6] mb-2">500+</div>
                  <p className="text-[#8c8c8c] text-sm">Problems Solved</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ef4444] mb-2">1</div>
                  <p className="text-[#8c8c8c] text-sm">Startup Founded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
