import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Splash from "@/components/ui/splash";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strategy Pulse | Empowering Grassroots Volunteers & Community Workers",
  description: "Supporting dedicated political volunteers, booth-level agents, and community organizers with micro-jobs, smart execution tools, and actionable recognition.",
  keywords: ["grassroots empowerment", "political volunteers", "community support", "booth agents", "micro-jobs for volunteers", "strategy pulse"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <meta name="google-site-verification" content="WF2XUxGii2MkY2Ltao10yC2dsAichcRx64AU3siGsQc" />
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Splash />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
