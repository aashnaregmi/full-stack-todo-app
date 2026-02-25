import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { PORT } from "./config/env.js";
import { connectDB } from "./db/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import { notFound } from "./middleware/notFoundMiddleware.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:5173" }))

// routes
app.use("/api/auth", authRouter)

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date(),
    });
});

app.use(notFound)

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running in http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Error starting Database:", error.message);
        process.exit(1)
    }
};

startServer();
