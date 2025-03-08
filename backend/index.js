// This is just for reference - you already have this file
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"

import { connectDB } from "./DB/connect.js"
import authRoutes from "./routes/auth.route.js"
import requestRoutes from "./routes/request.matching.route.js"
import editRoutes from "./routes/edit.route.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

// Update CORS to allow both your production domain and localhost for development
app.use(
  cors({
    origin: ["https://waka-agent.vercel.app", "http://localhost:3000"],
    credentials: true,
  }),
)
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/request", requestRoutes)
app.use("/api/edit", editRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}

// For Vercel deployment, we need to export the app
export default app

// Only start the server if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT || 5000, () => {
    connectDB()
    console.log(`app is listening on port ${PORT}`)
  })
}

