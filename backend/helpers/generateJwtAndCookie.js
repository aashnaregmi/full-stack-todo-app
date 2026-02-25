import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/env.js"

export const generateJwtAndCookie = async (userId, res) => {
    const token = jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "3d" })

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
    })
}
