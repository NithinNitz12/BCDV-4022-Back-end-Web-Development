const express = require("express");
const router = express.Router();

const tasks = [];
let taskIdCounter = 1;
// Middleware to log incoming requests
router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//  GET endpoint
router.get("/", (req, res) => {
  res.json(tasks);
});

//  POST endpoint
router.post("/", (req, res) => {
  const { title, description } = req.body;
  const task = { id: taskIdCounter++, title, description };
  tasks.push(task);
  res.status(201).json(task);
});

// PUT endpoint
router.put("/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  const { title, description } = req.body;

  const taskToUpdate = tasks.find((task) => task.id === parseInt(taskId));

  taskToUpdate.title = title;
  taskToUpdate.description = description;

  // console.log(taskId);
  res.json(taskToUpdate);
});

// DELETE endpoint
router.delete("/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  const taskToDelete = tasks.find((task) => task.id === parseInt(taskId));

  tasks.splice(taskToDelete, 1);
  res.json("Task Deleted!!!")
});

module.exports = router;
