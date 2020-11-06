import addEvent from "./tools.js";

const initTravelGuarantee = () => {
  const travelGuaranteeBox = document.querySelector(
    "._innhome-box-content-img-outer"
  );
  const travelGuaranteeBtn = document.querySelector(
    "._innhome-box-content-link-lk"
  );
  const guaranteesBody = document.querySelector("._bodyconstraint");
  console.log("guaranteesBody:", guaranteesBody);

  addEvent(travelGuaranteeBox, "click", handleTravelGuarantee);
  addEvent(travelGuaranteeBtn, "click", handleTravelGuarantee);

  function handleTravelGuarantee() {
    guaranteesBody.classList.remove("hide");
  }
};

initTravelGuarantee();
