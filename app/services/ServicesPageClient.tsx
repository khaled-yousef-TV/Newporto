"use client";
import Link from 'next/link';
import BrandMark from '@/components/BrandMark';
import { ArrowLeft, ArrowUpRight, Check, ScanEye, Bot, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const bookUrl = 'https://calendly.com/kyousefju/ai-qa-readiness';
const reviewUrl = bookUrl;
const emailUrl = 'mailto:kyousefju@gmail.com?subject=AI%20QA%20Consulting';
const external = { target: '_blank', rel: 'noopener noreferrer' };

const pillars = [
 { symbol: ScanEye, title: 'Test your AI', line: 'Make sure chatbots, agents, and models behave correctly before customers rely on them.', points: ['Accuracy and hallucination testing on your own data', 'Arabic and English consistency, including dialects', 'Safety, bias, prompt-injection, and data-leakage checks', 'Agent and workflow testing, end to end'] },
 { symbol: Bot, title: 'Test with AI', line: 'Use AI to make your existing QA faster, broader, and cheaper to maintain.', points: ['Test cases generated from requirements and user stories', 'AI-assisted UI and API automation', 'Smarter regression selection and flaky-test triage', 'Rollout and training for your QA team'] },
 { symbol: ShieldCheck, title: 'Ship AI with confidence', line: 'Put the process around AI quality so it holds up release after release.', points: ['AI test strategy and quality metrics', 'Release gates and regression suites in CI', 'Monitoring and incident playbooks for AI features', 'Audit-ready evidence for SDAIA guidance or the EU AI Act'] },
];

const steps = [
 { days: 'WEEK 0', title: 'Assess', line: 'Review your AI features, current QA process, and risks. Agree on what “good enough to ship” means.' },
 { days: 'WEEKS 1–2', title: 'Build', line: 'Create the test sets, automation, and quality checks that fit your stack and your team.' },
 { days: 'HANDOVER', title: 'Own it', line: 'Wire everything into CI, document it, and train your team to run and extend it themselves.' },
];

const tiers = [
 { name: 'Readiness Review', meta: '30 MIN / FREE', line: 'A focused look at one AI feature or QA workflow. You get a written list of quality and risk gaps.', cta: 'Request a review', href: reviewUrl },
 { name: 'AI Quality Sprint', meta: '2 WEEKS / FIXED PRICE', line: 'One AI feature tested end to end, or one QA workflow rebuilt with AI. Report, test suite, and CI setup included.', cta: 'Book a sprint', href: bookUrl, featured: true },
 { name: 'Fractional AI QA Lead', meta: 'MONTHLY', line: 'Ongoing quality ownership: strategy, new tests as your product changes, release sign-off, and team coaching.', cta: 'Discuss a retainer', href: bookUrl },
];

const audiences = [
 { title: 'AI startups', line: 'Chatbots, voice agents, and AI-native products where one confident wrong answer costs a customer.' },
 { title: 'Fintech & banking', line: 'Assistants and models that must never invent fees or rules, and must never leak data.' },
 { title: 'Teams adding AI', line: 'Product and QA teams shipping their first AI features without a way to test them yet.' },
 { title: 'Integrators & agencies', line: 'Delivery teams that need a specialist to prove an AI system works before handover.' },
];

const report = [
 { metric: 'Answer accuracy', score: 0.91 },
 { metric: 'Hallucination resistance', score: 0.72 },
 { metric: 'Arabic / English consistency', score: 0.64 },
 { metric: 'Safety & misuse resistance', score: 0.58 },
 { metric: 'Agent task success', score: 0.83 },
 { metric: 'Regression vs. last release', score: 0.95 },
];

const faqs = [
 { q: 'Do you work remotely?', a: 'Yes. I am based in Austria (CET), two to three hours behind the Gulf, so working hours overlap well.' },
 { q: 'We don’t have a QA team for AI. Is that a problem?', a: 'No. That is the most common starting point. I set up the process and tooling, then train whoever owns quality on your side.' },
 { q: 'What about our data?', a: 'I sign an NDA before scoping, and all testing can run inside your own environment and accounts.' },
 { q: 'Which tools and models?', a: 'Any model, API, or UI, from OpenAI or Anthropic to open-weight and Arabic-first models. I build on the test tools and CI you already use.' },
];

export default function ServicesPageClient() {
 const reduced=useReducedMotion();
 const rise=(i=0)=>({initial:reduced?false:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:true},transition:{delay:i*.05}});
 return <main className="case-page svc-page"><header className="nav"><Link className="brand" href="/" aria-label="Khaled Yousef home"><BrandMark/></Link><span className="nav-name">KHALED YOUSEF<br/><small>QUALITY × INTELLIGENCE</small></span><nav><Link href="/#work"><ArrowLeft size={15}/> Work</Link><a href={bookUrl} {...external}>Book a call <ArrowUpRight size={15}/></a></nav></header>
  <motion.section className="section case-hero" initial={reduced?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
   <p className="eyebrow">SERVICES / AI QA CONSULTING <span className="case-category">EU · GCC · REMOTE</span></p>
   <h1>AI quality, end to end.</h1>
   <p className="case-tagline">I help teams test their AI products, and use AI to test everything else. Strategy, testing, and automation, in English and Arabic.</p>
   <div className="case-meta"><div><span className="eyebrow">COVERS</span><div className="tags">{['LLMs & chatbots','AI agents','ML models','Test automation','AI governance'].map(t=><span key={t}>{t}</span>)}</div></div><div className="case-actions"><a className="text-link" href="/research/ai-assistant-audit">Read a case study <ArrowUpRight size={17}/></a><a className="case-live" href={bookUrl} {...external}>Book a call <ArrowUpRight size={17}/></a></div></div>
  </motion.section>
  <section className="section svc-section svc-first"><p className="eyebrow">01 / WHAT I DO</p><h2 className="svc-heading">Three ways<br/><em>I can help.</em></h2><div className="svc-pillars">{pillars.map((p,i)=>{const Symbol=p.symbol;return <motion.article key={p.title} {...rise(i)}><Symbol size={30} strokeWidth={1.4}/><h3>{p.title}</h3><p>{p.line}</p><ul>{p.points.map(pt=><li key={pt}><Check size={15}/>{pt}</li>)}</ul></motion.article>;})}</div></section>
  <section className="section svc-section"><p className="eyebrow">02 / HOW IT WORKS</p><h2 className="svc-heading">Assess. Build.<br/><em>Hand it over.</em></h2><div className="svc-steps">{steps.map((s,i)=><motion.article key={s.title} {...rise(i)}><span className="eyebrow">{s.days}</span><h3>{s.title}<span>.</span></h3><p>{s.line}</p></motion.article>)}</div></section>
  <section className="section svc-section svc-scorecard-section"><div><p className="eyebrow">03 / WHAT YOU GET</p><h2 className="svc-heading">A clear answer to<br/><em>“can we ship it?”</em></h2><p className="svc-note">Every engagement ends with a release-readiness report: each quality area scored against a threshold you agree on up front, the worst failures with steps to reproduce, and a prioritised fix list. The numbers here show the format only. They are not client data.</p></div><div className="svc-scorecard" role="table" aria-label="Illustrative release-readiness report"><div className="svc-score-head" role="row"><span role="columnheader">QUALITY AREA</span><span role="columnheader">SCORE / THRESHOLD 0.75</span></div>{report.map((r,i)=><motion.div className="svc-score-row" role="row" key={r.metric} {...rise(i)}><span role="cell">{r.metric}</span><span role="cell" className="svc-score-bar"><i style={{width:`${r.score*100}%`}} data-pass={r.score>=.75}/><b data-pass={r.score>=.75}>{r.score.toFixed(2)}</b></span></motion.div>)}<p className="svc-score-foot">ILLUSTRATIVE FORMAT · NOT CLIENT DATA</p></div></section>
  <section className="section svc-section"><p className="eyebrow">04 / ENGAGEMENTS</p><h2 className="svc-heading">Start small.<br/><em>Scale if it helps.</em></h2><div className="svc-tiers">{tiers.map((t,i)=><motion.article key={t.name} className={t.featured?'svc-tier featured':'svc-tier'} {...rise(i)}><span className="eyebrow">{t.meta}</span><h3>{t.name}</h3><p>{t.line}</p><a href={t.href} {...external}>{t.cta} <ArrowUpRight size={16}/></a></motion.article>)}</div></section>
  <section className="section svc-section"><p className="eyebrow">05 / WHO IT’S FOR</p><div className="svc-audiences">{audiences.map((a,i)=><motion.article key={a.title} {...rise(i)}><span>0{i+1}</span><h3>{a.title}</h3><p>{a.line}</p></motion.article>)}</div></section>
  <section className="section svc-section"><p className="eyebrow">06 / QUESTIONS</p><div className="svc-faq">{faqs.map(f=><details key={f.q}><summary>{f.q}<ArrowUpRight size={18}/></summary><p>{f.a}</p></details>)}</div></section>
  <section className="section case-next"><p className="eyebrow">QA LEAD @ TEAMVIEWER · AI MSc @ JKU</p><a href={bookUrl} {...external}><h2>Let’s make your AI trustworthy.</h2><ArrowUpRight size={50}/></a></section>
  <footer className="site-footer"><Link href="/">← HOME</Link><a href={emailUrl}>PREFER EMAIL? KYOUSEFJU@GMAIL.COM</a><a href={bookUrl} {...external}>BOOK A CALL ↗</a></footer>
 </main>;
}
