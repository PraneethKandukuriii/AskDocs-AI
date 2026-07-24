import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ChatLayout = ({ children }) => {
  return (
    <div className="h-screen bg-black text-white flex overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>

      </div>

    </div>
  );
};

export default ChatLayout;