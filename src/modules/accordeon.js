'use strict'
const accordeon = () => {
   const accordeon = document.querySelector('.accordeon');
   const element = document.querySelectorAll('.accordeon>.element');
   const elementContent = document.querySelectorAll('.accordeon>.element>.element-content');

   accordeon.addEventListener('click', (e) => {
      if (e.target.closest('.accordeon>.element')) {
         const elementBtn = e.target.closest('.accordeon>.element');
         element.forEach((elem, i) => {
            if (elem === elementBtn && elementContent[i].style.display === '') {
               elem.classList.add('active');
               elementContent[i].style.display = 'block';
            } else if (elem === elementBtn && elementContent[i].style.display === 'block') {
               elem.classList.remove('active');
               elementContent[i].style.display = '';
            } else {
               elem.classList.remove('active');
               elementContent[i].style.display = '';
            };
         });
      };
   });
}
export default accordeon


// 'use strict'
// const accordeon = () => {
//    const elementTitle = document.querySelectorAll('.accordeon>.element>.title');

//    elementTitle.forEach((title) => {
//       let elementContent = title.nextElementSibling; // Блок с текстом
//       let element = title.parentNode; // Родительский блок

//       title.addEventListener('click', () => {
//          if (elementContent.style.display === 'block' && element.classList.contains('active')) {
//             elementContent.style.display = '';
//             element.classList.remove('active');
//          } else if (elementContent.style.display === '' && !element.classList.contains('active')) {
//             elementContent.style.display = 'block';
//             element.classList.add('active');
//          }
//       })
//    })
// }
// export default accordeon


//const elementContent = document.querySelectorAll('.accordeon>.element>.element-content');

// let result = Array.from(elementContent).filter(function (item) {
//    return item.style.display === 'block'
// })