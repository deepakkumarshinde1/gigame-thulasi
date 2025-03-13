let input = document.querySelector("#input");

/**
 * Creates a debounced function that delays invoking the callback until after a specified time has elapsed.
 * @param {Function} cb - The callback function to debounce.
 * @returns {Function} - The debounced function.
 */
function debounce(cb) {
  let timeOut = null;
  return function (event, limit = 500) {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      cb(event);
    }, limit);
  };
}

input.addEventListener(
  "keyup",
  debounce(function (event) {
    console.log(event.target.value);
  })
);

/**
 * Creates a throttled function that only invokes the callback at most once per every specified time limit.
 * @param {Function} cb - The callback function to throttle.
 * @param {number} [limit=1000] - The time limit in milliseconds.
 * @returns {Function} - The throttled function.
 */
// Throttling
function throttle(cb, limit = 1000) {
  let interval = true;
  return function (event) {
    if (interval) {
      interval = false;
      setTimeout(() => {
        cb(event);
        interval = true;
      }, limit);
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(function () {
    console.log("interval run");
  })
);
