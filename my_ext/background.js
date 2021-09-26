const socket = window.io("https://hackzurichdemo.herokuapp.com");
console.log("start backend");

chrome.storage.onChanged.addListener((changes, namespace) => {
  console.log("chrome.storage.onChanged.addListener", changes, namespace);
  for (let item of Object.keys(changes)) {
    switch (item) {
      case "clicks": {
        chrome.storage.local.get("clicks", (storage) => {
          socket.emit("chrome", `{ "events": ${storage["clicks"]} }`);
        });
        break;
      }
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("ON MESSAGE", request, sender, sendResponse);
  if (request["smile"]) {
    socket.emit(
      "chrome-relax-smile",
      JSON.stringify({ level: request["smile"] })
    );
  } else if (request["quote"]) {
    socket.emit("chrome-relax-done");
  }
});

// chrome-relax-done

socket.on("stress-alert-smile", () => {
  // let url = chrome.runtime.getURL("feel_page.html");
  // chrome.tabs.create({ url });
});

socket.on("stress-alert-quotes", (data) => {
  // console.log(data);
  chrome.storage.local.set({ quote: data["data"] }, () => {
    // let url = chrome.runtime.getURL("quotes_page.html");
    // chrome.tabs.create({ url });
  });
});

socket.on("stress-alert-breath", () => {
  // let url = chrome.runtime.getURL("breathe_page.html");
  // chrome.tabs.create({ url });
});
