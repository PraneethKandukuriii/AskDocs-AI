import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/authController.js";

import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", registerValidator, registerUser);
router.post("/login", loginValidator, loginUser);

// Private Routes
router.get("/profile", authMiddleware, getCurrentUser);

export default router;