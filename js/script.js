$(document).ready(function(){

  if(window.SimpleAnime); {
    new SimpleAnime();
  }
// animação Nav
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.navbar').addClass('navbar-resize')
    } else {
        $('.navbar').removeClass('navbar-resize')
    }
  });
// animação do botão backtoTop

$(window).scroll(function(){

  var $alvo = $('.backtop'),
      show = 'show',
      halfWindowOffset = $('body').height() / 2;
  if ($(this).scrollTop() > halfWindowOffset) {
      $alvo.addClass(show)
  } else {
      $alvo.removeClass(show)
  }
})

//animação clique backtoTop
  var $arrow = $('.backtop');

  $arrow.click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('.navbar').innerHeight(),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
      scrollTop: targetOffset - menuHeight }, 600);
})



// animação ao scroll
  var $alvo = $('[data-anime="scroll"]'),
      anima = 'anime',
      offset = $(window).height() * 3/4;

  function animeScroll() {
    var docTop = $(window).scrollTop();
    $alvo.each(function () {
      var itemTop = $(this).offset().top;
      if (docTop > itemTop - offset) {
        $(this).addClass(anima);
      } else {
        $(this).removeClass(anima);
      }
     });
  }

  animeScroll();

  $(document).scroll(function(){
    animeScroll();
  });

// animação ao click
  $('[data-proj]').each(function(){
    var $allTargets = $(this).find('[data-target]'),
        $allClicks = $(this).find ('[data-click]'),
        activeClass = 'active';

    $allTargets.first().addClass(activeClass);
    $allClicks.first().addClass(activeClass);

    $allClicks.click(function(e) {
      e.preventDefault();

      var id = $(this).data('click'),
          $targets = $('[data-target="' + id + '"]');

      $allClicks.removeClass(activeClass);
      $allTargets.removeClass(activeClass);

      $targets.addClass(activeClass);
      $(this).addClass(activeClass);

    });
  });








});