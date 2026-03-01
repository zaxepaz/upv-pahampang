import { supabaseAdmin } from "../supabaseAdmin.js";

export const getAnnouncements = async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from("announcements")
      .select("*")
      .order("created_at", { ascending: false });   

    if (error) {
      return res.status(400).json({ error: error.message });
    }
    res.status(200).json(data);
    } catch (err) {
    res.status(500).json({ message: "Server error" });
    }
};

export const createAnnouncement = async (req, res) => {
  try {
    const { title, content, category, created_at, author, status } = req.body; 

    const { data, error } = await supabaseAdmin
      .from("announcements")
      .insert([{ title, content, category, created_at, author, status }]);  

    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(201).json(data);
} catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, created_at, author, status } = req.body;

    const { data, error } = await supabaseAdmin
      .from("announcements")
      .update({ title, content, category, created_at, author, status, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabaseAdmin
      .from("announcements")
      .delete()
      .eq("id", id);

    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};