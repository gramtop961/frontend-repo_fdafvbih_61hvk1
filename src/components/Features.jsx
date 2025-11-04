import { MapPin, Building2, Shield, Rocket } from 'lucide-react'

const features = [
  {
    title: 'Browse & Book',
    desc: 'Search locations, compare pricing, and book in minutes with a clean and fast UI.',
    icon: MapPin,
    color: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'Owner Management',
    desc: 'List inventory, edit details, and track bookings with simple tools.',
    icon: Building2,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Secure & Reliable',
    desc: 'JWT-based auth with sensible defaults, integrated error handling, and persistence.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Built for Speed',
    desc: 'Vite + React, Tailwind styling, and route-based code splitting out of the box.',
    icon: Rocket,
    color: 'from-amber-500 to-orange-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Everything you need for your OOH MVP</h2>
          <p className="mt-2 text-slate-600">A focused set of features for advertisers and owners to get going fast.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              <div className="mt-4 text-xs font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
