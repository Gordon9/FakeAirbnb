let body = document.querySelector("body");
let logoBox = document.querySelector(".largeAndAbove");
let innerLogo = document.querySelector(".inner-logo-lk");
let logoLink = document.querySelector(".logo-tik");
let w;
let outerInput = document.querySelector(".outer-search");
let searchInput = document.querySelector(".text");

function detachLogoWidth() {
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
    renderTriangle(true);
  } else {
    renderTriangle(false);
  }
}

function handleLogo(e) {
  console.log(this);
  if (w >= 1127) {
    console.log("#index...");
    return;
  }
  innerLogo.classList.toggle("triangle");
}

// search
function handleInput(focus = false) {
  if (w < 743) {
    return;
  }
  if (focus) {
    // console.log("focus now");
    outerInput.classList.remove("outer-search");
    outerInput.classList.add("outer-search-addwidth");
  } else {
    // console.log("no focus");
    outerInput.classList.remove("outer-search-addwidth");
    outerInput.classList.add("outer-search");
  }
}

function detachSearchWidth() {
  if (w <= 743) {
    outerInput.classList.remove("outer-search");
    outerInput.classList.add("outer-search-phone");
  } else {
    outerInput.classList.remove("outer-search-phone");
    outerInput.classList.add("outer-search");
  }
}

detachLogoWidth();
detachSearchWidth();

window.addEventListener("resize", detachLogoWidth);
window.addEventListener("resize", detachSearchWidth);
logoLink.addEventListener("click", handleLogo);
searchInput.addEventListener("focus", () => handleInput(true));
searchInput.addEventListener("blur", () => handleInput(false));
