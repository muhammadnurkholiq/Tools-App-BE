const express = require("express");

const router = express.Router();

// controllers
const {
  addTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

// route
router.post("/todos", addTodo);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodo);
router.patch("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
