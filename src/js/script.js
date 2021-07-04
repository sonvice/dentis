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
            200: {
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
            spaceBetween: 30,
            },
            1040: {
                slidesPerView: 3,
                spaceBetween: 30,
                }

        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
})
console.log(  swiper.previousIndex);
;
swiper.on('setTransition', function (e) {
   
  });


//Intersection Observer
const textSecction = document.querySelectorAll(".observer")

let callback = (entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            //VAlido
            // let title = entry.target.children[0]
            // let paragraph = entry.target.children[1]
            // title.classList.add("bt-animation2")
            // paragraph.classList.add("bt-animation2")

            //Prueba
            let block = Array.from(entry.target.children)
            block[0].classList.add('lr-animation')
            block[1].classList.add('lr-animation-paragraph')
            if(block[2] || block[3] ){
                block[2].classList.add('lr-animation-paragraph')
                block[3].classList.add('bt-animation')
            }
        }
        if(entry.isIntersecting == false){
            //VAlido
            // let title = entry.target.children[0]
            // let paragraph = entry.target.children[1]
            // title.classList.remove("bt-animation2")
            // paragraph.classList.remove("bt-animation2")

            //Prueba
            let block = Array.from(entry.target.children)
            block[0].classList.remove('lr-animation')
            block[1].classList.remove('lr-animation-paragraph')
            if(block[2] || block[3] ){
                block[2].classList.remove('lr-animation-paragraph')
                block[3].classList.remove('bt-animation')
            }
        }
    })
}

let observerOptions = {
    // root: null,
    rootMargin: "0px",
    threshold: 0
};

let boxObserver = new IntersectionObserver(callback,observerOptions);
textSecction.forEach(element=>{
    boxObserver.observe(element)
    //Recorremos nuestros elementos seleccionados
    //Llamamos a nuestro objeto boxObserver y le decimos que obseve cada uno de los elementos recorridos, ej: boxObserver.observe(elem)
    //ObserverOption es opcional, pero nos da mucho mas control de nuestro objeto observado
})

//Navegación sticky
const nav = document.querySelector('.navigation');
const navRow = document.querySelector('.navigation .row');
window.addEventListener('scroll', (e)=>{
    // console.log(window.scrollY)
    if(window.scrollY > 150){
        nav.classList.add('sticky-nav')
        navRow.classList.add('space')
    }else{
        nav.classList.remove('sticky-nav') 
        navRow.classList.remove('space')
    }
})

//Menu icon
let icon = document.querySelector(".menu_icon");

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
});

//Selected btn nav
const menuIcon= document.querySelector('.menu_icon')
const lisMenu = document.querySelector('.navigation__nav')
const boxMenu = document.querySelector('.navigation')
menuIcon.addEventListener('click', ()=>{
    lisMenu.classList.toggle('active-nav')
    boxMenu.classList.toggle('border-bottom')
})