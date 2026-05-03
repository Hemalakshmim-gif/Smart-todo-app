const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  smartFilterTasks
} = require("../controllers/taskController");

// GET all tasks
router.get("/", getTasks);

// POST new task
router.post("/", addTask);

// DELETE task
router.delete("/:id", deleteTask);

// UPDATE task (mark complete)
router.put("/:id", updateTask);

// SMART FILTER (based on mood)
router.get("/smart/:mood", smartFilterTasks);

module.exports = router;