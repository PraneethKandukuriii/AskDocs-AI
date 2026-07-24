const CTA = () => {
  return (
    <section
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
        py-32
      "
    >

      <div
        className="
          relative
          overflow-hidden
          w-full
          max-w-4xl
          mx-auto
          px-6
        "
      >

        {/* Glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[300px]
            bg-purple-500/20
            blur-[120px]
            rounded-full
          "
        />


        {/* Card */}
        <div
          className="
            relative
            z-10
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            py-24
            px-6
            text-center
          "
        >


          <h2
            className="
              text-5xl
              md:text-6xl
              font-normal
              tracking-tight
              leading-tight
            "
          >
            Ready to understand
            <br />
            your documents?
          </h2>



          <p
            className="
              mt-6
              text-lg
              text-zinc-400
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Start exploring your files with
            AI-powered conversations and insights.
          </p>



          <button
            className="
              mt-10
              bg-white
              text-black
              px-8
              py-3
              rounded-full
              font-medium
              hover:bg-zinc-200
              transition
            "
          >
            Start with AskDocs AI
          </button>


        </div>


      </div>


    </section>
  );
};


export default CTA;