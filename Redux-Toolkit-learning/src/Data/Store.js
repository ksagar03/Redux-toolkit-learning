import configureStore from "@reduxjs/toolkit"
import todoReducers from "../Features/todo/todoSlice";


export const store = configureStore({
    reducer: todoReducers
});


//  here the above code will only allow to modify the store when the function is used from the reducers
//  here I have crearted a data layer