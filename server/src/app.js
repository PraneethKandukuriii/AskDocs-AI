
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

import documentRoutes from "./routes/documentRoutes.js";  



const app = express();

app.use(cors());
app.use(express.json());  

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AskDocs AI Backend Running 🚀",
  });
});

app.use("/api/auth", authRoutes );
app.use("/api/documents", documentRoutes);


export default app;