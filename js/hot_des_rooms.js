const App = () => {
  const APP_ID = "e0b982c7";
  const APP_KEY = "2ab29d71baf4e2bccdd82bec22e9955d";
  // const requestUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const roomsUrl = document.querySelectorAll(
    "._hot-des-rooms-img-lk-link-inner"
  );
  const roomsLabel = document.querySelectorAll(
    "._hot-des-rooms-intro-content-lk"
  );
  const roomsPrice = document.querySelectorAll(
    "._hot-des-rooms_price-box ._hot-des-rooms_price-box span:nth-child(2)"
  );
  const hotDesButtons = document.querySelectorAll(
    "._box-hot-destination-cityitem"
  );
  console.log("hotDesButtons:", hotDesButtons);

  let roomsArr = [];
  let query = "chicken";

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    roomsArr = data.hits;
    console.log("roomsArr:", roomsArr);

    renderRoomsUrl();
    renderRoomsLabel();
    renderRoomsPrice();
  };

  const renderRoomsUrl = () => {
    let roomUrl;
    for (let i = 0; i < 6; i++) {
      roomUrl = roomsArr[i].recipe.image;
      roomsUrl[i].src = roomUrl;
    }
  };

  const renderRoomsLabel = () => {
    let roomLabel;
    for (let i = 0; i < 6; i++) {
      roomLabel = roomsArr[i].recipe.label;
      roomsLabel[i].innerText = roomLabel;
    }
  };

  const renderRoomsPrice = () => {
    let roomPrice;
    for (let i = 0; i < 6; i++) {
      roomPrice = Math.round(roomsArr[i].recipe.calories);
      roomsPrice[i].innerText = roomPrice;
    }
  };

  getRecipes();

  const listenHotDes = () => {
    for (let btn of hotDesButtons) {
      addEvent(btn, "click", handleHotDes);
    }

    function handleHotDes(e) {
      if (e.target.classList.contains("active")) {
        return;
      }
      handleHotDesBtn(e);
      handleHotDesFeed(e);
    }
  };

  function handleHotDesBtn(e) {
    for (let btn of hotDesButtons) {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    }
    e.target.classList.add("active");
  }

  const handleHotDesFeed = (e) => {
    // console.log("e:", e.target.innerText);
    let hotCity = e.target.innerText;
    switch (hotCity) {
      case "上海":
        query = "chicken";
        break;
      case "北京":
        query = "banana";
        break;
      case "杭州":
        query = "orange";
        break;
      case "大理":
        query = "lemon";
        break;
      case "大阪":
        query = "avocado";
        break;
      case "曼谷":
        query = "cherries";
        break;
      case "台北":
        query = "durian";
        break;
      case "洛杉矶":
        query = "grapes";
        break;
    }
    getRecipes();
  };

  function addEvent(el, event, callback) {
    if (!el || !event || !callback || typeof callback !== "function") {
      return;
    }
    el.addEventListener(event, callback);
  }

  listenHotDes();
};

App();
