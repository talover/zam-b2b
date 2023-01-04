// phone mask
Inputmask("+7 999 999 99 99").mask(document.querySelectorAll(".phone-mask"));

var swiper = new Swiper(".photo-slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
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
});