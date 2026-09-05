import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenLedger · One private layer for every model",
  description:
    "OpenLedger is one private layer for every frontier model. Chat with GPT, Claude, Gemini, Grok and DeepSeek in one place. Nothing stored, nothing filtered, and your memory travels with you.",
  keywords: [
    "OpenLedger",
    "Private AI",
    "Council Mode",
    "GPT-4o",
    "o3",
    "Claude Opus 4",
    "Gemini 2.5 Pro",
    "DeepSeek R1",
    "Zero Retention",
    "Unified AI Layer",
  ],
  authors: [{ name: "OpenLedger Inc." }],
  openGraph: {
    title: "OpenLedger · One private layer for every model",
    description:
      "Chat with GPT, Claude, Gemini, Grok and DeepSeek in one place. Nothing stored, nothing filtered, and your memory travels with you.",
    url: "https://openledger.xyz",
    siteName: "OpenLedger",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F6F7F8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased", inter.variable, newsreader.variable)}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,600,500,400&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6F7F8] text-[#0A0A0A] font-sans selection:bg-[#E1443A]/10 selection:text-[#E1443A]">
        {children}
      </body>
    </html>
  );
}
