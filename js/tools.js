function addEvent(el, event, callback) {
  if (!el || !event || !callback || typeof callback !== "function") {
    return;
  }
  el.addEventListener(event, callback);
}

export default addEvent;
