import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";

export default function ContextMain() {
  const data = useContext(ThemeContext);
  // data = {isDark: f/t, setIsDark:f=>}
  // const { isDark } = {isDark: f/t, setIsDark:f=>};
  const { isDark } = data;
  return (
    <main
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>안녕하세요</p>
    </main>
  );
}
