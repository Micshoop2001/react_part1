import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: "t1", text: "Eat", completed: false },
    { id: "t2", text: "Sleep", completed: true },
    { id: "t3", text: "Code", completed: true },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.completed ? "✅" : "⬜"} {todo.text}
        </li>
      ))}
    </ul>
  );
}
