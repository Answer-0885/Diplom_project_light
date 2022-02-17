'use strict'
const burgerMenu = () => {
   const burgerMenu = document.querySelector('.mobile-menu');
   const mobMenu = document.querySelector('.mob-menu');
   const overlay = document.querySelector('.modal-overlay');
   const body = document.querySelector('body');

   mobMenu.addEventListener('click', (e) => {
      e.preventDefault()
      // Если мы кликаем на любую из ссылок кроме кнопки Заказать звонок(btn), то мы перемещаемся к ней.
      if (burgerMenu.contains(e.target) && !e.target.classList.contains('callback-btn')) {
         e.preventDefault();

         burgerMenu.style.display = 'none';
         overlay.style.display = 'none';
         body.style.overflow = 'auto';
         const block = e.target.getAttribute('href');
         // Плавно перемещаемся к выбранному блоку из списка меню
         document.querySelector(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      };
   });
};
export default burgerMenu;