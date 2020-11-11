const App2 = () => {
  const APP_ID = "e0b982c7";
  const APP_KEY = "2ab29d71baf4e2bccdd82bec22e9955d";
  // const requestUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const roomsUrl = document.querySelectorAll(
    "._autumn-discount-rooms-img-link"
  );
  const roomsLabel = document.querySelectorAll(
    "._autumn-discount-rooms-intro-content-lk"
  );
  const roomsPrice = document.querySelectorAll(
    "._autumn-discount-rooms-price-box ._autumn-discount-rooms-price-box span:nth-child(2)"
  );
  const hotDesButtons = document.querySelectorAll("._autumn-discount-cityitem");

  const autumnDisCountButtons = document.querySelectorAll(
    "._autumn-discount-cityitem"
  );
  // console.log("autumnDisCountButtons:", autumnDisCountButtons);

  const hotDesReadMore = document.querySelector(
    "._autumn-discount-read-more-container a"
  );
  const hotDesReadMorePhone = document.querySelector(
    "._autumn-discount-read-more-container-phone-lk"
  );

  const autumnDiscountRoomsInner = document.querySelector(
    "._autumn-discount-roomsinner"
  );

  const autumnDiscountLeftArrow = document.querySelector(
    "._box-autumn-discount-left-arrow-inner"
  );
  const autumnDiscountRightArrow = document.querySelector(
    "._box-autumn-discount-right-arrow-inner"
  );

  let transX = document.defaultView
    .getComputedStyle(hotDesInner, null)
    .transform.split(",")[4];

  addEvent(autumnDiscountLeftArrow, "click", () => {
    autumnDiscountArrowFunc("left");
  });

  addEvent(autumnDiscountRightArrow, "click", () => {
    autumnDiscountArrowFunc("right");
  });

  autumnDiscountArrowFunc();

  function autumnDiscountArrowFunc(direction) {
    // let transX = document.defaultView
    //   .getComputedStyle(hotDesInner, null)
    //   .transform.split(",")[4];

    if (direction === "left") {
      transX = Number(transX);
      transX += 136;
    } else if (direction === "right") {
      transX -= 136;
    }

    if (Number(transX) === 0) {
      autumnDiscountLeftArrow.classList.add("hide");
    } else {
      autumnDiscountLeftArrow.classList.remove("hide");
    }

    if (Number(transX) === -544) {
      autumnDiscountRightArrow.classList.add("hide");
    } else {
      autumnDiscountRightArrow.classList.remove("hide");
    }
    // console.log("transX:", transX);

    autumnDiscountRoomsInner.style.transform = `translateX(${parseFloat(
      transX
    )}px)`;
  }

  let roomsArr = [];
  let query = "orange";
  // let query = "pear";
  // let query = " strawberries";
  // let query = " passionfruit";
  // let query = " plums";
  // let query = " Tomatoes";
  // let query = " limes";

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
  // handleHotDesReadMore((e = null));
  handleAutumnDiscountReadMore((e = null));

  const listenHotDes = () => {
    for (let btn of autumnDisCountButtons) {
      addEvent(btn, "click", handleAutmumnDiscount);
    }

    function handleAutmumnDiscount(e) {
      if (e.target.classList.contains("active")) {
        return;
      }
      handleHotDesBtn(e);
      handleAutumnDiscountBtn(e);
      // handleHotDesReadMore(e);
      handleAutumnDiscountReadMore(e);
    }
  };

  function handleAutumnDiscountReadMore(e) {
    let rArrow =
      '<div style="display:inline;position:relative;padding-left:6px"><svg viewBox="0 0 18 18" role="img" aria-hidden="false" aria-label="see all" focusable="false" style="height:10px;width:10px;fill:currentColor"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></div>';

    if (e === null) {
      hotDesReadMore.innerHTML = `查看更多杭州房源` + rArrow;
      hotDesReadMorePhone.innerText = `查看更多杭州房源`;
      return;
    }

    let curCity = e.target.innerText;
    hotDesReadMore.innerHTML = `查看更多${curCity}房源` + rArrow;
    hotDesReadMorePhone.innerText = `查看更多${curCity}房源`;
  }

  function handleHotDesBtn(e) {
    for (let btn of autumnDisCountButtons) {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    }
    e.target.classList.add("active");
  }

  const handleAutumnDiscountBtn = (e) => {
    // console.log("e:", e.target.innerText);
    let hotCity = e.target.innerText;
    switch (hotCity) {
      case "上海":
        query = "chicken";
        break;
      case "嘉兴":
        query = "pear";
        break;
      case "杭州":
        query = "orange";
        break;
      case "苏州":
        query = "strawberries";
        break;
      case "南京":
        query = "passionfruit";
        break;
      case "成都":
        query = "plums";
        break;
      case "湖州":
        query = "Tomatoes";
        break;
      case "厦门":
        query = "limes";
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

App2();
