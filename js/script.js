// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         margin:10,
//         nav:true,
//         autoplay:true,
//         autoplayTimeout:2000,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:1
//             }
//         }
//     })
// })
jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 1500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});