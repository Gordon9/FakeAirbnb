import addEvent from "./tools.js";

const initFolloWechatPanel = () => {
  const followWecahtBtn = document.querySelector(
    "._footer-navigation-links-copyright-social-wechat-btn"
  );
  const followWechatContainer = document.querySelector(
    "._follow-wechat-panel "
  );
  const closeFollowWechat = document.querySelector(
    "._follow-wechat-panel-modal-close-btn"
  );
  const followWechatInner = document.querySelector(
    "._follow-wechat-panel-modal"
  );
  const followWechatDoneBtn = document.querySelector(
    "._follow-wechat-panel-modal-done-btn"
  );

  const renderFollowWechatPanel = (e) => {
    followWechatContainer.style.display = "block";
  };

  const removeFollowWechatPanel = () => {
    followWechatContainer.style.display = "none";
  };

  const handleFollowWechat = (e) => {
    e = e || window.event;
    e.stopPropagation();
  };

  addEvent(followWecahtBtn, "click", renderFollowWechatPanel);
  addEvent(closeFollowWechat, "click", removeFollowWechatPanel);
  addEvent(followWechatDoneBtn, "click", removeFollowWechatPanel);
  addEvent(followWechatInner, "click", handleFollowWechat);
  addEvent(followWechatContainer, "click", removeFollowWechatPanel);
};

initFolloWechatPanel();
