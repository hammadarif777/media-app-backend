// index.js
import express from "express";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";

// Load environment variables early
dotenv.config();

const app = express();

// Constants should be uppercase for clarity
const PORT = process.env.PORT || 3001;

// Middleware (optional, can be expanded later)
app.use(express.json()); // For parsing JSON requests

// Async function to initialize app
const startServer = async () => {
  try {
    // Wait for DB connection before starting server
    await connectDB();
    // Start server only after DB is connected
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // Exit if server fails to start
  }
};

// Start the server
startServer();
