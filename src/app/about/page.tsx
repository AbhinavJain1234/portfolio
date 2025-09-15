'use client';

import TopNav from '@/components/TopNav';
import { problems } from '@/lib/problems';

export default function AboutPage() {
  const currentProblem = problems[0]; // Default problem for nav

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
          <h1 className="text-3xl font-bold text-white mb-8">About Abhinav Jain</h1>
          
          <div className="space-y-8">
            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Professional Summary</h2>
              <p className="text-[#b3b3b3] leading-relaxed">
                Passionate Computer Science student at Thapar University with strong expertise in full-stack development, 
                AI/ML, and competitive programming. Demonstrated leadership through founding startups and contributing to 
                innovative technical solutions.
              </p>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Background</h2>
              <p className="text-[#b3b3b3] leading-relaxed mb-4">
                Software Engineer with proven experience in backend development, having worked as an intern at GEP Worldwide. 
                Co-founder and CTO of FA Smart Savaari, bringing innovative transportation solutions to market. Strong foundation 
                in algorithms, data structures, and system design with consistent top 10% academic performance.
              </p>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#2cbb5d] text-lg">●</span>
                  <div>
                    <h3 className="text-white font-medium">Academic Excellence</h3>
                    <p className="text-[#8c8c8c] text-sm">Merit-based scholarship recipient with exceptional academic record</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#2cbb5d] text-lg">●</span>
                  <div>
                    <h3 className="text-white font-medium">Mathematical Olympiad</h3>
                    <p className="text-[#8c8c8c] text-sm">INMO (Indian National Mathematical Olympiad) qualifier</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#2cbb5d] text-lg">●</span>
                  <div>
                    <h3 className="text-white font-medium">Entrepreneurship</h3>
                    <p className="text-[#8c8c8c] text-sm">Startup founder with proven leadership and technical execution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#2cbb5d] text-lg">●</span>
                  <div>
                    <h3 className="text-white font-medium">Technical Expertise</h3>
                    <p className="text-[#8c8c8c] text-sm">Full-stack developer with expertise across modern tech stack</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Personal Interests</h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded-full text-sm">Competitive Programming</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded-full text-sm">Open Source</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded-full text-sm">System Design</span>
                <span className="bg-[#404040] text-[#b3b3b3] px-3 py-1 rounded-full text-sm">Mathematics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
