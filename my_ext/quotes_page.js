window.onload = () => {
  let time_span = document.querySelector(".time__num");
  let time = new Date(Date.now() + 30000).getTime();

  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = time - now;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    time_span.innerHTML = `00:${seconds}`;
    if (distance < 0) {
      clearInterval(x);
      time_span.innerHTML = `00:00`;
      console.log("timer end");
      chrome.runtime.sendMessage({ quote: true });
      window.close();
    }
  }, 1000);

  let quote_span = document.querySelector(".footer__quote");
  chrome.storage.local.get("quote", (storage) => {
    if (storage["quote"]) {
      quote_span.innerHTML = storage["quote"];
    }
  });

  console.log("quotes_page.js");
};
