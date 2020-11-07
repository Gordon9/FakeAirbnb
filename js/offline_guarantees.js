import addEvent from "./tools.js";

const startOfflineGuarantees = () => {
  const guaranteesBody = document.querySelector("._bodyconstraint");
  const guaranteesCancelBtn = document.querySelector(
    "._modal-offline-guarantees-inner-btn"
  );
  const guaranteesFeedWrapFix = document.querySelector(
    "._guarantees-feed-tab-wrap"
  );
  const tabHouseSecurityWrap = document.querySelector(
    "._tab_house_security-wrap"
  );
  const guaranteesFeedBtns = document.querySelectorAll(
    "._guarantees-feed-tab-btn > span"
  );

  let distanceToTop;
  let houseSecurityDistanceToTop;

  const removeGuaranteesPanel = () => {
    guaranteesBody.classList.add("hide");
  };

  const handleGuaranteesFeedBtn = (e) => {
    for (let btn of guaranteesFeedBtns) {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    }
    e.target.classList.add("active");
  };

  const listenGuaranteesFeedBtns = () => {
    for (let feedBtn of guaranteesFeedBtns) {
      addEvent(feedBtn, "click", handleGuaranteesFeedBtn);
    }
  };

  listenGuaranteesFeedBtns();

  const handleGuaranteesFeedWrapFix = () => {
    if (guaranteesFeedWrapFix === null) {
      return;
    }
    distanceToTop = guaranteesFeedWrapFix.getBoundingClientRect().top;
    houseSecurityDistanceToTop = tabHouseSecurityWrap.getBoundingClientRect()
      .top;

    const fixGuaranteesFeedWrap = () => {
      guaranteesFeedWrapFix.classList.add("fixed");
    };

    const unfixGuaranteesFeedWrap = () => {
      guaranteesFeedWrapFix.classList.remove("fixed");
    };

    if (distanceToTop <= 0 && houseSecurityDistanceToTop <= 32) {
      fixGuaranteesFeedWrap();
    } else {
      unfixGuaranteesFeedWrap();
    }
  };

  addEvent(guaranteesBody, "click", removeGuaranteesPanel);
  addEvent(guaranteesCancelBtn, "click", removeGuaranteesPanel);
  addEvent(window, "scroll", handleGuaranteesFeedWrapFix);
};

startOfflineGuarantees();
