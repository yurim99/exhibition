window.addEventListener('DOMContentLoaded', function () {

    AOS.init();

    let mainSwiper = new Swiper(".main-swiper", {
        loop: true,
        centerSlide: true,
        speed: 600,
        initialSlide: 1,
        loopAdditionalSlides: 1,
        pagination: {
            el: ".main-swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })

    const mainSwiperBtn = document.querySelector('.main-swiper-btn');
    let isPlaying = true;

    mainSwiperBtn.addEventListener('click', () => {
        if(isPlaying) {
            mainSwiper.autoplay.stop();
            mainSwiperBtn.classList.remove('play')
            mainSwiperBtn.classList.add('stop')
        } else {
            mainSwiper.autoplay.start();
            mainSwiperBtn.classList.add('play')
            mainSwiperBtn.classList.remove('stop')
        }
        isPlaying = !isPlaying;
    })

    let hallSwiper = new Swiper(".hall-swiper", {
        loop: true,
        speed: 600,
        navigation: {
            nextEl : "hall-swiper-next",
            prevEl : "hall-swiper-prev",
        },
        pagination: {
            el: ".hall-swiper-pagination",
            clickable: true,
            type: "fraction",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    })

    const hallToggleBtn = document.querySelector('.hall__toggle');
    
    hallToggleBtn.addEventListener('click', () => {
        if(isPlaying) {
            hallSwiper.autoplay.stop();
            hallToggleBtn.classList.remove('play')
            hallToggleBtn.classList.add('stop')
        } else {
            hallSwiper.autoplay.start();
            hallToggleBtn.classList.add('play')
            hallToggleBtn.classList.remove('stop')
        }
        isPlaying = !isPlaying;
    })

    let creditsSwiper = new Swiper(".credits-swiper", {
        direction: "vertical",
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 2000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    })

})