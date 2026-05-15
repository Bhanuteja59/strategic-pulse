import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#0f172a] text-slate-600 dark:text-slate-400 py-16 text-center border-t border-black/5 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <h3 className="text-3xl font-extrabold mb-4 flex justify-center items-center gap-2">
          <span className="gradient-text font-black">Strategy</span>
          <span className="text-slate-900 dark:text-white transition-colors duration-300">Pulse</span>
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-lg mx-auto font-medium transition-colors duration-300">
          Empowering grassroots political volunteers, booth agents, and community workers with real support, micro-jobs, and tech-driven recognition.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-10 font-semibold text-sm text-slate-800 dark:text-slate-200 transition-colors duration-300">
          <Link href="#why-support-volunteers" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Why Volunteers</Link>
          <Link href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Support Services</Link>
          <Link href="#volunteer-hub" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Volunteer Hub</Link>
          <Link href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</Link>
        </div>
        <div className="h-px w-full max-w-md mx-auto bg-black/10 dark:bg-white/10 mb-8 transition-colors duration-300"></div>
        <p className="text-slate-500 text-xs tracking-wider uppercase">
          &copy; 2026 Strategy Pulse. All rights reserved. Empowering Grassroots Democracy.
        </p>
      </div>
    </footer>
  );
}
