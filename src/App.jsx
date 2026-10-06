import { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(), // genererar ett unikt id för varje uppgift
      text: text,
      done: false,
    };
    setTodos([...todos, newTodo]); // NY array: gamla uppgifter + den nya
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  return (
    <main className="app">
      <h1>Att Göra Lista/ToDo List</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </main>
  );
}

export default App;
