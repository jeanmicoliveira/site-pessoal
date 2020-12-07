$(document).ready(function(){
  if(window.SimpleAnime); {
    new SimpleAnime();
  }

  $(window).scroll(function(){
    if(this).scrollTop() > 50){
      $('.navbar').addClass('navbar-resize')
    } else {
      $('.navbar').removeClass('navbar-resize')
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() <= 10) {
        $('.intro-dados').addClass('hidden')
    } else {
        $('.intro-dados').removeClass('hidden')
    }
  });















})