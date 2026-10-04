import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        pt-24
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[500px]
          bg-gradient-to-r
          from-purple-600/30
          via-blue-500/20
          to-pink-500/20
          blur-[120px]
          rounded-full
        "
      />


      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-6
          text-center
        "
      >

        {/* Heading */}
       <h1
  className="
    text-6xl
    md:text-8xl
    font-normal
    tracking-tight
    leading-[1.05]
    max-w-6xl
    mx-auto
    text-white
  "
>
  Understand Your
  <br />
  Documents With AI
</h1>


        {/* Description */}
        <p
  className="
    mt-8
    max-w-3xl
    mx-auto
    text-xl
    md:text-2xl
    font-normal
    leading-relaxed
    text-white
  "
>
  Transform your documents into conversations.
  <br />
  Discover insights with intelligent AI assistance.
</p>


        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            justify-center
            gap-4
            flex-wrap
          "
        >

          <button
            className="
              flex
              items-center
              gap-2
              bg-white
              text-black
              px-7
              py-3
              rounded-full
              font-medium
              hover:bg-zinc-200
              transition
            "
          >
            Get Started
            <ArrowRight size={18} />
          </button>


          

        </div>

      </div>

    </section>
  );
};

export default Hero;