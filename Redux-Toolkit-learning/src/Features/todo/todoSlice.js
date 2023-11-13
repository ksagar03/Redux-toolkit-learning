import { createSlice, nanoid } from "@reduxjs/toolkit";
//  Nanoid is used to genrate a unique ID (note each data  should have unique ID )

const initialState ={
    todo: [{id: nanoid , text: "Hello this is sagar using Redux"}]
}

export const todoSlice = createSlice({
    name: "todoReducers",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const addTask = {
                id: nanoid(),
                text: action.payload
            }
            state.todo.push(addTask)
            // this function is to add new task to the todo object created in the initial state

        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => action.payload !== todo.id)
        },
        updateTodo: (state,action) =>{
         state.todo = state.todo.map((edittodo) => edittodo.id === action.payload.id ? action.payload : edittodo)
        }
    }
})
export const {addTodo , removeTodo, updateTodo} = todoSlice.actions  
// 

export default todoSlice.reducer