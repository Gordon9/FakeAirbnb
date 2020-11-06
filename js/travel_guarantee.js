import addEvent from "./tools.js";

const initTravelGuarantee = () => {
  const travelGuaranteeBox = document.querySelector(
    "._innhome-box-content-img-outer"
  );
  const travelGuaranteeBtn = document.querySelector(
    "._innhome-box-content-link-lk"
  );

  addEvent(travelGuaranteeBox, "click", handleTravelGuarantee);
  addEvent(travelGuaranteeBtn, "click", handleTravelGuarantee);

  function handleTravelGuarantee() {
    console.log("hello guys:)");
  }
};

initTravelGuarantee();
