'use strict'
import {
   animate
} from './helper';
const modal = (open, close, popUp) => {
   const body = document.querySelector('body');
   //Подложка - задний фон модалок
   const overlay = document.querySelector('.modal-overlay');
   //Кнопки открытия всех модальных окон
   const modalOpen = document.querySelectorAll(`.${open}`);
   // Модальные окна
   const modal = document.querySelector(`.${popUp}`);
   //Бургер-меню
   const burgerMenu = document.querySelector('.mobile-menu');


   //Открываем модальные окна
   modalOpen.forEach(btn => {
      btn.addEventListener('click', (e) => {
         e.preventDefault();
         burgerMenu.style.display = 'none';
         modal.style.display = 'block';
         modal.style.right = '0px';
         body.style.overflow = 'hidden';
         overlay.style.display = 'block';
         animate({
            duration: 600,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               modal.style.opacity = progress;
               modal.style.right = progress;
               overlay.style.opacity = progress;
            }
         });
      });
   });
   //Закрываем модальные окна на крестик или кликнув мимо окна
   window.addEventListener('click', (e) => {
      if (e.target.closest('.modal-overlay') || e.target.classList.contains(`${close}`)) {
         // Чтобы бургер меню закрывалось плавно
         if (!modal.classList.contains('mobile-menu')) {
            modal.style.display = 'none';
         }
         modal.style.right = '-400px';
         body.style.overflow = 'auto';
         overlay.style.display = 'none';
         modal.style.opacity = '0';
      };
   });

};
export default modal