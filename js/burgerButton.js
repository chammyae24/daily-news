const burger = document.getElementsByClassName("burger")[0];
const lineOne = document.getElementsByClassName("line-1")[0];
const lineTwo = document.getElementsByClassName("line-2")[0];
const lineThree = document.getElementsByClassName("line-3")[0];

// const header = document.getElementsByClassName("header")[0];
const navbar = document.getElementsByClassName("navbar")[0];

burger.addEventListener("click", navFunction);

function navFunction() {
  burger.classList.toggle("burger-active");

  if (burger.classList.contains("burger-active")) {
    lineOne.style.transform = "rotate(340deg) translateY(7px)";
    lineThree.style.transform = "rotate(-340deg) translateY(-7px)";
    lineTwo.style.transform = "translateX(100px)";
    lineTwo.style.opacity = 0;

    navbar.style.height = "100vh";
    navbar.style.display = "flex";

    document.body.style.overflowY = "hidden";
  } else {
    lineOne.style.transform = "rotate(0deg) translateY(0px)";
    lineThree.style.transform = "rotate(0deg) translateY(0px)";
    lineTwo.style.transform = "translateX(0px)";
    lineTwo.style.opacity = 1;

    navbar.style.height = "";
    navbar.style.display = "none";

    document.body.style.overflowY = "";
  }
}
