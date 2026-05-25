import "./globals.css";

// Basic SEO metadata
export const metadata = {
  title: "STRATEGIC PULSE | Empowering Grassroots Volunteers & Community Workers",
  description: "Supporting dedicated political volunteers, booth-level agents, and community organizers with micro-jobs, smart execution tools, and actionable recognition.",
  keywords: [
    "grassroots empowerment",
    "political volunteers",
    "community support",
    "booth agents",
    "micro-jobs for volunteers",
    "strategic pulse"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="WF2XUxGii2MkY2Ltao10yC2dsAichcRx64AU3siGsQc" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
