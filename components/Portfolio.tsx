"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { motion, useScroll, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Github, ExternalLink, BrainCircuit, ListChecks, ScanEye, Network, Pause, Play } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from '@/lib/projects';
import activity from '@/lib/activity.json';
import BrandMark from '@/components/BrandMark';
import QualitySignal, { type AnimationPhase } from '@/components/QualitySignal';

const ease = [.22, 1, .36, 1] as const;
function Reveal({children, className=''}:{children:ReactNode;className?:string}) {
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.9,ease}}>{children}</motion.div>;
}

const stages = [
 { id: 'ai-test-generator', name: 'AI Test Generator', verb: 'Generate', line: 'From requirements to test cases.', symbol: ListChecks },
 { id: 'selenium-deepeval', name: 'Selenium × DeepEval', verb: 'Evaluate', line: 'Seven dimensions. Deeper confidence.', symbol: ScanEye },
 { id: 'fpl-ai-suggester', name: 'AIFPL', verb: 'Explain', line: 'AI decisions you can audit.', symbol: Network },
 { id: 'thesis-partner', name: 'Thesis Partner', verb: 'Remember', line: 'Every idea, kept in context.', symbol: BrainCircuit },
];

function ProjectPipeline() {
 const ref=useRef<HTMLDivElement>(null);
 const visible=useInView(ref);
 const reduced=useReducedMotion();
 const [paused,setPaused]=useState(false);
 return <div className="quality-route" ref={ref} data-running={visible&&!paused&&!reduced}>
  <div className="route-caption"><span>FOUR PROJECTS. ONE QUALITY MINDSET.</span><button onClick={()=>setPaused(!paused)} aria-label={paused?'Play project pipeline animation':'Pause project pipeline animation'} aria-pressed={paused} disabled={!!reduced}>{paused||reduced?<Play size={13}/>:<Pause size={13}/>}<span>SIGNAL {paused||reduced?'PAUSED':'FLOW'}</span></button></div>
  <div className="route-stations">
   <div className="route-wire" aria-hidden="true"><span className="route-pulse"/></div>
   {stages.map((stage,i)=>{
    const project=projectsData.find(project=>project.id===stage.id)!;
    const Symbol=stage.symbol;
    return <article className="route-station" key={stage.id} style={{'--station-delay':`${i*3}s`} as CSSProperties}>
     <Link href={`/projects/${stage.id}`} className="station-link" aria-label={`Explore ${stage.name}`}>
      <span className="station-sequence">0{i+1} / {stage.verb.toUpperCase()}</span>
      <span className="station-node" aria-hidden="true"><span className="station-halo"/><Symbol size={38} strokeWidth={1.25}/><span className="station-port"/></span>
      <span className="station-copy"><span className="station-verb">{stage.verb}<span>.</span></span><h3>{stage.name}</h3><span className="station-description">{stage.line}</span><span className="station-enter">VIEW PROJECT <ArrowUpRight size={16}/></span></span>
     </Link>
     <div className="station-footer"><a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${stage.name} on GitHub`}><Github size={13}/> SOURCE</a>{stage.id==='fpl-ai-suggester'&&<span>MOST ACTIVE</span>}</div>
    </article>;
   })}
  </div>
 </div>;
}

export default function Portfolio() {
 const reduced = useReducedMotion();
 const { scrollYProgress } = useScroll();
 const [animationPhase, setAnimationPhase] = useState<AnimationPhase>(null);
 const [week, setWeek] = useState<number | null>(null);
 return <main className="portfolio flash-portfolio">
  <a className="skip-link" href="#work">Skip to work</a>
  <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }}/>
  <header className="nav"><a className="brand" href="#" aria-label="Khaled Yousef home"><BrandMark/></a><span className="nav-name">KHALED YOUSEF</span><nav aria-label="Main navigation"><a href="#work">Work / 04</a><a href="#contact">Let’s talk <ArrowUpRight size={16}/></a></nav></header>
  <section className="flash-hero">
   <div className="flash-kicker"><span className="status-dot"/> AI ENGINEERING. QUALITY BY DESIGN.</div>
   <div className="signal-stage qa-stage"><QualitySignal onPhaseChange={setAnimationPhase}/></div>
   <h1 className="flash-title synced-title" data-phase={animationPhase ?? "transition"} aria-label="Build. Test. Trust.">{['BUILD.','TEST.','TRUST.'].map((word,i)=><span className={`flash-line ${animationPhase === ["build","test","trust"][i] ? "phase-highlight" : ""}`} key={word}><motion.span initial={reduced?false:{y:'105%',rotate:4}} animate={{y:0,rotate:0}} transition={{duration:1.1,delay:i*.14,ease}}>{word}</motion.span></span>)}</h1>
   <div className="flash-hero-bottom"><p>QA Lead. AI engineer.<br/><span>Building confidence in AI.</span></p><a className="flash-explore" href="#work">ENTER THE WORK <span><ArrowDown size={24}/></span></a></div>
  </section>
  <div className="kinetic-strip" aria-label="LLM evaluation, test automation, AI quality"><div aria-hidden="true">{[0,1,2,3].map(i=><span key={i}>LLM EVALUATION <i>↗</i> TEST AUTOMATION <i>✳</i> AI QUALITY <i>↗</i></span>)}</div></div>
  <section id="work" className="flash-work">
   <Reveal className="flash-section-heading"><span className="eyebrow">AI + QA / SELECTED WORK</span><h2>Intelligent systems.<br/><em>Put to the test.</em></h2><ArrowDown size={54}/></Reveal>
   <ProjectPipeline/>
   <Reveal className="flash-activity"><div><span className="eyebrow">AIFPL / IN MOTION</span><h3>{week === null ? activity.totalCommits : activity.weekly[week]}<span>commits{week === null ? '' : ` / W${week+1}`}</span></h3><a href={activity.source} target="_blank" rel="noopener noreferrer">Auditable AI. Active development. <ArrowUpRight size={16}/></a></div><div><div className="bars" onPointerLeave={()=>setWeek(null)}>{activity.weekly.map((n,i)=><button className={week===i?'bar active':'bar'} key={i} aria-label={`Week ${i+1}: ${n} commits`} onPointerEnter={()=>setWeek(i)} onFocus={()=>setWeek(i)} onBlur={()=>setWeek(null)} onClick={()=>setWeek(i)}><motion.span initial={reduced?false:{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{duration:.8,delay:i*.05,ease}} style={{height:`${Math.max(3,n/70*100)}%`}}/></button>)}</div><div className="chart-axis"><span>07 JUN — 05 SEP 2026</span><a href="https://github.com/khaled-yousef-TV/Newporto" target="_blank" rel="noopener noreferrer">NEWPORTO / 3 COMMITS ↗</a></div></div></Reveal>
  </section>
  <section className="flash-contact" id="contact"><Reveal><div className="flash-bio"><span>KHALED YOUSEF / AUSTRIA</span><p>QA Lead @ TeamViewer · AI MSc student @ JKU.<br/>Selenium. DeepEval. Python. Java.</p></div><a href="mailto:kyousefju@gmail.com" className="flash-contact-title">BUILD<br/><span>TRUST.</span><ArrowUpRight/></a><div className="flash-contact-links"><a href="mailto:kyousefju@gmail.com">Let’s talk AI quality. <ArrowUpRight size={20}/></a><div><a href="https://github.com/khaled-yousef-TV" target="_blank" rel="noopener noreferrer">GitHub <ExternalLink size={14}/></a><a href="https://www.linkedin.com/in/khaled-yousef-b7281510b/" target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink size={14}/></a></div></div></Reveal></section>
  <footer className="site-footer"><span>© {new Date().getFullYear()} KHALED YOUSEF</span><a href="#">RUN IT BACK ↑</a></footer>
 </main>;
}
