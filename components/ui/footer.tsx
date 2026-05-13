import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 text-center border-t-4 border-[#FFC30B]">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-extrabold mb-4 flex justify-center items-center gap-2">
          <span className="text-[#FFC30B]">Strategy</span> Pulse
        </h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Political Intelligence and Strategy for Andhra Pradesh. Real data, right decisions.
        </p>
        <div className="flex justify-center gap-6 mb-8 font-medium">
          <Link href="#why-strategy-pulse" className="hover:text-[#FFC30B] transition-colors">Why Us</Link>
          <Link href="#services" className="hover:text-[#FFC30B] transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-[#FFC30B] transition-colors">Contact</Link>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; 2026 Strategy Pulse. All rights reserved. Power. Strategy. Every Day.
        </p>
      </div>
    </footer>
  );
}
