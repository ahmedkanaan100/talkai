// src/app/onboarding/page.tsx
"use client";

import * as React from "react";

type BizInfo = { name: string; email: string };
const STORAGE_KEY = "talkai:onboarding:bizinfo";

function StepBadge({ n, active }: { n: number; active: boolean }) {
  return (
    <span
      className={[
        "inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold",
        active ? "bg-white text-black" : "bg-white/10 text-white/70",
      ].join(" ")}
    >
      {n}
    </span>
  );
}

export default function OnboardingPage() {
  const [step, setStep] = React.useState(1);

  const [biz, setBiz] = React.useState<BizInfo>(() => {
    if (typeof window === "undefined") return { name: "", email: "" };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as BizInfo) : { name: "", email: "" };
    } catch {
      return { name: "", email: "" };
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(biz));
    } catch {}
  }, [biz]);

  const validStep1 =
    biz.name.trim().length > 1 && /\S+@\S+\.\S+/.test(biz.email);

  return (
    <div className="max-w-5xl">
      <h1 className="mb-6 text-2xl font-bold">Onboarding</h1>

      {/* Stepper */}
      <div className="mb-6 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <StepBadge n={1} active={step === 1} />
          <div className={step === 1 ? "text-white" : "text-white/70"}>
            <div className="font-medium">Business Info</div>
          </div>
        </div>
        <span className="opacity-40">›</span>
        <div className="flex items-center gap-2">
          <StepBadge n={2} active={step === 2} />
          <div className={step === 2 ? "text-white" : "text-white/70"}>
            <div className="font-medium">Phone Setup</div>
          </div>
        </div>
        <span className="opacity-40">›</span>
        <div className="flex items-center gap-2">
          <StepBadge n={3} active={step === 3} />
          <div className={step === 3 ? "text-white" : "text-white/70"}>
            <div className="font-medium">Hours & Services</div>
          </div>
        </div>
        <span className="opacity-40">›</span>
        <div className="flex items-center gap-2">
          <StepBadge n={4} active={step === 4} />
          <div className={step === 4 ? "text-white" : "text-white/70"}>
            <div className="font-medium">Calendar Connect</div>
          </div>
        </div>
        <span className="opacity-40">›</span>
        <div className="flex items-center gap-2">
          <StepBadge n={5} active={step === 5} />
          <div className={step === 5 ? "text-white" : "text-white/70"}>
            <div className="font-medium">AI Voice & Style</div>
          </div>
        </div>
      </div>

      {/* Panels */}
      <div className="rounded-2xl border border-white/10 p-6">
        {step === 1 && (
          <div className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm text-white/70">
                Business Name
              </span>
              <input
                className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 outline-none ring-0 focus:border-white/20"
                placeholder="Acme Dental"
                value={biz.name}
                onChange={(e) => setBiz({ ...biz, name: e.target.value })}
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm text-white/70">
                Support Email
              </span>
              <input
                className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 outline-none ring-0 focus:border-white/20"
                placeholder="support@acme.com"
                value={biz.email}
                onChange={(e) => setBiz({ ...biz, email: e.target.value })}
              />
            </label>

            <div className="mt-6 flex justify-between">
              <button
                className="cursor-not-allowed rounded-md border border-white/15 px-4 py-2 opacity-50"
                disabled
              >
                Back
              </button>
              <button
                disabled={!validStep1}
                onClick={() => setStep(2)}
                className="rounded-md bg-white px-4 py-2 text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="opacity-70">
              Step 2: Phone Setup (Twilio/number provisioning will go here).
            </p>
            <div className="mt-6 flex justify-between">
              <button
                className="rounded-md border border-white/15 px-4 py-2"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="rounded-md bg-white px-4 py-2 text-black"
                onClick={() => setStep(3)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="opacity-70">
              Step 3: Hours & Services (opening hours and call routing rules).
            </p>
            <div className="mt-6 flex justify-between">
              <button
                className="rounded-md border border-white/15 px-4 py-2"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button
                className="rounded-md bg-white px-4 py-2 text-black"
                onClick={() => setStep(4)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <p className="opacity-70">
              Step 4: Calendar Connect (Google Calendar OAuth placeholder).
            </p>
            <div className="mt-6 flex justify-between">
              <button
                className="rounded-md border border-white/15 px-4 py-2"
                onClick={() => setStep(3)}
              >
                Back
              </button>
              <button
                className="rounded-md bg-white px-4 py-2 text-black"
                onClick={() => setStep(5)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <p className="opacity-70">
              Step 5: AI Voice & Style (tone, persona, playbook selection).
            </p>
            <div className="mt-6 flex justify-between">
              <button
                className="rounded-md border border-white/15 px-4 py-2"
                onClick={() => setStep(4)}
              >
                Back
              </button>
              <button
                className="rounded-md bg-white px-4 py-2 text-black"
                onClick={() => alert("Onboarding complete ✅")}
              >
                Finish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
