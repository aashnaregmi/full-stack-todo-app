import express from "express";

import {PORT} from "./config/env.js";
import { connectDB } from "./db/connectDB.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

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