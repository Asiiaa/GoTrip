//carousel
const owl = $('.owl-carousel');
owl.owlCarousel({
    center : true,
    loop : true,
    margin : 30,
    startPosition : 1,
    items : 3,
    responsive : {
        850 : {
            items : 3,
        },
        1200 : {
            margin: 30,
        }

    }
 });

 $('.slider-btn-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
});

//nav icon

const navBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
    nav.classList.toggle('nav-mobile');
    menuIcon.classList.toggle('menu-icon--active');
    document.body.classList.toggle('no-scroll')
};