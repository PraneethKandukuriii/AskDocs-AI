import {
  ArrowUpRight,
  FileSearch,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: FileSearch,
    title: "Find the useful part",
    description:
      "Move from a question to the relevant idea without searching through page after page.",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Keep the context",
    description:
      "Continue the conversation naturally. Ask follow-ups without losing what came before.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Stay grounded",
    description:
      "Keep answers tied to the document so the information stays connected to its source.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-5 py-32 sm:px-8 sm:py-40"
    >
      {/* Cinematic ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[55rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.035] blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-7xl lg:text-[6rem]">
            Turn every document
            <br />
            <span className="bg-gradient-to-b from-zinc-200 via-zinc-500 to-zinc-700 bg-clip-text text-transparent">
              into understanding.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
            Everything AskDocs does is designed to help you find information
            faster, keep the right context, and trust the answers you get.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {features.map(
            ({ number, icon: Icon, title, description }) => (
              <article
                key={number}
                className="group relative min-h-[390px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0a0f] p-7 transition duration-700 hover:-translate-y-1 hover:border-violet-300/[0.16] sm:p-9"
              >
                {/* Ambient card glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/[0.025] blur-[90px] transition duration-700 group-hover:bg-violet-500/[0.1]" />

                {/* Background number */}
                <span className="pointer-events-none absolute -right-5 top-[-1.5rem] text-[11rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.018] transition duration-700 group-hover:text-violet-300/[0.035]">
                  {number}
                </span>

                {/* Top row */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-700">
                    {number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-zinc-700 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                  />
                </div>

                {/* Icon */}
                <div className="relative z-10 mt-16">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/[0.08] bg-white/[0.025] text-violet-300 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-500 group-hover:border-violet-300/[0.2] group-hover:bg-violet-400/[0.07]">
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />

                    <span className="absolute -inset-2 -z-10 rounded-2xl bg-violet-500/[0.05] blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Feature content */}
                <div className="relative z-10 mt-10">
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
                    {title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
                    {description}
                  </p>
                </div>

                {/* Bottom cinematic line */}
                <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition duration-700 group-hover:via-violet-400/[0.35]" />

                {/* Bottom glow */}
                <div className="pointer-events-none absolute bottom-[-5rem] left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-violet-500/[0.04] blur-[60px] opacity-0 transition duration-700 group-hover:opacity-100" />
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;