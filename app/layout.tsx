import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";

import type { Metadata, Viewport } from "next";
import "./globals.css";

const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title:
    "Trapline Transport | Heavy Haul & Specialized Transportation Across Canada",

  icons: {
    icon: "/images/trapline-logo.png",
    shortcut: "/images/trapline-logo.png",
    apple: "/images/trapline-logo.png",
  },

  description:
    "Trapline Transport provides reliable heavy haul, specialized freight, and transportation services across Western Canada. Delivering safe, efficient, and dependable logistics solutions for industrial, construction, mining, forestry, and energy sectors.",

  keywords: [
    "Trapline Transport",
    "heavy haul Canada",
    "specialized transportation",
    "freight transportation Canada",
    "oversized load transport",
    "industrial transportation",
    "construction logistics",
    "equipment hauling",
    "Western Canada trucking",
    "British Columbia transport",
    "Alberta trucking company",
    "commercial freight services",
    "heavy equipment transport",
    "logistics company Canada",
    "transportation solutions",
    "flatbed trucking",
  ],

  authors: [
    {
      name: "Trapline Transport",
    },
  ],

  creator: "Trapline Transport",
  publisher: "Trapline Transport",
  applicationName: "Trapline Transport",

  category: "Transportation & Logistics Services",

  metadataBase: new URL("https://traplinetransport.ca"),

  openGraph: {
    title:
      "Trapline Transport | Heavy Haul & Specialized Transportation Across Canada",
    description:
      "Professional heavy haul, specialized freight, and transportation solutions serving construction, industrial, mining, forestry, and energy industries across Western Canada.",
    url: "https://traplinetransport.ca",
    siteName: "Trapline Transport",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trapline Transport | Heavy Haul & Specialized Freight Solutions",
    description:
      "Reliable heavy haul and specialized transportation services across Western Canada.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  themeColor: "#0F2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansNotch.variable}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
