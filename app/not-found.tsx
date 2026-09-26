import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 pattern-grid opacity-40" />
      <div className="container-shell relative grid min-h-[60vh] place-items-center py-20 text-center">
        <div>
          <div className="font-display text-[110px] font-extrabold leading-none text-gradient md:text-[160px]">404</div>
          <h1 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Page not found</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-600">The page you are looking for may have moved. Explore our products or head back home.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary"><Home size={16} /> Back to Home</Link>
            <Link href="/products" className="btn btn-outline">View Products <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
