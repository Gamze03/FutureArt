Fancybox.bind('[data-fancybox]', {

});


if (document.querySelector(".counter-span")) {
    let counterItem = document.querySelectorAll(".counter-item");
    let valueDisplays = document.querySelectorAll(".counter-span");
    let interval = 4000;
    let counterStatus = Array(counterItem.length).fill(false);
  
    window.addEventListener("scroll", () => {
      counterItem.forEach((item, index) => {
        let position = item.offsetTop - 500;
        if (window.scrollY > position) {
          counterStatus[index] = true;
        }
      });
    });
  
    valueDisplays.forEach((valueDisplays, index) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplays.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        if (counterStatus[index] == true) {
          startValue += 1;
          valueDisplays.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
            valueDisplays.textContent =
            valueDisplays.getAttribute("data-val") +"+";
          }
        }
      }, duration);
    });
}



let scrollButton = document.querySelector(".page-scroll-button");
window.addEventListener("scroll", function () {
  if (this.scrollY > 300) {
    scrollButton.classList.remove("d-none");
  } else {
    scrollButton.classList.add("d-none");
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});