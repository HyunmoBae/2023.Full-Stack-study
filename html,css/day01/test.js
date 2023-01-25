// id 속성이 clickBtn인 요소의 DOM 셀렉트
var clickBtn = document.getElementById("clickBtn");
// id 값이 같은 요소는 1개 뿐이다.
var heading = document.getElementById("heading");
var aa = document.getElementsByClassName("aa");
//선택된 DOM 요소에 이벤트 핸들러 걸기
clickBtn.onclick = function (event) {
  //클릭이벤트가 발생하면 이벤트를 console에 출력.
  //console.dir(event);
  //console.dir(document);
  document.bgColor = "yellow";
  document.title = "hello";
  console.log(heading);
  heading.style.background = "red";
};
