// src/components/Shell.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2 text-sm transition ${
        active
          ? "bg-white/10 text-white"
          : "text-white/70 hover:text-white hover:bg-white/5"
      }`}
    >
      {children}
    </Link>
  );
};

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] bg-black text-white">
      {/* Sidebar */}
      <aside className="border-r border-white/10 p-4 space-y-6">
        <div className="text-xl font-semibold">TalkAI</div>
        <nav className="space-y-1">
          <NavItem href="/dashboard">Dashboard</NavItem>
          <NavItem href="/onboarding">Onboarding</NavItem>
          <NavItem href="/settings">Settings</NavItem>
        </nav>
      </aside>

      {/* Main */}
      <main className="min-h-screen">
        {/* Top bar */}
        <div className="border-b border-white/10 px-6 py-3 text-sm text-white/80">
          Shopify-style clean shell
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
