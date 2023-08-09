window.addEventListener("DOMContentLoaded", async () => {
  //   api key 고유 코드
  const API_KEY = `f40fc02dbebc40a3a6c4`;

  const meual_reg = /MANUAL [1-20]/;

  const cook_form = document.querySelector(".cook_form");
  const cook_search = document.querySelector(".cook_search");
  const ingre_form = document.querySelector(".ingre_form");
  const ingre_search = document.querySelector(".ingre_search");
  const rcp_list_wrap = document.querySelector(".rcp_list_wrap");

  const now = new Date();
  const day = now.getDate();
  console.log(day);

  // preventDefault: 명시하지 않는 이벤트는 실행하지 않도록 하는 것

  /* async 비동기 처리
        - 요청에 대한 응답이 오는 것을 기다리지 않고 다음 로직 바로 수행
        - async function getData: 비동기를 위한 getData 함수 선언*/

  let url = `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/1000/RCP_NM=${cook_search.value}/`;
  let response = await fetch(url);
  /* json(제이슨)
        -  자바스크립트에서 데이터의 형식 중 하나*/
  let data = await response.json();
  // 해물김치찌개는 오류가 있어서 뺀 것
  let data2 = data.COOKRCP01.row;

  const rcp_recommand_list_wrap = document.querySelector(
    ".rcp_recommand_list_wrap"
  );
  data2.forEach((recipe_data) => {
    /* 관련요소들 선언하기 : recipe_list_wrap, recipe_list_li, rcp_img_wrap, rcp_img, rcp_nm
            - 선언한 요소들을 html에서 찾기 +  만들어주기
                - querySelector : recipe_list_wrap : 해당 요소 선택
                - createElement: li, div, img, p: 만들기*/

    const rcp_recommand_li = document.createElement("li");
    const rcp_img = document.createElement("img");
    const rcp_nm = document.createElement("p");

    // append: 객체에 접근해서 추가해주기
    rcp_recommand_list_wrap.append(recipe_recommand_li);
    rcp_recommand_li.append(rcp_img, rcp_nm);

    // setAttribute: 속성값 설정
    recipe_list_li.setAttribute("data-RCP_NM", recipe_data.RCP_NM);

    rcp_img.src = recipe_data.ATT_FILE_NO_MAIN;
    // rcp_img.setAttribute("onerror", "this.src");
    rcp_nm.innerText = recipe_data.RCP_NM;
  });

  let rcp_recommand_list_li = document.querySelectorAll(
    ".rcp_recommand_list_wrap > li"
  );

  recipe_recommand_li.forEach((recipe_list_li_ele) => {
    recipe_list_li_ele.addEventListener("click", () => {
      let li_RCP_NM = rcp_recommand_list_li_ele
        .getAttribute("data-RCP_NM")
        .trim();
      location.href = `sub.html?${li_RCP_NM}`;
    });
  });
});
