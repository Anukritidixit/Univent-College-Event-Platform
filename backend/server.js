require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // <--- The key to fixing the error
const userRoutes = require('./routes/userRoutes');

const app = express();

// --- THE FIX: Allow Frontend to talk to Backend ---
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3002", "http://127.0.0.1:3000", "http://127.0.0.1:3002"],
  credentials: true
}));

// Middleware to read JSON data
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Use Routes
app.use('/api/users', userRoutes);

// Connect to Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected (LOCAL)"))
  .catch(err => console.error("❌ MongoDB error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});