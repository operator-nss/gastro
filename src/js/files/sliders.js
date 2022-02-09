/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
   Navigation,
   Pagination,
   EffectFade,
   Controller,
   Autoplay
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';
let mainSlider;
let photoSlider;

// Инициализация слайдеров
function initSliders() {
   // Перечень слайдеров

   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector('.mainslider__slider')) { // Указываем скласс нужного слайдера
      // Создаем слайдер
      mainSlider = new Swiper('.mainslider__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination, Controller],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 100,
         // autoHeight: true,
         speed: 800,
         controller: {
            control: photoSlider,
            // by: 'slide',
         },

         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         pagination: {
            el: '.mainslider__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.mainslider-button__prev',
            nextEl: '.mainslider-button__next',
         },

         // Брейкпоинты
         /*
         breakpoints: {
         	320: {
         		slidesPerView: 1,
         		spaceBetween: 0,
         		autoHeight: true,
         	},
         	768: {
         		slidesPerView: 2,
         		spaceBetween: 20,
         	},
         	992: {
         		slidesPerView: 3,
         		spaceBetween: 20,
         	},
         	1268: {
         		slidesPerView: 4,
         		spaceBetween: 30,
         	},
         },
         */
         // События
         on: {

         }
      });

   }

   if (document.querySelector('.mainslider-image__slider')) { // Указываем скласс нужного слайдера
      // Создаем слайдер
      photoSlider = new Swiper('.mainslider-image__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination, EffectFade, Controller, Autoplay],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 100,
         // autoHeight: true,
         speed: 800,
         controller: {
            control: mainSlider,
            // by: 'slide',
         },
         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,


         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 5000,
            disableOnInteraction: false,
         },


         // Пагинация

         pagination: {
            el: '.mainslider__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.mainslider-button__prev',
            nextEl: '.mainslider-button__next',
         },

         // Брейкпоинты
         /*
         breakpoints: {
         	320: {
         		slidesPerView: 1,
         		spaceBetween: 0,
         		autoHeight: true,
         	},
         	768: {
         		slidesPerView: 2,
         		spaceBetween: 20,
         	},
         	992: {
         		slidesPerView: 3,
         		spaceBetween: 20,
         	},
         	1268: {
         		slidesPerView: 4,
         		spaceBetween: 30,
         	},
         },
         */
         // События
         on: {

         }
      });

   }


   if (document.querySelector('.dishes__slider')) { // Указываем скласс нужного слайдера
      // Создаем слайдер
      photoSlider = new Swiper('.dishes__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Autoplay],
         observer: true,
         observeParents: true,
         // slidesPerView: 4.5,
         // spaceBetween: 20,
         // autoHeight: true,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,


         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },


         // Пагинация

         // pagination: {
         //    el: '.mainslider__pagination',
         //    clickable: true,
         // },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */
         centeredSlides: true,
         // Кнопки "влево/вправо"
         // navigation: {
         //    prevEl: '.mainslider-button__prev',
         //    nextEl: '.mainslider-button__next',
         // },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1.5,
               spaceBetween: 20,
               // autoHeight: true,
            },
            479.98: {
               slidesPerView: 2.5,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 4.5,
               spaceBetween: 20,
            },
            // 1268: {
            //    slidesPerView: 4,
            //    spaceBetween: 30,
            // },
         },

         // События
         on: {

         }
      });

   }

}
// console.log(mainSlider.controller);
// console.log(photoSlider.controller);

// mainSlider.controller.control = photoSlider;
// photoSlider.controller.control = mainSlider;


// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
   // Добавление классов слайдера
   // при необходимости отключить
   bildSliders();

   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}





window.addEventListener("load", function (e) {
   // Запуск инициализации слайдеров
   initSliders();
   // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
   //initSlidersScroll();
});
