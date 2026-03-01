import authRotes from "./routes/authRotes.js";
import announcementRoutes from "./routes/announcementsRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

  
dotenv.config(); 

const app = express();

app.use(cors({origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// log in route
app.use("/api", authRotes);
app.use("/api/announcements", announcementRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});