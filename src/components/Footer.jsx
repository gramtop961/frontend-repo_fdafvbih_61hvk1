export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Billboard Booker</h4>
          <p className="mt-2 text-sm text-slate-600">Modern platform for browsing, booking, and managing outdoor ads.</p>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-700">Product</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href="#features">Features</a></li>
            <li><a className="hover:text-slate-900" href="#pricing">Pricing</a></li>
            <li><a className="hover:text-slate-900" href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-700">Developers</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>Leaflet Map</li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-700">Company</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href="#">About</a></li>
            <li><a className="hover:text-slate-900" href="#">Contact</a></li>
            <li><a className="hover:text-slate-900" href="#">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Billboard Booker. All rights reserved.</p>
          <div className="text-xs text-slate-500">Terms • Privacy</div>
        </div>
      </div>
    </footer>
  )
}
