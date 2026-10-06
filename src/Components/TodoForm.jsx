import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedText = text.trim(); // tar bort mellanslag i början och slutet
    if (trimmedText === "") return; // stoppa tomma uppgifter
    onAdd(trimmedText);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Vad behöver göras?"
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default TodoForm;
