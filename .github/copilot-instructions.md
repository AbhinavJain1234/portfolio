# LeetCode-Inspired Portfolio Website

This is a unique portfolio website that presents personal information, skills, and projects through an interactive LeetCode-style interface.

## Project Overview

The website features:
- Interactive Monaco code editor with multi-language support
- Problem-based navigation through portfolio sections
- Real-time code execution and testing
- LeetCode-inspired three-panel layout
- Dark/light theme support

## Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor
- **Icons**: Lucide React
- **Package Manager**: npm

## Development Setup

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Access at: http://localhost:3000

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - React components
- `src/lib/` - Data and utilities
- `src/types/` - TypeScript definitions

## Key Components

- `TopNav.tsx` - Navigation with controls and fun facts
- `ProblemPanel.tsx` - Problem description display
- `CodeEditor.tsx` - Monaco editor with language support
- `ResultsPanel.tsx` - Test execution results

## Customization

Edit `src/lib/problems.ts` to update:
- Personal information
- Skills and experience
- Project details
- Fun facts

The website automatically generates interactive coding challenges based on this data.
