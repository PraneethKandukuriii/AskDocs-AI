import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";

import ChatLayout from "../layouts/ChatLayout";


const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Landing />}
        />

        <Route 
          path="/login" 
          element={<Login />}
        />

        <Route 
          path="/register" 
          element={<Register />}
        />

        <Route
          path="/app"
          element={
            <ChatLayout>
              <Chat />
            </ChatLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
};


export default AppRoutes;