import mongoose from "mongoose"

const agentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    country: {
        type: "String",
        required: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    nin: {
        type: Number,
        required: true
    },
    img: {
        type: File,
        default: null
    },
    verified: {
        type: Boolean,
        default: false
    },
    operationArea: {
        type: Array,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date

}, { timestapmps: true })
export const Agent = mongoose.model('Agent', agentSchema);