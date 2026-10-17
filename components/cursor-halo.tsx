'use client';
import { useEffect, useRef, useState } from 'react';

/** Mouse halo on desktop and a touch-following halo on phones/tablets. */
export function CursorHalo(){
 const [enabled,setEnabled]=useState(false);
 const haloRef=useRef<HTMLDivElement>(null);
 const rafRef=useRef<number | null>(null);
 const hideTimerRef=useRef<ReturnType<typeof setTimeout> | null>(null);
 const pointRef=useRef({x:0,y:0});
 useEffect(()=>{
   if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   setEnabled(true);
   const position=(x:number,y:number)=>{
     pointRef.current={x,y};
     const el=haloRef.current;
     if(el){el.classList.add('cursor-halo-visible');el.style.transform=`translate3d(${x-18}px,${y-18}px,0)`;}
     if(hideTimerRef.current)clearTimeout(hideTimerRef.current);
   };
   const mouseMove=(e:MouseEvent)=>{
     if(rafRef.current!==null)return;
     pointRef.current={x:e.clientX,y:e.clientY};
     rafRef.current=requestAnimationFrame(()=>{const el=haloRef.current;if(el){el.style.transform=`translate3d(${pointRef.current.x-18}px,${pointRef.current.y-18}px,0)`;el.classList.add('cursor-halo-visible');}rafRef.current=null;});
   };
   const pointerMove=(e:PointerEvent)=>{if(e.pointerType==='touch')position(e.clientX,e.clientY);};
   const pointerUp=(e:PointerEvent)=>{if(e.pointerType==='touch')hideTimerRef.current=setTimeout(()=>haloRef.current?.classList.remove('cursor-halo-visible'),650);};
   const over=(e:MouseEvent)=>{const el=haloRef.current;if(!el)return;if((e.target as HTMLElement)?.closest('a,button,input,select,textarea,[role="button"]'))el.classList.add('cursor-active');else el.classList.remove('cursor-active')};
   window.addEventListener('mousemove',mouseMove,{passive:true});
   window.addEventListener('pointermove',pointerMove,{passive:true});
   window.addEventListener('pointerdown',pointerMove,{passive:true});
   window.addEventListener('pointerup',pointerUp,{passive:true});
   window.addEventListener('mouseover',over,{passive:true});
   return()=>{window.removeEventListener('mousemove',mouseMove);window.removeEventListener('pointermove',pointerMove);window.removeEventListener('pointerdown',pointerMove);window.removeEventListener('pointerup',pointerUp);window.removeEventListener('mouseover',over);if(rafRef.current!==null)cancelAnimationFrame(rafRef.current);if(hideTimerRef.current)clearTimeout(hideTimerRef.current)};
 },[]);
 return enabled?<div ref={haloRef} className="cursor-halo" aria-hidden="true"/>:null;
}
