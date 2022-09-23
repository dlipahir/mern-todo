const express =require('express')
const { httpGetTodos,httpSetTodos} =require('./todo.controller')

const todoRouter = express.Router();

todoRouter.get('/',httpGetTodos);
todoRouter.post('/',httpSetTodos);

module.exports = todoRouter;

