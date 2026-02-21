import express from "express"

import { connectDB } from "./db/connectDB.js"

const app = express()
const PORT = process.env.PORT || 5000
await connectDB()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})