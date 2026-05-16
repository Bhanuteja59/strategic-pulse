import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  const navLinks = [
    { name: "Why Support Volunteers", href: "#why-support-volunteers" },
    { name: "Our Approach", href: "#approach" },
    { name: "Support Services", href: "#services" },
    { name: "Volunteer Hub", href: "#volunteer-hub" },
    { name: "Recognition Plans", href: "#plans" },
  ];

  return (
    <header className="bg-[#B30006] text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md border-b-2 border-[#FFC30B]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl lg:text-2xl tracking-tight flex items-center gap-2 whitespace-nowrap">
          <Image src="/images/logo.jpg" alt="Strategic Pulse Logo" width={40} height={40} className="rounded-full w-8 h-8 lg:w-10 lg:h-10" />
          <span className="text-[#FFC30B]">Strategy</span> Pulse
        </Link>

        <nav className="hidden md:flex gap-2 lg:gap-4 font-semibold text-xs lg:text-sm">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#FFC30B] transition-colors whitespace-nowrap">
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="bg-[#FFC30B] text-[#B30006] px-3 py-1.5 rounded shadow text-xs lg:text-sm font-bold hover:bg-yellow-400 transition-colors whitespace-nowrap">
          Join / Support Today
        </Link>
      </div>
    </header>
  );
}
