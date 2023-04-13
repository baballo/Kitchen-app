// worker.js
import Toaster from "../modules/Toaster";

const toaster = new Toaster();

self.onmessage = async (event) => {
  if (event.data === "start") {
    const result = await toaster.countDown((timeLeft) => {
      self.postMessage({ timeLeft });
    });
    self.postMessage(result);
  }
};