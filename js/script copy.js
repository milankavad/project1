window.addEventListener("load", () => {
  AOS.init({
    duration: 1200,
  });
});

$(document).ready(function () {
  AOS.init({
    duration: 1200,
  });
});

$(document).ready(function () {
  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1280: {
        items: 1,
      },
    },
  });
});
$(document).ready(function () {
  $(".owl-carousel-first").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    arrow: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1280: {
        items: 4,
      },
    },
  });
});
$(document).ready(function () {
  $(".owl-carousel-testi").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
$(document).ready(function () {
  $(".owl-carousel-gallery").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
$(document).ready(function () {
  $(".mobile-menu").click(function () {
    $(".header-right").toggleClass("toogle-class");
  });
});


  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 50) {
      $(".header").addClass("stiky-header");
    } else {
      $(".header").removeClass("stiky-header");
    }
  });