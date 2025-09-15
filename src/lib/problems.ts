import { Problem } from '@/types';

export const problems: Problem[] = [
  {
    id: 1,
    title: "Who is Abhinav Jain?",
    functionName: "getPersonalInfo",
    description: `You are given a query about a software engineer. Return the most relevant information about Abhinav Jain.

**About:**
Abhinav is a passionate Computer Science student at Thapar University with expertise in full-stack development, AI/ML, and competitive programming. He has demonstrated leadership through founding startups and contributing to open-source projects.

**Background:**
- Strong foundation in algorithms and data structures
- Experience with modern web frameworks and mobile development
- Leadership roles in multiple startups
- Active in competitive programming and mathematical olympiads

**Philosophy:**
"Code is poetry written in logic" - Abhinav believes in writing clean, efficient, and maintainable code that solves real-world problems.`,
    constraints: [
      "Always learning and adapting to new technologies",
      "Maintains high academic standards (Top 10%)", 
      "Strong problem-solving and analytical skills",
      "Effective team leadership and communication"
    ],
    examples: [
      {
        input: 'getPersonalInfo("summary")',
        output: '"Passionate CS student with startup leadership experience and strong technical skills"',
        explanation: "Returns a concise summary of Abhinav's professional profile"
      },
      {
        input: 'getPersonalInfo("education")',
        output: '"Computer Science - Thapar University (Top 10%)"',
        explanation: "Academic background with performance indicator"
      }
    ],
    links: [
      { label: "Resume PDF", url: "/resume.pdf" },
      { label: "GitHub Profile", url: "https://github.com/AbhinavJain1234" },
      { label: "LinkedIn", url: "https://linkedin.com/in/abhinavjain30" },
      { label: "Email", url: "mailto:abhinav@example.com" }
    ],
    functionStub: `function getPersonalInfo(category) {
    // TODO: Return information about Abhinav based on the category
    // Categories: 'summary', 'education', 'philosophy', 'contact'
    
    const info = {
        summary: "Passionate CS student with startup leadership experience and strong technical skills",
        education: "Computer Science - Thapar University (Top 10%)",
        philosophy: "Code is poetry written in logic",
        contact: "Available for internships and collaboration"
    };
    
    return info[category] || "Information not found";
}`,
    expectedOutputs: {
      'getPersonalInfo("summary")': "Passionate CS student with startup leadership experience and strong technical skills",
      'getPersonalInfo("education")': "Computer Science - Thapar University (Top 10%)",
      'getPersonalInfo("philosophy")': "Code is poetry written in logic"
    },
    difficulty: "Easy",
    tags: ["Introduction", "Biography", "Personal"]
  },
  {
    id: 2,
    title: "Technical Skills Assessment",
    functionName: "getSkills",
    description: `Return Abhinav's technical skills categorized by proficiency and domain.

**Programming Languages:** Java, C/C++, Python, JavaScript/TypeScript, Dart
**Frontend:** React.js, Next.js, Flutter, HTML/CSS, Tailwind CSS
**Backend:** Node.js, Express.js, Spring Boot, RESTful APIs
**Databases:** MongoDB, MySQL, PostgreSQL, Firebase
**Tools & Technologies:** Git, Docker, AWS, Linux, VS Code, Android Studio`,
    constraints: [
      "Must include programming languages",
      "Frontend and backend technologies", 
      "Database experience",
      "Development tools"
    ],
    examples: [
      {
        input: "getSkills('languages')",
        output: '["Java", "C/C++", "Python", "JavaScript", "TypeScript", "Dart"]'
      },
      {
        input: "getSkills('frontend')",
        output: '["React.js", "Next.js", "Flutter", "Tailwind CSS"]'
      }
    ],
    links: [
      { label: "GitHub Projects", url: "https://github.com/AbhinavJain1234" }
    ],
    functionStub: `function getSkills(category) {
    // TODO: Return skills based on category
    // Categories: 'languages', 'frontend', 'backend', 'databases', 'tools'
    const skills = {
        // Fill in the skill categories
    };
    return skills[category] || [];
}`,
    expectedOutputs: {
      "getSkills('languages')": ["Java", "C/C++", "Python", "JavaScript", "TypeScript", "Dart"],
      "getSkills('frontend')": ["React.js", "Next.js", "Flutter", "Tailwind CSS"],
      "getSkills('backend')": ["Node.js", "Express.js", "Spring Boot", "RESTful APIs"],
      "getSkills('databases')": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      "getSkills('tools')": ["Git", "Docker", "AWS", "Linux", "VS Code"]
    },
    difficulty: "Easy",
    tags: ["Skills", "Technical"]
  },
  {
    id: 3,
    title: "Professional Experience",
    functionName: "getExperience",
    description: `Implement a function that returns Abhinav's professional experience and leadership roles.

**Experience Highlights:**
- **GEP Worldwide**: Software Engineering Intern (Backend development)
- **FA Smart Savaari**: Co-Founder & CTO (Startup leadership)
- **Sentinel**: Founder (Innovation and product development)
- **Various Projects**: Full-stack development and AI integration`,
    constraints: [
      "Include company names and roles",
      "Highlight leadership positions",
      "Show technical contributions",
      "Demonstrate growth trajectory"
    ],
    examples: [
      {
        input: "getExperience('latest')",
        output: '{"company": "GEP Worldwide", "role": "Software Engineering Intern", "type": "Backend Development"}'
      }
    ],
    links: [
      { label: "LinkedIn Profile", url: "https://linkedin.com/in/abhinavjain30" }
    ],
    functionStub: `function getExperience(filter) {
    // TODO: Return professional experience
    // Filters: 'latest', 'leadership', 'all'
    const experiences = [
        // Add experience objects here
    ];
    return filter === 'latest' ? experiences[0] : experiences;
}`,
    expectedOutputs: {
      "getExperience('latest')": {"company": "GEP Worldwide", "role": "Software Engineering Intern", "type": "Backend Development"},
      "getExperience('leadership')": [
        {"company": "FA Smart Savaari", "role": "Co-Founder & CTO"},
        {"company": "Sentinel", "role": "Founder"}
      ]
    },
    difficulty: "Medium",
    tags: ["Experience", "Leadership"]
  },
  {
    id: 4,
    title: "Project Portfolio",
    functionName: "getProjects",
    description: `Implement a function that showcases Abhinav's key projects with their technologies and impact.

**Featured Projects:**
- **ViewVault**: Content management platform with advanced features
- **PhD Portal**: Academic management system  
- **AI CI Tool**: Automated code review and testing
- **Portfolio Website**: LeetCode-inspired interactive portfolio`,
    constraints: [
      "Include project names and descriptions",
      "Show technology stack used",
      "Highlight unique features",
      "Demonstrate problem-solving skills"
    ],
    examples: [
      {
        input: "getProjects('featured')",
        output: '[{"name": "ViewVault", "tech": ["React", "Node.js", "MongoDB"], "type": "Full-stack"}]'
      }
    ],
    links: [
      { label: "View Projects", url: "https://github.com/AbhinavJain1234" }
    ],
    functionStub: `function getProjects(filter) {
    // TODO: Return project portfolio
    // Filters: 'featured', 'web', 'ai', 'all'
    const projects = [
        // Add project objects here
    ];
    return projects.filter(project => {
        // Implement filtering logic
    });
}`,
    expectedOutputs: {
      "getProjects('featured')": [
        {"name": "ViewVault", "tech": ["React", "Node.js", "MongoDB"], "type": "Full-stack"},
        {"name": "PhD Portal", "tech": ["Flutter", "Firebase"], "type": "Mobile/Web"},
        {"name": "AI CI Tool", "tech": ["Python", "AI/ML"], "type": "DevTools"}
      ]
    },
    difficulty: "Medium",
    tags: ["Projects", "Portfolio"]
  },
  {
    id: 5,
    title: "Achievements & Recognition",
    functionName: "getAchievements",
    description: `Return Abhinav's academic achievements, scholarships, and competition results.

**Key Achievements:**
- Merit-based scholarship recipient
- INMO (Indian National Mathematical Olympiad) qualifier
- Hackathon participant and winner
- Academic excellence (Top 10% consistently)
- Open source contributions`,
    constraints: [
      "Include academic honors",
      "Competition achievements", 
      "Scholarship details",
      "Leadership recognition"
    ],
    examples: [
      {
        input: "getAchievements('academic')",
        output: '["Merit Scholarship", "Top 10% Academic Performance", "INMO Qualifier"]'
      }
    ],
    links: [
      { label: "Certificates", url: "#certificates" }
    ],
    functionStub: `function getAchievements(category) {
    // TODO: Return achievements by category
    // Categories: 'academic', 'competitions', 'scholarships', 'all'
    const achievements = {
        // Fill in achievement categories
    };
    return achievements[category] || achievements.all;
}`,
    expectedOutputs: {
      "getAchievements('academic')": ["Merit Scholarship", "Top 10% Academic Performance", "INMO Qualifier"],
      "getAchievements('competitions')": ["Hackathon Winner", "INMO Qualifier", "Programming Contests"],
      "getAchievements('scholarships')": ["Merit-based Scholarship", "Academic Excellence Award"]
    },
    difficulty: "Easy",
    tags: ["Achievements", "Academic"]
  }
];

export const funFacts: string[] = [
  "🎯 Cleared INMO (Indian National Mathematical Olympiad)",
  "♟️ Enjoys playing chess in free time", 
  "🚀 Founded two startups before age 22",
  "💡 Has contributed to multiple open source projects",
  "📚 Maintains a 95%+ academic average",
  "🔧 Built his first web application at age 16",
  "🏆 Won multiple hackathons and coding competitions",
  "🌟 Mentors junior developers in coding bootcamps",
  "🎮 Created game development projects using various engines",
  "📱 Developed mobile apps with 1000+ downloads"
];
