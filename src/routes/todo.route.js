const { Router } = require("express");
const {
  getTodo,
  getTodo,
  postTodo,
  putTodo,
  deleteTodo,
} = require("../controllers/todo.controller");
const route = Router();

route.get("/todo", getTodo);
route.get("/todo/:id", getTodo);
route.put("/todo/:id", putTodo);
route.delete("/todo/:id", deleteTodo);
route.post("/todo", postTodo);

module.exports = route;
