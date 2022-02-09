// import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const createHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    };

    setTodoList([newTodo,...todoList]);
    setTodoList("");
  };

  const editHandler = (id) => {
    const todoEditedTodo = todoList.find((todo) => todo.id === id);
    setIsEditable(true);
    setEditableTodo(todoEditedTodo);
    setTodoTitle(todoEditedTodo.title);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    editableTodo.title = todoTitle;
    setTodoTitle("");
    setIsEditable(false);
    setEditableTodo(null);
  };

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <form>
        <input
          onChange={(event) => setTodoTitle(event.target.value)}
          value={todoTitle}
          type="text"
          name="todoTitle"
        />
        <button
          onClick={(event) =>
            isEditable === true ? updateHandler(event) : createHandler(event)
          }
        >
          {isEditable === true ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li>
            <span>{todo.title}</span>
            <button onClick={() => editHandler(todo.id)}>Edit</button>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
