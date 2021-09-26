const socket = window.io("https://hackzurichdemo.herokuapp.com");
console.log("start backend");

chrome.storage.onChanged.addListener((changes, namespace) => {
  console.log("chrome.storage.onChanged.addListener", changes, namespace);
  for (let item of Object.keys(changes)) {
    switch (item) {
      case "clicks": {
        chrome.storage.local.get("clicks", (storage) => {
          socket.emit("chrome", `{ "timeSpent": ${storage["clicks"]} }`);
        });
        break;
      }
    }
  }
});

socket.on("stress-alert", () => {
  console.log("STRESSS ALERT");
  let url = chrome.runtime.getURL("alert.html");
  chrome.tabs.create({ url });
});
