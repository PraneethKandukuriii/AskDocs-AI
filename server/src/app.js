import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";
import chatRoutes from "./routes/chat.js";
import conversationRoutes from "./routes/conversationRoutes.js";


const app = express();


app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AskDocs AI Backend Running 🚀",
  });
});


app.use("/api/auth", authRoutes);

app.use("/api/documents", documentRoutes);
app.use("/api/chat", chatRoutes);

app.use(
"/api/conversations",
conversationRoutes
);


export default app;
