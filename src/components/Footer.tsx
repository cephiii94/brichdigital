export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        {/* Logo */}
        <div className="font-semibold text-slate-700 tracking-tight">
          <span className="text-sky-500">Brich</span> Digital
        </div>

        {/* Copyright */}
        <p>© 2026 Brich Digital. All rights reserved.</p>

        {/* Nav links */}
        <nav className="flex gap-5">
          {[
            { label: "Ecosystem", href: "#ecosystem" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-sky-500 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
