import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/env.js"


export const verifyJwt = async (req, res, next) => {
    const token = req.cookie.token
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not authorized, token missing"
        })
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Not authorized, Invalid token"
            })
        }

        req.userId = decoded.id
        next()

    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Not authorized, token failed"
        })
    }
}









