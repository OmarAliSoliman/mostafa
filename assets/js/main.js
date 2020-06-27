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
      " Motion graphics",
      " video montire",
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
  });
});


let moreProjectBtn = document.querySelector('.btn-more .btn');
let moreProjectDiv = document.querySelector('.more-project');
let moreProjectDivStatusOpen = false;

moreProjectBtn.addEventListener('click', (e)=>{
  if(!moreProjectDivStatusOpen){
    moreProjectDiv.style.display = "block";
    moreProjectDiv.style.opacity = "1";
    moreProjectBtn.innerHTML = `show less <i class="fas fa-chevron-up"></i>`;
  }else{
    moreProjectDiv.style.display = "none";
    moreProjectDiv.style.opacity = "0";
    moreProjectBtn.innerHTML = `show more <i class="fas fa-chevron-down"></i>`;
  }
  moreProjectDivStatusOpen=!moreProjectDivStatusOpen;
  e.preventDefault();
})