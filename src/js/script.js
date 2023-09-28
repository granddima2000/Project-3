/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/chevron-right-solid.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,

                }
            },
        ]
      });
  }); */

  /* jquery способ слайда */

const slider = tns({
container: '.carousel__inner',
items: 1,
slideBy: 'page',
autoplay: false,
controls: false, /* избавляет от внутренних стрелочек */
nav: false, /* Избавляет от точек */
navPosition: 'bottom',
/* navPosition: 'bottom' */
responsive: {
    320: {
      nav: true
    },
    575: {
      edgePadding: 20,
      gutter: 20,
      items: 1,
      nav: true,
      
    },
    700: {
      nav: true,
      gutter: 30
    },
    900: {
      items: 1,
      nav: true,
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () { /* Стрелочка 1 */ 
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () { /* Стрелочка 2 */ 
    slider.goTo('next');
});