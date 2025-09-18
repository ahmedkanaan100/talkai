import type { Metadata } from "next";
import "./globals.css";
// If alias fails for any reason, change the next line to:  import Shell from "../components/Shell";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "TalkAI",
  description: "Shopify-clean admin for AI call customer service",
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
