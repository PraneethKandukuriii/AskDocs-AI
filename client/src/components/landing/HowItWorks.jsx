import {
  ArrowUpRight,
  BookOpenCheck,
  FileUp,
  MessageCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload",
    description: "Add a PDF to a fresh conversation.",
    icon: FileUp,
  },
  {
    number: "02",
    title: "Ask",
    description: "Write the question you actually have.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Understand",
    description: "Get a clear answer from the document context.",
    icon: BookOpenCheck,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="relative overflow-hidden px-5 py-32 sm:px-8 sm:py-40"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute left-[18%] top-1/2 -z-10 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-violet-500/[0.035] blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">
          {/* LEFT */}
          <div>
            <h2 className="max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-white sm:text-7xl lg:text-[6.5rem]">
              Read less.
              <br />

              <span className="bg-gradient-to-b from-zinc-100 via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
                Know more.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
              Give your document a question. AskDocs handles the distance
              between the two.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-3">
            {steps.map(
              ({ number, title, description, icon: Icon }) => (
                <div
                  key={number}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-white/[0.018] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet-300/[0.14] hover:bg-white/[0.03] sm:p-8"
                >
                  {/* Hover lighting */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/[0.02] blur-[60px] transition-all duration-700 group-hover:bg-violet-500/[0.1]" />

                  <div className="relative flex items-start gap-6">
                    {/* Icon */}
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-[#0c0c12] text-zinc-500 transition-all duration-500 group-hover:border-violet-300/[0.22] group-hover:text-violet-300">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-violet-300/50">
                        {number}
                      </span>

                      <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                        {title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-7 text-zinc-500">
                        {description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-zinc-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;