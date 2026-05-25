import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">
        <section className="grid w-full gap-10 rounded-[32px] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.12)] backdrop-blur xl:grid-cols-[1.15fr_0.85fr] xl:p-10">
          
          <div className="flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-slate-50 to-slate-100 p-8">
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-700">
                Bill Management App
              </p>

              <h1 className="mt-10 max-w-xl text-5xl font-semibold leading-tight tracking-tight text-slate-950">
                Search invoices without opening Tally every time.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Search invoices by client name, destination, item name, bill date range,
                and bill value range — all from one clean internal dashboard built for your team.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Search by client</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Search by item</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Filter by date and value</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)]">
              <div className="rounded-[24px] bg-slate-50 p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                    Login
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Continue with your work account to access the internal bill search dashboard.
                  </p>
                </div>

                <div className="space-y-4">
                  <button className="flex h-14 w-full items-center justify-center rounded-2xl bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-slate-800">
                    Login with Google
                  </button>

                  <button className="flex h-14 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                    Login with GitHub
                  </button>
                </div>

                <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                  Secure sign-in for internal team access.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}