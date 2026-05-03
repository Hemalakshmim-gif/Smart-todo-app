const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const taskRoutes = require("./routes/tasks");
const authRoutes = require("./routes/auth");

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

// Default route (for testing)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 🔥 IMPORTANT FOR DEPLOYMENT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});