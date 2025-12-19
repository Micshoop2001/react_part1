import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ id: 1, text: "[]", completed: false }]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {count >= 15
              ? { ...todo, text: "[X]", completed: !todo.completed }
              : todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
