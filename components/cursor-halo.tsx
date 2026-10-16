'use client';
import { useEffect, useRef, useState } from 'react';
export function CursorHalo(){
 const [enabled,setEnabled]=useState(false); const haloRef=useRef<HTMLDivElement>(null); const rafRef=useRef<number | null>(null); const pointRef=useRef({x:0,y:0});
 useEffect(()=>{const fine=window.matchMedia('(pointer:fine)').matches;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!fine||reduced)return;setEnabled(true);
 const move=(e:MouseEvent)=>{pointRef.current={x:e.clientX,y:e.clientY};if(rafRef.current!==null)return;rafRef.current=requestAnimationFrame(()=>{const el=haloRef.current;if(el)el.style.transform=`translate3d(${pointRef.current.x-18}px,${pointRef.current.y-18}px,0)`;rafRef.current=null})};
 const over=(e:MouseEvent)=>{const el=haloRef.current;if(!el)return;if((e.target as HTMLElement)?.closest('a,button,input,select,textarea,[role="button"]'))el.classList.add('cursor-active');else el.classList.remove('cursor-active')};
 window.addEventListener('mousemove',move,{passive:true});window.addEventListener('mouseover',over,{passive:true});return()=>{window.removeEventListener('mousemove',move);window.removeEventListener('mouseover',over);if(rafRef.current!==null)cancelAnimationFrame(rafRef.current)}},[]);
 return enabled?<div ref={haloRef} className="cursor-halo" aria-hidden="true"/>:null;
}
