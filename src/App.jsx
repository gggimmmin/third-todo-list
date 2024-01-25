import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      isDone: false,
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      isDone: false,
    },
    {
      id: 3,
      title: "제목3",
      content: "내용3",
      isDone: true,
    },
  ]);

  return (
    <>
      <header>To Do List</header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newTodo = {
              id: 5,
              title: title,
              content: content,
              isDone: false,
            };
            setTodos([...todos, newTodo]);
          }}
        >
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button type="submit">제출</button>
        </form>
        <div>
          <h2>Working...🚀</h2>
          {todos.map((todo) => {
            return (
              <div>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <p>완료여부:{todo.isDone.toString()}</p>
                <button>완료</button>
                <button>삭제</button>
              </div>
            );
          })}
        </div>
        <div>
          <h2>Done...✅</h2>
          {todos.map((todo) => {
            return (
              <div>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <p>완료여부:{todo.isDone.toString()}</p>
                <button>완료</button>
                <button>삭제</button>
              </div>
            );
          })}
        </div>
      </main>
      <footer>made by gggimmmin</footer>
    </>
  );
}

export default App;
