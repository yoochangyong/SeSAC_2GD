// 함수 선언문
// function 함수이름(매개변수){
//     함수내용;
// }
// 함수 이름은 camelCase를 이용

// 함수를 선언한 이후에는 위에다가 작성해도 작성됨
helloWorld1();
console.log("----");

function helloWorld1() {
  console.log("hello world1");
}

helloWorld1();

function helloWorld2() {
  return "hello world2";
}
// return
// - 함수의 반환값, 함수 내부 코드의 '최종값'
console.log(helloWorld2());

function add(num1, num2) {
  console.log(num1 + num2);
}
add(5, 10);

function add(num1, num2) {
  //   console.log("여기만 실행됨");
  return num1 + num2;
  //   console.log("여기는 실행되지 않음)")
}
console.log(add(2, 3));
add(5, 10);
add(3, 2);

// helloWorld3(); const는 위에서 선언하면 실행안됨

const helloWorld3 = function () {
  console.log("helloWorld3");
};
helloWorld3();

// 화살표함수
// console.log(helloWorld4()); :화살표 함수도 선언 밑에서 한 것 위에서 실행하면 안됨

const helloWorld4 = () => {
  return "hello world4!!";
};
console.log(helloWorld4());

// 매개변수가 있는 함수
function sayHello1(name) {
  return "안녕하세요" + name + "님";
}
console.log(sayHello1("창용"));

function sayHello2(text, name) {
  console.log(`${text}!! ${name}님`);
}

let 안녕 = "안녕하세요";
sayHello2(안녕, "allie");

// 실습 1 & 2

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(3, 7));
console.log(multiply(2, 2));

function square(square_num) {
  console.log(square_num ** 2);
}
square(4);
square(11);
square(5);
