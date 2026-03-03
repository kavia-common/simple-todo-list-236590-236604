import React from "react";

/**
 * PUBLIC_INTERFACE
 * TodoItem displays one todo row.
 *
 * @param {{
 *  todo: { id: string, text: string, completed: boolean },
 *  onToggle: (id: string) => void,
 *  onDelete: (id: string) => void
 * }} props
 */
export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todoItem">
      <label className="todoLeft">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark "${todo.text}" as ${
            todo.completed ? "incomplete" : "complete"
          }`}
        />
        <span className={todo.completed ? "todoText done" : "todoText"}>
          {todo.text}
        </span>
      </label>

      <button
        className="iconBtn"
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${todo.text}"`}
        title="Delete"
      >
        ×
      </button>
    </li>
  );
}
