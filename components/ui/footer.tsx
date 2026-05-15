import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#B30006] text-white py-12 text-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <h3 className="text-3xl font-extrabold mb-3">
          <span className="text-[#FFC30B]">Strategy</span> Pulse
        </h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto font-medium">
          Empowering grassroots political volunteers, booth agents, and community workers with real support, micro-jobs, and tech-driven recognition.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-8 font-semibold text-sm text-white/90">
          <Link href="#why-support-volunteers" className="hover:text-[#FFC30B] transition-colors">Why Volunteers</Link>
          <Link href="#services" className="hover:text-[#FFC30B] transition-colors">Support Services</Link>
          <Link href="#volunteer-hub" className="hover:text-[#FFC30B] transition-colors">Volunteer Hub</Link>
          <Link href="#contact" className="hover:text-[#FFC30B] transition-colors">Contact</Link>
        </div>
        <div className="h-px w-full max-w-md mx-auto bg-white/20 mb-6"></div>
        <p className="text-white/60 text-xs tracking-wider uppercase">
          &copy; 2026 Strategy Pulse. All rights reserved. Empowering Grassroots Democracy.
        </p>
      </div>
    </footer>
  );
}
