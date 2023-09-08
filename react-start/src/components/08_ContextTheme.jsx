import { useState } from "react";
import ContextComp from "./08_ContextComp";
import "../styles/context.css";
import { ThemeContext } from "../contexts/ThemeContexts";

export default function ContextTheme() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <h4>useContext</h4>
      {isDark ? "다크모드입니다." : "라이트모드입니다."}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <ContextComp />
      </ThemeContext.Provider>
    </>
  );
}
