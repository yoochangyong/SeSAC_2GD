export default function UseJsX() {
  // 1. inline style에 적용해뵉
  //  inline에 바로 속성 적용
  // object 선언 후 적용
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "gold",
  //     border: "1px solid black",
  //     marginLeft: ".5rem",
  //     marginTop: ".5rem",
  //     display: "inline-block",
  //   };
  //   return (
  //     <div>
  //       <div
  //         style={{ color: "fff", width: "100px", backgroundColor: "greenyellow" }}
  //       >
  //         1
  //       </div>
  //       <div style={divStyle}>2</div>
  //       <div style={divStyle}>3</div>
  //     </div>
  //   );
  //   2. JS문법 써보기
  //   let isShow = false;
  //   let isShow = true;
  //   let str;
  //   if (isShow === true) {
  //     str = "true입니다";
  //   }
  //   return (
  //     <div>
  //       {/* true일 때 보이는 div */}
  //       <div style={{ backgroundColor: "red" }}>
  //         {isShow ? "true일 때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "orange" }}>
  //         {isShow && "true일 때 보임"}
  //       </div>
  //       {/* false일 때 보이는 div */}
  //       <div style={{ backgroundColor: "yellow" }}>
  //         {isShow === false ? "false일 때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "green" }}>
  //         {!isShow && "false일 때 보임"}
  //       </div>
  //       {/* if문과 for문은 jsx 문법 내에서 사용금지 */}
  //     </div>
  //   );

  // 3. onClick 사용
  const myName = "yong";
  function myFunc() {
    alert(`hello, my name is ${myName} for real`);
  }

  //   매개변수 없는 ver
  function addNum(a, b) {
    alert(a + b);
  }

  return (
    <div>
      <span onClick={myFunc}>hi</span>
      <span onClick={() => addNum(5, 8)}>8 plus 5</span>
      <span onClick={() => myFunc()}>hello</span>
      {/* 바로 alert 나오는 것 */}
      {/* <span>{myFunc()}</span>
      <span>{myFunc}</span> */}
    </div>
  );
}
