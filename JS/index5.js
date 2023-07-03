/* 자바스크립트가 기본적으로 가지고 있는 객체
String, Number, Array, Date, Math, Object,
 */

// Date 객체
// 시간, 날짜정보를 얻을 때 사용
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "연도");
console.log(now.getMonth()); // 0-11월
console.log(now.getDate()); // 1-31
console.log(now.getHours()); // 0-23
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); // 0(mon)-6(sat)

//Date 객체를 이용해 오늘 요일을 얻고,
//switch-case문과 if문으로 오늘이 평일/주말 구별해보자

let day = now.getDay();
//if
if (day === 0 || day === 6) {
  console.log("weekend");
} else {
  console.log("weekday");
}

// 3항 연산자
console.log(day === 0 || day === 6 ? "weekend" : "weekday");

//switch
switch (day) {
  case 0:
  case 6:
    console.log("weekend");
    break;
  default:
    console.log("weekday");
    break;
}

//let now = newDate();
let past = new Date(2020, 1, 13, 10, 10, 10);
console.log(past);

//Math
//수학적인 상수나 함수
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

console.log(Math.max(100, -1, 30, 20, 5));
console.log(Math.min(100, -1, 30, 20, 5));

console.log(Math.ceil(5.1555)); //올림
console.log(Math.floor(5.1555)); //내림
console.log(Math.round(5.1555)); //반올림

//난수 생성 -> random number
// 0<= num < 1
console.log(Math.random());

//0<= num < 10 정수로 임의값 추출하기
console.log(Math.floor(Math.random() * 10));
// 0.xxx ~ 9.xxx

// 0 <= x < = 10
console.log(Math.floor(Math.random() * 11));

// 20 <= x < 22

console.log(Math.floor(Math.random() * 3 + 20));
// 20<= x <= 22 정수 20<=x <23
//0 -3
// 0<=x<1
// 0<=x<3

//Object

const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
