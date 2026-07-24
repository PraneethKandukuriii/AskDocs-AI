import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer
      className="
        bg-black
        text-white
        border-t
        border-white/10
        py-16
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* Main Footer */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            gap-12
          "
        >

          {/* Brand */}
          <div>

            <h2
              className="
                text-lg
                font-medium
                tracking-tight
                text-white
              "
            >
              AskDocs AI
            </h2>


            <p
              className="
                mt-5
                max-w-sm
                text-zinc-400
                leading-relaxed
              "
            >
              Understand your documents,
              discover insights, and chat
              with your knowledge using AI.
            </p>

          </div>




          {/* Links */}
          <div
            className="
              flex
              gap-16
            "
          >

            {/* Product */}
            <div>

              <h3
                className="
                  text-sm
                  text-zinc-500
                  mb-5
                "
              >
                Product
              </h3>


              <ul
                className="
                  space-y-3
                  text-sm
                  text-zinc-300
                "
              >
                <li className="hover:text-white transition">
                  Features
                </li>

                <li className="hover:text-white transition">
                  How it works
                </li>

                <li className="hover:text-white transition">
                  Pricing
                </li>
              </ul>

            </div>




            {/* Company */}
            <div>

              <h3
                className="
                  text-sm
                  text-zinc-500
                  mb-5
                "
              >
                Company
              </h3>


              <ul
                className="
                  space-y-3
                  text-sm
                  text-zinc-300
                "
              >
                <li className="hover:text-white transition">
                  About
                </li>

                <li className="hover:text-white transition">
                  Contact
                </li>

                <li className="hover:text-white transition">
                  Privacy
                </li>
              </ul>

            </div>


          </div>


        </div>





        {/* Bottom */}
        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-5
          "
        >

          <p
            className="
              text-sm
              text-zinc-500
            "
          >
            © 2026 AskDocs AI. All rights reserved.
          </p>



          <p
            className="
              text-sm
              text-zinc-400
            "
          >
            Built By{" "}
            <span className="text-white">
              Praneeth Kandukuri
            </span>
          </p>




          {/* Social Icons */}
          <div
            className="
              flex
              gap-5
              text-zinc-400
            "
          >

            <FaGithub
              size={18}
              className="
                hover:text-white
                transition
                cursor-pointer
              "
            />

            <FaTwitter
              size={18}
              className="
                hover:text-white
                transition
                cursor-pointer
              "
            />

            <FaLinkedin
              size={18}
              className="
                hover:text-white
                transition
                cursor-pointer
              "
            />

          </div>


        </div>


      </div>


    </footer>
  );
};


export default Footer;