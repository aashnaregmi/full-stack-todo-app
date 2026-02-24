import bcrypt from "bcryptjs"
import User from "../models/user.js"
import { generateJwtAndCookie } from "../helpers/generateJwtAndCookie.js";

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ username, email, password: hashedPassword })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User Signup failed"
            })
        }

        generateJwtAndCookie(user.id)

        return res.status(201).json({
            success: true,
            message: "User Signup successful",
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            msg: error.message
        })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const existingUser = await User.findOne({ email })
        const hashedPassword = await bcrypt.hash(password, 10)
        const passwordMatch = await bcrypt.compare(password, hashedPassword)
        if (!existingUser || !passwordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials."
            })
        }

        return res.status(201).json({
            success: true,
            message: "User login successful",
            data: {
                id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            msg: error.message
        })
    }
}
