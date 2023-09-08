import { useState } from "react";

export default function FunctionState() {
  // 첫번째 사과만 바뀜
  //   let apple = "사과";
  //   function inEng() {
  //     const content = document.querySelector(".state .apple");
  //     content.innerText = "apple";
  //     apple = "apple";
  //     console.log(apple);
  //   }
  //   return (
  //     <div className="state">
  //       <div className="apple">사과</div>
  //       <div>{apple}</div>
  //       <button onClick={() => inEng()}>change to EN</button>
  //     </div>
  //   );
  // useState사용해보기
  //   const [apple, setApple] = useState("사과");
  //   //   let apple ="사과"
  //   return (
  //     <div>
  //       <div>{apple}</div>
  //       <button onClick={() => setApple("apple")}>change to EN</button>
  //     </div>
  //   );
  // vanila JS
  //   function changeLang() {
  //     const apple = document.querySelector(".state div");
  //     apple.innerText === "사과"
  //       ? (apple.innerText = "apple")
  //       : (apple.innerText = "사과");
  //   }
  //   return (
  //     <div className="state">
  //       <div>사과</div>
  //       <button onClick={() => changeLang()}>change language</button>
  //     </div>
  //   );
  //   useState로 하기
  const [showEnglish, setShowEnglish] = useState(true);
  //   let showEnlgish = true
  return (
    <div>
      <div>{showEnglish ? "apple" : "사과"}</div>
      <button onClick={() => setShowEnglish(!showEnglish)}>
        change to {showEnglish ? "KO" : "EN"}
      </button>
    </div>
  );
}
