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



// let scrollButton = document.querySelector(".page-scroll-button");
// window.addEventListener("scroll", function () {
//   if (this.scrollY > 300) {
//     scrollButton.classList.remove("d-none");
//   } else {
//     scrollButton.classList.add("d-none");
//   }
// });

// scrollButton.addEventListener("click", () => {
//   window.scrollTo(0, 0);
// });



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

let scrollButton = document.querySelector(".page-scroll-button");
let header = document.querySelector("header");
let headerTop=document.querySelector("header .top")
window.addEventListener("scroll", function () {
    if (this.scrollY > 300) {
        header.classList.add("fixed-top");
        scrollButton.classList.remove("d-none");
        headerTop.classList.add("d-none");
        mobileNavbar.classList.add("fixed-top");
       
    } else {
       header.classList.remove("fixed-top");
        scrollButton.classList.add("d-none");
        headerTop.classList.remove("d-none");
        mobileNavbar.classList.remove("fixed-top");
       
    }
});

scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
});






let contactDropdown = document.querySelector(".contact-dropdown");
let adressMenu = document.querySelector(".contact-dropdown .adress-menu");
let adressButtons = document.querySelectorAll(".contact-dropdown .adress-menu button");
let activeAdressSpan = document.querySelector(".contact-dropdown .active-button span");
let adressRows = document.querySelectorAll(".adress-row");

activeAdressSpan.innerHTML = adressButtons[0].innerHTML;
adressRows[0].classList.remove("d-none");
adressButtons[0].classList.add("d-none");

contactDropdown.addEventListener("mousemove",function (){
  adressMenu.classList.remove("d-none");
});

contactDropdown.addEventListener("mouseleave",function (){
  adressMenu.classList.add("d-none");
});

adressButtons.forEach((button) => {
  button.addEventListener("click",function () {
    let id = button.getAttribute ('data-id');
    activeAdressSpan.innerHTML = button.innerHTML;
    for(let i = 0; i < adressButtons.length; i++){
      adressButtons[i].classList.remove('d-none')
    }
    button.classList.add('d-none')
    for(let i = 0;i < adressRows.length; i++){
      adressRows[i].classList.add('d-none');
    }

    // let activeRow = Array.from(adressRows).find((Row) =>row.getAttribute('data-id') == row.getAttribute('data-id') == id);
    let activeRow =document.querySelector(`.adress-row[data-id="${id}"]`)
    activeRow.classList.remove('d-none');


  })
}
)


