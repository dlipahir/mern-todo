import {createSlice} from "@reduxjs/toolkit";

const STATUS =Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
});

const todoSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUS.IDLE
    },
    reducers:{
           setTodos(state,action){
              state.data=action.payload;
           },
           setStatus(state,action){
              state.status=action.payload;
           },
           addTodo(state,action){
              state.data.push(action.payload);
           }

    }
});


export const {setTodos,setStatus,addTodo} = todoSlice.actions;
export default todoSlice.reducer;

//thunks
export function fetchTodos(){
    return async function fetchTodosThunk(dispatch,getState){
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch('/todo')
            const data = await res.json();
            console.log(data);
            dispatch(setTodos(data));
            dispatch(setStatus(STATUS.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}
