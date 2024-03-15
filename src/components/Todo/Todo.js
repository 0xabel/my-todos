import React, { useState, useEffect } from "react";
import "./Todo.css";

function Todo({
  setTodos,
  todos,
  editingTodo,
  inputValue,
  setInputValue,
  setEditingTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setInputValue(editingTodo !== null ? editingTodo.text : "");
    setIsEditing(editingTodo !== null);
  }, [editingTodo, setInputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo !== null) {
      // If editingTodo is not null, update the edited todo
      const updatedTodos = todos.map((t) =>
        t.id === editingTodo.id ? { ...t, text: inputValue } : t
      );
      setTodos(updatedTodos);
      setEditingTodo(null); // Clear editingTodo when saving
    } else if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue(""); // Clear inputValue when adding a new todo
    }
    setIsEditing(false); // Switch to add mode after saving
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder={isEditing ? "Edit Todo!" : "Add Todo!"}
        />
        <button type="submit" style={{ fontSize: "16px" }}>
          {isEditing ? "Save" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default Todo;
