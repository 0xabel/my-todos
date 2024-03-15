import React, { useState, useEffect } from "react";
import Todo from "./components/Todo/Todo";
import Todos from "./components/Todos/Todos";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [inputValue, setInputValue] = useState(todo);
  // Save the updated todos array to localStorage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="App">
        <Todo
          className="todo"
          setTodo={setTodo}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          editingTodo={editingTodo}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setEditingTodo={setEditingTodo}
        />
        <Todos
          className="todos"
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          setTodo={setTodo}
          setEditingTodo={setEditingTodo}
        />
      </div>
    </div>
  );
}

export default App;
