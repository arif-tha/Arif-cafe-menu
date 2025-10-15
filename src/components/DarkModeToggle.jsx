import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative p-2 w-14 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 
                dark:from-gray-700 dark:to-gray-900 transition-all duration-300 shadow-lg 
                hover:shadow-xl hover:scale-105"
    >
      <div
        className={`absolute w-6 h-6 rounded-full transition-all duration-300 
                   ${dark 
                     ? 'translate-x-6 bg-gray-100' 
                     : 'translate-x-0 bg-yellow-300'
                   } flex items-center justify-center`}
      >
        {dark ? (
          <span className="text-xs">🌙</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </div>
    </button>
  );
}