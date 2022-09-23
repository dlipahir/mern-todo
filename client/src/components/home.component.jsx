import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import './home.style.css'


const Home = () => {
    const dispatch = useDispatch();
    const [text,setText]=useState('')

    const handleClick=async()=>{
        if(!text.trim().length) return;  // if blank or space

        const todoItem = {todo:text};

        dispatch(addTodo(todoItem));    //add to redux

        setText("");                   //set text to empty so input also

        const options = {
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(todoItem)
        }
        await fetch('/todo',options);     //send data to backend for store in mongoDb
        
    }


  return (
    <div className='home'>
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
    <div className="add" onClick={handleClick}>add</div> 
    </div>
  )
}

export default Home;