let first = document.getElementById("red");
let second = document.getElementById("blue");
let colorBtn = document.getElementById("colorBtn");
let x = true;
second.style.color = "blue";

colorBtn.onclick = function (event) {
  if (x) {
    first.style.color = "red";
    document.bgColor = "yellow";
    x = false;
  } else {
    first.style.color = "black";
    document.bgColor = "white";
    x = true;
  }
};
