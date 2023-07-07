const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (event) {
  console.log(event.code);

  // 방향키 위 아래 왼쪽 오른쪽을 누르면
  // 각각 누를 때마다 up, down, right, left
  if (event.key === "ArrowUp") {
    console.log("up");
  } else if (event.key === "ArrowDown") {
    console.log("down");
  } else if (event.key === "ArrowLeft") {
    console.log("left");
  } else if (event.key === "ArrowRight") {
    console.log("right");
  } else {
    console.log("others");
  }
});

// 변경 이벤트
const chgInput = document.getElementById("change-input");
chgInput.addEventListener("input", () => {
  console.log("변경중!!");
  let div = document.querySelector(".box");
  div.innerHTML = chgInput.value;
  /* 
input: 현재 input에 변경사항이 존재하는 순간을 계속 인식 실시간으로 
바로 반영할 수 있음

shift, ctrl 등 입력값이 변하지 않는다면 이벤트 발생 x
*/
});
chgInput.addEventListener("change", () => {
  // 'change': input에 변경이 일어나고
  // 다른 요소를 클릭해서 focus out 시키면 이벤트 발생됨
  console.log("변경되었어요!!");
});

// 폼이 제출되는 이벤트
// 'submit'form에 적용하는 이벤트
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");
console.log(todos);
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // 폼이 실제로 제출되지 않도록 이벤트를 막는 것
  // 새로고침 방지
  const todoInput = document.querySelector('[name="todo"]');
  console.log(todoInput.value);

  //   const todo = todoInput.value;

  //   const li = document.createElement("li");
  //   //   <li></li>
  //   //   li.textContent = todo;
  //   li.append(todo);
  //   //   <li>안녕하세요</li>
  //   todos.append(li);
  //   todoInput.value = "";

  if (todoInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.append(todoInput.value);
    todos.append(li);
  }

  // 만약에 제출할 때 공백이 들어왔을 때는 추가하고 싶지 않다면?
});
