import { useState } from "react";
import logo from "../assets/logo.svg";
import Estimator, { ZipChecker } from "./Estimator";
import BookingModal from "./BookingModal";
import {
  iconMap,
  IconBadge,
  IconCalendar,
  IconCheck,
  IconClock,
  IconLeaf,
  IconMapPin,
  IconMessage,
  IconPhone,
  IconSearch,
  IconStar,
  IconZap,
} from "./icons";
import { services, plans, reviews, pestLibrary, faqs, areas } from "../data/demo";

const HERO =
  "https://images.pexels.com/photos/4894608/pexels-photo-4894608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

function Stars({ className = "text-amber-400" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <IconStar key={i} className="h-4 w-4" />
      ))}
    </span>
  );
}

const riskTone: Record<string, string> = {
  Severe: "border-t-brand text-brand",
  High: "border-t-amber-500 text-amber-700",
  Medium: "border-t-royal text-royal",
};

export default function DemoSite() {
  const [booking, setBooking] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const book = () => setBooking(true);

  return (
    <div className="bg-white text-slate-800">
      <BookingModal open={booking} onClose={() => setBooking(false)} />

      {/* Offer bar */}
      <div className="bg-royal px-4 py-2 text-center text-sm font-semibold text-white">
        <IconZap className="mr-1.5 inline h-4 w-4 -translate-y-px" />
        Same-day service available · $50 off your first treatment · Book before 12pm
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <img
            src={logo}
            alt="First Choice Pest Control — Decatur, GA"
            className="h-9 rounded-sm sm:h-10"
          />
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#services" className="hover:text-royal">Services</a>
            <a href="#pricing" className="hover:text-royal">Pricing</a>
            <a href="#guarantee" className="hover:text-royal">Guarantee</a>
            <a href="#reviews" className="hover:text-royal">Reviews</a>
            <a href="#areas" className="hover:text-royal">Service Area</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="tel:+14045550199"
              className="hidden items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold text-navy transition hover:border-royal sm:flex"
            >
              <IconPhone className="h-4 w-4" /> (404) 555-0199
            </a>
            <button
              onClick={book}
              className="rounded-xl bg-brand px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Free Inspection
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <img
          src={HERO}
          alt="Technician treating a home exterior"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold ring-1 ring-white/20">
                <Stars /> 4.9 · 312 Google reviews
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold ring-1 ring-white/20">
                GA Licence #PC-10482
              </span>
            </div>
            <div className="mt-5 h-1 w-14 rounded bg-brand" />
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Termites gone.
              <br />
              Guaranteed in writing.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200">
              Decatur's local exterminators since 2009. Upfront pricing, same-day appointments, and a
              written warranty that covers retreatment <em>and</em> damage — not just a promise.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={book}
                className="rounded-xl bg-brand px-7 py-3.5 text-lg font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
              >
                Book free inspection
              </button>
              <a
                href="tel:+14045550199"
                className="flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-lg font-bold transition hover:bg-white/10"
              >
                <IconPhone className="h-5 w-5" /> (404) 555-0199
              </a>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-4">
              {[
                ["17 yrs", "serving Decatur"],
                ["48 hr", "re-treat promise"],
                ["$250k", "damage warranty"],
              ].map(([a, b]) => (
                <div key={a} className="border-t-2 border-brand pt-2">
                  <div className="text-2xl font-black">{a}</div>
                  <div className="text-sm text-slate-300">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Estimator onBook={book} />
            <ZipChecker />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm font-semibold text-slate-600">
          <span className="flex items-center gap-2">
            <IconBadge className="h-5 w-5 text-royal" /> Licensed, bonded &amp; insured
          </span>
          <span className="flex items-center gap-2">
            <IconLeaf className="h-5 w-5 text-royal" /> Pet &amp; child safe program
          </span>
          <span className="flex items-center gap-2">
            <IconCheck className="h-5 w-5 text-royal" /> Upfront written pricing
          </span>
          <span className="flex items-center gap-2">
            <IconCalendar className="h-5 w-5 text-royal" /> No long-term contracts
          </span>
          <span className="flex items-center gap-2">
            <IconClock className="h-5 w-5 text-royal" /> 48-hour re-treat promise
          </span>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-navy">
              Every pest, one local team
            </h2>
            <p className="mt-2 text-slate-600">
              Each service has its own page with the process, pricing and FAQs — no guessing.
            </p>
          </div>
          <img src={logo} alt="First Choice Pest Control" className="hidden h-12 rounded-sm md:block" />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-royal/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.text}</p>
                <p className="mt-3 text-sm font-bold text-brand">{s.from}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black tracking-tight text-navy">
            Transparent plans, no surprises
          </h2>
          <p className="mt-2 text-slate-600">
            Prices shown are per visit for an average 2,000 sq ft Decatur home. Cancel anytime.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl bg-white p-6 shadow-sm ring-1 transition hover:shadow-xl ${
                  p.tag === "Most popular" ? "ring-2 ring-brand lg:-translate-y-2" : "ring-slate-200"
                }`}
              >
                {p.tag && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                    {p.tag}
                  </span>
                )}
                <h3 className="text-lg font-black text-navy">{p.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-black text-navy">${p.price}</span>
                  <span className="pb-1 text-slate-500">/ visit</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={book}
                  className={`mt-6 w-full rounded-xl py-3 font-bold text-white transition ${
                    p.tag === "Most popular" ? "bg-brand hover:bg-brand-dark" : "bg-navy hover:bg-navy-deep"
                  }`}
                >
                  Start this plan
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            Price varies with square footage, crawl-space access and pest pressure. Financing
            available on termite work.
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section id="guarantee" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 rounded-3xl bg-gradient-to-br from-royal to-navy p-8 text-white lg:grid-cols-[1fr_1.2fr] lg:p-12">
          <div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-widest uppercase">
              The First Choice Promise
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              If the pests come back, so do we — free.
            </h2>
            <p className="mt-3 text-slate-200">
              Every job is backed by a written, transferable warranty. Read it before you pay, not
              after.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["48-hour re-treat", "Pests between visits? We're back within two business days at no charge."],
              ["$250,000 damage warranty", "Termite bond customers are covered for repair, not just retreatment."],
              ["30-day money back", "Not satisfied in your first month? We refund your last service."],
              ["Locked renewal rate", "Your termite bond renewal price is frozen for 10 years."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <h3 className="flex items-center gap-2 font-bold">
                  <IconBadge className="h-5 w-5 text-white/80" /> {t}
                </h3>
                <p className="mt-1 text-sm text-slate-200">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-navy-deep py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Neighbors in Decatur trust us</h2>
              <p className="mt-2 flex items-center gap-2 text-slate-300">
                <Stars /> <strong className="text-white">4.9</strong> average from 312 Google reviews
              </p>
            </div>
            <a href="#" className="text-sm font-semibold text-brand hover:underline">
              Read all reviews on Google →
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <Stars />
                <blockquote className="mt-2 text-sm text-slate-200">"{r.text}"</blockquote>
                <figcaption className="mt-4 text-sm">
                  <div className="font-bold">{r.name}</div>
                  <div className="text-slate-400">
                    {r.area} · {r.service}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pest library */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-black tracking-tight text-navy">
          Not sure what you've got?
        </h2>
        <p className="mt-2 text-slate-600">
          Georgia's most common home invaders and the signs they leave behind.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pestLibrary.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border border-slate-200 border-t-4 p-5 ${riskTone[p.risk]}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-slate-500 uppercase">
                  <IconSearch className="h-3.5 w-3.5" /> Signs to look for
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    p.risk === "Severe"
                      ? "bg-brand-soft text-brand"
                      : p.risk === "High"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-royal/10 text-royal"
                  }`}
                >
                  {p.risk}
                </span>
              </div>
              <h3 className="mt-2 font-bold text-navy">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.sign}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-navy">Where we work</h2>
            <p className="mt-2 text-slate-600">
              Locally owned and based in Decatur — our trucks are never more than 20 minutes away.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200"
                >
                  <IconMapPin className="h-4 w-4 text-brand" /> {a}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="font-bold text-navy">Georgia pest season calendar</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Mar – May", "Subterranean termite swarms", "bg-brand"],
                ["May – Sep", "Mosquitoes, fire ants, wasps", "bg-amber-500"],
                ["Jun – Aug", "Carpenter bees, roaches", "bg-royal"],
                ["Oct – Jan", "Rodents & wildlife seeking warmth", "bg-slate-400"],
              ].map(([m, t, c]) => (
                <li key={m} className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${c}`} />
                  <span className="w-24 shrink-0 font-bold text-navy">{m}</span>
                  <span className="text-slate-600">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-black tracking-tight text-navy">Straight answers</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-navy"
              >
                {f.q}
                <span className="text-xl text-brand">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="px-5 pb-5 text-slate-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-black">Get your free inspection today</h2>
          <p className="mt-2 text-white/85">
            Book online in 45 seconds. Same-day slots available before noon.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={book}
              className="rounded-xl bg-white px-7 py-3.5 font-bold text-brand transition hover:bg-white/90"
            >
              Book online
            </button>
            <a
              href="tel:+14045550199"
              className="flex items-center gap-2 rounded-xl border border-white/60 px-7 py-3.5 font-bold transition hover:bg-white/10"
            >
              <IconPhone className="h-5 w-5" /> (404) 555-0199
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep px-4 py-12 text-sm text-slate-400">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="First Choice Pest Control" className="h-12 rounded-sm bg-white p-1" />
            <p className="mt-3">
              1455 Church St SW
              <br />
              Decatur, GA 30030
            </p>
            <p className="mt-3">
              GA Licence #PC-10482
              <br />
              Licensed · Bonded · Insured
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white">Services</h4>
            <ul className="mt-2 space-y-1">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">Service area</h4>
            <ul className="mt-2 space-y-1">
              {areas.slice(0, 6).map((a) => (
                <li key={a}>{a}, GA</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">Hours</h4>
            <p className="mt-2">
              Mon–Fri 7am – 7pm
              <br />
              Sat 8am – 4pm
              <br />
              Emergency line 24/7
            </p>
            <p className="mt-3 flex items-center gap-2 font-bold text-white">
              <IconPhone className="h-4 w-4 text-brand" /> (404) 555-0199
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs">
          Demo concept site built for an audit of firstchoicepestcontrolllc.com. Pricing, reviews,
          licence number and phone number are illustrative placeholders.
        </p>
      </footer>

      {/* Mobile sticky bar */}
      <div className="sticky bottom-0 z-40 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
        <a
          href="tel:+14045550199"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-navy py-3 font-bold text-white"
        >
          <IconPhone className="h-4 w-4" /> Call
        </a>
        <a
          href="sms:+14045550199"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-300 py-3 font-bold text-slate-800"
        >
          <IconMessage className="h-4 w-4" /> Text
        </a>
        <button
          onClick={book}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand py-3 font-bold text-white"
        >
          <IconCalendar className="h-4 w-4" /> Book
        </button>
      </div>
    </div>
  );
}
