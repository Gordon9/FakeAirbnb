import addEvent from "./tools.js";

const startClassicTravelCity = () => {
  const classicTravelLists = document.querySelectorAll(
    "._classic-travel-city-carousel-outer "
  );
  const classicTravelNavs = document.querySelectorAll(
    "._classic-travel-city-carousel-nav-btn"
  );
  const leftNav = classicTravelNavs[0];
  console.log("leftNav:", leftNav);
  const rightNav = classicTravelNavs[1];
  const classicTravelUl = document.querySelector(
    "._classic-travel-city-carousel-container"
  );

  const classicTravelNavWrap = document.querySelectorAll(
    "._classic-travel-city-carousel-nav"
  );
  const leftNavWrap = classicTravelNavWrap[0];
  const rightNavWrap = classicTravelNavWrap[1];

  // console.log("classicTravelUl:", classicTravelUl);
  let w;
  let transX;

  const renderClassicTravel25Size = () => {
    w = document.body.clientWidth;

    if (w <= 743) {
      handleClassicTravel("0 0 33.3333%", "33.3333%");
    } else if (w <= 1127) {
      handleClassicTravel("0 0 25%", "25%");
    } else if (w > 1127) {
      handleClassicTravel("0 0 16.6667%", "16.6667%");
    }

    function handleClassicTravel(flex, maxwidth) {
      for (let curLi of classicTravelLists) {
        curLi.style.flex = flex;
        curLi.style.maxWidth = maxwidth;
      }
    }
  };

  // transX = document.defaultView
  //   .getComputedStyle(hotDesInner, null)
  //   .transform.split(",")[4];

  // const handleLeftNav = () => {
  //   handleClassicTravelTransform("left");
  // };

  // const handleRightNav = () => {
  //   handleClassicTravelTransform("right");
  // };

  // const handleClassicTravelTransform = (direction) => {};

  renderClassicTravel25Size();
  // handleClassicTravelTransform();
  addEvent(window, "resize", renderClassicTravel25Size);
  addEvent(leftNav, "click", handleLeftNav);
  addEvent(rightNav, "click", handleRightNav);
};

startClassicTravelCity();
