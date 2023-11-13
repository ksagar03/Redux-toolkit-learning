import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { removeTodo } from "../Features/todo/todoSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const ViewTodos = () => {
  const selecter = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handledelete = (e) => {
    e.preventdefault();
  };
  return (
    <div>
      {selecter.map((todos) => (
        <li key={todos.id} style={{ padding: "3px" }}>
          {todos.text}
          <button onClick={()=> dispatch(removeTodo(todos.id))}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default ViewTodos;
