$(document).ready(function () {
  $(".navbar li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(window).scroll(()=>{
    if($(this).scrollTop() > 20){
      $('.navbar').addClass('fixed-navbar');
      $('#floating').css('opacity', '0.8');
    }else{
      $('.navbar').removeClass('fixed-navbar');
      $('#floating').css('opacity', '0');
    }
  })


  $('#floating').click(()=>{
    $('html, body').animate({scrollTop: 0}, 50);
  })


  
  var typed = new Typed('.type', {
    strings: [ 
      " Mostafa Mahmoud",
      " an Engineer",
      " Motion Graphic",
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
  });


  $('.project-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });

});
