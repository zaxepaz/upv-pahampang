import express from "express";
import { isAuthenticated } from "../middleware/authMiddleware.js";
import { createAnnouncement, getAnnouncements, updateAnnouncement, deleteAnnouncement } from "../controllers/announcementController.js";

const router = express.Router();

router.get("/", isAuthenticated, getAnnouncements);
router.post("/", isAuthenticated, createAnnouncement);
router.put("/:id", isAuthenticated, updateAnnouncement);
router.delete("/:id", isAuthenticated, deleteAnnouncement);

export default router;
