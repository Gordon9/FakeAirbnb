import addEvent from "./tools.js";

const startFavSquareHeart = () => {
  const squareHeartBtns = document.querySelectorAll(
    "._hot-online-exp-feeds-item-photo-header-favorite-btn"
  );
  const squareHeartWrap = document.querySelector(
    "._fav-square-heart-container"
  );
  const squareHeartClose = document.querySelector(
    "._fav-square-heart-close-btn-wrap"
  );
  const squareHeartInner = document.querySelector("._fav-square-heart-wrap");
  const closeSquareHeart = () => {
    squareHeartWrap.style.display = "none";
  };
  const squareHeartBtn = document.querySelector(
    "._fav-square-heart-wishlist-create-list-btn-wrap-done"
  );
  const squareHeartItems = document.querySelectorAll(
    "._fav-square-heart-wishlist-create-wrap"
  );

  const handleHeartWrap = (e) => {
    e = e || window.event;
    e.stopPropagation();
  };

  const handleFavHeartPanel = (e) => {
    squareHeartWrap.style.display = "flex";
  };

  for (let btn of squareHeartBtns) {
    addEvent(btn, "click", handleFavHeartPanel);
  }

  addEvent(squareHeartInner, "click", handleHeartWrap);
  addEvent(squareHeartWrap, "click", closeSquareHeart);
  addEvent(squareHeartClose, "click", closeSquareHeart);
  addEvent(squareHeartBtn, "click", closeSquareHeart);
};

startFavSquareHeart();
