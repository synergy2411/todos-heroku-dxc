const express = require("express");
const { getAllTodos, getSingleTodo, createTodo, updateTodo, deleteTodo } = require("../controller/todo.controller")

const TodoRouter = express.Router();

// http://localhost:9090/todos
TodoRouter.route("/")
    .get(getAllTodos)
    .post(createTodo)
TodoRouter.route("/:id")
    .get(getSingleTodo)
    .patch(updateTodo)
    .delete(deleteTodo)

module.exports = { 
    TodoRouter
}