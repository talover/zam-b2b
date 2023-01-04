// phone mask
Inputmask("+7 999 999 99 99").mask(document.querySelectorAll(".phone-mask"));

var swiper = new Swiper(".photo-slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.photo-slider--next',
    prevEl: '.photo-slider--prev'
  }
});

var swiper = new Swiper(".partners-slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.partners-slider--next',
    prevEl: '.partners-slider--prev'
  }
});

//
var input = document.querySelector('.spinner__input');
var plus = document.querySelector('.spinner__btn--plus');
var minus = document.querySelector('.spinner__btn--minus');
var total = input.value; 
var step = 1; 
    
plus.addEventListener('click', Increase);
minus.addEventListener('click', Decrease);

// Functions
function Increase(e) {
    e.preventDefault();
    total += step;
    input.value = total; 

    if(input.value > 50){
       minus.disabled = false; 
      minus.classList.remove('disabled');
    }
}

function Decrease(e) {
    e.preventDefault(); 
    total -= step; 
    input.value = total;

    if(input.value < 50 || input.value == 50) {
        minus.disabled = true;
        minus.classList.add('disabled');
        input.value = 50;
    } 
}

  




  
