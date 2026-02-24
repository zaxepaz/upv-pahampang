import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // 1. Authenticate with Supabase
  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // 2. Check admin role in DB
  const { data: adminData, error: roleError } = await supabase
    .from("admin_roles")
    .select("*")
    .eq("id", user.user.id)
    .single();

  if (roleError || !adminData) {
    return res.status(403).json({ message: "Not an admin" });
  }

  res.status(200).json({
    message: "Login successful",
    user: { email: user.user.email, role: adminData.role },
  });
});

export default router;