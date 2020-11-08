import addEvent from "./tools.js";

const startClassicTravelCity = () => {
  const classicTravelLists = document.querySelectorAll(
    "._classic-travel-city-carousel-outer "
  );
  let w;

  console.log("classicTravelLists:", classicTravelLists);

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

  addEvent(window, "resize", renderClassicTravel25Size);
};

startClassicTravelCity();
