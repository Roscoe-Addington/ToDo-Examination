export default TodoItem;
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = { id: crypto.randomUUID(), text: text, done: false };
    setTodos([...todos, newTodo]);   
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="app">
      <h1>Att göra</h1>

      <TodoForm onAdd={addTodo} />

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </main>
  );
}
