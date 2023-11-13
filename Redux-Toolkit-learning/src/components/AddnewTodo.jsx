import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useDispatch from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../Features/todo/todoSlice";

const AddnewTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todohandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    // previously In this action.payload used to be defiend but now it has been changed redux toolkit takes case of every thing now
    //  just we need to send the data
    setInput("");
  };
  return (
    <div>
      <h1>Add New Task</h1>
      {/* <Box component="form" autoComplete="off"></Box> */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <form style={{ display: "flex", padding: "10px" }} onSubmit={todohandler}>
        <label htmlFor="add new task"> Add Task </label>
        <input
          type="text"
          value={input}
          placeholder="add todo...."
          onChange={(values) => setInput(values)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddnewTodo;
