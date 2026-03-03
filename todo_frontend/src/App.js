import React, { useMemo } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

const STORAGE_KEY = "kavia.todo.items";

function makeId() {
  // Good enough for local-only todos; avoids adding dependencies.
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// PUBLIC_INTERFACE
function App() {
  const [todos, setTodos] = useLocalStorageState(STORAGE_KEY, []);

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  // PUBLIC_INTERFACE
  const addTodo = (text) => {
    const next = [{ id: makeId(), text, completed: false }, ...todos];
    setTodos(next);
  };

  // PUBLIC_INTERFACE
  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // PUBLIC_INTERFACE
  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  return (
    <div className="App">
      <main className="container">
        <Header />
        <TodoForm onAdd={addTodo} />

        <div className="toolbar" aria-label="Todo actions">
          <span className="counter">
            {remainingCount} remaining / {todos.length} total
          </span>
          <button
            className="btn btnSecondary"
            type="button"
            onClick={clearCompleted}
            disabled={todos.every((t) => !t.completed)}
          >
            Clear completed
          </button>
        </div>

        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
    </div>
  );
}

export default App;
