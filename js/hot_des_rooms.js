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
  const hotDesReadMore = document.querySelector(
    "._hot-des-read-more-container a"
  );
  const hotDesReadMorePhone = document.querySelector(
    "._hot-des-read-more-container-phone-lk"
  );

  let roomsArr = [];
  let query = "chicken";

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    roomsArr = data.hits;
    // console.log("roomsArr:", roomsArr);

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
  handleHotDesReadMore((e = null));

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
      handleHotDesReadMore(e);
    }
  };

  function handleHotDesReadMore(e) {
    let rArrow =
      '<div style="display:inline;position:relative;padding-left:6px"><svg viewBox="0 0 18 18" role="img" aria-hidden="false" aria-label="see all" focusable="false" style="height:10px;width:10px;fill:currentColor"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></div>';

    if (e === null) {
      hotDesReadMore.innerHTML = `查看更多上海房源` + rArrow;
      hotDesReadMorePhone.innerText = `查看更多上海房源`;
      return;
    }

    let curCity = e.target.innerText;
    hotDesReadMore.innerHTML = `查看更多${curCity}房源` + rArrow;
    hotDesReadMorePhone.innerText = `查看更多${curCity}房源`;
  }

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

// App();
