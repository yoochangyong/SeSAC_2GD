//jq val()사용
function getValue() {
  // input의 value를 가지고 와서
  // alert 창에 띄워줌
  const value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("설정 완료");
}

/* css() 사용 */
function changeCssJs() {
  // span의 글씨크기 20px
  // 글자 색깔 빨간색
  let span = document.querySelector("span");
  span.style = "font-size:20px; color:red;";
}
function changeCssJq() {
  // 글자 크기 40px
  // 글자색깔 파란색
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}
function getCssJs() {
  // css 특정 속성값 가져오기
  console.log($("span").css("color"));
}

/* attr() */
function changeAttrJs() {
  // 네이버로 이동
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
  // a.href='https://www.naver.com'
}

function changeAttrJq() {
  // 다음으로 이동
  // target="self"로 변경
  $("a").attr("href", "https://www.daum.net");
  $("a").attr("href", "https://www.daum.net");
}

//text
function changetextJs() {
  let p = document.querySelector(".p-text");
  p.innerText = "js로 변경 &hearts;";
}

function changetextJq() {
  $(".p-text").text("jq로 변경 &hearts;");
}

//html

function changeHtmlJs() {
  let p = document.querySelector(".p-html");
  p.innerHtml = "js로 변경 &hearts;";
}

function changeHtmlJq() {
  $(".p-html").html("jq로 변경 &hearts;");
}

//요소 추가하기 append
function appendJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막 자식으로 추가된 js";
  ul.append(li);
}

function appendJq() {
  $(".colors").append("<li>마지막 자식으로 추가된 jq</li>");
}

// prepend
function prependJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerHTML = "<h4>첫 번째 자식으로 추가된 js</h4>";
  ul.prepend(li);
}
function prependJq() {
  $(".colors").prepend("<li><h4>첫 자식으로 추가된 jq</h4></li>");
}
// jquery는 문자열에 태그 입력시 html 태그로 받아들임

// before
function beforeJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "이전 형제요소로 추가된 js";

  green.before(li);
}
function beforeJq() {
  $(".green").before("<li>이전 형제 요소로 추가된 jq</li>");
}

// after
function afterJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "다음 형제 요소로 추가된 js";

  green.after(li);
}
function afterJq() {
  $(".green").after("<li>다음 형제 요소로 추가된 jq</li>");
}

// 요소 삭제 remove
function removeJs() {
  let li2 = document.querySelector("#li2");
  li2.remove();
}
function removeJq() {
  $("#li2").remove();
}
// empty
function emptyJs() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}
function emptyJq() {
  $("ul.nums").empty();
}

// 요소 탐색
function findParent() {
  // child2. 부모 콘솔창에 출력
  console.log($(".child2").parent());
}
function findParents() {
  console.log($(".child2").parents());
}
function findNext() {
  // child2 다음 형제 요소 출력
  console.log($(".child2").next());
}
function findPrev() {
  console.log($(".child2").prev());
}
function findChildren() {
  // parent 자식요소 출력
  console.log($(".parent").children());
}

// 클래스 조작
function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  $("#hi").removeClass("fs-50");
}
function hasClass() {
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  console.log($("#hi").toggleClass("bg-pink"));
}
