# LeetCode-Inspired Portfolio Website

A unique portfolio website designed with a LeetCode-style interface that showcases skills, experience, and projects through interactive coding challenges.

## 🚀 Features

- **Interactive Code Editor**: Monaco Editor with support for JavaScript, Python, Java, and C++
- **Problem-Based Navigation**: Portfolio sections presented as coding problems
- **Real-time Code Execution**: Run and test your solutions against predefined test cases
- **LeetCode-Style UI**: Familiar three-panel layout with problem description, code editor, and results
- **Fun Facts**: Random shuffle feature to display interesting facts
- **Responsive Design**: Works seamlessly across different screen sizes
- **Dark/Light Theme**: Theme toggle support

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor (@monaco-editor/react)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend**: Next.js API Routes (ready for expansion)
- **Database**: MongoDB with Mongoose (ready for integration)
- **Authentication**: NextAuth.js (ready for admin panel)

## 📋 Portfolio Sections

1. **Who is Abhinav Jain?** - Personal introduction and background
2. **Technical Skills** - Programming languages and frameworks
3. **Professional Experience** - Work history and leadership roles
4. **Project Portfolio** - Featured projects and achievements
5. **Achievements & Recognition** - Academic honors and competitions

## 🎯 How It Works

1. **Navigate Problems**: Use the back/next buttons or select specific problems
2. **Write Code**: Implement solutions in the Monaco code editor
3. **Run & Test**: Execute your code and see results in real-time
4. **Submit Solutions**: Check your implementation against test cases
5. **Discover Facts**: Use the shuffle button for random fun facts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Problems

1. Edit `src/lib/problems.ts` to add new portfolio sections
2. Define problem structure with examples and test cases
3. Update the navigation to include new problems

### Modifying Content

- **Personal Info**: Update problems in `src/lib/problems.ts`
- **Fun Facts**: Add new facts to the `funFacts` array
- **Styling**: Customize Tailwind classes in components
- **Code Templates**: Modify `functionStub` in problem definitions

### Future Enhancements

- [ ] Admin panel for content management
- [ ] MongoDB integration for dynamic content
- [ ] GitHub API integration for real streak data
- [ ] NextAuth.js authentication
- [ ] Advanced code execution sandbox
- [ ] Social sharing features
- [ ] Analytics and visitor tracking

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles
├── components/
│   ├── TopNav.tsx         # Navigation bar
│   ├── ProblemPanel.tsx   # Problem description panel
│   ├── CodeEditor.tsx     # Monaco code editor
│   └── ResultsPanel.tsx   # Test results panel
├── lib/
│   └── problems.ts        # Portfolio data and problems
└── types/
    └── index.ts          # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **GitHub**: [AbhinavJain1234](https://github.com/AbhinavJain1234)
- **LinkedIn**: [abhinavjain30](https://linkedin.com/in/abhinavjain30)
- **Email**: [Your Email]

---

⭐ If you found this project interesting, please give it a star!
