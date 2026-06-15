"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  NotebookPen,
  Swords,
  Gamepad2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  status: "Live" | "Beta" | "In Development";
  href?: string;
  accent: string;
  accentBg: string;
}

const products: Product[] = [
  {
    id: "promptku",
    name: "PromptKu",
    tagline: "AI Prompt Directory",
    description:
      "A curated directory for discovering and sharing high-quality AI prompts. Built for creators, developers, and teams who rely on LLMs daily.",
    icon: <Bot size={22} />,
    tags: ["AI", "SaaS", "Directory"],
    status: "Live",
    href: "#",
    accent: "text-violet-600",
    accentBg: "bg-violet-50 border-violet-100",
  },
  {
    id: "note-online",
    name: "Note Online",
    tagline: "Minimalist Workspace",
    description:
      "A distraction-free note-taking app focused on writing. No clutter, no bloat — just your words, organized the way you think.",
    icon: <NotebookPen size={22} />,
    tags: ["Productivity", "Web App"],
    status: "Beta",
    href: "#",
    accent: "text-emerald-600",
    accentBg: "bg-emerald-50 border-emerald-100",
  },
  {
    id: "trade-prompt-game",
    name: "Trade Prompt Game",
    tagline: "AI Trading Card Game",
    description:
      "A strategic trading card game where prompts are the cards. Build your deck, counter your opponent, and prove who commands AI better.",
    icon: <Swords size={22} />,
    tags: ["Game", "AI", "TCG"],
    status: "In Development",
    href: "#",
    accent: "text-orange-600",
    accentBg: "bg-orange-50 border-orange-100",
  },
  {
    id: "game-dev-studio",
    name: "Game Dev Studio",
    tagline: "Indie Game Development",
    description:
      "Our internal game development label. We create small, polished indie games — from puzzle mechanics to narrative-driven experiences.",
    icon: <Gamepad2 size={22} />,
    tags: ["Games", "Indie", "Studio"],
    status: "In Development",
    href: "#",
    accent: "text-sky-600",
    accentBg: "bg-sky-50 border-sky-100",
  },
];

const statusColors: Record<Product["status"], string> = {
  Live: "bg-emerald-100 text-emerald-700",
  Beta: "bg-sky-100 text-sky-700",
  "In Development": "bg-amber-100 text-amber-700",
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 cursor-default"
    >
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border ${product.accentBg} ${product.accent} mb-5`}
      >
        {product.icon}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-bold text-lg text-slate-900 leading-tight">
          {product.name}
        </h3>
        <span
          className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[product.status]}`}
        >
          {product.status}
        </span>
      </div>

      <p className={`text-xs font-semibold mb-3 ${product.accent}`}>
        {product.tagline}
      </p>

      <p className="text-sm text-slate-500 leading-relaxed flex-1">
        {product.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-5">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link arrow */}
      {product.href && (
        <div className="mt-5 pt-4 border-t border-slate-50">
          <a
            href={product.href}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold ${product.accent} hover:gap-2.5 transition-all duration-200`}
          >
            View Project <ExternalLink size={12} />
          </a>
        </div>
      )}
    </motion.article>
  );
}

export default function Ecosystem() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-40px" });

  return (
    <section id="ecosystem" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-600 text-xs font-semibold tracking-wide uppercase mb-4">
            <ArrowRight size={11} />
            Our Ecosystem
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Products we build and own
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            Each product in our portfolio is independently developed — some are
            live, some in active development. All of them solve a real problem.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
