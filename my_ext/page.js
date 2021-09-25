window.onload = () => {
  console.log("oage.js");
  document.body.addEventListener("click", () => {
    chrome.storage.local.set({ qwe: Date.now() }, () => {
      console.log("click");
      // console.log("123");
    });
  });
};
