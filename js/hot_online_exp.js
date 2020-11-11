import addEvent from "./tools.js";

const startHotOnlineExp = () => {
  const hotOnlineExpUrls = document.querySelectorAll(
    "._hot-online-exp-feeds-item-photo-lk"
  );
  const hotOnlineExpSubtitles = document.querySelectorAll(
    "._hot-online-exp-feeds-item-rating-subtitle"
  );
  const hotOnlineExpPrices = document.querySelectorAll(
    "._hot-online-exp-feeds-item-prcie-outer"
  );

  let datasArr = [];
  let query = "orange";

  const renderHotOnlineExpUrl = () => {
    let hotOnlineExpUrl;

    for (let i = 0; i <= hotOnlineExpUrls.length - 1; i++) {
      hotOnlineExpUrl = datasArr[i].recipe.image;
      hotOnlineExpUrls[i].src = hotOnlineExpUrl;
    }
  };

  const renderHotOnlineExpSubtitle = () => {
    let hotOnlineExpSubtitle;

    for (let i = 0; i <= hotOnlineExpSubtitles.length - 1; i++) {
      hotOnlineExpSubtitle = datasArr[i].recipe.label;
      hotOnlineExpSubtitles[i].innerText = hotOnlineExpSubtitle;
    }
  };

  const renderHotOnlineExpPrice = () => {
    let hotOnlineExpPrice;

    for (let i = 0; i <= hotOnlineExpPrices.length - 1; i++) {
      hotOnlineExpPrice = Math.round(datasArr[i].recipe.calories);
      hotOnlineExpPrices[i].innerText = `￥${hotOnlineExpPrice}`;
    }
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

      renderHotOnlineExpUrl();
      renderHotOnlineExpSubtitle();
      renderHotOnlineExpPrice();
    };

    getEdamamRecipes();
  }

  // initRequest();
};

startHotOnlineExp();
