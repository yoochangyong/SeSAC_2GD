/* 문자열 관련 메소드

- length(속성)
- toUpperCase()
- toLowerCase()
- trim()
- slice()
- replace()
- replaceAll()
- repeat()
- indexOf()
- split()

*/

let str1 = "   Strawberry Moon   ";
// 인덱싱
console.log(str1[4]);
console.log(str1[3] + str1[15] + str1[17]);

// 문자열의 길이(공백 포함)
console.log(str1.length);

// 양쪽 공백 없애기 trim()
let str2 = str1.trim();
console.log(str2);
console.log(str2.length);

console.log("대문자로 변경!" + str2.toUpperCase());
console.log("소문자로 변경!" + str2.toLowerCase());

let fruit = "applemango";
// indexOf("문자열")
console.log(fruit.indexOf("p"));
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf("z"));

// charAt(인덱스 번호)
console.log(fruit.charAt(3));

// slice(인덱스 번호)
console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-1));
console.log(fruit.slice(-3));

console.log(fruit); //문자열은 변하지 않음

let msg = "Wow~ It is so amazing!!!";
/* replace replaceAll */
console.log(msg.replace("o", "a"));
console.log(msg.replaceAll("o", "ooo"));
console.log(msg.replace("Wow", "hey"));
console.log(msg); //문자열은 변하지 않음

let date = "2023.07.03";
//2023-07-03
console.log(date.replaceAll(".", "-"));

// 반복
console.log("a".repeat(5));

// split("") - > 문자열을 배열로 변경하는 텍스트
// let date = "2023.07.03";
// [2023, 07, 03]
const dateArr = date.split("");
console.log(dateArr);

// 배열 method
let arr1 = [1, 2, 3, 4, 5];
arr1.push("six"); //기존 열에 추가 시켜주기
arr1.push("seven");
console.log(arr1);

arr1.pop(); //마지막에 넣은 것 없애줌
console.log(arr1);
console.log(arr1.pop());

let arr2 = ["quakka", "puppy", "rabbit", "hamster"];
arr2.unshift("고양이");
arr2.unshift("쥐"); //맨 앞에 추가
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

arr2[5] = "기린";
arr2[1] = "쿼카";
arr2[7] = "deer";
console.log(arr2);

/* 배열.includes(요소) 
배열에 요소가 있는지 검사! --> true false 반환*/
console.log(arr2.includes("puppy"));
console.log(arr2.includes("mammoth"));

console.log(arr2.length);
console.log(arr2.indexOf("puppy"));

// reverse는 기존의 배열을 변경시킴, 순서 뒤집어주는 텍스트
arr1 = [1, 2, 3, 4, 5];
arr1.reverse(); //[]
console.log(arr1);

// join 배열을 문자열로
let str3 = arr1.join(" "); //"54321"
console.log(str3);

/* 반복 */
let arr3 = [6, 7, 8, 9, 10];
let alphabets = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

/* forEach 메소드
배열. forEach(function(요소,인덱스,배열){}})
배열. forEach{(value,index,array)} =>{}) 
*/
arr3.forEach(function (number, index, arr) {
  console.log(number);
  console.log(index);
  console.log(arr);
});

alphabets.forEach((alphabets, i, arr) => {
  console.log(alphabets);
  console.log(i);
  console.log(arr);
});

//map, filter, find!
/* 
1. map >> 배열 내의 모든 원소에 대해 함수 호출한 결과를 모아서 새로운 배열 반환
2. filter >> 조건을 만족하는 요소들을 "배열"로 반환
3. find >> 조건을 만족하는 요소  중 첫번째 "값" 반환

매개변수로 익명함수 (함수표현식, 화살표함수) 
배열 자체를 변경시켜주지 않기 때문에 새로운 변수에 저장해서 사용!
*/

/* map
[].map(function(value,index,arr){}) */

let arr4 = [1, 2, 3, 4, 5];
arr4.map(function (num) {
  return num * 2;
});

console.log(arr4);

const multiArr = arr4.map(function (el) {
  return el * 2;
});
console.log(multiArr); // 2,4,6,8,10

/* filter */
let arr6 = arr2.filter(function (el) {
  return el.length >= 6;
});

console.log(arr6);

// filter, arrow

let arr7 = arr2.filter((el) => {
  el.length >= 6;
});
console.log(arr7);

// find
let findResult = multiArr.find(function (el) {
  return el >= 7;
});
console.log(findResult);

// find, arrow

let findResult3 = multiArr.find((el) => {
  el >= 7;
});
console.log(findResult3);

// 화살표함수
let findResult2 = multiArr.find((el) => el > 7); //화살표함수에는 중괄호를 사용하지 않아도 됨 // 중괄호를 사용하지 않았을 때는 return이 필요없음
console.log(findResult2);

// for in
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

// const arr = ["a", "b", "c", "d"];
// arr[0] == "a";

for (let area in areaNum) {
  console.log(area); //object의 key 출력됨
  // areaNum.Seoul
  // areaNum["Seoul"] -> 대괄호 접근법을 이용해서 value에 접근
}

console.log(areaNum[area]);
