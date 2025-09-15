export interface Problem {
  id: number;
  title: string;
  description: string;
  constraints: string[];
  examples: Example[];
  links: Link[];
  functionStub: string;
  expectedOutputs: Record<string, unknown>;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface TestCase {
  input: unknown;
  expectedOutput: unknown;
  actualOutput?: unknown;
  passed?: boolean;
}

export interface ExecutionResult {
  success: boolean;
  output: unknown;
  error?: string;
  testCases: TestCase[];
}

export interface FunFact {
  id: number;
  text: string;
  category: string;
  isSecret?: boolean;
}

export interface GitHubStreak {
  current: number;
  longest: number;
  lastContribution: string;
}

export interface UserProfile {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  streak: GitHubStreak;
}
