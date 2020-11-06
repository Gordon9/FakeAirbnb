import addEvent from "./tools.js";

const startOfflineGuarantees = () => {
  const guaranteesBody = document.querySelector("._bodyconstraint");
  const guaranteesCancelBtn = document.querySelector(
    "._modal-offline-guarantees-inner-btn"
  );

  const removeGuaranteesPanel = () => {
    guaranteesBody.classList.add("hide");
  };

  addEvent(guaranteesBody, "click", removeGuaranteesPanel);
  addEvent(guaranteesCancelBtn, "click", removeGuaranteesPanel);
};

startOfflineGuarantees();
