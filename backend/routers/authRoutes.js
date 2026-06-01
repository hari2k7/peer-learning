import express from "express";
import { forgotPassword, resetPassword } from "../controllers/authController.js";
import { rateLimiter } from "../middlewares/rateLimiter.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.post("/forgot-password", rateLimiter, asyncHandler(forgotPassword));
router.post("/reset-password/:token", rateLimiter, asyncHandler(resetPassword));
router.post("/login", rateLimiter, asyncHandler(async (req, res) => {
  res.json({ message: "Login route working" });
}));

export default router;
