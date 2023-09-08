import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";

export default function ContextFooter() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <footer
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        모드 변경
      </button>
    </footer>
  );
}
