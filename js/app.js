const swiper = new Swiper('.swiper.images', {
    speed: 400,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        drageSize: 40,
        enabled: true,
    },
    slidesPerView: 2,
    slideToClickedSlide: true,
    centeredSlides: true,
    mousewheel: true,
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        scrollbar: {
            enabled: true,
        }
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        scrollbar: {
            enabled: true,
        },
      },
      1100: {
        slidesPerView: 6,
        scrollbar: {
            enabled: true,
        },
      }
    }
});

const scrollbarDrag = document.querySelector('.swiper.images').querySelector('.swiper-scrollbar-drag');
swiper.on('progress', function () {
    const circlePosition = (scrollbarDrag.offsetWidth * swiper.progress)
    scrollbarDrag.style.setProperty('--circle-position', `${circlePosition}px`)
    scrollbarDrag.style.setProperty('--circle-transform', `-${swiper.progress * 100}%`)
});

const swiperStages = new Swiper('.swiper.stages', {
    speed: 400,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
});

const swiperText = new Swiper('.swiper.text', {
    speed: 400,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
});

swiper.on('slideChange', function() {
    swiperStages.slideTo(swiper.activeIndex);
    swiperText.slideTo(swiper.activeIndex);
});