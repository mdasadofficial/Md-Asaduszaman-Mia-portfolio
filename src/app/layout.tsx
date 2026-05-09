import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jensen Omega | Premium Software Developer Portfolio",
  description: "A state-of-the-art portfolio showcasing the work of Jensen Omega, a full-stack software developer specializing in modern web technologies.",
  keywords: ["Software Developer", "Portfolio", "Next.js", "React", "TypeScript", "UI/UX Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-brand-coral/30 selection:text-brand-coral">
        <div className="mesh-gradient fixed inset-0 -z-10 h-full w-full" />
        {children}
      </body>
    </html>
  );
}
