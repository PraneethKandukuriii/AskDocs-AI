import {
  FileText,
  Sparkles
} from "lucide-react";


const HowItWorks = () => {
  return (
    <section
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        py-32
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          w-full
        "
      >


        {/* Heading */}
        <div
          className="
            text-center
            mb-20
          "
        >

          <h2
            className="
              text-5xl
              md:text-6xl
              font-normal
              tracking-tight
            "
          >
            How it works.
            <br />
            Simple. Intelligent. Powerful.
          </h2>


          <p
            className="
              mt-6
              text-lg
              text-zinc-400
            "
          >
            Upload your documents, let AI understand them,
            and get meaningful answers instantly.
          </p>

        </div>




        {/* AI Window */}
        <div
          className="
            max-w-4xl
            mx-auto
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-6
          "
        >

          <div
            className="
              rounded-2xl
              bg-[#0b0b0b]
              border
              border-white/10
              overflow-hidden
            "
          >


            {/* Document Header */}
            <div
              className="
                flex
                items-center
                gap-3
                px-6
                py-4
                border-b
                border-white/10
              "
            >

              <FileText size={20}/>

              <span
                className="
                  text-sm
                  text-zinc-300
                "
              >
                Upload Document.pdf
              </span>

            </div>




            {/* Conversation */}
            <div
              className="
                p-8
                space-y-6
              "
            >


              {/* Step 1 */}
              <div
                className="
                  flex
                  justify-end
                "
              >

                <div
                  className="
                    bg-white
                    text-black
                    px-5
                    py-3
                    rounded-2xl
                    max-w-md
                  "
                >
                  Ask questions about your document
                </div>

              </div>




              {/* Step 2 */}
              <div
                className="
                  flex
                  gap-4
                "
              >

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Sparkles
                    size={20}
                    className="text-black"
                  />

                </div>



                <div
                  className="
                    bg-white/[0.08]
                    border
                    border-white/10
                    px-5
                    py-4
                    rounded-2xl
                    max-w-xl
                    text-zinc-300
                    leading-relaxed
                  "
                >

                  AI understands your document context
                  and provides accurate answers
                  based on your knowledge.

                </div>


              </div>



            </div>


          </div>


        </div>


      </div>


    </section>
  );
};


export default HowItWorks;