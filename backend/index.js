import loginRoutes from "./routes/login.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Worldd");
});

// log in route
app.use("/api", loginRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});