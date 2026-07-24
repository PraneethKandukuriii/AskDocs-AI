import {
  FileText,
  MessageSquare,
  Brain,
  ArrowUpRight
} from "lucide-react";


const Features = () => {

  const features = [
    {
      icon: FileText,
      title: "Understand Documents",
      description:
        "Transform complex PDFs, research papers, and files into clear summaries instantly.",
    },

    {
      icon: MessageSquare,
      title: "Chat With Your Files",
      description:
        "Ask questions naturally and get accurate answers from your documents.",
    },

    {
      icon: Brain,
      title: "Discover Insights",
      description:
        "Extract important information and uncover hidden knowledge with AI.",
    },
  ];


  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        bg-black
        text-white
        py-32
      "
    >

      <div
        className="
          w-full
          max-w-6xl
          mx-auto
          px-6
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
            Everything you need
            <br />
            to understand documents
          </h2>


          <p
            className="
              mt-6
              text-zinc-400
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Powerful AI capabilities that help you
            read, analyze, and interact with your knowledge.
          </p>


        </div>





        {/* Cards */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >


          {
            features.map((feature, index) => {

              const Icon = feature.icon;


              return (

                <div
                  key={index}
                  className="
                    group
                    relative
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    p-8
                    overflow-hidden
                    transition
                    hover:bg-white/[0.08]
                  "
                >


                  {/* Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-white/10
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  />



                  <div
                    className="
                      relative
                      z-10
                    "
                  >


                    {/* Icon */}
                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-white
                        flex
                        items-center
                        justify-center
                        mb-8
                      "
                    >

                      <Icon
                        size={22}
                        className="text-black"
                      />

                    </div>





                    <h3
                      className="
                        text-2xl
                        font-medium
                        tracking-tight
                      "
                    >
                      {feature.title}
                    </h3>



                    <p
                      className="
                        mt-4
                        text-zinc-400
                        leading-relaxed
                      "
                    >
                      {feature.description}
                    </p>



                    <div
                      className="
                        mt-8
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-zinc-300
                        opacity-0
                        group-hover:opacity-100
                        transition
                      "
                    >

                      Learn more

                      <ArrowUpRight size={15}/>

                    </div>



                  </div>


                </div>

              );

            })
          }


        </div>


      </div>


    </section>
  );
};


export default Features;