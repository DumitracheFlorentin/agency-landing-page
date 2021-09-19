const hamburgerBtn = document.querySelector(".header__navbar__hamburger");
const hamburgerNav = document.querySelector(".header__navbar__hamburger__nav");

hamburgerBtn.addEventListener("click", () => {
  if (hamburgerNav.style.display === "flex") {
    hamburgerNav.style.display = "none";
  } else {
    hamburgerNav.style.display = "flex";
  }
});
