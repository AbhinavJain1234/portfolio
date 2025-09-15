'use client';

import TopNav from '@/components/TopNav';
import { problems } from '@/lib/problems';

export default function ProjectsPage() {
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
          <h1 className="text-3xl font-bold text-white mb-8">Featured Projects</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#262626] rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">FA Smart Savaari</h2>
                  <span className="text-sm text-[#ffa116] bg-[#ffa116]/20 px-3 py-1 rounded-full">Startup</span>
                </div>
                <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                  Revolutionary transportation technology platform that connects riders with smart mobility solutions. 
                  Features real-time tracking, secure payments, and AI-powered route optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">React Native</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">MongoDB</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Express</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Socket.io</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-[#2cbb5d] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Cross-platform mobile app with real-time tracking</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-[#2cbb5d] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Secure payment integration with multiple gateways</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-[#2cbb5d] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Scalable backend architecture handling 1000+ concurrent users</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-[#ffa116] hover:bg-[#ff8c00] text-black px-4 py-2 rounded text-sm font-medium">
                    View Demo
                  </button>
                  <button className="border border-[#404040] hover:border-[#595959] text-[#b3b3b3] px-4 py-2 rounded text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">LeetCode Portfolio</h2>
                  <span className="text-sm text-[#2cbb5d] bg-[#2cbb5d]/20 px-3 py-1 rounded-full">Web App</span>
                </div>
                <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                  Interactive portfolio website styled as LeetCode with problem-solving interface, resizable panels, 
                  and multi-language code editor with authentic styling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Next.js 15</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">TailwindCSS</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Monaco Editor</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-[#2cbb5d] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Authentic LeetCode-style UI with dark theme</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-[#2cbb5d] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Multi-language code editor with syntax highlighting</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-[#2cbb5d] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Resizable panels and interactive components</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-[#2cbb5d] hover:bg-[#2a9950] text-white px-4 py-2 rounded text-sm font-medium">
                    Live Demo
                  </button>
                  <button className="border border-[#404040] hover:border-[#595959] text-[#b3b3b3] px-4 py-2 rounded text-sm">
                    Source Code
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">AI Study Assistant</h2>
                  <span className="text-sm text-[#8b5cf6] bg-[#8b5cf6]/20 px-3 py-1 rounded-full">AI/ML</span>
                </div>
                <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                  Machine learning application that provides personalized study recommendations using NLP 
                  and recommendation algorithms to analyze learning patterns.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">TensorFlow</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Flask</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">scikit-learn</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">NLTK</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-[#8b5cf6] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Personalized learning recommendation engine</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-[#8b5cf6] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Natural language processing for content analysis</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-[#8b5cf6] mr-2">●</span>
                    <span className="text-[#b3b3b3]">RESTful API with 95% accuracy in recommendations</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-4 py-2 rounded text-sm font-medium">
                    View Project
                  </button>
                  <button className="border border-[#404040] hover:border-[#595959] text-[#b3b3b3] px-4 py-2 rounded text-sm">
                    Research Paper
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">E-Commerce Platform</h2>
                  <span className="text-sm text-[#ef4444] bg-[#ef4444]/20 px-3 py-1 rounded-full">Full Stack</span>
                </div>
                <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                  Complete e-commerce solution with admin dashboard, payment processing, inventory management, 
                  and real-time analytics with microservices architecture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Spring Boot</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Redis</span>
                  <span className="text-xs bg-[#404040] text-[#b3b3b3] px-2 py-1 rounded">Docker</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-[#ef4444] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Microservices architecture with API Gateway</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-[#ef4444] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Integrated payment processing with Stripe</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-[#ef4444] mr-2">●</span>
                    <span className="text-[#b3b3b3]">Real-time inventory and analytics dashboard</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-4 py-2 rounded text-sm font-medium">
                    View Demo
                  </button>
                  <button className="border border-[#404040] hover:border-[#595959] text-[#b3b3b3] px-4 py-2 rounded text-sm">
                    Architecture
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#262626] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Open Source Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#404040] rounded p-4">
                <h3 className="text-white font-medium mb-2">React UI Library</h3>
                <p className="text-[#8c8c8c] text-sm mb-3">Contributed reusable components and accessibility improvements</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#2cbb5d] text-xs">+127 contributions</span>
                  <span className="text-[#ffa116] text-xs">⭐ 2.3k stars</span>
                </div>
              </div>
              <div className="bg-[#404040] rounded p-4">
                <h3 className="text-white font-medium mb-2">Node.js Framework</h3>
                <p className="text-[#8c8c8c] text-sm mb-3">Enhanced performance and added middleware functionality</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#2cbb5d] text-xs">+89 contributions</span>
                  <span className="text-[#ffa116] text-xs">⭐ 1.8k stars</span>
                </div>
              </div>
              <div className="bg-[#404040] rounded p-4">
                <h3 className="text-white font-medium mb-2">Algorithm Visualizer</h3>
                <p className="text-[#8c8c8c] text-sm mb-3">Built interactive sorting and graph algorithm visualizations</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#2cbb5d] text-xs">+156 contributions</span>
                  <span className="text-[#ffa116] text-xs">⭐ 987 stars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
