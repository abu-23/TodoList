import React, { useState, useEffect } from "react";
import bgImage from "./assets/images/bg-image.jpg";
import crescent from "./assets/icons/crescent-icon.svg";
import {
  BackgroundImage,
  HeaderDiv,
  HeaderText,
  InputContainer,
  TodoListDiv,
  TodoListItems,
  CheckboxRound,
  Checkmark,
  TodoRemainig,
  CrescentIcon,
  TaskInput,
  TodoContainer,
  FilterContainer,
  FilterBtn,
  DeleteBtn,
  FilterButtonDiv,
  ClearBtn,
  TodoDesc,
} from "./AppStyle";

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
      <BackgroundImage src={bgImage} alt="background" />
      <TodoContainer>
        <HeaderDiv>
          <HeaderText>TODO</HeaderText>
          <CrescentIcon src={crescent} alt="crescent-icon" />
        </HeaderDiv>
        <InputContainer>
          <TaskInput
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
        </InputContainer>
        <TodoListDiv>
          {filteredTodos.map((todo) => (
            <>
              <TodoListItems>
                <CheckboxRound
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <Checkmark isChecked={todo.completed} />
                <TodoDesc isCompleted={todo.completed}>
                  {todo.text}
                </TodoDesc>
                <DeleteBtn onClick={() => deleteTodo(todo.id)}>X</DeleteBtn>
              </TodoListItems>
              <hr className="hrline" />
            </>
          ))}
        </TodoListDiv>
        <FilterContainer>
          <TodoRemainig>{todos.length} todo left</TodoRemainig>
          <FilterButtonDiv>
            <FilterBtn
              isActive={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterBtn>
            <FilterBtn
              isActive={filter === "active"}
              onClick={() => setFilter("active")}
            >
              Active
            </FilterBtn>
            <FilterBtn
              isActive={filter === "completed"}
              onClick={() => setFilter("completed")}
            >
              Completed
            </FilterBtn>
          </FilterButtonDiv>
          <ClearBtn onClick={clearCompleted}>Clear Completed</ClearBtn>
        </FilterContainer>
      </TodoContainer>
    </>
  );
}

export default TodoList;
