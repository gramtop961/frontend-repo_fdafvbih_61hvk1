import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="pricing" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Simple pricing</h2>
              <p className="mt-2 text-slate-600 text-sm">Start free for development. Upgrade later for production features.</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="font-semibold">Advertisers</h3>
                  <p className="mt-1 text-sm text-slate-600">Browse and book available billboards.</p>
                  <p className="mt-3 text-3xl font-extrabold">Free</p>
                  <Link to="/user" className="mt-4 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Explore</Link>
                </div>
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="font-semibold">Owners</h3>
                  <p className="mt-1 text-sm text-slate-600">List inventory and manage bookings.</p>
                  <p className="mt-3 text-3xl font-extrabold">Free</p>
                  <Link to="/owner" className="mt-4 inline-flex rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50">Get started</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-semibold">Can I integrate a map?</h3>
                <p className="text-sm text-slate-600">Yes. The MVP supports a Leaflet map with markers and a location picker.</p>
              </div>
              <div>
                <h3 className="font-semibold">How does authentication work?</h3>
                <p className="text-sm text-slate-600">JWT tokens stored in localStorage with an Axios instance and interceptors.</p>
              </div>
              <div>
                <h3 className="font-semibold">Is this mobile friendly?</h3>
                <p className="text-sm text-slate-600">Designed mobile-first with responsive grids and collapsible navigation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function PageShell({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          {subtitle && <p className="mt-2 text-slate-600 text-sm">{subtitle}</p>}
        </div>
        {children}
      </main>
      <Footer />
    </div>
  )
}

function LoginPage() {
  return (
    <PageShell title="Welcome back" subtitle="Sign in to manage your campaigns and inventory.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Password</label>
              <input type="password" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                Remember me
              </label>
              <button type="button" className="text-indigo-600 hover:underline">Forgot password?</button>
            </div>
            <button type="button" className="w-full rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">Sign in</button>
          </form>
          <p className="mt-4 text-xs text-slate-600">No account? <Link to="/register/user" className="text-indigo-600 hover:underline">Create one</Link></p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold">Why sign in?</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li>Access your saved searches and bookings</li>
            <li>Manage billboard inventory and pricing</li>
            <li>Faster checkout with stored details</li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <Link to="/user" className="rounded-md border border-slate-300 px-3 py-2 text-center hover:bg-slate-50">Go to Advertiser</Link>
            <Link to="/owner" className="rounded-md bg-slate-900 px-3 py-2 text-center text-white hover:bg-slate-800">Go to Owner</Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

function RegisterUserPage() {
  return (
    <PageShell title="Create advertiser account" subtitle="Browse locations, compare pricing, and book instantly.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">First name</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Last name</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Company (optional)</label>
              <input type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Password</label>
                <input type="password" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Confirm password</label>
                <input type="password" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <button type="button" className="w-full rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">Create account</button>
          </form>
          <p className="mt-4 text-xs text-slate-600">Are you a billboard owner? <Link to="/register/owner" className="text-indigo-600 hover:underline">Register here</Link></p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold">Perks for advertisers</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li>Live availability and transparent pricing</li>
            <li>Favorites, watchlists, and saved filters</li>
            <li>Instant booking confirmation</li>
          </ul>
        </div>
      </div>
    </PageShell>
  )
}

function RegisterOwnerPage() {
  return (
    <PageShell title="Create owner account" subtitle="List your inventory, set pricing, and manage bookings.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Business name</label>
              <input type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Contact name</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Contact email</label>
                <input type="email" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Website (optional)</label>
                <input type="url" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <button type="button" className="w-full rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">Create owner account</button>
          </form>
          <p className="mt-4 text-xs text-slate-600">Registering as an advertiser? <Link to="/register/user" className="text-indigo-600 hover:underline">Go here</Link></p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold">What you get</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li>Inventory dashboard with quick edits</li>
            <li>Booking requests and calendar view</li>
            <li>Location picker to add new boards</li>
          </ul>
        </div>
      </div>
    </PageShell>
  )
}

function AdvertiserDashboard() {
  return (
    <PageShell title="Advertiser dashboard" subtitle="Search the map, compare options, and book your next campaign.">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 ring-1 ring-slate-200 flex items-center justify-center text-slate-500">
            Map placeholder
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <input className="rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="City or address" />
            <select className="rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>Any size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Billboard #{i}</h4>
                  <p className="text-xs text-slate-600">Downtown • 48x14 • LED</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">$ {250 + i * 25}/day</div>
                  <button className="mt-2 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}

function OwnerDashboard() {
  return (
    <PageShell title="Owner dashboard" subtitle="Manage inventory, pricing, and bookings.">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold">Your inventory</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Location #{i}</h4>
                      <p className="text-xs text-slate-600">Highway • 14x48 • Static</p>
                    </div>
                    <button className="rounded-md border border-slate-300 px-3 py-1.5 text-xs hover:bg-slate-50">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold">Add new location</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <input className="rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Address" />
              <input className="rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Size" />
              <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">Add</button>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold">Recent bookings</h3>
          <div className="mt-3 space-y-3">
            {[1,2].map((i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-3">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium">Campaign #{101 + i}</div>
                    <div className="text-xs text-slate-600">7 days • $1,{200 + i * 50}</div>
                  </div>
                  <button className="rounded-md border border-slate-300 px-3 py-1.5 text-xs hover:bg-slate-50">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}

function NotFound() {
  return (
    <PageShell title="Page not found" subtitle="The page you’re looking for doesn’t exist.">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-700 text-sm">Try going back to the homepage or exploring dashboards.</p>
        <div className="mt-4 flex gap-3">
          <Link to="/" className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">Home</Link>
          <Link to="/user" className="rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">Advertiser</Link>
          <Link to="/owner" className="rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">Owner</Link>
        </div>
      </div>
    </PageShell>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register/user" element={<RegisterUserPage />} />
      <Route path="/register/owner" element={<RegisterOwnerPage />} />
      <Route path="/user" element={<AdvertiserDashboard />} />
      <Route path="/owner" element={<OwnerDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
