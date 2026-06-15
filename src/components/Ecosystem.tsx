"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  Wrench,
  Sword,
  FileText,
  NotebookPen,
  MessageSquareHeart,
  ExternalLink,
  ArrowRight,
  Construction,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  status: "Live" | "Beta" | "Under Construction" | "In Development";
  href: string;
  accent: string;
  accentBg: string;
}

const products: Product[] = [
  {
    id: "promptch",
    name: "PromptCh",
    url: "promptch.com",
    tagline: "AI Prompt Community",
    description:
      "The place where AI prompt ideas gather. Discover, share, and collect prompts across every major model — from writing and coding to image generation. Think of it as a library built by the people who actually use AI.",
    icon: <Bot size={22} />,
    tags: ["AI", "Community", "Directory"],
    status: "Live",
    href: "https://promptch.com",
    accent: "text-violet-600",
    accentBg: "bg-violet-50 border-violet-100",
  },
  {
    id: "totools",
    name: "ToTools",
    url: "totools.zone.id",
    tagline: "Ready-to-Use Web Tools",
    description:
      "A growing collection of practical browser-based tools you can use right now — no login, no install. From text utilities and converters to calculators and formatters, everything is built to get out of your way fast.",
    icon: <Wrench size={22} />,
    tags: ["Tools", "Utilities", "Free"],
    status: "Live",
    href: "https://totools.zone.id",
    accent: "text-sky-600",
    accentBg: "bg-sky-50 border-sky-100",
  },
  {
    id: "enoted",
    name: "Enoted",
    url: "enoted.zone.id",
    tagline: "Short-Form Notes & Blog",
    description:
      "A lightweight space for quick thoughts, notes, and short posts. Less blog, more noted — write what's on your mind, keep it brief, and share it without the friction of a full publishing platform.",
    icon: <FileText size={22} />,
    tags: ["Writing", "Blog", "Notes"],
    status: "Live",
    href: "https://enoted.zone.id",
    accent: "text-emerald-600",
    accentBg: "bg-emerald-50 border-emerald-100",
  },
  {
    id: "noteonline",
    name: "NoteOnline",
    url: "memo.zone.id",
    tagline: "Online Note-Taking",
    description:
      "A clean, minimal workspace for writing and organizing your notes online. Access them from anywhere, keep them private or share them — no setup required. Currently in active development.",
    icon: <NotebookPen size={22} />,
    tags: ["Productivity", "Notes", "Web App"],
    status: "In Development",
    href: "https://memo.zone.id",
    accent: "text-amber-600",
    accentBg: "bg-amber-50 border-amber-100",
  },
  {
    id: "chatsyok",
    name: "ChatSyok",
    url: "chatsyok.zone.id",
    tagline: "AI Character Chat",
    description:
      "Chat with AI-powered characters that have distinct personalities and backstories. Similar in spirit to Character.AI — create your own characters or talk to existing ones. Built for roleplay, storytelling, and casual conversation.",
    icon: <MessageSquareHeart size={22} />,
    tags: ["AI", "Chat", "Characters"],
    status: "In Development",
    href: "https://chatsyok.zone.id",
    accent: "text-pink-600",
    accentBg: "bg-pink-50 border-pink-100",
  },
  {
    id: "battleguard",
    name: "BattleGuard",
    url: "battleguard.zone.id",
    tagline: "Survival Battle Royale Game",
    description:
      "A browser-based battle royale survival game inspired by Magic Survival. Fight waves of enemies, level up your abilities, and see how long you can last. Built from scratch as our first major game project.",
    icon: <Sword size={22} />,
    tags: ["Game", "Battle Royale", "Survival"],
    status: "In Development",
    href: "https://battleguard.zone.id",
    accent: "text-rose-600",
    accentBg: "bg-rose-50 border-rose-100",
  },
];

const statusColors: Record<Product["status"], string> = {
  Live: "bg-emerald-100 text-emerald-700",
  Beta: "bg-sky-100 text-sky-700",
  "In Development": "bg-amber-100 text-amber-700",
  "Under Construction": "bg-amber-100 text-amber-700",
};

const statusIcons: Record<Product["status"], React.ReactNode> = {
  Live: null,
  Beta: null,
  "In Development": <Construction size={10} />,
  "Under Construction": <Construction size={10} />,
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
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300"
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
          className={`shrink-0 inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[product.status]}`}
        >
          {statusIcons[product.status]}
          {product.status}
        </span>
      </div>

      <p className={`text-xs font-semibold mb-1 ${product.accent}`}>
        {product.tagline}
      </p>

      <p className="text-xs text-slate-400 mb-3 font-mono">{product.url}</p>

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

      {/* Link */}
      <div className="mt-5 pt-4 border-t border-slate-50">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-xs font-semibold ${product.accent} hover:gap-2.5 transition-all duration-200`}
        >
          Visit Site <ExternalLink size={12} />
        </a>
      </div>
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
            Six products across AI, productivity, and games — each independently
            built and maintained. Some are live, some are still being shaped.
          </p>
        </motion.div>

        {/* Product grid — 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
