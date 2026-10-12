import "dotenv/config";

import express from "express";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";


const PORT = process.env.PORT || 5001;


app.use(
  "/uploads",
  express.static("uploads")
);


await connectDB();


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});