import React from "react";
import { TodoItem } from "./TodoItem";

/**
 * PUBLIC_INTERFACE
 * TodoList renders a list of todos with an empty state.
 *
 * @param {{
 *  todos: Array<{ id: string, text: string, completed: boolean }>,
 *  onToggle: (id: string) => void,
 *  onDelete: (id: string) => void
 * }} props
 */
export function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty">No tasks yet. Add your first one above.</p>;
  }

  return (
    <ul className="todoList" aria-label="Todo list">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
