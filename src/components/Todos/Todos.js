import React, { useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import "./Todos.css";

function Todos({ todos, setTodos, setEditingTodo }) {
  useEffect(() => {
    const fetchedTodos = JSON.parse(localStorage.getItem("todos"));
    if (fetchedTodos) {
      setTodos(fetchedTodos);
    }
  }, [setTodos]);

  const handleDelete = (id) => {
    console.log(id);
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos-container">
      <div className="todos">
        {todos.map((todo, index) => {
          return (
            <div key={todo.id} className="todo">
              <span>{todo.text}</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  onClick={() => handleDelete(todo.id)}
                  style={{
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                >
                  <BsFillTrashFill />
                </div>
                <div
                  onClick={() => handleEdit(todo)}
                  style={{ cursor: "pointer" }}
                >
                  <FiEdit3 />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
