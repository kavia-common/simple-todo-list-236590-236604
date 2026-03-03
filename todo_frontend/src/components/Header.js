import React from "react";

/**
 * PUBLIC_INTERFACE
 * Header renders the app title area.
 */
export function Header() {
  return (
    <header className="header">
      <h1 className="title">Retro Todo</h1>
      <p className="subtitle">Add tasks, check them off, and keep it simple.</p>
    </header>
  );
}
