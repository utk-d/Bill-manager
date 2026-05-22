import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-lg font-semibold">Bill Management App</h1>
        <a
          href="https://github.com/your-repo"
          target="_blank"
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          GitHub
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium text-blue-600">
            Internal Bill Search Portal
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">
            Find bills instantly, without opening Tally every time.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Search invoices by client name, destination, item name, bill date range,
            and bill value range — all from one clean internal dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-white"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <span>Search by client</span>
            <span>Search by item</span>
            <span>Filter by date and value</span>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-700">Quick Preview</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
                Pinnacle Industries
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
                Parapac 310 Transport Ventilator
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
                20-May-26  - 20-May-26
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
                2,10,000 INR - 5,25,000 INR
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}