import express from "express";
import { supabaseAdmin } from "../supabaseAdmin.js";

const router = express.Router();

router.get("/announcements", async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from("announcements")
      .select("*");   
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
    console.log("Fetched announcements:", data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;