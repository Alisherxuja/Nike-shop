        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            grabCursor: true,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: false,
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  slideToClickedSlide: true,
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,


            },


        });
    