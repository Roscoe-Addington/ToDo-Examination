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

  return (
    <main className="app">
      <h1>Att Göra Lista/ Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
