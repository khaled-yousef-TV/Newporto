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
    title: "AIFPL · Football Intelligence",
    category: "AI Decision Support",
    tagline: "Football decisions you can trace, question, and understand.",
    description:
      "An auditable FPL decision system with reproducible public-data ingestion, calibrated forecasts, constrained squad optimisation, deadline scheduling, and a tool-calling Hermes manager. Recommendations and confirmed teams remain distinct, with immutable records that make each decision traceable.",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    accent: "#00ff88",
    iconName: "TrendingUp",
    tech: ["Python", "FastAPI", "React", "Hermes", "Pydantic", "FPL API"],
    github: "https://github.com/khaled-yousef-TV/AIFPL",
    repo: "khaled-yousef-TV/AIFPL",
    live: "https://fplai.nl",
    featured: true,
    features: [
      "Timestamped public FPL snapshots with validated data and reproducible ingestion",
      "Calibrated forecasts and squad optimisation under FPL constraints",
      "Tool-calling Hermes manager with auditable decision artifacts",
      "Deadline scheduling and public account-state refresh",
      "Immutable execution confirmations, distinct from AI recommendations",
      "Scorecards that identify whether they evaluate a recommendation or a confirmed team",
    ],
  },
  {
    id: "thesis-partner",
    title: "Thesis Partner",
    category: "LLM Application",
    tagline: "A Claude-powered co-pilot for writing a Masters thesis.",
    description:
      "Local web app that turns a thesis into a binder-style workspace: paste a section and get APA analysis via Claude plus a GPTZero AI-scan, check theme fit against every saved draft, and chat with a persistent “thesis memory”.",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accent: "#ffb000",
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
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    accent: "#00e5c7",
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
    gradient: "from-lime-500/20 via-green-500/10 to-transparent",
    accent: "#aaff00",
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
