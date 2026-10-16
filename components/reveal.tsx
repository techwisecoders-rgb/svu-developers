'use client';
import { motion, useReducedMotion } from "motion/react";
export function Reveal({children,delay=0}:{children:React.ReactNode;delay?:number}){const reduce=useReducedMotion();return <motion.div initial={reduce?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:reduce?0:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}