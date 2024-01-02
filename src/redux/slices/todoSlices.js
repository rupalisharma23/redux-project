import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   todo:[{id:1,task:'redux'}]  // jab hum useSelector use krte hai to hum ye wala name use karte hai state=>state.todo
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo : (state,action) =>{
            const arrayOfTodo = state.todo
            const temp = {id:arrayOfTodo[arrayOfTodo.length-1]?arrayOfTodo[arrayOfTodo.length-1].id+1:0,task:action.payload}
            arrayOfTodo.push(temp)
        },
        removeTodo : (state,action) =>{
            state.todo = state.todo.filter((data)=>data.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer