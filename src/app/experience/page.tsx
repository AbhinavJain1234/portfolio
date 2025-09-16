'use client';

import TopNav from '@/components/TopNav';
import { problems } from '@/lib/problems';

export default function ExperiencePage() {
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
          <h1 className="text-3xl font-bold text-white mb-8">Professional Experience</h1>
          
          <div className="space-y-8">
            <div className="bg-[#262626] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Software Engineer Intern</h2>
                <span className="text-[#8c8c8c] text-sm">Jun 2024 - Aug 2024</span>
              </div>
              <div className="text-[#ffa116] font-medium mb-4">GEP Worldwide</div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-[#ffa116] mr-3 mt-1">▶</span>
                  <p className="text-[#b3b3b3]">Developed backend services using Spring Boot and Java for enterprise procurement systems</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#ffa116] mr-3 mt-1">▶</span>
                  <p className="text-[#b3b3b3]">Implemented RESTful APIs for procurement management systems serving Fortune 500 clients</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#ffa116] mr-3 mt-1">▶</span>
                  <p className="text-[#b3b3b3]">Optimized database queries resulting in 25% performance improvement in data retrieval</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#ffa116] mr-3 mt-1">▶</span>
                  <p className="text-[#b3b3b3]">Collaborated with cross-functional teams using Agile methodologies</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">Java</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">Spring Boot</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">PostgreSQL</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">REST APIs</span>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Co-Founder & CTO</h2>
                <span className="text-[#8c8c8c] text-sm">Jan 2024 - Present</span>
              </div>
              <div className="text-[#ffa116] font-medium mb-4">FA Smart Savaari</div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-[#ffa116] mr-3 mt-1">▶</span>
                  <p className="text-[#b3b3b3]">Founded innovative transportation technology startup addressing urban mobility challenges</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#ffa116] mr-3 mt-1">▶</span>
                  <p className="text-[#b3b3b3]">Led technical architecture and full-stack development of mobile and web applications</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#ffa116] mr-3 mt-1">▶</span>
                  <p className="text-[#b3b3b3]">Built scalable platforms using React Native, Node.js, and cloud infrastructure</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#ffa116] mr-3 mt-1">▶</span>
                  <p className="text-[#b3b3b3]">Managed technical team and established development workflows and best practices</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">React Native</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">MongoDB</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">AWS</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded text-xs">Leadership</span>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2cbb5d] mb-2">25%</div>
                  <p className="text-[#b3b3b3] text-sm">Performance Improvement</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffa116] mb-2">1</div>
                  <p className="text-[#b3b3b3] text-sm">Startup Founded</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8b5cf6] mb-2">2+</div>
                  <p className="text-[#b3b3b3] text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ef4444] mb-2">500+</div>
                  <p className="text-[#b3b3b3] text-sm">Enterprise Users Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
