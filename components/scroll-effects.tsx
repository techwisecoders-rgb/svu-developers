'use client';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';

export function ScrollProgress(){
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

export function ParallaxHeroImage(){
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const y = useTransform(scrollY, [0, 900], [0, 155]);
  const scale = useTransform(scrollY, [0, 900], [1.04, 1.17]);
  return <motion.div className="hero-image hero-parallax-image" style={reduce ? { scale: 1.04 } : { y, scale }} aria-hidden="true" />;
}
