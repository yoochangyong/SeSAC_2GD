// 변수
// -var
//  - 재선언(중복선언)이 가능,
//  - 예기치 못한 값을 반환할 수 있다.
// -let
//  - 중복 선언은 불가능하지만 재할당은 가능
// -const
//  - 재선언이 불가능하고, 재할당도 불가능함
//  - 선언과 동시에 초기화 작업을 해야함

var name = "홍길동";
var name = "나비";
console.log(name);

// let
let a;
console.log(a);
a = 10;
console.log(a);
// let a = 5;

// const
const b = 1;
// b = 12; 재선언 불가

let q = 10;
// q - 5; 더하기나 빼기와 같은 값을 할당하고 싶으면 아래와 같이 재할당 해주어야 함
q = q - 5;
console.log(q);

// 연산자
// 산술 연산자: + - * /
// 대입 연산자: =
// 비교 연산자: == === != !== < > <= >=
// 논리 연산자: !(not), &&(and), ||(or)

// 비교연산자 값만 비교할 때는 2개, 데이터 값을 비교할 때는 3개
console.log(1 == 1);
console.log(1 == "1");
// console.log(1 ! = 1);
// console.log(1! ="1");
console.log(1 === "1");

// 크기 비교
// > < <= >=
console.log(1 < 2);
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 <= 2);

// 산술연산자
console.log(1 + 1);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);

// 논리연산자
console.log(!true);
console.log(!!true);
console.log(true || true);
console.log(true || false || false);
console.log(true && true);
console.log(false && true);
console.log((2 > 1 && -2 < 1) || 5 > 2);

console.log("" == "0");
console.log(false == "hi");
console.log("0" == false);
console.log("0" == 0);
console.log("" == 0);
console.log(undefined == null);
