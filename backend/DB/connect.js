
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`conncted to mogoDB: ${conn.connection.host}`)
    }catch(error){
        console.log("Error Connection to MongoDB: ", error.message)
        process.exit(1)//failure, 0 status code is succces
    }
}