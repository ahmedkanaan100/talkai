"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/settings", label: "Settings" },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="w-60 border-r border-white/10 p-4 hidden sm:block">
        <div className="font-bold text-lg mb-6">TalkAI</div>
        <nav className="space-y-2">
          {nav.map((n) => {
            const active = pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`block rounded px-3 py-2 text-sm transition ${
                  active ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main column */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 border-b border-white/10 flex items-center justify-between px-4">
          <div className="sm:hidden font-bold">TalkAI</div>
          <div className="text-sm opacity-80">Shopify-style clean shell</div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
