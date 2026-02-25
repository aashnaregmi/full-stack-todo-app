import { config } from "dotenv"

config({
    path: process.env.NODE_ENV === "production" ? ".env" : ".env.local",
    debug: process.env.DEBUG
})

const env = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

export const { PORT, MONGO_URI, JWT_SECRET } = env
