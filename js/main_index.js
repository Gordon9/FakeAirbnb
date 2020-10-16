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
let outerTriangle = document.querySelector("._outer-triangle");
let innerTriangle = document.querySelector("._inner-triangle");
let innerTriangleLk = document.querySelector("._inner-triangle-lk");
let smartNav = document.querySelector("._smart-nav");
let checkInOutBox = document.querySelector("._check-in-out");

function detectLogoWidth() {
  w = document.body.clientWidth;
  addTriangle(w);
}

function renderTriangle(avtive) {
  avtive
    ? outerTriangle.classList.add("active")
    : outerTriangle.classList.remove("active");
}

function addTriangle(w) {
  if (w < 1128) {
    logoLink.href = "#";
    renderTriangle(true);
  } else {
    logoLink.href = "/?logo=1";
    renderTriangle(false);
  }
}

function handleLogo() {
  if (w >= 1128) {
    return;
  }
  handleTriangle();
  innerLogo.classList.toggle("active");
  handleSearchBs();
}

function handleSearchBs() {
  outerInput.classList.toggle("addbs");
}

function handleTriangle() {
  let isActive = innerTriangle.classList.contains("_inner-triangle");
  console.log("isActive:", isActive);
  smartNav.classList.toggle("hide");
  innerTriangle.classList.toggle("_inner-triangle");
  innerTriangle.classList.toggle("_inner-triangle-active");
  if (isActive) {
    innerTriangleLk.style.transform = `rotate(180deg)`;
  } else {
    innerTriangleLk.style.transform = `rotate(0deg)`;
  }
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
    // handleSearchBarWithDate();
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

// SearchBarWithDate
function handleSearchBarWithDate() {
  if (w > 744) {
    if (checkInOutBox.classList.contains("hide")) {
      checkInOutBox.classList.remove("hide");
    }
    return;
  }
  checkInOutBox.classList.add("hide");
}

detectLogoWidth();
detectSearchWidth();
handleSearchBarWithDate();

window.addEventListener("resize", detectLogoWidth);
window.addEventListener("resize", detectSearchWidth);
window.addEventListener("resize", handleSearchBarWithDate);

logoLink.addEventListener("click", handleLogo);
searchInput.addEventListener("focus", () => handleInput(true));
searchInput.addEventListener("blur", () => handleInput(false));

// main-searchbox
let cnSearchBarWrapper = document.querySelector("._search-bar-with-date");
let listingExperBtn = document.querySelector("._search-bar-with-date-btn");
let cnSearchBarForm = document.querySelector("._searchform");

let btnFyLk;

function addEvent(el, event, callback) {
  if (!el || !event || !callback || typeof callback !== "function") {
    return;
  }
  el.addEventListener(event, callback);
}

addEvent(listingExperBtn, "mouseenter", () => {
  console.log("enter...");
  handleBtnClick();
});

function handleBtnClick() {
  addEvent(listingExperBtn, "click", () => {
    console.log("enter & click");
    const btnParent = listingExperBtn.parentNode;
    console.log("btnParent:", btnParent);
    btnParent.remove(listingExperBtn);

    let makeDiv = document.createElement("div");
    makeDiv.innerHTML = `<div class='_btn-fy-outer'>
              <button type='button' class='_btn-fy-default' aria-busy='false'>
                <span class='_fy-span'>房源</span>
                <div>
                <svg viewBox="0 0 24 24" role="img" aria-hidden="false" aria-label="Expand" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;"><path d="m12.5 17c-.4426799 0-.8662787-.1919807-1.1664869-.5259747l-6.9098769-7.71341826c-.59660019-.66535794-.55843813-1.70547282.0852286-2.3221781.6449388-.61802022 1.65241717-.57725718 2.24774529.08810076l5.74338991 6.4103161 5.7433899-6.4103161c.5953281-.66404301 1.6015344-.70612098 2.2477453-.08810076.6436667.61670528.6818288 1.65682016.0852286 2.3221781l-6.9098769 7.71341826c-.3002082.333994-.723807.5259747-1.1664869.5259747"></path></svg>
                </div>
              </button>
              <button type='button' class='_btn-fy-lk' aria-busy='false'>
                <span class='_fy_span-middle'>房源</span>
              </button>
              <button type='button' class='_btn-ty-lk' aria-busy='false'>
                <span class='_btn-span-bottom'>体验</span>
              </button>
    </div>`;

    cnSearchBarWrapper.insertBefore(makeDiv, cnSearchBarForm);

    let fyWrapper = document.querySelector("._btn-fy-outer");

    btnFyLk = document.querySelector("._btn-fy-lk");
    console.log("btnFyLk:", btnFyLk);

    addEvent(btnFyLk, "mouseenter", (e) => {
      console.log("e:", e);
      console.log("fy enter..");
    });

    addEvent(btnFyLk, "mouseleave", () => {
      console.log("fy leave..");

      let btnFyLkParent = btnFyLk.parentNode.parentNode;
      console.log("btnFyLkParent:", btnFyLkParent);

      // btnFyLkParent.remove(fyWrapper);
      // makeFxBtn();
    });
  });

  function makeFxBtn() {
    let makeFxBtn = document.createElement("div");
    makeFxBtn.innerHTML = ` <div>
    <button type="button" class="_search-bar-with-date-btn" aria-busy="false">
      <span class="_search-bar-with-date-span">房源</span>
      <div class="_search-bar-with-date-icon">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="false" aria-label="Expand" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;"><path d="m12.5 17c-.4426799 0-.8662787-.1919807-1.1664869-.5259747l-6.9098769-7.71341826c-.59660019-.66535794-.55843813-1.70547282.0852286-2.3221781.6449388-.61802022 1.65241717-.57725718 2.24774529.08810076l5.74338991 6.4103161 5.7433899-6.4103161c.5953281-.66404301 1.6015344-.70612098 2.2477453-.08810076.6436667.61670528.6818288 1.65682016.0852286 2.3221781l-6.9098769 7.71341826c-.3002082.333994-.723807.5259747-1.1664869.5259747"></path></svg>
      </div>
    </button>
  </div>`;

    cnSearchBarWrapper.insertBefore(makeFxBtn, cnSearchBarForm);
    addEvent(listingExperBtn, "click", handleBtnClick);
  }
}

addEvent(listingExperBtn, "mouseleave", () => {
  console.log("leave...");
});

addEvent(btnFyLk, "click", () => {
  console.log("fx btn...");
});

// SearchBarPanel
const cnSearchInput = document.querySelector(
  "._destination-city-view-input-lk"
);
const cnSearchInputPanel = document.querySelector("._search-bar-panel");

addEvent(cnSearchInput, "focus", showSearchInputPanel);
addEvent(cnSearchInput, "blur", removeSearchInputPanel);

function showSearchInputPanel() {
  cnSearchInputPanel.classList.add("show");
}

function removeSearchInputPanel() {
  cnSearchInputPanel.classList.remove("show");
}
