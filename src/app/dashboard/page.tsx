import * as React from "react";

export default function DashboardPage() {
  const cards = [
    { title: "Calls Today", value: "0" },
    { title: "Avg Handle Time", value: "—" },
    { title: "Active Numbers", value: "0" },
    { title: "Playbooks", value: "0" },
  ];

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.title} className="rounded-xl border border-white/10 p-4">
            <div className="text-sm opacity-70">{c.title}</div>
            <div className="text-2xl font-semibold mt-1">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
