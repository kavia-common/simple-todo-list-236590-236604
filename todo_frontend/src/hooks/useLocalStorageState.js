import { useEffect, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * useLocalStorageState stores state in React while persisting it to localStorage.
 *
 * @param {string} key localStorage key
 * @param {any|(() => any)} initialValue initial value (or lazy initializer)
 * @returns {[any, Function]} [value, setValue]
 */
export function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw != null) return JSON.parse(raw);
    } catch {
      // If parsing fails, fall back to initialValue.
    }
    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore quota/security errors; app still works in-memory.
    }
  }, [key, value]);

  return [value, setValue];
}
