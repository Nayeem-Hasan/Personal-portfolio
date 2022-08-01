
$(window).scroll(function(){
  var header = $('.header'),
    scroll = $(window).scrollTop();

    if (scroll >= 70) header.addClass('fixed');
    else header.removeClass('fixed');
});

let toggle = document.querySelector(".toggle");
let close = document.querySelector(".close");
let navBar = document.querySelector(".nav-bar");
let canvasOverlay = document.querySelector(".canvas-overlay");

toggle.addEventListener("click", () => {
  navBar.classList.add("active");
  
});
close.addEventListener("click", () => {
  navBar.classList.remove("active");
});
canvasOverlay.addEventListener("click", () => {
  navBar.classList.remove("active");
});


$('.count').counterUp({
  delay:10,
  time:1000
});

$('.filterr').on('click', function() {
  var selector = $(this).attr('data-filter');
  $('.portfolio-item-list').isotope({
    filter: selector
  });
  $('.portfolio-menu ul li').removeClass("active");
  $(this).addClass("active");
});

$('.single-clients-list').owlCarousel({
  loop:true,
  nav:true,
  navText:['<i class="fa fa-long-arrow-up"></i>', '<i class="fa fa-long-arrow-down"></i>'],
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2,
          margin:30,
      },
      1000:{
          items:2,
          margin:10,
      }
  }
});
$('.brand-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});