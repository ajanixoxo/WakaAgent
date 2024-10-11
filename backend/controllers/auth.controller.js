import { User } from '../models/user.models.js'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordRestEmail, sendResetSuccessEmail } from '../mailtrap/emails.js';

import bcryptjs from 'bcryptjs'
import crypto from 'crypto'
import dotenv from "dotenv"
dotenv.config()


export const signup = async (req, res) => {
    const { email, password, name, phoneNumber, country } = req.body;
    try {
        if (!email || !password || !name) {
            throw new Error("All fields are required")

        }
        const userAlreadyExists = await User.findOne({ email })
        if (userAlreadyExists) {
            return res.status(400).json({ success: false, message: "User already Exists" })
        }

        const hashedPassword = await bcryptjs.hash(password, 10)
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const user = new User({
            email,
            password: hashedPassword,
            name,
            phoneNumber,
            country,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 //24hours
        })
        await user.save();

        //jwt 
        generateTokenAndSetCookie(res, user._id)
        await sendVerificationEmail(user.email, verificationToken)
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user: {
                ...user.doc,
                password: undefined

            }
        })

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })


    }
}
export const verifyEmail = async (req, res) => {
    const { code } = req.body
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() }

        })
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired verification code" })
        }
        user.isVerified = true;
        user.verificationToken = undefined
        user.verificationTokenExpiresAT = undefined
        await user.save()

        await sendWelcomeEmail(user.email, user.name)
        res.status(200).json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        })

    } catch (error) {
        console.log(`Server Error ${error}`)
        res.status(500).json({ success: false, message: "Server error" })

    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" })
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid passoword" })
        }
        generateTokenAndSetCookie(res, user._id)

        user.lastLogin = new Date()
        await user.save()
        res.status(200).json({
            success: true, message: "login successful", user: {
                ...user._doc,
                password: undefined
            }
        })

    } catch (error) {
        console.log("Error in login", error)
        res.status(400).json({ success: false, message: error.message })

    }

}
export const forgotPassword = async (req, res) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exist" })
        }
        //Generate reset token
        const resetToken = crypto.randomBytes(26).toString("hex")
        const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000 // 1 hour


        user.resetPasswordToken = resetToken
        user.resetPasswordExpiresAt = resetTokenExpiresAt

        await user.save()

        //send email
        await sendPasswordRestEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);
        res.status(200).json({ success: true, message: "Password reset link sent to your email" })
    } catch (error) {
        console.log("Error in forgotPassword ", error)
        res.status(400).json({ success: false, message: error.message })

    }
}
export const logout = (req, res) => {
    res.clearCookie("token")
    res.status(200).json({ success: true, message: "Logged out successfully" })
}
export const resetPassword = async (req, res) => {
    try {
        const { token } = req.params
        const { password } = req.body;
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: { $gt: Date.now() },
        })
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired reset token" })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        user.password = hashedPassword
        await user.save()

        await sendResetSuccessEmail(user.email);
        res.status(200).json({ success: true, message: 'Reset Password succesfult' })
    } catch (error) {
        console.log("Error in reseting password ", error)
        res.status(400).json({ success: false, message: error.message })
    }
}
export const checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password")
        if (!user) {
            return res.status(400).json({success: false, message:"User not found"})
        }
        res.status(200).json({success: true, user })
    } catch(error) {
        console.log("Error in checkAuth", error)
        res.status(400).json({ success: false, message: error.message })

}
}