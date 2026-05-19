import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-black text-gold-light">404</h1>
      <p className="text-xl text-slate-300 mt-4 mb-8">
        Page not found
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gold text-slate-900 font-bold hover:bg-gold/80 transition-colors"
      >
        Back to Home
      </Link>
    </main>
  );
}
