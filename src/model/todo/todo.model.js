const todoDB = require('./todo.mongo');

const insertTodo= async (doc)=>{
    try{
        console.log(doc)
        const result = await todoDB.create(doc);
        console.log(`A document was inserted with the _id: ${result._id}`);  
    }
    catch(err){
        console.log(`Error occured: ${err}`);
    }
}

const getTodos = async()=>{
    try{
        const Todos = await todoDB.find({},{'__v':0,'_id':0});
        return Todos;
    }
    catch(err){
        console.log(`Error occured: ${err}`);
    }
}
module.exports ={
    insertTodo,
    getTodos
}
