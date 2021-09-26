window.onload = () => {
  console.log("oage.js");
  document.body.addEventListener("click", () => {
    chrome.storage.local.get("clicks", (storage) => {
      if (storage["clicks"]) {
        let clicks = storage["clicks"] + 10;
        chrome.storage.local.set({ clicks }, () => {
          console.log("click", clicks);
        });
      } else {
        chrome.storage.local.set({ clicks: 1 }, () => {
          console.log("ok");
        });
      }
    });
  });
};
