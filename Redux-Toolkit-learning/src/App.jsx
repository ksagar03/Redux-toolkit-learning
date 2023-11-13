// import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AddnewTodo from "./components/AddnewTodo";
import ViewTodos from "./components/ViewTodos";
function App() {
  return (
    <>
     <AddnewTodo />
     <ViewTodos/>
    </>
    // <h1>Hello</h1>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<AddnewTodo />} />
    //   </Routes>
    // </Router>
   
  );
}

export default App;
