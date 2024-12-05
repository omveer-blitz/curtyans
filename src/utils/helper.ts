export const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};


export const throttle = (mainFunction: Function, delay: number) => {
	let timeout: ReturnType<typeof setTimeout> | null;
  // Returning a throttled version
  return (...args: unknown[]) => {
    if (timeout === null) { // If there is no timer currently running
      mainFunction(...args); // Execute the main function
      timeout = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
        timeout = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  };
}

export const isClient = typeof window !== "undefined";

export const requestFrame = isClient ? (
  window.requestAnimationFrame ||
  window['webkitRequestAnimationFrame'] ||
  window["mozRequestAnimationFrame"] ||
  window["oRequestAnimationFrame"] ||
  window["msRequestAnimationFrame"] ||
  function (callback) {
    return (window).setTimeout(callback, 1000 / 60);
  }) : () => {};

export const cancelFrame = isClient && (
  window.cancelAnimationFrame ||
  window["webkitCancelAnimationFrame"] ||
  window["mozCancelAnimationFrame"] ||
  window["oCancelAnimationFrame"] ||
  window["msCancelAnimationFrame"] ||
  function (id) {
    (window).clearTimeout(id);
  });
