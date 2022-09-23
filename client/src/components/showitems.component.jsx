import React ,{useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { fetchTodos } from '../store/todoSlice'
import './show.style.css'
const Show = () => {
    const dispatch= useDispatch() 
    const items= useSelector((state)=>state.todos.data)  //access to redux store
     console.log("err")
    useEffect(()=>{         //fetch all todos stored in Database using redux thunk
       dispatch(fetchTodos());
    },[])

  return (
    <div className='show'>
    {
        items.map((item)=>{ return <h3 className='item'>{item.todo}</h3>})
    }
    </div>
  )
}
export default Show;