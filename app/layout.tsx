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
  title: "Strategic Pulse | Understanding People. Empowering Leadership.",
  description: "We help organizations and leaders make smarter decisions through public insights, surveys, and constituency intelligence.",
  keywords: ["election survey company", "civic tech startup", "constituency analytics", "voter intelligence platform", "political campaign analytics", "public opinion survey platform"],
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
