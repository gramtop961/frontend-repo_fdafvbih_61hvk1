import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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

function Placeholder({ title, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-slate-600 text-sm">This page is set up and ready for your app logic.</p>
          <div className="mt-6">
            {children}
          </div>
          <div className="mt-8 text-sm">
            <Link to="/" className="text-indigo-600 hover:underline">← Back to home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={
          <Placeholder title="Login">
            <p className="text-slate-700 text-sm">Add your login form here.</p>
          </Placeholder>
        } />
        <Route path="/register/user" element={
          <Placeholder title="Create Advertiser Account">
            <p className="text-slate-700 text-sm">User registration screen.</p>
          </Placeholder>
        } />
        <Route path="/register/owner" element={
          <Placeholder title="Create Owner Account">
            <p className="text-slate-700 text-sm">Owner registration screen.</p>
          </Placeholder>
        } />
        <Route path="/user" element={
          <Placeholder title="Advertiser Dashboard">
            <p className="text-slate-700 text-sm">Billboard browsing, map view, and booking history will live here.</p>
          </Placeholder>
        } />
        <Route path="/owner" element={
          <Placeholder title="Owner Dashboard">
            <p className="text-slate-700 text-sm">Inventory management, bookings, and analytics will live here.</p>
          </Placeholder>
        } />
        <Route path="*" element={
          <Placeholder title="Page not found">
            <p className="text-slate-700 text-sm">The page you’re looking for doesn’t exist.</p>
          </Placeholder>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
