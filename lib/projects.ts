export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  gradient: string;
  accent: string;
  iconName: string;
  tech: string[];
  github?: string;
  repo?: string; // owner/name — used for live GitHub stats
  live?: string;
  featured?: boolean;
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: "fpl-ai-suggester",
    title: "FPL AI Squad Suggester",
    category: "AI Decision Support",
    tagline: "AI that picks your Fantasy Premier League squad — and tells you why.",
    description:
      "A full-stack AI dashboard that suggests next-gameweek squads and transfers with clear reasoning: multi-method predictions, FPL rule enforcement, European rotation risk, trend-reversal signals and betting-odds integration. Live in production.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "#34d399",
    iconName: "TrendingUp",
    tech: ["Python", "FastAPI", "React", "Vite", "PostgreSQL", "Pydantic", "FPL API"],
    github: "https://github.com/khaled-yousef-TV/AIFPL",
    repo: "khaled-yousef-TV/AIFPL",
    live: "https://fplai.nl",
    featured: true,
    features: [
      "Multi-method predictions: form, fixtures, heuristics + combined average",
      "Quick Transfers & Wildcard optimizer with FPL rules enforced (max 3 per club, formations)",
      "“Why this player over teammates?” comparisons with grouped suggestions",
      "European rotation risk badges (UCL/UEL/UECL) + trend-reversal signals",
      "Betting-odds integration to sharpen predictions",
      "Saved squads synced server-side via PostgreSQL on Render",
    ],
  },
  {
    id: "thesis-partner",
    title: "Thesis Partner",
    category: "LLM Application",
    tagline: "A Claude-powered co-pilot for writing a Masters thesis.",
    description:
      "Local web app that turns a thesis into a binder-style workspace: paste a section and get APA analysis via Claude plus a GPTZero AI-scan, check theme fit against every saved draft, and chat with a persistent “thesis memory”.",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accent: "#a78bfa",
    iconName: "BookOpen",
    tech: ["Python", "FastAPI", "Claude API", "GPTZero", "HTML", "CSS"],
    github: "https://github.com/khaled-yousef-TV/ThesisPartner",
    repo: "khaled-yousef-TV/ThesisPartner",
    features: [
      "Binder-style navigation — each section page shows its latest analyzed draft",
      "Paste-and-analyze: APA feedback via Claude, AI-content scan via GPTZero",
      "On-demand theme fit across all saved section drafts",
      "Thesis memory: paste context once, then chat against it",
      "Research brief generation",
    ],
  },
  {
    id: "selenium-deepeval",
    title: "Selenium × DeepEval",
    category: "LLM Testing Framework",
    tagline: "Bringing real QA rigor to LLM-powered features.",
    description:
      "A bilingual testing framework: Java Selenium drives the UI and captures LLM responses, a Python FastAPI service scores them with Gemini across 7 evaluation metrics — accuracy, relevancy, coherence, hallucination, faithfulness, compliance and toxicity.",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accent: "#22d3ee",
    iconName: "TestTube",
    tech: ["Java", "Selenium", "Python", "FastAPI", "DeepEval", "Gemini"],
    github: "https://github.com/khaled-yousef-TV/selenium-deepEval-JavaPython",
    repo: "khaled-yousef-TV/selenium-deepEval-JavaPython",
    features: [
      "7 evaluation metrics: accuracy, relevancy, coherence, hallucination, faithfulness, compliance, toxicity",
      "Java Selenium → Python FastAPI bridge over HTTP",
      "Dark-themed web testing console for manual runs",
      "Custom compliance rules: must-contain / must-not-contain terms",
      "Per-metric scores with explanations, pass/fail verdicts",
    ],
  },
  {
    id: "ai-test-generator",
    title: "AI Test Case Generator",
    category: "AI-Powered QA",
    tagline: "From user story to test suite in one prompt.",
    description:
      "Generates comprehensive test cases from user stories, requirements or acceptance criteria using LLMs — with smart edge-case detection, Gherkin/BDD or pytest output, and requirements pulled straight from Jira.",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accent: "#fb7185",
    iconName: "Sparkles",
    tech: ["Python", "Gemini", "LangChain", "Pytest", "Jira API"],
    github: "https://github.com/khaled-yousef-TV/ai-test-generator",
    repo: "khaled-yousef-TV/ai-test-generator",
    features: [
      "Convert user stories into detailed test cases",
      "Smart edge-case detection for scenarios humans miss",
      "Multiple output formats: Gherkin/BDD, pytest, plain text",
      "Jira integration — pull requirements directly from tickets",
      "Coverage analysis across the generated suite",
    ],
  },
];
