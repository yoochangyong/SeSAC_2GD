/* for 문
    for(변수 초기화;) 조건식(어디까지, 증가? 감소?; 증감){
        반복할 코드
    }
    
    index++; index = index+1; index++1;
*/

for (let i = 0; i < 10; i = i + 1) {
  console.log("안녕하세요");
}

for (let i = 0; i < 10; i++) {
  console.log("안녕하세요");
}

for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1}번째`);
}

// 1~5까지 출력하는 방법
for (let i = 1; i <= 5; i++) {
  console.log(1);
}
for (let i = 1; i < 6; i++) {
  console.log(i);
}
for (let i = 1; i < 6; i++) {
  console.log(i + 1);
}
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1 ~ n까지 더하는 프로그램 만들기
let n = 10; //55
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);

//배열과 for문 같이 써보기
let fruits = ["사과", "망고", "수박", "바나나"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

for (let i = 0; i < fruits.length; i++) {
  console.log(`I like ${fruits[i]}`);
}

// 배열에 들어가 있는 number 형 데이터의 합 구하기
let numArr = [100, 200, 99, 58, 77, 23];
let i = 200;
for (let i = 0; i <= numArr.length; i++) {
  sum = sum + numArr[i];
}
console.log(sum);

/* if문/* 과 for문 같이 쓰기 
if(){
  for(){}
}

for(){
  if(){}
} */

for (i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (i = 0; i < 21; i = i + 2) {
  console.log(i);
}

for (i = 1; i <= 10000; i++) {
  if (i % 2 === 1 && i % 13 === 0) {
    console.log(i);
  }
}

// 2중 for문(for문 안에 for 문 넣기)
// 2단 부터 9단까지 출력하기

for (let i = 2; i < 10; i++) {
  console.log(`----${i}단-----`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i}x${j} = ${i * j}`);
  }
}
/* 2x1=2
   2x2=4
   -----
   2x9=18
   3x1=3*/

// while문
let n1 = 1; //while 내부에서 사용할 변수의 초기화
// while(조건){
//   //조건이 참일 때 실행할 문장
// }

while (n1 <= 5) {
  console.log(n1);
  n1++;
}

// 10부터 6까지만 출력
let n2 = 10;

while (6 <= n2) {
  console.log(n2);
  n2--;
}

// while과 if를 사용하여 1~10까지의 짝수 출력

let n3 = 1;
while (n3 <= 10) {
  if (n3 % 2 === 0) {
    console.log(n3);
  }
  n3++;
}

// while과 무한루프
let n4 = 1;
while (true) {
  console.log(n4);
  n4++;
  if (n4 >= 10) {
    break;
  }
}

let n5 = 0;
// confirm
// 확인 -> true 반환
// 취소 -> false 반환
while (confirm("계속 진행?")) {
  n5++;
  alert(n5 + "번째 alert");
}

// continue
// 현재의 반복을 멈추고, 다음 반복 회차로 넘어감
// break
// 반복문에서 반복을 멈추고 즉시 탈출
//
// 1~10 홀수의 합 구하기

let sum2 = 0;
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum2 = sum2 + i;
}
console.log(sum2);

// 1. for 문
let sum3 = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum3 = sum3 + i;
  }
}
console.log(sum3);

// 2.while
let sum4 = 0;

let n6 = 0;
while (n6 < 101) {
  if (n6 % 2 === 0 || n6 % 5 === 0) {
    sum4 += n6;
  }
  n6++;
}
console.log(sum4);
