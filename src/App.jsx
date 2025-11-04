import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* Minimal pricing + FAQ anchors used by nav; content can expand in future */}
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
                  <a href="/user" className="mt-4 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Explore</a>
                </div>
                <div className="rounded-xl border border-slate-200 p-6">
                  <h3 className="font-semibold">Owners</h3>
                  <p className="mt-1 text-sm text-slate-600">List inventory and manage bookings.</p>
                  <p className="mt-3 text-3xl font-extrabold">Free</p>
                  <a href="/owner" className="mt-4 inline-flex rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50">Get started</a>
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
    </div>
  )
}

export default App
