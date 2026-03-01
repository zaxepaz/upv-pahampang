import { supabaseAdmin } from "../supabaseAdmin.js";

export const login = async (req, res) => {
 const { email, password } = req.body;
 console.log("Received:", email, password); 

  try {
   
    const { data: userData, error: userError } = await supabaseAdmin
      .from("users")        
      .select("*")
      .eq("email", email)
      .eq("password", password)   
      .single();
    console.log("Login attempt - User query result:", userData, userError);
    if (userError || !userData) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { data: adminData, error: roleError } = await supabaseAdmin
      .from("roles")
      .select("*")
      .eq("id", userData.id)  
      .eq("role", "superadmin");
    console.log("Login attempt - Role query result:", adminData, roleError);
    if (roleError || !adminData || adminData.length === 0) {
      return res.status(403).json({ message: "Not an admin" });
    }
    res.cookie("adminToken", userData.id, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000  
    });
  
    res.status(200).json({
      message: "Login successful",
      user: {
        email: userData.email,
        role: adminData[0].role,  
        full_name: userData.full_name,
      },
    });
  } catch (err) {
    console.error("Login route error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
