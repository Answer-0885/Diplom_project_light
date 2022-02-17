/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swiper */ \"./modules/swiper.js\");\n/* harmony import */ var _modules_swiper2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/swiper2 */ \"./modules/swiper2.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./modules/burgerMenu.js\");\n/* harmony import */ var _modules_headerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/headerMenu */ \"./modules/headerMenu.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/check */ \"./modules/check.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_swiper2__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_headerMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_check__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('callback-btn', 'modal-close', 'modal-callback'); //\"Заказать звонок\"\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button-services', 'modal-close', 'modal-callback'); //Оформить заявку!\"\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('fancyboxModal', 'modal-close', 'modal-callback'); //Блок \"Звоните, мы обязательно вам поможем!\"\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('mob-menu-btn', 'mobile-menu-close', 'mobile-menu'); // Бургер-меню\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n   formID: 'form1',\r\n   someElem: [{\r\n      type: 'input',\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n   formID: 'form2',\r\n   someElem: [{\r\n      type: 'input',\r\n   }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n   formID: 'form3',\r\n   someElem: [{\r\n      type: 'input',\r\n   }]\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst accordeon = () => {\r\n   const accordeon = document.querySelector('.accordeon');\r\n   const element = document.querySelectorAll('.accordeon>.element');\r\n   const elementContent = document.querySelectorAll('.accordeon>.element>.element-content');\r\n\r\n   accordeon.addEventListener('click', (e) => {\r\n      if (e.target.closest('.accordeon>.element')) {\r\n         const elementBtn = e.target.closest('.accordeon>.element');\r\n         element.forEach((elem, i) => {\r\n            if (elem === elementBtn && elementContent[i].style.display === '') {\r\n               elem.classList.add('active');\r\n               elementContent[i].style.display = 'block';\r\n            } else if (elem === elementBtn && elementContent[i].style.display === 'block') {\r\n               elem.classList.remove('active');\r\n               elementContent[i].style.display = '';\r\n            } else {\r\n               elem.classList.remove('active');\r\n               elementContent[i].style.display = '';\r\n            };\r\n         });\r\n      };\r\n   });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\r\n\r\n\r\n// 'use strict'\r\n// const accordeon = () => {\r\n//    const elementTitle = document.querySelectorAll('.accordeon>.element>.title');\r\n\r\n//    elementTitle.forEach((title) => {\r\n//       let elementContent = title.nextElementSibling; // Блок с текстом\r\n//       let element = title.parentNode; // Родительский блок\r\n\r\n//       title.addEventListener('click', () => {\r\n//          if (elementContent.style.display === 'block' && element.classList.contains('active')) {\r\n//             elementContent.style.display = '';\r\n//             element.classList.remove('active');\r\n//          } else if (elementContent.style.display === '' && !element.classList.contains('active')) {\r\n//             elementContent.style.display = 'block';\r\n//             element.classList.add('active');\r\n//          }\r\n//       })\r\n//    })\r\n// }\r\n// export default accordeon\r\n\r\n\r\n//const elementContent = document.querySelectorAll('.accordeon>.element>.element-content');\r\n\r\n// let result = Array.from(elementContent).filter(function (item) {\r\n//    return item.style.display === 'block'\r\n// })\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/burgerMenu.js":
/*!*******************************!*\
  !*** ./modules/burgerMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst burgerMenu = () => {\r\n   const burgerMenu = document.querySelector('.mobile-menu');\r\n   const mobMenu = document.querySelector('.mob-menu');\r\n   const overlay = document.querySelector('.modal-overlay');\r\n   const body = document.querySelector('body');\r\n\r\n   mobMenu.addEventListener('click', (e) => {\r\n      e.preventDefault()\r\n      // Если мы кликаем на любую из ссылок кроме кнопки Заказать звонок(btn), то мы перемещаемся к ней.\r\n      if (burgerMenu.contains(e.target) && !e.target.classList.contains('callback-btn')) {\r\n         e.preventDefault();\r\n\r\n         burgerMenu.style.display = 'none';\r\n         overlay.style.display = 'none';\r\n         body.style.overflow = 'auto';\r\n         const block = e.target.getAttribute('href');\r\n         // Плавно перемещаемся к выбранному блоку из списка меню\r\n         document.querySelector(block).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n         });\r\n      };\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n//# sourceURL=webpack:///./modules/burgerMenu.js?");

/***/ }),

/***/ "./modules/check.js":
/*!**************************!*\
  !*** ./modules/check.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst check = () => {\r\n\r\n   const inputName = document.querySelectorAll('.form-name');\r\n   const inputPhone = document.querySelectorAll('.form-phone');\r\n\r\n   const customTrim = (val) => {\r\n      val = val.replace(/\\s+/g, \" \"); //много пробелов в один\r\n      val = val.replace(/-+/g, '-'); //много дефисов в один\r\n      val = val.replace(/\\(+/g, '('); //много скобок в один\r\n      val = val.replace(/\\)+/g, ')'); //много скобок в один\r\n      val = val.replace(/^[ |\\-+]/g, ''); //удаление дефисов и пробелов в начале\r\n      val = val.replace(/[ |\\-+]$/g, ''); //удаление дефисов и пробелов в конце\r\n      return val;\r\n   };\r\n\r\n   inputName.forEach((input) => {\r\n      input.addEventListener('blur', (e) => {\r\n         let val = e.target.value;\r\n         val = val.replace(/[^а-яёA-Za-z\\s]$/ig, '');\r\n         val = customTrim(val);\r\n         val = val.replace(/( |^)[ а-яёA-Za-z\\s]/g, u => u.toUpperCase());\r\n         e.target.value = val;\r\n      });\r\n      input.addEventListener('input', () => {\r\n         input.value = input.value.replace(/[^а-яёA-Za-z}\\s]$/ig, '');\r\n      });\r\n   });\r\n\r\n   inputPhone.forEach((input) => {\r\n      input.addEventListener('blur', (e) => {\r\n         let val = e.target.value;\r\n         val = val.replace(/[^\\d+]{1,16}$/g, '');\r\n         val = customTrim(val);\r\n         e.target.value = '';\r\n         e.target.value = val;\r\n      });\r\n      input.addEventListener('input', () => {\r\n         input.value = input.value.replace(/[^\\d+]{1,16}$/g, '');\r\n      });\r\n   });\r\n\r\n   inputPhone.forEach(input => {\r\n      input.addEventListener('click', () => {\r\n         if (input.classList.contains('error')) {\r\n            input.classList.remove('error');\r\n         }\r\n      });\r\n   });\r\n   inputName.forEach(input => {\r\n      input.addEventListener('click', () => {\r\n         if (input.classList.contains('error')) {\r\n            input.classList.remove('error');\r\n         }\r\n      });\r\n   });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);\n\n//# sourceURL=webpack:///./modules/check.js?");

/***/ }),

/***/ "./modules/headerMenu.js":
/*!*******************************!*\
  !*** ./modules/headerMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n   \r\n   const headerMenu = () => {\r\n      const headerMenu = document.querySelector('.top-menu');\r\n\r\n      headerMenu.addEventListener('click', (e) => {\r\n         e.preventDefault()\r\n         // Если мы кликаем на любую из ссылок, то мы перемещаемся к ней.\r\n         if (headerMenu.contains(e.target)) {\r\n            e.preventDefault();\r\n            const block = e.target.getAttribute('href');\r\n            // Плавно перемещаемся к выбранному блоку из меню\r\n            document.querySelector(block).scrollIntoView({\r\n               behavior: 'smooth',\r\n               block: 'start'\r\n            });\r\n         };\r\n      });\r\n   }\r\n\r\n   /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerMenu);\n\n//# sourceURL=webpack:///./modules/headerMenu.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nfunction animate({\r\n   timing,\r\n   draw,\r\n   duration\r\n}) {\r\n   let start = performance.now();\r\n   requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n      draw(progress); // отрисовать её\r\n      if (timeFraction < 1) {\r\n         requestAnimationFrame(animate);\r\n      }\r\n   });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n;\r\nconst modal = (open, close, popUp) => {\r\n   const body = document.querySelector('body');\r\n   //Подложка - задний фон модалок\r\n   const overlay = document.querySelector('.modal-overlay');\r\n   //Кнопки открытия всех модальных окон\r\n   const modalOpen = document.querySelectorAll(`.${open}`);\r\n   // Модальные окна\r\n   const modal = document.querySelector(`.${popUp}`);\r\n   //Бургер-меню\r\n   const burgerMenu = document.querySelector('.mobile-menu');\r\n\r\n\r\n   //Открываем модальные окна\r\n   modalOpen.forEach(btn => {\r\n      btn.addEventListener('click', (e) => {\r\n         e.preventDefault();\r\n         burgerMenu.style.display = 'none';\r\n         modal.style.display = 'block';\r\n         modal.style.right = '0px';\r\n         body.style.overflow = 'hidden';\r\n         overlay.style.display = 'block';\r\n         (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 600,\r\n            timing(timeFraction) {\r\n               return timeFraction;\r\n            },\r\n            draw(progress) {\r\n               modal.style.opacity = progress;\r\n               modal.style.right = progress;\r\n               overlay.style.opacity = progress;\r\n            }\r\n         });\r\n      });\r\n   });\r\n   //Закрываем модальные окна на крестик или кликнув мимо окна\r\n   window.addEventListener('click', (e) => {\r\n      if (e.target.closest('.modal-overlay') || e.target.classList.contains(`${close}`)) {\r\n         // Чтобы бургер меню закрывалось плавно\r\n         if (!modal.classList.contains('mobile-menu')) {\r\n            modal.style.display = 'none';\r\n         }\r\n         modal.style.right = '-400px';\r\n         body.style.overflow = 'auto';\r\n         overlay.style.display = 'none';\r\n         modal.style.opacity = '0';\r\n      };\r\n   });\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst sendForm = ({\r\n   formID,\r\n   someElem = []\r\n}) => {\r\n   const form = document.getElementById(formID);\r\n   const statusBlock = document.createElement('div');\r\n   statusBlock.style.color = '#FF9C00';\r\n   statusBlock.style.fontWeight = '700';\r\n   const loadText = 'Загрузка...';\r\n   const errorText = 'Ошибка...';\r\n   const successText = 'Спасибо! Наш менеджер с вами свяжется.';\r\n\r\n   // Проверка инпутов на правильность введённых данных\r\n   const validate = (list) => {\r\n      let success = true;\r\n      list.forEach((item) => {\r\n         if (item.classList.contains('form-name')) {\r\n            if (!item.value.match(/^[а-яА-Я\\s][а-яА-Я\\s]+[а-яА-Я\\s]?$/g)) {\r\n               success = false;\r\n               item.classList.add('error');\r\n               setTimeout(() => {\r\n                  item.classList.remove('error');\r\n               }, 4000);\r\n            }\r\n         }\r\n         if (item.classList.contains('form-phone')) {\r\n            if (!item.value.match(/^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{6,}$/gi)) {\r\n               success = false;\r\n               item.classList.add('error');\r\n               setTimeout(() => {\r\n                  item.classList.remove('error');\r\n               }, 4000);\r\n            }\r\n         }\r\n      });\r\n\r\n      return success;\r\n   };\r\n   // Имитация работы с сервером\r\n   const sendData = (data) => {\r\n      return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n         method: 'POST',\r\n         body: JSON.stringify(data),\r\n         headers: {\r\n            \"Content-Type\": \"application/json\"\r\n         }\r\n      }).then(res => res.json())\r\n   }\r\n\r\n   const submitForm = () => {\r\n      const formElements = form.querySelectorAll('input')\r\n      const formData = new FormData(form)\r\n      const formBody = {}\r\n\r\n      //Если данные не валидны, то надпись \"Загрузка\" не появляется.\r\n      if (validate(formElements)) {\r\n         form.append(statusBlock)\r\n         statusBlock.textContent = loadText\r\n      } else {\r\n         statusBlock.textContent = \"\";\r\n      }\r\n      // этим циклом мы перебираем все инпуты, затем если где то есть заполненный инпут, мы помещаем его в объект formBody благодаря конструктору formData. И уже formBody мы отправляем, где ключом(key) является атрибут name Инпута, а значением(value) является value инпутов.\r\n      formData.forEach((value, key) => {\r\n         formBody[key] = value;\r\n      })\r\n\r\n      if (validate(formElements)) {\r\n         sendData(formBody)\r\n            .then(data => {\r\n               // После отправки все инпуты перебираются и очищаются, и сообщение об ошибке тоже.\r\n               formElements.forEach(input => {\r\n                  // Очищаются все инпуты кроме класса value\r\n                  if (!input.classList.contains('value'))\r\n                     input.value = '';\r\n                  input.classList.remove('error');\r\n               });\r\n               statusBlock.textContent = successText\r\n               // Модальные окна закрываются через 4 секунды после отправки. А также блок с надписями statusBlock   исчезает.            \r\n               setTimeout(() => {\r\n                  form.removeChild(statusBlock);\r\n                  const modal = document.querySelector('.modal-callback');\r\n                  const overlay = document.querySelector('.modal-overlay');\r\n                  const body = document.querySelector('body');\r\n                  const burgerMenu = document.querySelector('.mobile-menu');\r\n                  modal.style.display = 'none';\r\n                  burgerMenu.style.display = 'none';\r\n                  overlay.style.display = 'none';\r\n                  body.style.overflow = 'auto'\r\n               }, 4000);\r\n            })\r\n            .catch(error => {\r\n               statusBlock.textContent = errorText\r\n               setTimeout(() => {\r\n                  form.removeChild(statusBlock);\r\n               }, 4000);\r\n            })\r\n      } else {\r\n         alert('Введите пожалуйста своё имя и номер телефона!')\r\n      }\r\n\r\n   }\r\n\r\n   try {\r\n      if (!form) {\r\n         throw new Error('Верните форму на место, пожааааалуйста!')\r\n      }\r\n      // Отправляет форму при нажатии на кнопку отправить\r\n      form.addEventListener('submit', (event) => {\r\n         event.preventDefault()\r\n         submitForm()\r\n      })\r\n   } catch (error) {\r\n      console.log(error.message);\r\n   }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst smoothScroll = () => {\r\n   const smooth = document.querySelector('.smooth');\r\n\r\n   // плавная прокрутка scrollа\r\n   smooth.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      if (e.target.closest('.smooth')) {\r\n         const blockId = e.target.closest('a[href*=\"#\"]').getAttribute('href');\r\n         document.querySelector(blockId).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n         });\r\n      };\r\n   });\r\n\r\n   document.addEventListener('DOMContentLoaded', () => {\r\n      scrollInvis();\r\n   });\r\n\r\n   window.addEventListener('scroll', () => {\r\n      scrollInvis()\r\n   });\r\n\r\n   // при прокрутке до самого верха scroll исчезает\r\n   const scrollInvis = () => {\r\n      if (window.pageYOffset < 500) {\r\n         smooth.style.display = 'none';\r\n      } else {\r\n         smooth.style.display = 'block';\r\n      }\r\n   };\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst swiper = () => {\r\n   const swiper = new Swiper('.swiper', {\r\n      // navigation: {\r\n      //    nextEl: '.swiper__arrow--right',\r\n      //    prevEl: '.swiper__arrow--left',\r\n      // },\r\n      grabCursor: true,\r\n      loop: true,\r\n      autoplay: {\r\n         delay: 3000,\r\n         disableOnInteraction: false,\r\n      },\r\n      breakpoints: {\r\n\r\n         // Если ширина окна больше или равна 576px\r\n         576: {\r\n            slidesPerView: 1,\r\n            spaceBetween: 40\r\n         }\r\n      },\r\n      pagination: {\r\n         el: '.swiper-pagination',\r\n         clickable: true,\r\n      },\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);\n\n//# sourceURL=webpack:///./modules/swiper.js?");

/***/ }),

/***/ "./modules/swiper2.js":
/*!****************************!*\
  !*** ./modules/swiper2.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst swiper2 = () => {\r\n   const swiper = new Swiper('.swiper-2', {\r\n      navigation: {\r\n         nextEl: '.swiper__arrow--right',\r\n         prevEl: '.swiper__arrow--left',\r\n      },\r\n      grabCursor: true,\r\n      loop: true,\r\n      autoplay: {\r\n         delay: 3000,\r\n         disableOnInteraction: false,\r\n      },\r\n      breakpoints: {\r\n\r\n         // Если ширина окна больше или равна 576px\r\n         576: {\r\n            slidesPerView: 3,\r\n            spaceBetween: 40\r\n         }\r\n      },\r\n   });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper2);\n\n//# sourceURL=webpack:///./modules/swiper2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;