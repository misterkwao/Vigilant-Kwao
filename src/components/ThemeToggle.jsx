import { useContext } from "react";
import { ThemeContext } from "../context/Theme/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-500 hover:bg-gray-700 dark:hover:bg-gray-200 transition"
    >
      {theme === "light" ? <Moon className="text-gray-900" /> : <Sun className="text-yellow-400" />}
    </button>
  );
};

export default ThemeToggle;
