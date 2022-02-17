import smoothScroll from './modules/smoothScroll'
import modal from './modules/modal'
import swiper from './modules/swiper'
import swiper2 from './modules/swiper2'
import burgerMenu from './modules/burgerMenu'
import headerMenu from './modules/headerMenu'
import sendForm from './modules/sendForm'
import check from './modules/check'
import accordeon from './modules/accordeon'

smoothScroll();
swiper();
swiper2();
burgerMenu();
headerMenu();
check();
accordeon();
modal('callback-btn', 'modal-close', 'modal-callback'); //"Заказать звонок"
modal('button-services', 'modal-close', 'modal-callback'); //Оформить заявку!"
modal('fancyboxModal', 'modal-close', 'modal-callback'); //Блок "Звоните, мы обязательно вам поможем!"
modal('mob-menu-btn', 'mobile-menu-close', 'mobile-menu'); // Бургер-меню
sendForm({
   formID: 'form1'
});
sendForm({
   formID: 'form2'
});
sendForm({
   formID: 'form3'
});