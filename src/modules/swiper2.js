'use strict'
const swiper2 = () => {
   const swiper = new Swiper('.swiper-2', {
      navigation: {
         nextEl: '.swiper__arrow--right',
         prevEl: '.swiper__arrow--left',
      },
      grabCursor: true,
      loop: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      breakpoints: {

         // Если ширина окна больше или равна 576px
         576: {
            slidesPerView: 3,
            spaceBetween: 40
         }
      },
   });
};
export default swiper2