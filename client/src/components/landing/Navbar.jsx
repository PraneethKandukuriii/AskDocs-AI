import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="relative z-50 px-5 pt-6 sm:px-8">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.035] px-5 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        {/* Wordmark */}
        <Link
          to="/"
          className="text-[16px] font-semibold tracking-[-0.05em] text-white transition hover:text-violet-200"
        >
          askdocs<span className="text-violet-300">.</span>
        </Link>

        {/* Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-white/[0.06] bg-black/20 p-1 md:flex">
          <a
            href="#features"
            className="rounded-full px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            Features
          </a>

          <a
            href="#how"
            className="rounded-full px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            How it works
          </a>

          <a
            href="#preview"
            className="rounded-full px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            Preview
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.05] hover:text-white sm:block"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition duration-300 hover:bg-violet-200"
          >
            Get started

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowUpRight size={12} />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;