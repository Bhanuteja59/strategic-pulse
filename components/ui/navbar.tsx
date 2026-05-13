import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Why Strategy Pulse", href: "#why-strategy-pulse" },
    { name: "Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#plans" },
  ];

  return (
    <header className="bg-[#B30006] text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md border-b-2 border-[#FFC30B]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl tracking-tight flex items-center gap-2">
          <span className="text-[#FFC30B]">Strategy</span> Pulse
        </Link>

        <nav className="hidden md:flex gap-8 font-semibold">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#FFC30B] transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="bg-[#FFC30B] text-[#B30006] px-6 py-2 rounded shadow text-sm font-bold hover:bg-yellow-400 transition-colors">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
