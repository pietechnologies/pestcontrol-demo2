import { useEffect, useState } from "react";
import AuditReport from "./components/AuditReport";
import DemoSite from "./components/DemoSite";

type View = "audit" | "demo";

export default function App() {
  const [view, setView] = useState<View>("audit");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  return (
    <div className="min-h-screen bg-white">
      {/* Mode switcher */}
      <div className="sticky top-0 z-[60] flex items-center justify-center gap-2 border-b border-white/10 bg-navy-deep px-3 py-2 text-xs">
        <span className="hidden font-semibold tracking-wide text-slate-400 uppercase sm:inline">
          First Choice Pest Control ·
        </span>
        {(
          [
            ["audit", "Audit & Competitor Gaps"],
            ["demo", "Sample Rebuilt Website"],
          ] as [View, string][]
        ).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setView(k)}
            className={`rounded-full px-3 py-1.5 font-bold transition ${
              view === k
                ? "bg-brand text-white"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {view === "audit" ? <AuditReport onSeeDemo={() => setView("demo")} /> : <DemoSite />}
    </div>
  );
}
