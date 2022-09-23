const {insertTodo,getTodos} = require('../../model/todo/todo.model')
const httpGetTodos=async (req,res)=>{
  const todos = await getTodos();
  res.status(200).json(todos);

}
const httpSetTodos = async (req,res)=>{
    const todo = req.body; 
     await insertTodo(todo);
     res.status(200).json(todo);

}
 
module.exports ={
    httpGetTodos,
    httpSetTodos
}