"use client";
import { useState } from "react";

const steps = [
  { id: 1, title: "Business Info" },
  { id: 2, title: "Phone Setup" },
  { id: 3, title: "Hours & Services" },
  { id: 4, title: "Calendar Connect" },
  { id: 5, title: "AI Voice & Style" },
];

function StepIndicator({ current }: { current: number }) {
  return (
    <ol className="flex items-center gap-3 text-sm">
      {steps.map((s, i) => {
        const active = current === i;
        const done = i < current;
        return (
          <li key={s.id} className="flex items-center gap-2">
            <span className={`w-6 h-6 grid place-items-center rounded-full border
              ${done ? "bg-white text-black border-white"
                     : active ? "bg-white/10 border-white/50"
                     : "border-white/20 text-white/60"}`}>
              {s.id}
            </span>
            <span className={active ? "font-semibold" : "opacity-70"}>{s.title}</span>
            {i < steps.length - 1 && <span className="opacity-30">›</span>}
          </li>
        );
      })}
    </ol>
  );
}

export default function Onboarding() {
  const [i, setI] = useState(0);
  const next = () => setI(v => Math.min(v + 1, steps.length - 1));
  const back = () => setI(v => Math.max(v - 1, 0));

  const bodies = [
    <div key="1" className="space-y-3">
      <label className="block">
        <div className="text-sm mb-1">Business Name</div>
        <input className="w-full bg-transparent border rounded px-3 py-2 border-white/20" placeholder="Acme Dental" />
      </label>
      <label className="block">
        <div className="text-sm mb-1">Support Email</div>
        <input className="w-full bg-transparent border rounded px-3 py-2 border-white/20" placeholder="support@acme.com" />
      </label>
    </div>,
    <div key="2" className="space-y-3">
      <div className="text-sm">Choose provider</div>
      <div className="flex gap-3">
        <button className="px-3 py-2 rounded border border-white/20">Twilio</button>
        <button className="px-3 py-2 rounded border border-white/20 opacity-60" disabled>Plivo (soon)</button>
      </div>
    </div>,
    <div key="3" className="space-y-3">
      <div className="text-sm">Business Hours</div>
      <input className="w-full bg-transparent border rounded px-3 py-2 border-white/20" placeholder="Mon–Fri 9am–5pm" />
      <div className="text-sm">Services (comma separated)</div>
      <input className="w-full bg-transparent border rounded px-3 py-2 border-white/20" placeholder="Sales, Support, Billing" />
    </div>,
    <div key="4" className="space-y-3">
      <div className="text-sm">Connect Calendar</div>
      <button className="px-3 py-2 rounded border border-white/20">Connect Google Calendar</button>
    </div>,
    <div key="5" className="space-y-3">
      <div className="text-sm">AI Voice & Style</div>
      <input className="w-full bg-transparent border rounded px-3 py-2 border-white/20" placeholder="Friendly, concise, professional" />
    </div>,
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Onboarding</h1>
      <StepIndicator current={i} />
      <div className="rounded-xl border border-white/10 p-4">{bodies[i]}</div>
      <div className="flex justify-between">
        <button onClick={back} className="px-3 py-2 rounded border border-white/20 disabled:opacity-40" disabled={i===0}>
          Back
        </button>
        <button onClick={next} className="px-3 py-2 rounded bg-white text-black disabled:opacity-40"
          disabled={i===steps.length-1}>
          {i===steps.length-1 ? "Finish" : "Continue"}
        </button>
      </div>
    </div>
  );
}
