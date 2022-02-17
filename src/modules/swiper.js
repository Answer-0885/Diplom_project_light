'use strict'
const swiper = () => {
   const swiper = new Swiper('.swiper', {
      // navigation: {
      //    nextEl: '.swiper__arrow--right',
      //    prevEl: '.swiper__arrow--left',
      // },
      grabCursor: true,
      loop: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      breakpoints: {

         // Если ширина окна больше или равна 576px
         576: {
            slidesPerView: 1,
            spaceBetween: 40
         }
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });
};
export default swiper