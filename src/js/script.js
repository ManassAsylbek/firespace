let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu__body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('menu-open');
    menu.classList.toggle('menu-open');
})

const fuelSwiper = new Swiper(".fuel-block__swiper", {
    freeMode: true,
    centeredSlides: false,
    mousewheel: true,
    parallax: true,
    slidesPerView: 1,
    navigation: {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
    }

});
const catalogSwiper = new Swiper(".catalog__swiper", {
    freeMode: true,
    centeredSlides: false,
    mousewheel: true,
    slidesPerView: 1,
    direction: 'horizontal',
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    mousewheel: true,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});