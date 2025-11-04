import Spline from '@splinetool/react-spline'
import { MapPin, Building2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[70vh] sm:h-[76vh] lg:h-[82vh] overflow-hidden">
        <Spline 
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />

        {/* soft gradient tint so text stays legible; allows interaction with the 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl rounded-2xl bg-white/70 backdrop-blur p-6 sm:p-8 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Modern OOH Platform</p>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Book and manage billboards with ease
              </h1>
              <p className="mt-3 text-slate-700 text-sm sm:text-base">
                Discover prime locations, compare prices, and launch your outdoor campaigns in minutes. Owners can list inventory and track bookings.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/user"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-800"
                >
                  <MapPin className="mr-2 h-4 w-4" /> Browse Billboards
                </a>
                <a
                  href="/owner"
                  className="inline-flex items-center justify-center rounded-md bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-900 ring-1 ring-slate-300 backdrop-blur hover:bg-white"
                >
                  <Building2 className="mr-2 h-4 w-4" /> Owner Dashboard
                </a>
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-slate-600">
                <div className="inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500" />
                  Secure bookings
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-indigo-500" />
                  Real-time map
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-fuchsia-500" />
                  Owner tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
