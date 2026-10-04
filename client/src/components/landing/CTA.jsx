import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0a0a0f] px-6 py-14 text-center sm:px-10 sm:py-16">
          {/* Cinematic glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.045] blur-[110px]" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-violet-300/80">
            Your next document is waiting
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[0.92] tracking-[-0.065em] text-white sm:text-5xl md:text-6xl lg:text-[5rem]">
            Spend less time searching.
            <br />
            <span className="bg-gradient-to-b from-zinc-200 via-zinc-500 to-zinc-700 bg-clip-text text-transparent">
              Start understanding.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
            Give AskDocs your next PDF and make the conversation useful from
            the first question.
          </p>

          <div className="mt-7 flex justify-center">
            <Link
              to="/signup"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-100"
            >
              Create your workspace

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>

        {/* ONE divider */}
        <div className="mt-12 h-px w-full bg-white/[0.10]" />
      </div>
    </section>
  );
};

export default CTA;