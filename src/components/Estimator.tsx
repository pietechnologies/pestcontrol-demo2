import { useMemo, useState } from "react";
import { iconMap, IconMapPin, type IconName } from "./icons";

const pests: { id: string; label: string; icon: IconName; base: number; initial: number }[] = [
  { id: "general", label: "General pests", icon: "home", base: 119, initial: 149 },
  { id: "termite", label: "Termites", icon: "shield", base: 0, initial: 795 },
  { id: "bedbug", label: "Bed bugs", icon: "flame", base: 0, initial: 650 },
  { id: "rodent", label: "Rodents", icon: "lock", base: 135, initial: 249 },
  { id: "mosquito", label: "Mosquitoes", icon: "droplet", base: 89, initial: 99 },
  { id: "wildlife", label: "Wildlife", icon: "fence", base: 0, initial: 395 },
];

const sizes = [
  { id: "s", label: "Under 1,500 sq ft", mult: 1 },
  { id: "m", label: "1,500 – 2,500 sq ft", mult: 1.18 },
  { id: "l", label: "2,500 – 4,000 sq ft", mult: 1.4 },
  { id: "xl", label: "4,000+ sq ft", mult: 1.65 },
];

const freqs = [
  { id: "quarterly", label: "Quarterly plan", mult: 1, note: "Best value — 10% off" },
  { id: "bimonthly", label: "Every 2 months", mult: 1.15, note: "Heavy pressure homes" },
  { id: "once", label: "One-time visit", mult: 1.6, note: "No contract" },
];

const SERVED = ["30030", "30032", "30033", "30034", "30002", "30021", "30079", "30083", "30084", "30306", "30307", "30317", "30319", "30329", "30341"];

export function ZipChecker() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<null | boolean>(null);
  return (
    <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200">
      <h3 className="flex items-center gap-2 font-bold text-navy">
        <IconMapPin className="h-5 w-5 text-brand" /> Do we service your ZIP?
      </h3>
      <div className="mt-3 flex gap-2">
        <input
          value={zip}
          onChange={(e) => {
            setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
            setResult(null);
          }}
          placeholder="e.g. 30030"
          inputMode="numeric"
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
        />
        <button
          onClick={() => setResult(SERVED.includes(zip))}
          disabled={zip.length !== 5}
          className="shrink-0 rounded-xl bg-navy px-5 py-2.5 font-semibold text-white disabled:opacity-40"
        >
          Check
        </button>
      </div>
      {result === true && (
        <p className="mt-3 rounded-xl bg-royal/10 p-3 text-sm font-medium text-royal-dark">
          Yes! We serve {zip}. Next available slot: <strong>tomorrow, 8–10am</strong>.
        </p>
      )}
      {result === false && (
        <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm font-medium text-amber-800">
          We're just outside {zip} — call (404) 555-0199 and we'll usually still make it work.
        </p>
      )}
    </div>
  );
}

export default function Estimator({ onBook }: { onBook: () => void }) {
  const [pest, setPest] = useState(pests[0]);
  const [size, setSize] = useState(sizes[1]);
  const [freq, setFreq] = useState(freqs[0]);
  const [revealed, setRevealed] = useState(false);

  const price = useMemo(() => {
    const recurring = pest.base ? Math.round((pest.base * size.mult * freq.mult) / 5) * 5 : 0;
    const initial = Math.round((pest.initial * size.mult) / 5) * 5;
    return { recurring, initial, high: Math.round((initial * 1.35) / 5) * 5 };
  }, [pest, size, freq]);

  const opt = (active: boolean) =>
    `flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition ${
      active ? "border-brand bg-brand-soft text-brand" : "border-slate-200 text-slate-700 hover:border-slate-300"
    }`;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
          Instant estimate
        </span>
        <span className="text-xs text-slate-500">No phone call needed · 20 seconds</span>
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-700">1. What are you dealing with?</p>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {pests.map((p) => {
          const Icon = iconMap[p.icon];
          return (
            <button
              key={p.id}
              onClick={() => {
                setPest(p);
                setRevealed(false);
              }}
              className={opt(pest.id === p.id)}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {p.label}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm font-semibold text-slate-700">2. Home size</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {sizes.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setSize(s);
              setRevealed(false);
            }}
            className={opt(size.id === s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {pest.base > 0 && (
        <>
          <p className="mt-5 text-sm font-semibold text-slate-700">3. How often?</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {freqs.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setFreq(f);
                  setRevealed(false);
                }}
                className={`rounded-xl border px-3 py-2.5 text-left transition ${
                  freq.id === f.id
                    ? "border-brand bg-brand-soft"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="text-sm font-semibold text-slate-800">{f.label}</div>
                <div className="text-xs text-slate-500">{f.note}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="mt-6 w-full rounded-xl bg-brand py-3.5 text-lg font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
        >
          Show my price →
        </button>
      ) : (
        <div className="mt-6 rounded-2xl bg-navy-deep p-5 text-white">
          <p className="text-xs tracking-widest text-white/60 uppercase">Your estimate</p>
          {pest.base > 0 ? (
            <>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-4xl font-black">${price.recurring}</span>
                <span className="pb-1 text-slate-300">per visit</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">
                Initial service ${price.initial} · cancel anytime · free re-treats between visits
              </p>
            </>
          ) : (
            <>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-4xl font-black">
                  ${price.initial}–${price.high}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-300">
                Final price confirmed after a free on-site inspection. Financing available.
              </p>
            </>
          )}
          <button
            onClick={onBook}
            className="mt-4 w-full rounded-xl bg-brand py-3 font-bold text-white transition hover:bg-brand-dark"
          >
            Lock in this price — book now
          </button>
          <p className="mt-2 text-center text-xs text-slate-400">
            Demo pricing for illustration only.
          </p>
        </div>
      )}
    </div>
  );
}
