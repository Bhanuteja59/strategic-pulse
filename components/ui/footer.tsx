import Link from "next/link";
import { BarChart3, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-teal to-emerald-500 p-2 rounded-xl text-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-teal-400 transition-colors">
                Strategic Pulse
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering leaders and organizations with real-time constituency intelligence, survey analytics, and civic engagement technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-450 hover:text-white text-sm transition-colors">Public Surveys</Link></li>
              <li><Link href="/services" className="text-slate-450 hover:text-white text-sm transition-colors">Constituency Analytics</Link></li>
              <li><Link href="/services" className="text-slate-450 hover:text-white text-sm transition-colors">Field Intelligence</Link></li>
              <li><Link href="/services" className="text-slate-450 hover:text-white text-sm transition-colors">Citizen Engagement</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-450 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-slate-450 hover:text-white text-sm transition-colors">Case Studies</Link></li>
              <li><Link href="/careers" className="text-slate-450 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-450 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest insights on civic technology and election analytics.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal hover:bg-teal/90 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Strategic Pulse. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
