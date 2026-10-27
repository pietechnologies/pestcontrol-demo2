import { useState } from "react";

const steps = ["Your pest", "Property", "Schedule", "Details"];
const pestOpts = ["Termites", "General pests", "Bed bugs", "Rodents", "Mosquitoes", "Wildlife"];
const slots = ["Tomorrow 8–10am", "Tomorrow 12–2pm", "Thu 8–10am", "Thu 2–4pm", "Fri 10–12pm", "Sat 8–10am"];

export default function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ pest: "", zip: "", type: "Home", slot: "", name: "", phone: "" });
  const [done, setDone] = useState(false);

  if (!open) return null;

  const set = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));
  const canNext =
    (step === 0 && data.pest) ||
    (step === 1 && data.zip.length === 5) ||
    (step === 2 && data.slot) ||
    (step === 3 && data.name && data.phone.length >= 7);

  const close = () => {
    onClose();
    setTimeout(() => {
      setStep(0);
      setDone(false);
      setData({ pest: "", zip: "", type: "Home", slot: "", name: "", phone: "" });
    }, 250);
  };

  const pill = (active: boolean) =>
    `rounded-xl border px-4 py-3 text-sm font-medium text-left transition ${
      active ? "border-brand bg-brand-soft text-navy" : "border-slate-200 hover:border-slate-300"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-4">
      <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-black text-navy">
              {done ? "You're booked 🎉" : "Book your free inspection"}
            </h3>
            {!done && <p className="text-sm text-slate-500">Takes under 45 seconds</p>}
          </div>
          <button onClick={close} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
            ✕
          </button>
        </div>

        {done ? (
          <div className="mt-5 space-y-3 text-sm">
            <div className="rounded-2xl bg-brand-soft p-4 text-navy ring-1 ring-royal/20">
              <p className="font-bold">{data.slot}</p>
              <p>
                {data.pest} · {data.type} in {data.zip}
              </p>
              <p className="mt-2">
                A confirmation text was sent to {data.phone}. Your technician will call 30 minutes
                before arrival.
              </p>
            </div>
            <p className="text-slate-500">
              (Demo only — in production this writes to Jobber/Housecall Pro and texts the owner
              instantly.)
            </p>
            <button
              onClick={close}
              className="w-full rounded-xl bg-slate-900 py-3 font-bold text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mt-4 flex gap-1.5">
              {steps.map((s, i) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-brand" : "bg-slate-200"}`}
                />
              ))}
            </div>
            <p className="mt-2 text-xs font-semibold tracking-wide text-slate-400 uppercase">
              Step {step + 1} of 4 · {steps[step]}
            </p>

            <div className="mt-4 space-y-3">
              {step === 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {pestOpts.map((p) => (
                    <button key={p} onClick={() => set("pest", p)} className={pill(data.pest === p)}>
                      {p}
                    </button>
                  ))}
                </div>
              )}

              {step === 1 && (
                <>
                  <input
                    value={data.zip}
                    onChange={(e) => set("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
                    placeholder="ZIP code"
                    inputMode="numeric"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    {["Home", "Business"].map((t) => (
                      <button key={t} onClick={() => set("type", t)} className={pill(data.type === t)}>
                        {t}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((s) => (
                    <button key={s} onClick={() => set("slot", s)} className={pill(data.slot === s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <>
                  <input
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand"
                  />
                  <input
                    value={data.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="Mobile number"
                    inputMode="tel"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand"
                  />
                  <p className="text-xs text-slate-500">
                    We'll text a confirmation. We never sell your information.
                  </p>
                </>
              )}
            </div>

            <div className="mt-5 flex gap-2">
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-600"
                >
                  Back
                </button>
              )}
              <button
                disabled={!canNext}
                onClick={() => (step === 3 ? setDone(true) : setStep((s) => s + 1))}
                className="flex-1 rounded-xl bg-brand py-3 font-bold text-white transition hover:bg-brand-dark disabled:opacity-40"
              >
                {step === 3 ? "Confirm booking" : "Continue"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
