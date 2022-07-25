import { logEntry } from "../controllers/analyticsController.js";
import express from "express";
const analyticsRouter = express.Router();

analyticsRouter.get("/logEntry", logEntry);

export { analyticsRouter };
