import addEvent from "./tools.js";

const initTravelGuarantee = () => {
  const travelGuaranteeBox = document.querySelector(
    "._innhome-box-content-img-outer"
  );
  const travelGuaranteeBtn = document.querySelector(
    "._innhome-box-content-link-lk"
  );
  const guaranteesBody = document.querySelector("._bodyconstraint");

  addEvent(travelGuaranteeBox, "click", handleTravelGuarantee);
  addEvent(travelGuaranteeBtn, "click", handleTravelGuarantee);

  function handleTravelGuarantee() {
    guaranteesBody.classList.remove("hide");
  }

  travelGuaranteeBox.addEventListener("click", function (e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
  });
  travelGuaranteeBtn.addEventListener("click", function (e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
  });
};

initTravelGuarantee();
