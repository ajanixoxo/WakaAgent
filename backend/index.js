// This is just for reference - modify your existing index.js file
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"

import { connectDB } from "./DB/connect.js"
import authRoutes from "./routes/auth.route.js"
import requestRoutes from "./routes/request.matching.route.js"
import editRoutes from "./routes/edit.route.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// ES modules don't have __dirname, so we need to create it
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, "..")

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
  app.use(express.static(path.join(rootDir, "/frontend/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(rootDir, "frontend", "dist", "index.html"))
  })
}

// For Vercel deployment, we need to export the app
export default app

// Only start the server if this file is run directly
if (import.meta.url.startsWith("file:")) {
  const modulePath = fileURLToPath(import.meta.url)
  if (process.argv[1] === modulePath) {
    app.listen(PORT, () => {
      connectDB()
      console.log(`app is listening on port ${PORT}`)
    })
  }
}

