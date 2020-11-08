import addEvent from "./tools.js";

const startClassicTravelCity = () => {
  const classicTravelLists = document.querySelectorAll(
    "._classic-travel-city-carousel-outer "
  );
  const classicCityUrls = document.querySelectorAll(
    "._classic-travel-city-carousel-img-inner"
  );
  const classicCityTitles = document.querySelectorAll(
    "._classic-travel-city-carousel-title-lk"
  );
  const classicCitySubtitles = document.querySelectorAll(
    "._classic-travel-city-carousel-subtitle-lk"
  );
  const classicCityPrices = document.querySelectorAll(
    "._classic-travel-city-carousel-price"
  );
  let w;
  let datasArr = [];
  let query = "apple";

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

  const renderClassicCityUrl = () => {
    let classicCityUrl;
    for (let i = 0; i < 6; i++) {
      classicCityUrl = datasArr[i].recipe.image;
      classicCityUrls[i].style.backgroundImage = `url(${classicCityUrl})`;
    }
    // console.log("render classic city url done:)");
  };

  const renderClassicCityTitle = () => {
    let classicCityTitle;
    for (let i = 0; i < 6; i++) {
      classicCityTitle = datasArr[i].recipe.source;
      classicCityTitles[i].innerText = classicCityTitle;
    }
    // console.log("render classic city title done <3");
  };

  const renderClassicCitySubTitle = () => {
    let classicCitySubtitle;
    for (let i = 0; i < 6; i++) {
      classicCitySubtitle = datasArr[i].recipe.label;
      classicCitySubtitles[i].innerText = classicCitySubtitle;
    }
    // console.log("render classic city subtitle done 3>");
  };

  const renderclassicCityPrice = () => {
    let classicCityPrice;
    for (let i = 0; i < 6; i++) {
      classicCityPrice = Math.round(datasArr[i].recipe.calories);
      classicCityPrices[i].innerText = `人均￥${classicCityPrice}/晚`;
    }
    // console.log("render classic city price done ^^");
  };

  function initRequest() {
    const APP_ID = "e0b982c7";
    const APP_KEY = "2ab29d71baf4e2bccdd82bec22e9955d";

    const getEdamamRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      datasArr = data.hits;
      // console.log("datasArr:", datasArr);

      renderClassicCityUrl();
      renderClassicCityTitle();
      renderClassicCitySubTitle();
      renderclassicCityPrice();
    };

    getEdamamRecipes();
  }

  initRequest();
  renderClassicTravel25Size();
  addEvent(window, "resize", renderClassicTravel25Size);
};

startClassicTravelCity();
