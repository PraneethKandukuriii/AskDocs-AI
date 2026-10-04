import { ArrowRight } from "lucide-react";


const Navbar = () => {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/30
        backdrop-blur-2xl
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          py-5
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
<div className="flex items-center gap-3">

  

  <h1
    className="
      text-white
      text-lg
      font-medium
      tracking-tight
    "
  >
    AskDocs AI
  </h1>

</div>



        {/* Navigation */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-10
            text-sm
            text-zinc-400
          "
        >

          <a
            className="
              hover:text-white
              transition
              cursor-pointer
            "
          >
            Home
          </a>


          <a
            className="
              hover:text-white
              transition
              cursor-pointer
            "
          >
            Features
          </a>


          <a
            className="
              hover:text-white
              transition
              cursor-pointer
            "
          >
            Pricing
          </a>


        </div>




        {/* Actions */}
        <div
          className="
            flex
            items-center
            gap-6
          "
        >

          <button
            className="
              hidden
              sm:block
              text-sm
              text-zinc-300
              hover:text-white
              transition
            "
          >
            Login
          </button>



          <button
            className="
              flex
              items-center
              gap-2
              bg-white
              text-black
              px-5
              py-2.5
              rounded-full
              text-sm
              font-medium
              hover:bg-zinc-200
              transition
            "
          >
            Get Started

            <ArrowRight size={15}/>

          </button>


        </div>


      </div>

    </nav>
  );
};


export default Navbar;