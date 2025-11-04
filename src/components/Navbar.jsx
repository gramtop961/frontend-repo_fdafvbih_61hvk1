import { useState } from 'react'
import { Menu, X, Rocket, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Billboard Booker</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="/login" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <User className="h-4 w-4" /> Login
            </a>
            <a href="/register/user" className="inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <a href="#features" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Features</a>
              <a href="#pricing" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Pricing</a>
              <a href="#faq" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">FAQ</a>
              <div className="h-px bg-slate-200 my-2" />
              <a href="/login" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Login</a>
              <a href="/register/user" className="rounded-md px-3 py-2 text-white bg-slate-900 hover:bg-slate-800">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
