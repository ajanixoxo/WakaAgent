import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./DB/connect.js";
import authRoutes from "./routes/auth.route.js";
import requestRoutes from "./routes/request.matching.route.js";
import editRoutes from "./routes/edit.route.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000

// Connect to Database
connectDB();


app.use(cors({origin: ['http://localhost:5173', ['https://www.trekkingagent.com'] ], credentials:true}))
app.use(express.json())//allows us to parse incoming requesit
app.use(cookieParser())//allows us to parse incoming cookies



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/edit", editRoutes);


// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "backend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "backend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB()
  console.log(`app is listening on PORTt ${PORT}`)
})  