'use client';

import { useState } from 'react';
import { Save, Edit, Plus, Trash2, Upload } from 'lucide-react';

interface ProfileData {
  name: string;
  title: string;
  summary: string;
  email: string;
  location: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: string;
  features: string[];
}

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState('profile');
  
  // Sample data - in real app this would come from a database
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Abhinav Jain",
    title: "Software Engineer & Startup Co-founder",
    summary: "Passionate Computer Science student at Thapar University with strong expertise in full-stack development, AI/ML, and competitive programming.",
    email: "abhinav@example.com",
    location: "Punjab, India"
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      title: "Software Engineer Intern",
      company: "GEP Worldwide",
      duration: "Jun 2024 - Aug 2024",
      description: [
        "Developed backend services using Spring Boot and Java",
        "Implemented RESTful APIs for procurement management systems",
        "Optimized database queries resulting in 25% performance improvement"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"]
    },
    {
      id: "2",
      title: "Co-Founder & CTO",
      company: "FA Smart Savaari",
      duration: "Jan 2024 - Present",
      description: [
        "Founded innovative transportation technology startup",
        "Led technical architecture and full-stack development",
        "Built scalable mobile and web applications using React Native and Node.js"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"]
    }
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "FA Smart Savaari",
      description: "Innovative transportation technology platform connecting riders with smart mobility solutions.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express", "Socket.io"],
      category: "Startup",
      features: [
        "Cross-platform mobile app with real-time tracking",
        "Secure payment integration with multiple gateways",
        "Scalable backend architecture handling 1000+ concurrent users"
      ]
    },
    {
      id: "2",
      name: "LeetCode Portfolio",
      description: "Interactive portfolio website styled as LeetCode with problem-solving interface and resizable panels.",
      technologies: ["Next.js 15", "TypeScript", "TailwindCSS", "Monaco Editor"],
      category: "Web App",
      features: [
        "Authentic LeetCode-style UI with dark theme",
        "Multi-language code editor with syntax highlighting",
        "Resizable panels and interactive components"
      ]
    }
  ]);

  const handleSaveProfile = () => {
    // In real app, this would save to database
    alert('Profile data saved successfully!');
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      title: "New Position",
      company: "Company Name",
      duration: "Start - End",
      description: ["Add description..."],
      technologies: []
    };
    setExperiences([...experiences, newExp]);
  };

  const deleteExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "New Project",
      description: "Project description...",
      technologies: [],
      category: "Personal",
      features: []
    };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(proj => proj.id !== id));
  };

  const sections = [
    { id: 'profile', label: 'Profile', icon: Edit },
    { id: 'experience', label: 'Experience', icon: Edit },
    { id: 'projects', label: 'Projects', icon: Edit },
    { id: 'skills', label: 'Skills', icon: Edit },
    { id: 'achievements', label: 'Achievements', icon: Edit },
    { id: 'education', label: 'Education', icon: Edit },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <div className="bg-[#262626] border-b border-[#404040] p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Portfolio Admin Panel</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-[#2cbb5d] hover:bg-[#2a9950] text-white px-4 py-2 rounded text-sm font-medium flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save All Changes</span>
            </button>
            <a href="/" className="text-[#8c8c8c] hover:text-white text-sm">
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#262626] min-h-screen p-4">
          <nav className="space-y-2">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-[#ffa116] text-black'
                      : 'text-[#b3b3b3] hover:bg-[#404040] hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeSection === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
              
              <div className="bg-[#262626] rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Title</label>
                    <input
                      type="text"
                      value={profileData.title}
                      onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                      className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Location</label>
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-white mb-2">Summary</label>
                  <textarea
                    value={profileData.summary}
                    onChange={(e) => setProfileData({...profileData, summary: e.target.value})}
                    rows={4}
                    className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                  />
                </div>
                <div className="mt-6">
                  <button 
                    onClick={handleSaveProfile}
                    className="bg-[#2cbb5d] hover:bg-[#2a9950] text-white px-4 py-2 rounded font-medium"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Edit Experience</h2>
                <button 
                  onClick={addExperience}
                  className="bg-[#ffa116] hover:bg-[#ff8c00] text-black px-4 py-2 rounded font-medium flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Experience</span>
                </button>
              </div>

              {experiences.map((exp) => (
                <div key={exp.id} className="bg-[#262626] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Experience Entry</h3>
                    <button 
                      onClick={() => deleteExperience(exp.id)}
                      className="text-[#ef4444] hover:text-[#dc2626]"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Job Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => {
                          const updated = experiences.map(item => 
                            item.id === exp.id ? {...item, title: e.target.value} : item
                          );
                          setExperiences(updated);
                        }}
                        className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Duration</label>
                    <input
                      type="text"
                      value={exp.duration}
                      className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Technologies</label>
                    <input
                      type="text"
                      value={exp.technologies.join(', ')}
                      placeholder="Comma-separated technologies"
                      className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Edit Projects</h2>
                <button 
                  onClick={addProject}
                  className="bg-[#ffa116] hover:bg-[#ff8c00] text-black px-4 py-2 rounded font-medium flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </button>
              </div>

              {projects.map((project) => (
                <div key={project.id} className="bg-[#262626] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Project Entry</h3>
                    <button 
                      onClick={() => deleteProject(project.id)}
                      className="text-[#ef4444] hover:text-[#dc2626]"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Project Name</label>
                      <input
                        type="text"
                        value={project.name}
                        className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Category</label>
                      <select className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2">
                        <option value="Startup">Startup</option>
                        <option value="Web App">Web App</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="Personal">Personal</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Description</label>
                    <textarea
                      value={project.description}
                      rows={3}
                      className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Technologies</label>
                    <input
                      type="text"
                      value={project.technologies.join(', ')}
                      placeholder="Comma-separated technologies"
                      className="w-full bg-[#404040] text-white border border-[#595959] rounded px-3 py-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {(activeSection === 'skills' || activeSection === 'achievements' || activeSection === 'education') && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Editor
              </h2>
              <p className="text-[#8c8c8c]">
                This section is under development. You can add forms here to edit {activeSection} data.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
