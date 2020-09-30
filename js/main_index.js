let body = document.querySelector("body");
let logoBox = document.querySelector(".largeAndAbove");
let innerLogo = document.querySelector(".inner-logo-lk");
let logoLink = document.querySelector(".logo-tik");
let w;
let outerInput = document.querySelector(".outer-search");
let searchInput = document.querySelector(".text");
let mainNav = document.querySelectorAll(".inner-nav-item-lk");
let searchIcon = document.querySelector(".search-icon");
let searchLk = document.querySelector(".inner-search-lk");
let pseudoDiv = document.querySelector(".pseudo-div");

function detectLogoWidth() {
  w = document.body.clientWidth;
  addTriangle(w);
}

function renderTriangle(avtive) {
  avtive
    ? innerLogo.classList.add("active")
    : innerLogo.classList.remove("active");
}

function addTriangle(w) {
  if (w <= 1127) {
    logoLink.href = "#";
    renderTriangle(true);
  } else {
    logoLink.href = "/?logo=1";
    renderTriangle(false);
  }
}

function handleLogo() {
  if (w >= 1127) {
    return;
  }
  innerLogo.classList.toggle("triangle");
}

// Search
function handleInput(focus = false) {
  if (w > 743) {
    if (focus) {
      console.log("focus now");
      outerInput.classList.remove("outer-search");
      outerInput.classList.add("outer-search-addwidth");
    } else {
      console.log("no focus");
      outerInput.classList.remove("outer-search-addwidth");
      outerInput.classList.add("outer-search");
    }
  } else {
    handleSearchIcon(focus);
  }
}

function detectSearchWidth() {
  if (w <= 743) {
    outerInput.classList.remove("outer-search");
    outerInput.classList.add("outer-search-phone");
  } else {
    outerInput.classList.remove("outer-search-phone");
    outerInput.classList.add("outer-search");
  }
}

function handleSearchIcon(focus) {
  if (focus) {
    console.log("focus now...");
    searchIcon.classList.add("search-icon-hide");
    searchLk.classList.add("inner-search-lk-full");
    pseudoDiv.classList.add("pseudo-div-hide");
    outerInput.classList.add("up-index");
  } else {
    console.log("no focus..");
    searchIcon.classList.remove("search-icon-hide");
    searchLk.classList.remove("inner-search-lk-full");
    pseudoDiv.classList.remove("pseudo-div-hide");
    outerInput.classList.remove("up-index");
  }
}

// Nav

detectLogoWidth();
detectSearchWidth();

window.addEventListener("resize", detectLogoWidth);
window.addEventListener("resize", detectSearchWidth);

logoLink.addEventListener("click", handleLogo);
searchInput.addEventListener("focus", () => handleInput(true));
searchInput.addEventListener("blur", () => handleInput(false));
