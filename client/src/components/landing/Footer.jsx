const Footer = () => {
  return (
    <footer className="px-6 pb-10 pt-7 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xl font-semibold tracking-[-0.05em] text-white">
            askdocs<span className="text-violet-300">.</span>
          </p>

          <p className="mt-2 text-sm text-zinc-600">
            Understand your documents with AI.
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs text-zinc-600">
          <span>© {new Date().getFullYear()} AskDocs</span>

          <a
            href="https://github.com/PraneethKandukuriii"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;