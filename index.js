const switcher = document.querySelector("input");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const cardTopContainer = document.querySelectorAll(".top-container div");
const cardBottomContainer = document.querySelectorAll(".bottom-container div");
const mainTitle = document.querySelector(".title-and-switch-container h1");
const CardTopH1 = document.querySelectorAll(".top-container h1");
const CardBottomH1 = document.querySelectorAll(".bottom-container h1");

switcher.addEventListener("click", () => {
  if (switcher.checked === true) {
    body.classList.add("dark-body");
    header.classList.add("dark-header");
    mainTitle.style.color = "hsl(0, 0%, 100%)";
    cardTopContainer.forEach((card) => {
      card.style.background = "hsl(228, 28%, 20%)";
    });
    cardBottomContainer.forEach((card) => {
      card.style.background = "hsl(228, 28%, 20%)";
    });
    CardTopH1.forEach((h1) => {
      h1.style.color = "hsl(0, 0%, 100%)";
    });
    CardBottomH1.forEach((h1) => {
      h1.style.color = "hsl(0, 0%, 100%)";
    });
  } else {
    body.classList.remove("dark-body");
    header.classList.remove("dark-header");
    mainTitle.style.color = "hsl(230, 17%, 14%)";
    cardTopContainer.forEach((card) => {
      card.style.background = " hsl(227, 47%, 96%)";
    });
    cardBottomContainer.forEach((card) => {
      card.style.background = " hsl(227, 47%, 96%)";
    });
    CardTopH1.forEach((h1) => {
      h1.style.color = "hsl(230, 17%, 14%)";
    });
    CardBottomH1.forEach((h1) => {
      h1.style.color = "hsl(230, 17%, 14%)";
    });
  }
});
