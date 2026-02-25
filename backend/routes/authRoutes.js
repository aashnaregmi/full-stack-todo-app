import express from "express"

import { signup, login } from "../controllers/authControllers.js"
import { verifyJwt } from "../middleware/verifyJwt.js"

const authRouter = express.Router()

authRouter.post("/signup", signup)
authRouter.post("/login", login)
authRouter.post("/test", verifyJwt, () => {
    return res.status(200).json({
        success: true,
        message: "jwt verified successfully",
        data: req.userId
    })
})

export default authRouter
