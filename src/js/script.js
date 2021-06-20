var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    NavigationOptions: true,
    grabCursor:  true,
    // watchSlidesProgress:true,
    // slidesOffsetAfter:50,
    // slidesOffsetBefore:50,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1,
            spaceBetween: 10
            },
            // when window width is >= 480px
            640: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            // when window width is >= 640px
            960: {
            slidesPerView: 3,
            spaceBetween: 30
            }
        }
    // pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
    // },
});