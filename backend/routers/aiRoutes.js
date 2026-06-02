import express from "express";

import {
  askAI,
  generateSessionSummary,
} from "../controllers/aiController.js";

import { requireAuth } from "../middlewares/requireAuth.js";
import { rateLimiter } from "../middlewares/rateLimiter.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

// SECURITY: Tighter body limit for AI routes (50KB) since these endpoints
// have well-defined, smaller input requirements than the global 100KB cap.
const aiBodyLimit = express.json({ limit: "50kb" });

router.post("/ask", aiBodyLimit, requireAuth, rateLimiter, asyncHandler(askAI));
router.post("/generate-summary", aiBodyLimit, requireAuth, rateLimiter, asyncHandler(generateSessionSummary));

export default router;
