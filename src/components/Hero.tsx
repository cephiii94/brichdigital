"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { EASE } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-slate-50 to-white"
      />

      {/* Soft radial glow */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 -z-10 w-[700px] h-[500px] rounded-full bg-sky-100/60 blur-3xl"
      />

      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Eyebrow label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-600 text-xs font-semibold tracking-wide uppercase"
        >
          <Sparkles size={12} />
          Independent Tech Studio
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
        >
          <span className="text-sky-500">Brich</span> Digital
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xl md:text-2xl font-medium text-slate-600"
        >
          Crafting Ideas into Digital Reality
        </motion.p>

        {/* Description */}
        <motion.p
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-xl mx-auto text-base md:text-lg text-slate-500 leading-relaxed"
        >
          We build and manage a growing portfolio of digital products — from SaaS
          platforms and AI tools to web applications and interactive experiences.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <a
            href="#ecosystem"
            id="hero-cta"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 text-white font-semibold text-sm hover:bg-sky-600 transition-all duration-200 shadow-md shadow-sky-200"
          >
            Explore Our Ecosystem
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-white hover:border-slate-300 transition-all duration-200"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-slate-300" />
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
