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
const PORT = process.env.PORT || 50560
const __dirname= path.resolve()

app.use(cors({origin: ['https://waka-agent.vercel.app' , "http://localhost:5173"], credentials:true}))
app.use(express.json())//allows us to parse incoming requesit
app.use(cookieParser())//allows us to parse incoming cookies
app.use("/api/auth", authRoutes)
app.use("/api/request", requestRoutes)
app.use ("/api/edit", editRoutes)
app.use ("/api/test", (req,res) => {
	res.send("hI")
})


if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}



app.listen(PORT  () => {
    connectDB()
    console.log(`app is listening on port ${PORT}`)
})  
