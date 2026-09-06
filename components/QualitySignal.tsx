"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Brain, Check, Pause, Play } from 'lucide-react';

type Point = { x: number; y: number; check: boolean };
const COUNT = 1050;
const CYCLE = 14;
export type AnimationPhase = "build" | "test" | "trust" | null;
const ease = (n: number) => { const t = Math.max(0, Math.min(1, n)); return t * t * (3 - 2 * t); };
const noise = (i: number) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

export default function QualitySignal({ onPhaseChange }: { onPhaseChange?: (phase: AnimationPhase) => void }) {
 const hostRef = useRef<HTMLDivElement>(null);
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const brainRef = useRef<HTMLDivElement>(null);
 const checkRef = useRef<HTMLDivElement>(null);
 const elapsed = useRef(0);
 const pointer = useRef({ x: 0, y: 0 });
 const visible = useInView(hostRef, { amount: .15 });
 const reduced = useReducedMotion();
 const [paused, setPaused] = useState(false);
 useEffect(() => {
  const host = hostRef.current, canvas = canvasRef.current;
  if (!host || !canvas || !brainRef.current || !checkRef.current) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const sample = (root: HTMLDivElement): Point[] => {
   const paths = [...root.querySelectorAll<SVGGeometryElement>('path,circle,line,polyline')];
   const lengths = paths.map(p => p.getTotalLength());
   const total = lengths.reduce((a,b) => a+b,0);
   return Array.from({length:COUNT},(_,i) => {
    let distance = i / COUNT * total, index = 0;
    while (index < paths.length-1 && distance > lengths[index]) distance -= lengths[index++];
    const p = paths[index].getPointAtLength(distance);
    return { x: (p.x - 12) * 19, y: (p.y - 12) * 19, check: root === checkRef.current && index === paths.length-1 };
   });
  };
  const outline = sample(brainRef.current), check = sample(checkRef.current);
  // Keep the recognizable brain perimeter and populate its interior with neurons.
  const brain = outline.map((p, i) => {
   const depth = i % 3 === 0 ? .22 + Math.sqrt(noise(i + 701)) * .7 : 1;
   return { ...p, x: p.x * depth, y: p.y * depth };
  });
  const hubs = Array.from({ length: 96 }, (_, i) => i * 9);
  const connections = hubs.flatMap((from, i) => hubs.slice(i + 1)
   .map(to => ({ from, to, distance: Math.hypot(brain[from].x - brain[to].x, brain[from].y - brain[to].y) }))
   .filter(edge => edge.distance > 12 && edge.distance < 105)
   .sort((a, b) => a.distance - b.distance)
   .slice(0, 4));
  const pipeline = brain.map((_, i) => {
   if (i < 840) {
    const angle = i / 840 * Math.PI * 2 - Math.PI / 2;
    return { x: Math.cos(angle) * 195, y: Math.sin(angle) * 195, check: false };
   }
   const point = check[Math.floor((i - 840) / (COUNT - 840) * COUNT)];
   return { x: point.x * .6, y: point.y * .6, check: true };
  });
  const cloud = brain.map((_,i) => {
   const angle = noise(i+10) * Math.PI * 2;
   const r = 70 + noise(i+45) * 215;
   return {x:Math.cos(angle)*r,y:Math.sin(angle)*r};
  });
  let width = 1, height = 1, frame = 0, last = 0, px = 0, py = 0;
  let reported: AnimationPhase | undefined;
  const draw = () => {
   const t = reduced ? 10 : elapsed.current % CYCLE;
   const phase: AnimationPhase = t < 3.5 ? 'build' : t < 8.8 ? 'test' : t < 11.5 ? 'trust' : null;
   if (phase !== reported) { reported = phase; onPhaseChange?.(phase); }
   const gather = ease(t/1.5), morph = ease((t-3.5)/1.3), dissolve = ease((t-11.5)/1.8);
   const progress = Math.max(0, Math.min(1, (t - 4.8) / 4));
   // Keep the completed state through dissolve; the cycle reset starts the next run.
   const verified = t >= 8.8;
   const passed = verified ? 6 : Math.floor(progress * 6);
   const scale = Math.min(width,height)/570;
   px += (pointer.current.x-px)*.06; py += (pointer.current.y-py)*.06;
   ctx.clearRect(0,0,width,height);
   ctx.save();ctx.translate(width/2,height/2);ctx.scale(scale,scale);
   const glow = ctx.createRadialGradient(0,0,20,0,0,260);
   glow.addColorStop(0,morph > .8 && dissolve < .5 ? 'rgba(0,154,149,.12)' : 'rgba(20,96,220,.1)');glow.addColorStop(1,'rgba(20,96,220,0)');
   ctx.fillStyle=glow;ctx.fillRect(-300,-300,600,600);
   const positions: Point[] = [];
   for(let i=0;i<COUNT;i++) {
    const a=brain[i],b=pipeline[i],c=cloud[i];
    const initialX=c.x+(a.x-c.x)*gather, initialY=c.y+(a.y-c.y)*gather;
    const targetX=initialX+(b.x-initialX)*morph, targetY=initialY+(b.y-initialY)*morph;
    const jitter=(1-gather+dissolve)*9+1.5;
    const depth=noise(i+333)-.5;
    const x=targetX+(c.x-targetX)*dissolve+(noise(i+8)-.5)*jitter+px*depth*24;
    const y=targetY+(c.y-targetY)*dissolve+(noise(i+29)-.5)*jitter+py*depth*24;
    positions.push({x,y,check:b.check});
    const checkVisibility = b.check ? 1 - morph + morph * ease((t-8.6)/.35) : 1;
    const alpha=(.42+noise(i+51)*.5)*(1-dissolve*.65)*checkVisibility;
    const isCheck=verified && dissolve<.6;
    ctx.beginPath();ctx.arc(x,y,.9+noise(i+16)*1.5,0,Math.PI*2);
    ctx.fillStyle=isCheck?`rgba(0,145,141,${alpha})`:`rgba(20,96,220,${alpha})`;ctx.fill();
   }
   // Signals travel between nearby neurons; this layer dissolves with the brain.
   const neuralOpacity = gather * (1-morph) * (1-dissolve);
   if (neuralOpacity > .01) {
    ctx.save();ctx.globalAlpha=neuralOpacity;
    ctx.lineWidth=.8;
    connections.forEach((edge,i) => {
     const a=positions[edge.from],b=positions[edge.to];
     ctx.strokeStyle='rgba(65,130,203,.23)';
     ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
     if(i%3===0){
      const travel=(t*.7+noise(i+61))%1;
      const sx=a.x+(b.x-a.x)*travel,sy=a.y+(b.y-a.y)*travel;
      ctx.fillStyle='rgba(0,154,149,.2)';ctx.beginPath();ctx.arc(sx,sy,5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#009a95';ctx.beginPath();ctx.arc(sx,sy,1.7,0,Math.PI*2);ctx.fill();
     }
    });
    hubs.forEach((index,i) => {
     const p=positions[index],pulse=.5+.5*Math.sin(t*3+i*.6);
     ctx.fillStyle=`rgba(20,96,220,${.08+pulse*.12})`;
     ctx.beginPath();ctx.arc(p.x,p.y,4+pulse*3,0,Math.PI*2);ctx.fill();
     ctx.fillStyle=i%4===0?'#009a95':'#1460dc';ctx.beginPath();ctx.arc(p.x,p.y,2.2,0,Math.PI*2);ctx.fill();
    });
    ctx.restore();
   }
   // The same clock drives the passing pipeline and the headline emphasis.
   if (morph > .8 && dissolve < 1) {
    ctx.save();ctx.globalAlpha=ease((morph-.8)/.2)*(1-dissolve);
    ctx.lineWidth=3;ctx.strokeStyle='#009a95';
    ctx.beginPath();ctx.arc(0,0,195,-Math.PI/2,-Math.PI/2+Math.PI*2*progress);ctx.stroke();
    for(let stage=0;stage<6;stage++) {
     const angle=-Math.PI/2+stage*Math.PI/3;
     const nx=Math.cos(angle)*195,ny=Math.sin(angle)*195;
     const done=passed>stage;
     const current=passed===stage && !verified;
     ctx.beginPath();ctx.arc(nx,ny,17,0,Math.PI*2);
     ctx.fillStyle=done?'#d4f0ea':'#e5eff5';ctx.fill();
     ctx.strokeStyle=done?'#009a95':current?'#1460dc':'#bdd3ea';ctx.lineWidth=2;ctx.stroke();
     if(done){ctx.beginPath();ctx.moveTo(nx-6,ny);ctx.lineTo(nx-1,ny+5);ctx.lineTo(nx+7,ny-5);ctx.stroke();}
     else if(current){ctx.beginPath();ctx.arc(nx,ny,7,t*4,t*4+Math.PI*1.4);ctx.stroke();}
     else {ctx.beginPath();ctx.arc(nx,ny,3,0,Math.PI*2);ctx.fillStyle='#b4cbe3';ctx.fill();}
    }
    ctx.textAlign='center';ctx.fillStyle=verified?'#087f80':'#6e8baa';
    ctx.font='12px monospace';
    ctx.fillText(verified?'PIPELINE PASSED':'RUNNING CHECKS',0,105);
    if(!verified){ctx.fillStyle='#1460dc';ctx.font='40px monospace';ctx.fillText(`${String(passed).padStart(2,'0')} / 06`,0,12);}
    ctx.restore();
   }
   ctx.restore();
  };
  const resize = () => {
   const box=host.getBoundingClientRect();width=Math.max(1,Math.min(box.width,2000));height=Math.max(1,Math.min(box.height,1600));
   const dpr=Math.min(devicePixelRatio || 1,2);canvas.width=width*dpr;canvas.height=height*dpr;
   ctx.setTransform(dpr,0,0,dpr,0,0);draw();
  };
  const tick = (now:number) => {
   if(last && !document.hidden) elapsed.current+=Math.min((now-last)/1000,.05);
   last=now;
   if(!document.hidden) draw();
   frame=requestAnimationFrame(tick);
  };
  const observer=new ResizeObserver(resize);observer.observe(host);resize();
  if(visible && !paused && !reduced) frame=requestAnimationFrame(tick);
  return () => {cancelAnimationFrame(frame);observer.disconnect();};
 },[visible,paused,reduced,onPhaseChange]);
 return <div className="neural-shield">
  <div ref={hostRef} className="neural-shield-stage" style={{position:'relative',aspectRatio:'1',overflow:'hidden'}}>
   <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%'}} aria-hidden="true" onPointerMove={e=>{
    const rect=e.currentTarget.getBoundingClientRect();pointer.current={x:(e.clientX-rect.left)/rect.width-.5,y:(e.clientY-rect.top)/rect.height-.5};
   }} onPointerLeave={()=>{pointer.current={x:0,y:0};}}/>
   <span className="sr-only">An electric-blue particle brain transforms into a circular CI/CD pipeline. Six checks pass in sequence, then the completed pipeline turns green.</span>
   <div className="neural-source" ref={brainRef} aria-hidden="true"><Brain/></div>
   <div className="neural-source" ref={checkRef} aria-hidden="true"><Check/></div>
  </div>
  <div className="neural-caption"><span>INTELLIGENCE. <b>ASSURED.</b></span>{!reduced&&<button type="button" onClick={()=>setPaused(p=>!p)} aria-label={paused?'Resume AI pipeline animation':'Pause AI pipeline animation'}>{paused?<Play size={14}/>:<Pause size={14}/>}</button>}</div>
 </div>;
}
