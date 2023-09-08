import { useState } from "react";

export default function Handler_ex() {
  const [text, setText] = useState("Hello World!");
  return (
    <>
      {text}
      <br />
      <button
        onClick={() => {
          setText("Goodbye World!");
        }}
      >
        클릭
      </button>
    </>
  );
}
