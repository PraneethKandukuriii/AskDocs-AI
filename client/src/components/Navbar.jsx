import { UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <header className="
      h-16
      border-b
      border-white/10
      flex
      items-center
      justify-between
      px-6
    ">

      {/* App Name */}
      <div className="text-sm text-zinc-400">
        AskDocs AI
      </div>


      {/* Profile */}
      <button>
        <UserCircle 
          size={28}
          className="text-zinc-400 hover:text-white transition"
        />
      </button>


    </header>
  );
};

export default Navbar;