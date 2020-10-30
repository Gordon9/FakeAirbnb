const App = () => {
  // console.log("start hot-des-rooms");

  const APP_ID = "e0b982c7";
  const APP_KEY = "2ab29d71baf4e2bccdd82bec22e9955d";
  const requestUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const roomsUrl = document.querySelectorAll(
    "._hot-des-rooms-img-lk-link-inner"
  );
  const roomsLabel = document.querySelectorAll(
    "._hot-des-rooms-intro-content-lk"
  );
  const roomsPrice = document.querySelectorAll(
    "._hot-des-rooms_price-box ._hot-des-rooms_price-box span:nth-child(2)"
  );

  console.log("roomsPrice:", roomsPrice);

  let roomsArr = [];

  const getRecipes = async () => {
    const response = await fetch(requestUrl);
    const data = await response.json();
    roomsArr = data.hits;
    console.log("roomsArr:", roomsArr);

    const renderRoomsUrl = () => {
      let roomUrl;
      for (let i = 0; i < 6; i++) {
        roomUrl = roomsArr[i].recipe.image;
        console.log("roomUrl:", roomUrl);
        roomsUrl[i].src = roomUrl;
      }
    };

    const renderRoomsLabel = () => {
      let roomLabel;
      for (let i = 0; i < 6; i++) {
        roomLabel = roomsArr[i].recipe.label;
        console.log("roomLabel:", roomLabel);
        roomsLabel[i].innerText = roomLabel;
      }
    };

    const renderRoomsPrice = () => {
      let roomPrice;
      for (let i = 0; i < 6; i++) {
        roomPrice = Math.round(roomsArr[i].recipe.calories);
        console.log("roomPrice:", roomPrice);
        roomsPrice[i].innerText = roomPrice;
      }
    };

    renderRoomsUrl();
    renderRoomsLabel();
    renderRoomsPrice();
  };

  getRecipes();
};

App();
