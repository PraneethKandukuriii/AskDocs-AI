import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const username = user?.name || "User";

  const handleLogout = () => {
    logout();
    localStorage.removeItem("conversationId");
    navigate("/login", { replace: true });
  };

  return (
    <header className="flex h-16 items-center justify-end bg-black px-6">

      {/* Profile */}
      <div className="flex items-center gap-3">

        {/* User Initial Logo */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
          {username
            .split(" ")
            .map((name) => name[0])
            .join("")
            .slice(0, 2)}
        </div>

        {/* Logout */}
        <button
          className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
          title="Logout"
          onClick={handleLogout}
        >
          <LogOut size={18} />
        </button>

      </div>

    </header>
  );
};

export default Navbar;
