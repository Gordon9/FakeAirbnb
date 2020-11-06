import addEvent from "./tools.js";

const startOfflineGuarantees = () => {
  const guaranteesBody = document.querySelector("._bodyconstraint");
  const guaranteesCancelBtn = document.querySelector(
    "._modal-offline-guarantees-inner-btn"
  );
  // console.log("guaranteesCancelBtn:", guaranteesCancelBtn);

  const removeGuaranteesPanel = () => {
    guaranteesBody.classList.add("hide");
  };

  addEvent(guaranteesCancelBtn, "click", removeGuaranteesPanel);
};

startOfflineGuarantees();
