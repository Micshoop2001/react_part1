function EmptyState() {
  return <p>🎉 No tasks today!</p>;
}

function TodoList({ todos }) {
  const tryingcomplete = todos.every((todo) => todo.completed);
  return (
    <div>
      {tryingcomplete && <p>Good job 🎉</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? "✅" : "⬜"} {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo+</h1>
      {todos.length === 0 ? <EmptyState /> : <TodoList todos={todos} />}
    </div>
  );
}
