   'use strict'
   const headerMenu = () => {
      const headerMenu = document.querySelector('.top-menu');

      headerMenu.addEventListener('click', (e) => {
         e.preventDefault()
         // Если мы кликаем на любую из ссылок, то мы перемещаемся к ней.
         if (headerMenu.contains(e.target)) {
            e.preventDefault();
            const block = e.target.getAttribute('href');
            // Плавно перемещаемся к выбранному блоку из меню
            document.querySelector(block).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
            });
         };
      });
   }

   export default headerMenu