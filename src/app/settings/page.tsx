// src/app/settings/page.tsx
export default function SettingsPage() {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Settings</h1>
  
        <div className="grid gap-4 max-w-2xl">
          <section className="rounded-xl border border-white/10 p-4">
            <h2 className="text-lg font-semibold mb-2">Account</h2>
            <p className="text-white/70 text-sm">
              Placeholder for account settings (name, email, password, 2FA, etc.).
            </p>
          </section>
  
          <section className="rounded-xl border border-white/10 p-4">
            <h2 className="text-lg font-semibold mb-2">Workspace</h2>
            <p className="text-white/70 text-sm">
              Placeholder for team/domain/environment variables and billing controls.
            </p>
          </section>
        </div>
      </div>
    );
  }
  