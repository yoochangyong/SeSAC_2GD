// 전개연산자 "..." 사용해보기
// 1. 배열에 접근하기

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];
console.log(arr1);
console.log(arr2);

for (let el of arr1) {
  console.log(el);
}

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log(...arr1);
console.log(...arr2);
console.log(...[2, 3, 4]);

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, "plus", ...arr2];

console.log(arr3);
console.log(arr4);

// 2. 문자열에 접근해보기

const str = "goodmorning"; //[g],[o],[o],[d],,,,
let strToArr = str.split("");
console.log(strToArr);
let strToArr2 = [...str];
console.log(strToArr2);

// split(""): string to arr (split의 매개변수로 들어가는 문자열을 기준으로 배열로 변경)
// join():arr to string

console.log(str);
for (let el of str) {
  console.log(el); //문자열도 배열처럼 접근 가능
}

// 3. 오브젝트에 전개연산자 사용하기

let me1 = {
  name: "harry",
  height: 175,
  married: false,
  friend: 111,
};

let me2 = {
  name: "창용",
  like: ["sleeping", "놀기"],
  friend: {
    name: "주광이햄",
    hate: ["킥복싱", "더러운코드"],
  },
  greeting: function () {
    console.log(
      `안녕하세요, 제 이름은${this.name}이고요, 키는${this.height}입니다`
    );
  },
};

let me = {
  ...me1,
  ...me2,
  gender: "male",
  hair: "long",
};

console.log(me);
console.log(me.name);
me.greeting();

// ppt example answer

// ex1
const word1 = "abc";
const word2 = "xyz";
const arr5 = [...word1, ...word2];
console.log(arr5);

// ex2
const wordArr = (word1 + word2).split("");
console.log(wordArr);

// ex3
const wordArr2 = word1.split("").concat(word2.split(""));
console.log(wordArr2);

// 구조 분해 할당

// 1. 배열의 구조 분해 할당

const arr6 = ["tomato", "kiwi", "banana"];
const [val1, kiwi, banana] = arr6;
console.log(val1);

// const val = arr6[0]
// const kiwi = arr6[1]
// const banana = arr6[2]

const arr7 = ["빨", "주", "노", "분"];
const [red, orange, , pink] = arr7;
// 요소보다 선언한 변수의 갯수가 많아도 error 발생 x => undefined!
const [v1, v2, v3 = "default", v4, v5 = "green"] = arr7;
console.log(pink);
console.log(v5);

// 변수 교환해보기
let value1 = "second";
let value2 = "first";

// value1 = value2 //v1 first
// value2 = value1 //v2 first

let temp;
temp = value1;
value1 = value2;
value2 = temp;

console.log(value1, value2);

// 구조 분해 할당을 이용해서 교환하기
value1 = "second";
value2 = "first";
[value1, value2] = [value2, value1];
console.log(value1, value2);

// 2. 오브젝트의 구조 분해 할당
let obj = {
  title: "hot6",
  content: "energydrink",
  num: 250,
};

console.log(obj.title);
console.log(obj["title"]);
// console,log(title); not defined

const { num, content, title } = obj;
console.log(num);
console.log(content);
console.log(title);
// const { t1, c1, n1 } = obj;
// console.log(t1);
const { title: t2, content: c2, num: n2 } = obj;
console.log(t2);

const { key5, key2 } = {
  key1: "v1",
  key2: 2,
  key3: "v3",
  key4: "v4",
  key5: 5,
};

console.log(key2, key5);

// ....rest

function test(...val) {
  const [a, b, c, ...rest] = val;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}

test(1, 2, 3, 4, 5, 6, 7, 8, 9);
const a = 1;
const b = 2;
const c = 3;
const d = 4;

// quiz
// 매개변수가 몇 개 들어오든 합해주는 함수 addNumber

function addNumber(...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = numbers[i] + sum;
  }
  return sum;
}
console.log(addNumber(1, 2, 3, 4, 5));

// 방법: forEach

function addNumber(...numbers) {
  let sum = 0;
  numbers.forEach((el) => {
    sum = sum + el;
  });
  return sum;
}
console.log(addNumber(1, 2, 3));
const result = addNumber(1, 2, 3);
console.log(result);

function introduce(name, like = "coffee", hate, goodAt) {
  console.log(`My name is ${name}`);
  console.log(`I like ${like}`);
  console.log(`I do not like ${hate}`);
  console.log(`I am good at ${goodAt}`);
}

introduce("a", "b", "c", "d");
