import { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-xl bg-indigo-600 text-white"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;