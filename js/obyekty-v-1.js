const obyektyV1CardSwipers = document.querySelectorAll('.obyekty-v-1__card .swiper');

obyektyV1CardSwipers.forEach((obyektyV1CardSwiper) => {
  new Swiper(obyektyV1CardSwiper, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
