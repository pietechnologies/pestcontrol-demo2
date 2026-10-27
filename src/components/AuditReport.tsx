import { useMemo, useState } from "react";
import logo from "../assets/logo.svg";
import {
  SITE,
  currentState,
  gaps,
  comparison,
  competitorNotes,
  newIdeas,
  roadmap,
  metrics,
  type Severity,
} from "../data/audit";

const sevStyle: Record<Severity, string> = {
  critical: "bg-brand-soft text-brand ring-brand/20",
  high: "bg-amber-100 text-amber-800 ring-amber-200",
  medium: "bg-sky-100 text-sky-700 ring-sky-200",
};

function Mark({ v }: { v: boolean | "partial" }) {
  if (v === true) return <span className="text-royal text-lg font-bold">✓</span>;
  if (v === "partial") return <span className="text-amber-500 text-lg font-bold">~</span>;
  return <span className="text-brand text-lg font-bold">✕</span>;
}

const categories = ["All", "Conversion", "Trust", "SEO", "Content", "Tech / UX"] as const;

export default function AuditReport({ onSeeDemo }: { onSeeDemo: () => void }) {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (cat === "All" ? gaps : gaps.filter((g) => g.category === cat)),
    [cat],
  );

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-br from-navy-deep via-navy to-royal-dark px-5 py-14 text-white sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/80 uppercase ring-1 ring-white/15">
            Website Audit &amp; Competitor Gap Report
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <img
              src={logo}
              alt="First Choice Pest Control logo"
              className="h-14 rounded-lg bg-white p-1.5 shadow-lg sm:h-16"
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-5xl">{SITE.name}</h1>
              <p className="mt-2 text-slate-300">
                {SITE.url} · {SITE.city} · {SITE.audited}
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border-t-2 border-brand bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-3xl font-black">{m.value}</div>
                <div className="mt-1 text-sm font-semibold">{m.label}</div>
                <div className="text-xs text-slate-400">{m.sub}</div>
              </div>
            ))}
          </div>
          <button
            onClick={onSeeDemo}
            className="mt-8 rounded-xl bg-brand px-6 py-3 font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
          >
            View the sample rebuilt website →
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-5 py-14 sm:px-8">
        {/* Verdict */}
        <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">The short verdict</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              The current site is a <strong>brochure, not a lead machine</strong>. It is three thin
              pages of generic copy with one phone number. Everything a 2026 pest-control buyer uses
              to decide — price, proof, guarantee, availability — is missing, while Terminix, Arrow,
              Breda and Massey put all four above the fold. The business is almost certainly getting
              calls <em>despite</em> the website, not because of it.
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              The good news: none of the gaps are expensive to close. Pricing, a guarantee, reviews
              and a booking widget can go live in two weeks and typically double conversion on the
              same traffic.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">What exists today</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {currentState.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-slate-400">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gaps */}
        <section>
          <h2 className="text-2xl font-black tracking-tight text-navy">
            What the site is missing
          </h2>
          <p className="mt-1 text-slate-500">{gaps.length} findings, ranked by revenue impact.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  cat === c
                    ? "bg-navy text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filtered.map((g) => (
              <article
                key={g.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-navy">{g.title}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase ring-1 ${sevStyle[g.severity]}`}
                  >
                    {g.severity}
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold tracking-wide text-slate-400 uppercase">
                  {g.category}
                </p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-700">Today</dt>
                    <dd className="text-slate-600">{g.current}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-700">Why it costs money</dt>
                    <dd className="text-slate-600">{g.impact}</dd>
                  </div>
                  <div className="rounded-xl bg-royal/5 p-3 ring-1 ring-royal/15">
                    <dt className="font-semibold text-royal-dark">Fix</dt>
                    <dd className="text-slate-700">{g.fix}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section>
          <h2 className="text-2xl font-black tracking-tight text-navy">
            Head-to-head with competitors
          </h2>
          <p className="mt-1 text-slate-500">
            ✓ has it · ~ partial · ✕ missing. Based on what each company publishes publicly.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-3 text-left font-semibold">Feature</th>
                  <th className="p-3 font-semibold text-white/80">First Choice</th>
                  <th className="p-3 font-semibold">BREDA</th>
                  <th className="p-3 font-semibold">Arrow</th>
                  <th className="p-3 font-semibold">Terminix</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r, i) => (
                  <tr key={r.feature} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="p-3 font-medium text-slate-700">{r.feature}</td>
                    <td className="p-3 text-center font-bold">
                      <Mark v={r.first} />
                    </td>
                    <td className="p-3 text-center">
                      <Mark v={r.breda} />
                    </td>
                    <td className="p-3 text-center">
                      <Mark v={r.arrow} />
                    </td>
                    <td className="p-3 text-center">
                      <Mark v={r.terminix} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {competitorNotes.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-slate-200 border-t-4 border-t-royal bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-navy">{c.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.edge}</p>
              </div>
            ))}
          </div>
        </section>

        {/* New ideas */}
        <section>
          <h2 className="text-2xl font-black tracking-tight text-navy">
            New things worth adding
          </h2>
          <p className="mt-1 text-slate-500">
            Beyond catching up — features that would put First Choice ahead locally.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {newIdeas.map((i, idx) => (
              <div
                key={i.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-royal/30 hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-sm font-black text-white">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-bold text-navy">{i.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{i.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <h2 className="text-2xl font-black tracking-tight text-navy">90-day action plan</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {roadmap.map((p, i) => (
              <div
                key={p.phase}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-3 font-bold text-navy">{p.phase}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-royal">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-navy-deep p-8 text-center text-white">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <img
              src={logo}
              alt="First Choice Pest Control logo"
              className="h-12 rounded-lg bg-white p-1"
            />
            <h2 className="text-2xl font-black">The sample rebuild is included</h2>
            <p className="text-slate-300">
              A working demo site with instant estimator, ZIP checker, pricing tiers, guarantee
              block, reviews, pest library and a 4-step booking flow — static, so it deploys to
              GitHub Pages as-is.
            </p>
            <button
              onClick={onSeeDemo}
              className="rounded-xl bg-brand px-6 py-3 font-bold text-white transition hover:bg-brand-dark"
            >
              Open the demo website →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
