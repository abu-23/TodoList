import React, { useState, useEffect } from "react";
import "./App.css";
import bgImage from "./assets/images/bg-image.jpg";
import crescent from "./assets/icons/crescent-icon.svg";

function TodoList() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <>
      <img className="background-image" src={bgImage} alt="background" />
      <div className="todo-container">
        <div className="header-div">
          <h1 className="header">TODO</h1>
          <img className="crescent-icon" src={crescent} alt="crescent-icon" />
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            placeholder="Create a new todo..."
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo(inputValue);
              }
            }}
          />
        </div>
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <>
              <li key={todo.id}>
                <input
                  className="checkbox-round"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="checkmark" />
                <span className={todo.completed ? "completed" : ""}>
                  {todo.text}
                </span>
                <div className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                  X
                </div>
              </li>
              <hr className="hrline" />
            </>
          ))}
        </ul>
        <div className="filter-container">
          <div className="todo-remainig">{todos.length} todo left</div>
          <div className="filter-button-div">
            <button
              className={filter === "all" ? "selected" : "filter-btn"}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "active" ? "selected" : "filter-btn"}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={filter === "completed" ? "selected" : "filter-btn"}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
          <button className="clear-btn" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
