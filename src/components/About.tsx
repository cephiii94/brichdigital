"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Cpu, Layers } from "lucide-react";
import { EASE } from "@/lib/motion";

const pillars = [
  {
    icon: <Code2 size={18} />,
    label: "Full-Stack Web",
  },
  {
    icon: <Cpu size={18} />,
    label: "AI Integration",
  },
  {
    icon: <Layers size={18} />,
    label: "Game Development",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-600 text-xs font-semibold tracking-wide uppercase mb-5">
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              An independent tech laboratory
            </h2>

            <div className="space-y-4 text-slate-500 text-base leading-relaxed">
              <p>
                Brich Digital is a one-person studio with a simple goal: take an
                idea from concept to a working product. We don't chase trends —
                we focus on building things that are genuinely useful.
              </p>
              <p>
                Our work spans full-stack web development, AI integration, and
                game creation. Each product is built with care, shipped when
                ready, and iterated on based on real feedback.
              </p>
              <p>
                We're not a consultancy. We're builders. Every project in our
                ecosystem is something we designed, developed, and own.
              </p>
            </div>

            {/* Pillars */}
            <div className="flex flex-wrap gap-3 mt-8">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-sm font-medium"
                >
                  <span className="text-sky-500">{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats / Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-sky-50 to-slate-100 rounded-2xl border border-slate-100 p-8 space-y-6">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "4+", label: "Active Projects" },
                  { value: "3", label: "Product Categories" },
                  { value: "2026", label: "Founded" },
                  { value: "100%", label: "Indie Built" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm"
                  >
                    <p className="text-2xl font-extrabold text-slate-900 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-800 mb-2">
                  Our approach
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Ship fast. Iterate based on feedback. Keep things simple and
                  well-made. That's the philosophy behind everything we build.
                </p>
              </div>
            </div>

            {/* Subtle decorative ring */}
            <div
              aria-hidden
              className="absolute -top-4 -right-4 w-32 h-32 rounded-full border-2 border-sky-100 -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
