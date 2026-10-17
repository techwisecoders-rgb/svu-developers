'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Adds gentle scroll-in reveals on desktop and mobile, respecting reduced-motion settings. */
export function ScrollReveal(){
 const pathname=usePathname();
 useEffect(()=>{
   if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   const selector='.section, .property-card, .split-section, .project-band, .page-hero, .faq-list details, .buyer-check-grid article, .service-grid article, .locality-card, .contact-form-card';
   const nodes=Array.from(document.querySelectorAll<HTMLElement>(selector));
   nodes.forEach((node)=>node.classList.add('scroll-reveal-item'));
   if(!('IntersectionObserver' in window)){nodes.forEach(n=>n.classList.add('scroll-reveal-visible'));return;}
   const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('scroll-reveal-visible');observer.unobserve(entry.target)}}),{threshold:0.08,rootMargin:'0px 0px -35px 0px'});
   nodes.forEach(n=>observer.observe(n));
   return()=>observer.disconnect();
 },[pathname]);
 return null;
}
