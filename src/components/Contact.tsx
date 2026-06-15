"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, X, GitBranch } from "lucide-react";
import { transition } from "@/lib/motion";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <GitBranch size={16} />,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: <X size={16} />,
  },
  {
    label: "Email",
    href: "mailto:hello@brichdigital.com",
    icon: <Mail size={16} />,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-slate-50 to-sky-50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={transition()}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-600 text-xs font-semibold tracking-wide uppercase">
            Contact
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got an idea? Let&apos;s talk.
          </h2>

          <p className="text-base text-slate-500 leading-relaxed">
            Whether you&apos;re interested in collaborating, have a question about
            one of our products, or just want to say hello — reach out.
          </p>

          <a
            href="mailto:hello@brichdigital.com"
            id="contact-email-cta"
            className="inline-flex items-center gap-2 mt-3 px-6 py-3.5 rounded-xl bg-sky-500 text-white font-semibold text-sm hover:bg-sky-600 transition-all duration-200 shadow-md shadow-sky-200"
          >
            <Mail size={15} />
            hello@brichdigital.com
          </a>

          {/* Social row */}
          <div className="flex justify-center gap-3 pt-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-slate-500 text-sm font-medium hover:border-sky-200 hover:text-sky-500 hover:bg-sky-50 transition-all duration-200"
              >
                {s.icon}
                <span className="hidden sm:inline">{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
