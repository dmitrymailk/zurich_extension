window.onload = () => {
  let img_1 = document.querySelector(".footer__img_1");
  let img_2 = document.querySelector(".footer__img_2");
  let img_3 = document.querySelector(".footer__img_3");
  let images = [
    [img_1, 1],
    [img_2, 2],
    [img_3, 3],
  ];
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
    }
  }, 1000);

  for (let item of images)
    item[0].addEventListener("click", (e) => {
      console.log("Selected image", item[1]);
      // "chrome-relax-smile" socket
    });
  console.log("feel_page.js");
};
