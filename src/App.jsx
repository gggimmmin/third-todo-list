import React, { useState } from "react";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";
import uuid from "react-uuid";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "리액트 공부",
      content: "리액트 1강 듣기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      content: "내용2",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목3",
      content: "내용3",
      isDone: true,
    },
  ]);

  return (
    <>
      <header>To Do List</header>
      <main>
        <Input todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
        <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
      </main>
      <footer>made by gggimmmin</footer>
    </>
  );
}

export default App;
