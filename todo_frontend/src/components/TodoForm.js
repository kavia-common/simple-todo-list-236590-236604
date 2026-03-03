import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * TodoForm renders a controlled input to create a new todo.
 *
 * @param {{ onAdd: (text: string) => void }} props
 */
export function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form className="todoForm" onSubmit={submit}>
      <label className="srOnly" htmlFor="newTodo">
        New task
      </label>
      <input
        id="newTodo"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a task and hit Enter…"
        autoComplete="off"
      />
      <button className="btn" type="submit" disabled={!text.trim()}>
        Add
      </button>
    </form>
  );
}
