import express from "express";
import {createNotification} from "../controllers/notification.controller.js";

const router = express.Router();

// API Endpoints
router.post("/", createNotification);

export default router;
