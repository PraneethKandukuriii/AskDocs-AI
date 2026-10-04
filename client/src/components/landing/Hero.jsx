import {
  ArrowRight,
  FileText,
  Search,
  Send,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "What are the three biggest findings?",
    answer:
      "The report identifies three major findings: strong enterprise demand, improving customer retention, and expansion into two emerging markets.",
    sources: ["Page 8", "Page 17", "Page 31"],
  },
  {
    question: "What is the biggest growth opportunity?",
    answer:
      "The strongest growth opportunity is enterprise expansion, supported by increasing demand and higher retention among existing customers.",
    sources: ["Page 12", "Page 24"],
  },
  {
    question: "What are the main risks?",
    answer:
      "The main risks are increasing competition, market uncertainty, and dependence on a small number of enterprise customers.",
    sources: ["Page 19", "Page 34", "Page 39"],
  },
];

const Hero = () => {
  const [activeQuestion, setActiveQuestion] = useState(questions[0]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const askQuestion = (question) => {
    const selectedQuestion =
      questions.find((item) => item.question === question) || {
        question,
        answer:
          "AskDocs analyzed the document and found the most relevant information across the indexed pages.",
        sources: ["Relevant pages"],
      };

    setActiveQuestion(selectedQuestion);
    setIsThinking(true);

    window.setTimeout(() => {
      setIsThinking(false);
    }, 700);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) {
      return;
    }

    askQuestion(trimmedInput);
    setInput("");
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsThinking(true);

      window.setTimeout(() => {
        setIsThinking(false);
      }, 600);
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative flex min-h-[820px] items-center overflow-hidden px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-28">
      {/* Cinematic ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-[-12rem] -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[160px]" />

      <div className="pointer-events-none absolute right-[-12rem] top-[25%] -z-10 h-[30rem] w-[30rem] rounded-full bg-indigo-500/[0.04] blur-[150px]" />

      <div className="mx-auto w-full max-w-[1500px]">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Hero Content */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-[4.2rem] font-semibold leading-[0.91] tracking-[-0.075em] text-white sm:text-7xl lg:text-[7.5rem]">
              Talk to
              <br />
              your
              <br />
              <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                documents.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Upload your PDFs and ask questions in plain English. AskDocs
              finds the information you need without making you search through
              every page.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/signup"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.07)] transition duration-500 hover:bg-violet-100 hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]"
              >
                <span className="relative z-10">Start asking</span>

                <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowRight size={13} />
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet-200/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <a
                href="#how"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-zinc-400 transition duration-300 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white"
              >
                See how it works

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Interactive Product Visualization */}
          <div className="relative mx-auto w-full max-w-[1100px] min-w-0">
            {/* Cinematic glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[75%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[100px]" />

            {/* Perfect rectangular application */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#09090e] shadow-[0_40px_100px_rgba(0,0,0,0.65)]">
              {/* Top reflection */}
              <div className="pointer-events-none absolute inset-x-10 top-0 z-30 h-px bg-gradient-to-r from-transparent via-white/[0.2] to-transparent" />

              {/* Browser header */}
              <div className="relative flex h-11 items-center border-b border-white/[0.055] px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/[0.13]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/[0.09]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
                </div>

                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-[10px] text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
                  AskDocs
                </div>
              </div>

              {/* Application body */}
              <div className="grid h-[calc(100%-44px)] min-h-0 grid-cols-[34%_66%]">
                {/* Document panel */}
                <aside className="min-w-0 border-r border-white/[0.055] bg-white/[0.008] p-4 sm:p-5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-violet-400/10 bg-violet-400/[0.07] text-violet-300">
                      <FileText size={14} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-medium text-zinc-200">
                        Market Analysis.pdf
                      </p>

                      <p className="mt-0.5 text-[8px] text-zinc-600">
                        48 pages
                      </p>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-2.5 py-2">
                    <Search size={10} className="shrink-0 text-zinc-600" />

                    <span className="truncate text-[8px] text-zinc-700">
                      Search document
                    </span>
                  </div>

                  {/* Contents */}
                  <div className="mt-5">
                    <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-zinc-700">
                      Contents
                    </p>

                    <div className="mt-2 space-y-1">
                      {[
                        "Executive Summary",
                        "Market Overview",
                        "Growth Analysis",
                        "Customer Insights",
                        "Competitive Landscape",
                      ].map((item, index) => (
                        <button
                          key={item}
                          type="button"
                          className={`w-full rounded-md px-2.5 py-2 text-left text-[8px] transition ${
                            index === 0
                              ? "border border-violet-400/[0.08] bg-violet-400/[0.06] text-zinc-300"
                              : "text-zinc-600 hover:bg-white/[0.025] hover:text-zinc-400"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Document status */}
                  <div className="mt-5 border-t border-white/[0.05] pt-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[8px] text-zinc-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.5)]" />
                        Indexed
                      </span>

                      <span className="text-[8px] text-zinc-700">
                        48 / 48
                      </span>
                    </div>

                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-500/60 to-violet-300/30" />
                    </div>
                  </div>
                </aside>

                {/* Chat */}
                <main className="flex min-w-0 flex-col bg-[#09090e] p-4 sm:p-5">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.16em] text-zinc-700">
                        Conversation
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-zinc-300">
                        Market Analysis
                      </p>
                    </div>

                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-2 py-1 text-[7px] text-emerald-400/80">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      Ready
                    </span>
                  </div>

                  {/* Conversation */}
                  <div className="min-h-0 flex-1 overflow-hidden pt-4">
                    {/* User question */}
                    <div className="ml-auto max-w-[82%] rounded-xl rounded-br-sm border border-violet-400/10 bg-violet-500/[0.13] px-3 py-2.5 text-[8px] leading-4 text-zinc-300">
                      {activeQuestion.question}
                    </div>

                    {/* AI response */}
                    <div className="mt-3 max-w-[94%] rounded-xl rounded-bl-sm border border-white/[0.065] bg-white/[0.018] p-3">
                      <div className="flex items-center gap-1.5 text-[8px] font-medium text-violet-300">
                        <Sparkles size={9} />
                        AskDocs
                      </div>

                      {isThinking ? (
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="h-1 w-1 animate-pulse rounded-full bg-violet-400/70" />
                          <span className="h-1 w-1 animate-pulse rounded-full bg-violet-400/50 [animation-delay:150ms]" />
                          <span className="h-1 w-1 animate-pulse rounded-full bg-violet-400/30 [animation-delay:300ms]" />
                        </div>
                      ) : (
                        <>
                          <p className="mt-2 text-[8px] leading-4 text-zinc-400">
                            {activeQuestion.answer}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-1">
                            {activeQuestion.sources.map((source) => (
                              <span
                                key={source}
                                className="rounded-md border border-white/[0.05] bg-white/[0.02] px-1.5 py-1 text-[7px] text-zinc-600"
                              >
                                {source}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Suggested questions */}
                    <div className="mt-4">
                      <p className="mb-2 text-[7px] uppercase tracking-[0.14em] text-zinc-700">
                        Suggested
                      </p>

                      <div className="space-y-1.5">
                        {questions.slice(1).map((item) => (
                          <button
                            key={item.question}
                            type="button"
                            onClick={() => askQuestion(item.question)}
                            className="block max-w-full truncate rounded-lg border border-white/[0.05] bg-white/[0.015] px-2.5 py-2 text-left text-[7px] text-zinc-600 transition hover:border-violet-400/10 hover:bg-violet-400/[0.04] hover:text-zinc-400"
                          >
                            {item.question}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <form
                    onSubmit={handleSubmit}
                    className="mt-3 flex shrink-0 items-center gap-2 rounded-lg border border-white/[0.065] bg-white/[0.018] px-2.5 py-2 transition focus-within:border-violet-400/20"
                  >
                    <input
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      placeholder="Ask a question..."
                      className="min-w-0 flex-1 bg-transparent text-[8px] text-zinc-300 outline-none placeholder:text-zinc-700"
                    />

                    <button
                      type="submit"
                      disabled={!input.trim()}
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-violet-400/[0.1] text-violet-300 transition hover:bg-violet-400/[0.17] disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label="Send question"
                    >
                      <Send size={10} />
                    </button>
                  </form>
                </main>
              </div>

              {/* Bottom reflection */}
              <div className="pointer-events-none absolute inset-x-16 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;