$(document).ready(function () {
  $(".nav-list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(window).scroll(()=>{
    if($(this).scrollTop() > 20){
      $('.nav').addClass('fixed-navbar');
      $('#floating').css('opacity', '0.8');
    }else{
      $('.nav').removeClass('fixed-navbar');
      $('#floating').css('opacity', '0');
    }
  })


  $('#floating').click(()=>{
    $('html, body').animate({scrollTop: 0}, 50);
  })


});
