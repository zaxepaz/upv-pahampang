import express from "express";
import { supabaseAdmin } from "../supabaseAdmin.js";

const router = express.Router();

router.get("/announcements", async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from("announcements")
      .select("*")
      .order("updated_at", { ascending: false });
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
    console.log("Fetched announcements:", data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/announcements", async (req, res) => {
  try {
    const { title, content, category, created_at, author, status } = req.body;

    const { data, error } = await supabaseAdmin
      .from("announcements")
      .insert([{ title, content, category, created_at, author, status }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    console.error("Unexpected backend error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/announcements/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Deleting id:", id); 

  const { error } = await supabaseAdmin
    .from("announcements")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Supabase error:", error); 
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Deleted successfully" });
});


router.put("/announcements/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, created_at, author, status } = req.body;

    console.log("Editing announcement id:", id);
    const { data, error } = await supabaseAdmin
      .from("announcements")
      .update({ 
        title, content, category, created_at, author, status,
        updated_at: new Date().toISOString() 
      })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase update error:", error);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("Unexpected backend error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;