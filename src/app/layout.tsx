// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "TalkAI",
  description: "Shopify-style admin shell for AI call customer service",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
