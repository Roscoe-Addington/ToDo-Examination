import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stoppar att sidan laddas om
    onAdd(text);
    setText(""); // tömmer inputfältet efter att en todo har lagts till
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
