import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ id: 1, text: "[]", completed: false }]);

  const removetodo = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={setCount(0)}>Reset</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {count >= 15
              ? { ...todo, text: "[X]", completed: !todo.completed }
              : todo}
            <button onClick={removetodo}>Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
