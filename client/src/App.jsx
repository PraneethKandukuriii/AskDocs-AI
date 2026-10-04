import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

import ProtectedRoute from "./components/ProtectedRoute";
import ChatLayout from "./layouts/ChatLayout";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected chat interface */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/app"
          element={
            <ChatLayout>
              <Chat />
            </ChatLayout>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;