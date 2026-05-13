import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strategy Pulse | Power. Strategy. Every Day.",
  description: "A Political Intelligence & Leadership Enablement Company built for modern Indian politics. We empower political leaders with systems, intelligence, and execution frameworks that run 365 days a year — not just during elections.",
  keywords: ["strategy pulse", "political intelligence", "indian politics operating system", "sops for political leaders", "constituency analytics", "election war room", "voter intelligence"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-teal selection:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
