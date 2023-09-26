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

let pageLinksWrapper = document.querySelectorAll('.page-links');
let sections = document.querySelectorAll('section');
let mainSections = Array.from(sections).filter((section) => section.getAttribute('data-scroll') === 'true');

pageLinksWrapper.forEach((wrapper) => {
    let links = wrapper.querySelectorAll('a');
    links.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let position = mainSections[index].offsetTop - 110;
            window.scrollTo(0, position);
            for(let i = 0; i < links.length; i++){
                links[i].classList.remove('active')
            }
            link.classList.add('active')
        })
    })
})

// let scrollButton = document.querySelector(".page-scroll-button");
// let bottom = document.querySelector(".bottom");
// window.addEventListener("scroll", function () {
//     if (this.scrollY > 300) {
//         bottom.classList.add("fixed-top");
//         scrollButton.classList.remove("d-none");
//     } else {
//         bottom.classList.remove("fixed-top");
//         scrollButton.classList.add("d-none");
//     }
// });

// scrollButton.addEventListener("click", () => {
//     window.scrollTo(0, 0);
// });